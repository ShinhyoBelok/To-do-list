import './style.css';
import displayList from './Jsmodules/displayList.js';
let toDoTask = [
  {
    description: 'Finish this project',
    completed: false,
    index: 2,
  },
  {
    description: 'Get some sleep',
    completed: false,
    index: 1,
  },
  {
    description: 'Ya tengo que terminar',
    completed: false,
    index: 3,
  },
];

displayList(toDoTask);

const checkbox = document.querySelectorAll('.checkbox');
const descriptionP = document.querySelectorAll('p');

checkbox.forEach((box) => {
  box.addEventListener('click', (event) => {
    descriptionP[event.target.id - 1].classList.toggle('lineThrough');
  });
});