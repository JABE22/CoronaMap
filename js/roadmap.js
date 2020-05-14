
(() => {
  console.log("Hello from roadmap.js!");
})();

/**
 * Insert item into "todo" list
 * 
 * @param {type} text for list item
 * @returns {undefined}
 */
let addListItem = function (text) {
  let todoList = document.getElementById('todo');
  let listItem = document.createElement('li');
  let label = document.createElement('label');
  let input = document.createElement('input');
  let span = document.createElement('span');
  
  span.textContent = text;
  span.className = "si-label line-across";
  
  input.type = "checkbox";
  let inputId = todoList.lastChild.id + 1;
  input.id = inputId;
  
  label.className = "si si-checkbox";
  label.for = inputId;
  
  todoList.appendChild(listItem);
  listItem.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  
};

/**
 * Defines what happens when Add todo button pressed.
 * 
 * @param {type} e
 * @returns {undefined}
 */
let submitHandler = function (e) {
  // TODO: implement this function
  e.preventDefault();
  let text_input = document.querySelector('input#type-input').value;

  if (!(!text_input || /^\s*$/.test(text_input))) {
    addListItem(text_input);
  }
  document.querySelector('input#type-input').value = "";
};

/**
 * Handler for list items. Functionality based on state of list item. Removes list
 * item from todo list, if it is marked as done. Otherwise marks it as done.
 * 
 * @param {type} e
 * @returns {undefined}
 */
let listClickHandler = function (e) {
  // TODO: implement this function
  e.preventDefault;
  let liElem = e.target;
  if (liElem.tagName === "LI") {
    let parent = liElem.parentNode;
    if (liElem.classList.contains("done")) {
      parent.removeChild(liElem);
    } else {
      liElem.classList.add("done");
    }
  }
};

document.getElementById('form').addEventListener('submit', submitHandler);
document.getElementById('todo').addEventListener('click', listClickHandler);