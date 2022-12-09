import Task from './Task.js';
import displayList from './displayList.js';/* eslint-disable-line */

let listOfTasks = [];
export const add = () => {
  const input = document.querySelector('input');
  if (input.value === '') return;
  const newTask = new Task(input.value, listOfTasks);
  input.value = '';
  listOfTasks.push(newTask);
  displayList(listOfTasks);
};

export const remove = (index) => {
  const id = parseInt(index, 10);
  listOfTasks = listOfTasks.filter((taks) => listOfTasks.indexOf(taks) !== id);
  for (let i = 0; i < listOfTasks.length; i += 1) {
    listOfTasks[i].index = i;
  }
  displayList(listOfTasks);
};

export const saveChanges = (index, text) => {
  listOfTasks[index].description = text;
  displayList(listOfTasks);
};

export const clearAllCompleted = () => {
  listOfTasks = listOfTasks.filter((taks) => taks.completed !== true);
  for (let i = 0; i < listOfTasks.length; i += 1) {
    listOfTasks[i].index = i;
  }
  displayList(listOfTasks);
};

export const completed = (id) => {
  if (listOfTasks[id].completed === false) {
    listOfTasks[id].completed = true;
  } else {
    listOfTasks[id].completed = false;
  }
  displayList(listOfTasks);
};

window.addEventListener('load', () => {
  if (localStorage.getItem('listOfTasks') === null) return;
  listOfTasks = JSON.parse(localStorage.getItem('listOfTasks'));
  const listTitle = document.querySelector('.listTitle');
  listTitle.innerHTML = localStorage.getItem('listTitle');
  displayList(listOfTasks);
});

const reloadIcon = document.querySelector('.arrow-ccw');
reloadIcon.addEventListener('click', () => {
  reloadIcon.classList.toggle('reload');
  displayList(listOfTasks);
});
