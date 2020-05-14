
(() => {
    console.log("Hello from roadmap.js!");
})();

/**
 * Adds list item to "todo" -list
 * 
 * @param {type} text
 * @returns {undefined}
 */
function addListItem(text) {
    var todoList = document.getElementById('todo');
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

}

/**
 * Handler for Add "todo" item button
 * 
 * @param {type} e
 * @returns {undefined}
 */
function submitHandler(e) {
    // TODO: implement this function
    e.preventDefault();
    var text_input = document.querySelector('input#type-input').value;

    if (!(!text_input || /^\s*$/.test(text_input))) {
        addListItem(text_input);
    }
    document.querySelector('input#type-input').value = "";
}

/**
 * Listener for list item clicks
 * 
 * @param {type} e
 * @returns {undefined}
 */
function listClickHandler(e) {
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
}

document.getElementById('form').addEventListener('submit', submitHandler);
document.getElementById('todo').addEventListener('click', listClickHandler);