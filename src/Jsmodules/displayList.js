import updateEvent from './updateEvent';/* eslint-disable-line */

const toDoListContainer = document.querySelector('.toDoListContainer');
const displayList = (array) => {
  localStorage.setItem('listOfTasks', JSON.stringify(array));
  toDoListContainer.innerHTML = '';
  let completedStyle = { line: '', box: '' };
  let counter = 0;
  let i = 0;
  while (counter < array.length) {
    if (i === array.length) {
      i = 0;
    }
    if (counter === array[i].index) {
      if (array[i].completed === true) {
        completedStyle = { line: 'lineThrough', box: 'checked' };
      } else {
        completedStyle = { line: '', box: '' };
      }
      const listTemplate = `
        <article class="list lineStyle" id="${counter}">
          <div class="elementList">
            <span class="checkbox ${completedStyle.box}"></span>
            <p class="description ${completedStyle.line}" contenteditable="true">${array[i].description}</p>
          </div>
          <img class="trashCan">
          <div class="verticalDots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </article>
      `;
      toDoListContainer.innerHTML += listTemplate;
      counter += 1;
    }
    i += 1;
  }
  updateEvent();
};

export default displayList;