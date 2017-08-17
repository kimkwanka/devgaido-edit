export function loadFile(content) {
  return {
    type: 'LOAD_FILE',
    content,
  };
}
