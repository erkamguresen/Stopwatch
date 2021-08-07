/**
 * This function creates a new button element
 * and returns it with specified properties.
 *
 * @param {string} type - the type of the button, default value is 'button'.
 * @param {string} classes - names of classes for the element to be added.
 * @param {string} id - unique id for the element
 * @param {object} icon - icon for the button element
 * @returns {object} - a new button element
 */
export function createButtonElement(
  text = '',
  type = 'button',
  classes = '',
  id = '',
  icon = null
) {
  const newButton = document.createElement('button');
  newButton.type = type;
  newButton.className = classes;
  newButton.id = id;
  newButton.innerText = text;

  if (icon !== null && icon.nodeName === 'I') {
    newButton.appendChild(icon);
  }
  return newButton;
}
