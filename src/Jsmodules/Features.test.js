/**
* @jest-environment jsdom
*/

import { add, remove, editElement, clearAllCompleted, completed } from './Features.js';

document.body.innerHTML = `
<div class="listContainer">
  <form class="input lineStyle">
    <input type="text" placeholder="+ Add to your list..." value="">
    <button type="submit" class="enter"></button>
  </form>
  <section class="toDoListContainer"></section>
</div>
`;
const input = document.querySelector('input');

describe('add', () => {
  test('Correctly add a task', () => {
    input.value = 'test1';
    add();
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(1);
  });

  test('Correctly add a second task', () => {
    input.value = 'test2';
    add();
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(2);
  });

  test('Correctly add a third task', () => {
    input.value = 'test3';
    add();
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(3);
  });
});

describe('remove', () => {
  test('Correctly remove a task', () => {
    remove(0);
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(2);
  });

  test('Correctly remove a task', () => {
    remove(0);
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(1);
  });

  test('Correctly remove a task', () => {
    remove(0);
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(0);
  });
});

describe('Correctly editing the task description', () => {
  test('Correctly edited', () => {
    input.value = 'test1';
    add();
    editElement(0, 'edited element');
    const description = document.querySelector('.description');
    expect(description.textContent).toEqual('edited element');
    remove(0);
  });
});

describe('Correctly clearAll', () => {
  test('Correctly clearAll', () => {
    input.value = 'test1';
    add(true);
    input.value = 'test2';
    add(false);
    input.value = 'test3';
    add(true);
    clearAllCompleted();
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(1);
  });
});

describe('Update item status', () => {
  test('function for updating an item completed status to true', () => {
    input.value = 'test1';
    add();
    completed(0);
    const check = document.querySelector('.checkbox');
    expect(check.checked).toEqual(true);
  });
  test('function for updating an item completed status to false', () => {
    completed(0);
    const check = document.querySelector('.checkbox');
    expect(check.checked).toEqual(false);
  });
});