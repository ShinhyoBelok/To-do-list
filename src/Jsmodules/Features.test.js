/**
 * @jest-environment jsdom
 */

import { add, remove } from './Features.js';

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