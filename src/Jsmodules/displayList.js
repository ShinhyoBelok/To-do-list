const toDoListContainer = document.querySelector('.toDoListContainer');

const displayList = (array) => {
  array.innerHTML = '';
  let counter = 1;
  let i = 0;
  while (counter <= array.length) {
    if (i === array.length) {
      i = 0;
    }
    if (counter === array[i].index) {
      const listTemplate = `
        <article class="list lineStyle">
          <div class="listElement">
            <input type="checkbox" class="checkbox" id="${counter}">
            <p class="">${array[i].description}</p>
          </div>
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
};

export default displayList;