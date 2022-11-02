export function vfilePlugin(files: Record<string, string>) {
  return {
    name: 'vfile',
    resolveId(source: string) {
      if (files[source]) {
        return source;
      }
      return null;
    },

    load(id: string) {
      if (files.hasOwnProperty(id)) {
        return files[id];
      }
      return null;
    }
  }
}