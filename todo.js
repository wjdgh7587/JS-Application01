const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// console.log(toDoForm);
// console.log(input);
// console.log(toDoList);

var TODO_LS = "toDos";
var TODO_ARRAY = [];

//function of edit
//하핳ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
//ㄴ아러니ㅏ어라ㅣ머;ㅣㅏㅇㄴ러ㅣ;멎ㄴ디ㅏ러미;ㄴ어리;머니알
//ㅁㄴ이;러미ㅏ넝리ㅏㅓㅁ;ㅣㅏㄴ어라;ㅣ먼이ㅏ러마ㅣㄴㅇㄹ

function handleEdit(event) {
  var currentValue = event;
  const toDoClean = TODO_ARRAY.filter(function (toDoList) {
    //console.log(delBtnList.id, toDoList.id);

    return toDoList.id !== parseInt(delBtnList.id);
  });
}

function editToDo(event) {
  const editBtnList = event.target.parentNode;
  const currentValue = editBtnList.childNodes[2].textContent;
  //const getIdValue = editBtnList.id;

  const listItem = this.parentNode;
  //const listText = listItem.querySelector("span");

  //const span = document.querySelector("span").textContent;
  //const checkingTag = listItem.innerText;
  //innerText 자식의 모든 텍스트 표시

  toDoInput.value = currentValue;
  handleEdit(currentValue);

  //console.log(checkingTag);
}

//function of delete

function deleteToDo(event) {
  const delBtnList = event.target.parentNode;
  toDoList.removeChild(delBtnList);
  const toDoClean = TODO_ARRAY.filter(function (toDoList) {
    //console.log(delBtnList.id, toDoList.id);

    return toDoList.id !== parseInt(delBtnList.id);
  });
  TODO_ARRAY = toDoClean;
  //console.log(toDoClear);
  saveToDos();
}

//function of save toDoList
function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(TODO_ARRAY));
  //What is Json??
}

//Paint to the Screen
function paintToDo(text) {
  //console.log(text);
  const li = document.createElement("li");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  editBtn.addEventListener("click", editToDo);
  delBtn.addEventListener("click", deleteToDo);
  var toDoId = TODO_ARRAY.length + 1;

  editBtn.innerHTML = "EDIT";
  delBtn.innerHTML = "DELETE";
  const span = document.createElement("span");
  span.innerText = text;

  //input list to the HTML page
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = toDoId;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: toDoId,
  };

  TODO_ARRAY.push(toDoObj);
  saveToDos();

  // console.log(TODO_ARRAY);
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
  const loadToDosValue = localStorage.getItem(TODO_LS);
  //Always showing
  if (loadToDosValue !== null) {
    var parseToDosValue = JSON.parse(loadToDosValue);
    //console.log(parseToDosValue);
    parseToDosValue.forEach(function (toDo) {
      //console.log(toDo.text);
      paintToDo(toDo.text);
    });
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

/**
 * About JSON in JavaScript
 * JSON??
 *
 *
 */
