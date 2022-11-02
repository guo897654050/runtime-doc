
import { rollup } from 'rollup';
import { cssStringPlugin } from './rollup-plugin-css'
import { vfilePlugin } from './rollup-plugin-vfile'
import { files } from './files'


const inputOptions = {
  input: './index',
  plugins: [vfilePlugin(files), cssStringPlugin()],
  treeshake: false,
}

const outputOptionsList = [{
  file: 'bundle.js',
  format: 'umd',
  name: 'quark-demo'
}]

export async function rollupBuild(cb: any) {

  let bundle;
  try {
    // @ts-ignore
    bundle = await rollup(inputOptions);

    const output = await generateOutputs(bundle);

    // console.log('bundle ---->', bundle)
    // console.log('ouput ---->', output)
    // console.log('code[0]', JSON.stringify(output[0].code))

    cb(output[0].code);
  } catch (error) {
    console.error(error)
  }

  if (bundle) {
    await bundle.close()
  }
}


async function generateOutputs(bundle: any) {
  const { output } = await bundle.generate(outputOptionsList[0]);
  return output
}