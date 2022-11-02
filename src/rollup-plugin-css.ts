export function cssStringPlugin() {
  return {
    name: "css-string",
    transform(code: string, id: string) {
      if (id.endsWith('.css')) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: { mappings: "" }
        }
      }
    }
  }
}
