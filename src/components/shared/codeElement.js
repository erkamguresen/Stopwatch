export function createCodeElement(classes = '', id = '', text = '') {
  const codeElement = document.createElement('code');

  codeElement.className = classes;
  codeElement.id = id;
  codeElement.innerText = text;

  return codeElement;
}
