<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElTree, ElTabs, ElTabPane, ElTooltip, tabPaneProps } from 'element-plus'
import { EditorView, basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import MDoc from './Mdoc.vue'
import { files } from '../files'

import { tsbuild } from '../tsbuild'
import { rollupBuild } from '../rollup-build'


const treeRef = ref<InstanceType<typeof ElTree>>()
const editorRef = ref<HTMLElement>()
const iframeRef = ref<any>()
const type = ref('zh')
const currentNode = ref<{
  id: string,
  label: string,
  addFiles?: string[]
}>({
  id: 'Hello-Quark',
  label: 'Hello-Quark',
})


const treeProps = {
  label: (obj: any) => {
    return obj.label.replaceAll('-', ' ')
  },
}

const treeData = [
  {
    id: 'Base',
    label: 'Base',
    children: [
      {
        id: 'Hello-Quark',
        label: 'Hello-Quark',
      },
      {
        id: 'Component',
        label: 'Component',
        addFiles: ['index.css'],
      },
      {
        id: 'Event',
        label: 'Event',
      },
      {
        id: 'Lifecycle-and-ref',
        label: 'Lifecycle-and-ref',
      },
      {
        id: 'Scoped-Css',
        label: 'Scoped-Css',
        addFiles: ['index.css'],
      },
      {
        id: 'Slot',
        label: 'Slot',
        addFiles: ['index.css'],
      },
      {
        id: 'Fragment',
        label: 'Fragment',
        addFiles: ['index.css'],
      }
    ],
  },
  {
    id: 'Congratulations',
    label: 'Congratulations',
    addFiles: ['index.css']
  }

]

const mdContent = ref('')
const codeContent = new Map()
const tabpaneName = ref(['index.tsx'])

const fetchDataFromUrl = async (url: string) => {
  const fetchData = await fetch(url)
  const data = await fetchData.text()
  return data
}

const handleNodeClick = async (tab: { id: string; label: string; addFiles?: string[] }) => {
  // 重置tabpane, 清空codeContent
  tabpaneName.value = ['index.tsx']
  codeContent.clear()

  if (tab.label === 'Base') return
  currentNode.value = {
    id: tab.id,
    label: tab.label,
    addFiles: tab.addFiles
  }
  const prefix = './sections'
  const specificUrls = [
    `${prefix}/${type.value}/${tab.label}/description.md`,
    `${prefix}/${type.value}/${tab.label}/app/index.tsx`,
  ]

  // 获取目录app下文件，默认index.tsx
  tab.addFiles?.forEach((filename) => {
    tabpaneName.value.push(filename)
    specificUrls.push(`${prefix}/zh/${tab.label}/app/${filename}`)
  })
  const res = await Promise.all(specificUrls.map(async (url) => await fetchDataFromUrl(url)))
  mdContent.value = res[0]
  const rest = res.slice(1)
  rest?.map((data, index) => {
    codeContent.set(tabpaneName.value[index], data)
  })

  // console.log('codecontent', codeContent)

  setEditorContent(codeContent.get('index.tsx'), 'index.tsx')
}

const setDefaultTreeNode = () => {
  handleNodeClick(currentNode.value)
}

const reloadPreview = (code: string) => {
  // console.log('previewCode', code)
  window.PreviewIframeDynamicSourceCode = code
  iframeRef.value.contentWindow.location.reload()
}

const setEditorContent = (code: string, tabName: string) => {
  // 重置内容
  document.querySelector('.editor')!.innerHTML = ''

  new EditorView({
    extensions: [
      basicSetup,
      javascript({ jsx: true, typescript: true }),

      EditorView.updateListener.of((e) => {
        [...codeContent.keys()].forEach((file) => {
          let data = e.state.doc
          if (file !== tabName) {
            // 不相同 从map获取
            data = codeContent.get(file)
          }
          files[`./${file.replace('.tsx', '').replace('.ts', '')}`] = file.endsWith('.css')
            ? data.toString()
            : tsbuild(data.toString())
        })


        // map 更新
        codeContent.set(tabName, e.state.doc)

        rollupBuild((code: string) => {
          reloadPreview(code)
        })
      }),
    ],
    parent: document.querySelector('.editor') as any,
    doc: code,
  })
}

const handleTabClick = (e: any) => {
  const tabpaneName = e.props.label
  setEditorContent(codeContent.get(tabpaneName), tabpaneName)
}

const iframeLoad = () => {
  const html = iframeRef.value.contentWindow.document.body.innerHTML
  if (!html) {
    html.src = `./preview.html?rd=${Math.random()}`
  }
}
onMounted(async () => {
  // 默认展示第一个内容
  setDefaultTreeNode()
})

const goGit = () => {
  window.open('https://gitlab.hellobike.cn/quark/AppQuarkui', '_blank')
}

const change2Cn = (data: string) => {
  type.value = data
  handleNodeClick(currentNode.value)
}

const change2En = (data: string) => {
  type.value = data;
  handleNodeClick(currentNode.value)

}
</script>

<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav__title">
        <img class="nav__img"
          src="https://m.hellobike.com/resource/helloyun/12395/ScQwX_quark.png?x-oss-process=image/quality,q_80">
        <span class="nav__name">Quark</span>
        <el-tooltip effect="dark" placement="bottom-start">
          <template #content>
            <span class="writing" @click="change2Cn('zh')">简体中文</span><br />
            <span class="writing" @click="change2En('en')">English</span>
          </template>
          <img class="nav__img translate"
            src="https://m.hellobike.com/resource/helloyun/12395/Gdlcw_pp.svg">
        </el-tooltip>

        <img class=" nav__img github"
          src="https://m.hellobike.com/resource/helloyun/12395/NSdIk_github.svg" @click="goGit">
      </div>
      <el-tree ref="treeRef" default-expand-all :props="treeProps" :data="treeData"
        @node-click="handleNodeClick" class="nav__tree" />
    </div>
    <div class="md">
      <MDoc v-if="mdContent" :md-content="mdContent" />
    </div>
    <div class="code">
      <div class="code_top">
        <el-tabs type="border-card" @tab-click="handleTabClick" class="tab">
          <el-tab-pane v-for="name in tabpaneName" :label="name" :key="name" />
        </el-tabs>
        <div class="editor" ref="editorRef"></div>
      </div>
      <div class="code_bottom">
        <el-tabs type="border-card">
          <el-tab-pane label="Preview" />
        </el-tabs>
        <div class="iframe-wrapper">
          <iframe class="iframe" ref="iframeRef" @load="iframeLoad"
            :src="`./preview.html?rd=${Math.random()}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  // width: 100vw;
  height: 100%;
  display: flex;

  .nav {
    width: 200px;
    color: #606266;

    &__title {
      padding: 2px 2px 2px 10px;
      border-bottom: 1px solid rgb(228, 228, 231);
      display: flex;
      align-items: center;
      position: relative;
    }

    &__name {
      color: #9ca3af;
      margin-left: 5px;
      font-weight: 500;
    }

    &__img {
      width: 20px;
      height: 20px;
    }

    .github {
      position: absolute;
      right: 5px;
      cursor: pointer;
    }

    &__tree {
      color: #606266;
      font-weight: 500;
    }

    .translate {
      position: absolute;
      right: 30px;
      cursor: pointer;
      color: #000;
      width: 15px;
      height: 15px;
    }
  }

  .md {
    height: 100%;
    flex: 1;
    padding: 0 20px;
    border-left: 1px solid rgb(228, 228, 231);
    overflow: auto;
  }

  .code {
    flex: 1;
    display: flex;
    flex-direction: column;


    :deep(.el-tabs__content) {
      padding: 0;
    }

    &_top {
      height: 50%;
      flex: 1;
      display: flex;
      flex-direction: column;

      .editor {
        flex: 1;
        overflow: auto;

        :deep(.cm-editor) {
          height: 100%;
        }
      }
    }

    &_bottom {
      flex: 1;

      .iframe-wrapper {
        height: 100%;
      }

      .iframe {
        width: 100%;
        height: 100%;
        border: 1px solid rgb(228, 228, 231);
      }
    }
  }
}
</style>

<style lang="less">
.writing {
  cursor: pointer;
}
</style>
