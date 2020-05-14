
(() => {
  console.log("Hello from roadmap.js!");
})();

/**
 * Insert item into "todo" list
 * 
 * @param {string} text for list item
 * @returns {undefined}
 */
const addListItem = function (text) {
  const todoList = document.getElementById("todo");
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  
  span.textContent = text;
  span.className = "si-label line-across";
  
  input.type = "checkbox";
  const inputId = todoList.lastChild.id + 1;
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
 * @param {object} e Parent node
 * @returns {undefined}
 */
const submitHandler = function (e) {
  // TODO: implement this function
  e.preventDefault();
  const TEXT_INPUT = document.querySelector("input#type-input").value;

  if (!(!TEXT_INPUT || /^\s*$/.test(TEXT_INPUT))) {
    addListItem(TEXT_INPUT);
  }
  document.querySelector("input#type-input").value = "";
};

/**
 * Handler for list items. Functionality based on state of list item. Removes list
 * item from todo list, if it is marked as done. Otherwise marks it as done.
 * 
 * @param {object} e Parent node
 * @returns {undefined}
 */
const listClickHandler = function (e) {
  // TODO: implement this function
  e.preventDefault;
  const liElem = e.target;
  if (liElem.tagName === "LI") {
    const parent = liElem.parentNode;
    if (liElem.classList.contains("done")) {
      parent.removeChild(liElem);
    } else {
      liElem.classList.add("done");
    }
  }
};

document.getElementById("form").addEventListener("submit", submitHandler);
document.getElementById("todo").addEventListener("click", listClickHandler);