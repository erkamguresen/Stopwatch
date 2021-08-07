/**
 * This function creates a new div element
 * and returns it with specified properties.
 *
 * @param {string} classes - names of classes for the element to be added.
 * @param {string} id - unique id for the element
 * @returns {object} - a new div element
 */
export function createDivElement(classes = '', id = '') {
  const newDiv = document.createElement('div');

  newDiv.className = classes;
  newDiv.id = id;

  return newDiv;
}
