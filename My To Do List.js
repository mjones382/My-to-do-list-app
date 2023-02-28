var someTodoList = [];
var todoCompletion = [];

// input: array of to do items
// render the items on screen as a list
function renderList(todoList) {
  const todoContainer = document.querySelector("#to-do-list-container");

  let todoString = "";
  for (let i = 0; i < todoList.length; i++) {
    const liClass = todoCompletion[i] ? "class='completed'" : "";
    todoString =
      todoString +
      "<li " +
      liClass +
      "><input type='checkbox' class='checkbox'/>" +
      todoList[i] +
      "</li>";
  }

  todoContainer.innerHTML = todoString;
}

const inputField = document.querySelector("#to-do-input");

function attachEventToCheckboxes() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (event) => {
      if (event.target.checked) {
        todoCompletion[index] = true;
      } else {
        todoCompletion[index] = false;
      }
      markItemsAsCompleted();
    });
  });
}

function markItemsAsCompleted() {
  // iterate over to do list
  const liItems = document.querySelectorAll("li");
  liItems.forEach((li, index) => {
    if (todoCompletion[index]) {
      // check if index is true add class complete
      li.classList.add("complete");
    } else {
      // else remove class complete
      li.classList.remove("complete");
    }
  });
}

inputField.addEventListener("keypress", (event) => {
  var code = event.keyCode ? event.keyCode : event.which;
  if (code == 13) {
    //Enter keycode
    someTodoList.push(inputField.value);
    renderList(someTodoList);
    attachEventToCheckboxes();
    inputField.value = "";
  }
});


