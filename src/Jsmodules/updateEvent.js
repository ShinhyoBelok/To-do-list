import { remove, saveChanges, completed, editElement } from './Features.js';/* eslint-disable-line */

const updateEvent = () => {
  /* checkbox */
  const description = document.querySelectorAll('p');
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((box) => {
    box.addEventListener('change', (event) => {
      const { id } = event.target.parentNode.parentNode;
      completed(id);
    });
  });
  /* remove list mode */
  const list = document.querySelectorAll('.list');
  list.forEach((listElement) => {
    listElement.addEventListener('click', (event) => {
      const { id } = event.target;
      if (event.target.className.substr(0, 4) !== 'list') return;
      list[id].classList.toggle('remove');
      list[id].children[2].classList.toggle('dnone');
      list[id].children[1].classList.toggle('dblock');
    });
  });
  /* remove */
  const removeIcon = document.querySelectorAll('.trashCan');
  removeIcon.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      const { id } = event.target.parentNode;
      remove(id);
    });
  });
  /* list change event */
  description.forEach((pElement) => {
    pElement.addEventListener('blur', (event) => {
      editElement(event.target.parentNode.parentNode, event.target.textContent);
    });
  });
};

export default updateEvent;