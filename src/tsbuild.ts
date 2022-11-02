import * as ts from 'typescript';

export function tsbuild(code: string) {
  return ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      jsx: ts.JsxEmit.React,
      jsxFactory: 'QuarkElement.h',
      lib: ["esnext", 'dom'],
    }
  }).outputText
}