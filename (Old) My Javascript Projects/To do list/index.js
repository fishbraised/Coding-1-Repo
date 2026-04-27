// HTML document of TODO IS GIVEN
// designed one LI item using javascript
// after that we converted the whole code and made it reusable by putting it inside a function (createAndAppendTo())
// because we wanted to store some information of every LI item, we have create an array of objects

// using for loop we iterated over the list and appended all the object information as LI todoItemsContainer
// we added event listener for add button and started creating the LI items dynamically

// PENDING STEPS:
// - When we click on the save button the todo items should be saved in the lcocal Storage
// - When delete icon is clicked, we have to delete the items in the local Storage

let todoItemsContainer = document.getElementById("todoItemsContainer");
let saveButtonEl = document.getElementById("saveTodoButton");
let addButtonEl = document.getElementById("addTodoButton");
addButtonEl.onclick = function () {
  onAddTodo();
};

function getTodoFromLocalStorage() {
  let JSONTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(JSONTodoList);

  if (parsedTodoList === null) {
    return [];
  }
  return parsedTodoList; // null will go when nothing is saved in storage
}

let todoList = getTodoFromLocalStorage(); //
console.log(todoList);

for (let todo of todoList) {
  createAndAppendTo(todo);
}

saveButtonEl.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
  let todoUserInputEl = document.getElementById("todoUserInput");
  let userInputValue = todoUserInputEl.value;

  if (userInputValue === "") {
    alert("Enter valid input.");
    return;
  }

  let newTodo = {
    text: userInputValue,
    uniqueId: todoList.length + 1,
    isChecked: false,
  };
  todoList.push(newTodo);
  createAndAppendTo(newTodo); // maniulation the dom by adding the new todo in the diplay
  todoUserInputEl.value = "";
}

function onTodoStatusChange(checkboxId, labelId, todoId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObjectIndex = todoList.findIndex(function (eachItem) {
    let eachTodoId = "todo" + eachItem.uniqueId;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  let todoObject = todoList[todoObjectIndex];
  if (todoObject.isChecked === false) {
    todoObject.isChecked = true;
  } else {
    todoObject.isChecked = false;
  }
}

function onTodoDelete(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  let deleteElementIndex = todoList.findIndex(function (eachItem) {
    let eachTodoId = "todo" + eachItem.uniqueId;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  todoList.splice(deleteElementIndex, 1);

  console.log(deleteElementIndex);
  console.log(todoList);
}

function createAndAppendTo(item) {
  let todoId = "todo" + item.uniqueId;
  let checkboxId = "checkbox" + item.uniqueId;
  let labelId = "label" + item.uniqueId;

  let todoEl = document.createElement("li");
  todoEl.classList.add("todo-item-container");
  todoEl.setAttribute("id", todoId);
  todoItemsContainer.appendChild(todoEl);

  let inputEl = document.createElement("input");
  inputEl.classList.add("checkbox-input");
  // inputEl.id = "checkbox";
  // inputEl.type = "checkbox";
  inputEl.onclick = function () {
    // here we need to write the instructions to strike the label
    onTodoStatusChange(checkboxId, labelId, todoId);
  };
  inputEl.setAttribute("id", checkboxId);
  inputEl.setAttribute("type", "checkbox");
  todoEl.appendChild(inputEl);

  let divEl = document.createElement("div");
  divEl.classList.add("label-container");
  todoEl.appendChild(divEl);

  let labelEl = document.createElement("label");
  labelEl.classList.add("checkbox-label");
  labelEl.textContent = item.text;
  // labelEl.htmlFor = "checkbox";
  labelEl.setAttribute("id", labelId);
  labelEl.setAttribute("for", checkboxId);
  divEl.appendChild(labelEl);

  let iconEl = document.createElement("i");
  iconEl.classList.add("far", "fa-trash-alt", "delete-icon");
  iconEl.onclick = function () {
    onTodoDelete(todoId);
  };
  divEl.appendChild(iconEl);
}
