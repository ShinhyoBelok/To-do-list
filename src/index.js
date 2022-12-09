import './style.css';
import { add, clearAllCompleted } from './Jsmodules/Features.js';

const addBtn = document.querySelector('.enter');
const clearAllCompletedBtn = document.querySelector('.clearBtn');
const listTitle = document.querySelector('.listTitle');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  add();
});

clearAllCompletedBtn.addEventListener('click', () => {
  clearAllCompleted();
});

listTitle.addEventListener('blur', (event) => {
  const text = event.target.textContent;
  localStorage.setItem('listTitle', text);
});