/**
 * @jest-environment jsdom
 */

import {add} from './Features.js';

describe('add', () => {
  test('Correctly add a task', () => {
    document.body.innerHTML = `
    <div class="listContainer">
      <section class="headerList lineStyle">
        <h2 class="listTitle" contenteditable="true">Today's To Do</h2>
        <span class="arrow-ccw reload"></span>
      </section>
      <form class="input lineStyle">
        <input type="text" placeholder="+ Add to your list..." value="test">
        <button type="submit" class="enter"></button>
      </form>
      <section class="toDoListContainer"></section>
      <div class="clear lineStyle">
        <button class="clearBtn" type="button">Clear all completed</button>
      </div>
    </div>
    `;
    add();
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(1);
  });
});