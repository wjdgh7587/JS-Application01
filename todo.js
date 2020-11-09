const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

console.log(toDoForm);
console.log(input);
console.log(toDoList);

const TODO_LS = "toDos";
var TODO_ARRAY = new Array();
//function of delete 
function handleDelete(event) {
  
}
function handleCommit(event) {
  
}


//Paint to the Screen
function paintToDo(text) {
  console.log(text);
  const li = document.createElement("li");
  const commitBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  commitBtn.innerHTML = "commit";
  delBtn.innerHTML = "delete"; //❎
  const span = document.createElement("span");
  span.innerText = text + " ";

  //input list to the HTML page
  li.appendChild(span);
  li.appendChild(commitBtn);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  TODO_ARRAY.push(text);

  console.log(TODO_ARRAY);
}

//Form action
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  //console.log(currentValue);
}

//checking local storage
function loadToDos() {
  const toDos = localStorage.getItem(TODO_LS);
  //Always showing
  if (toDos !== null) {
  } else {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();

// const todos = ["apple", "jeongho", "chocoloate", "babyboy"];
// const jeonghoIndex = todos.indexOf("jeongho");

// todos.splice(jeonghoIndex, 1);

// console.log(todos);

//What is splice function?
/*
  (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove. 
*/
