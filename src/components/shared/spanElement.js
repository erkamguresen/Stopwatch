export function createSpanElement(classes = '', id = '', text = '') {
  const spanElement = document.createElement('span');

  spanElement.className = classes;
  spanElement.id = id;
  spanElement.innerText = text;

  return spanElement;
}
