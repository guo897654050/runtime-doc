<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import * as MarkdownIt from 'markdown-it'
import * as anchor from 'markdown-it-anchor'
import * as Prism from 'prismjs'
import './prism.css';
import './md.css';
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-tsx'

const props = defineProps({
  mdContent: String
})

const MdIt: any = MarkdownIt.default ? MarkdownIt.default : MarkdownIt;

const md = new MdIt().use(anchor.default, {
  level: 2,
  permalink: true
})

const renderedData = ref('');


const initCodeStyle = () => {
  const codes = Array.prototype.slice.call(document.querySelectorAll('code'))

  codes.forEach((code) => {
    const arr = code.className.match(/{([\S\s]*)}/)
    let pre = code.parentNode;
    // bug!
    arr && pre.setAttribute('data-line', arr[1])

    if (code.className) {
      pre.className = code.className
      const temp = code.className.match(/language-\w*/g)[0]
      const lan = temp.split('-')[1]
      const pl = Prism.languages[lan]
      if (temp && pl) {
        code.innerHTML = Prism.highlight(code.innerText, pl, lan);
      }
    } else {
      pre = code.parentNode
      code.className = 'language-markup'
      pre.className = 'language-markup'
      code.innerHTML = Prism.highlight(code.innerText, Prism.languages.markup, 'markup')
    }
  })
}


onMounted(() => {
  renderedData.value = md.render(props.mdContent)
  Promise.resolve().then(() => {
    initCodeStyle();
  })
})

watch(() => props.mdContent, () => {
  // render会比较慢，微任务等待执行initCodeStyle()
  renderedData.value = md.render(props.mdContent)
  Promise.resolve().then(() => {
    initCodeStyle();
  })
})

</script>

<template>
  <div class="result-html">
    <div v-html="renderedData"></div>
  </div>
</template>