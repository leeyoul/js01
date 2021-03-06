const todolistForm = document.querySelector("#todo-form")
const todoInput = todolistForm.querySelector("input")
const todolistUl = document.querySelector("#todo-list")
const deleteAllBtn = document.querySelector("#deleteAll");



let TODOs = [];

//작성된 TODOs 를 로컬에 저장
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(TODOs));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;   
    todoInput.value ="";
    const newTodoObj= {
        text: newTodo,
        id: Date.now(),
        done: false,
    };
    TODOs.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

//TODO추가
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const input = document.createElement("input"); //체크박스추가
    input.type ="checkbox";
    input.id = `cb${newTodo.id}`;
    input.classList = "check-item";
    input.value = newTodo.id;
    if (newTodo.done) {
        input.checked = true;
      }
    const label = document.createElement("label"); //라벨추가
    label.htmlFor = `cb${newTodo.id}`;
    label.textContent = newTodo.text;
    btn.innerText ="X";
    btn.addEventListener("click", deleteTodo)
    span.appendChild(input);
    span.appendChild(label);
    li.appendChild(span);
    li.appendChild(btn);
    todolistUl.appendChild(li);
    span.innerText = newTodo.text;
    deleteAllBtn.classList.remove("hidden"); // 전체삭제버튼 나타내기
}

//TODO삭제
function deleteTodo(event) {
    const deleteli = event.target.parentElement;  
    deleteli.remove();
    TODOs = TODOs.filter((todos) => todos.id !== parseInt(deleteli.id));
    saveTodos();
}



todolistForm.addEventListener("submit", handleToDoSubmit)




//로컬에 저장된 todo리스트 불러오기
const calltodo = localStorage.getItem("todos");
if(calltodo !==null) {
    const parsedToDos = JSON.parse(calltodo);
    TODOs = parsedToDos;
    parsedToDos.forEach(paintToDo);  
    deleteAllBtn.classList.remove("hidden"); // 전체삭제버튼 나타내기
}


//todolist 전체삭제

function clearTodos() {
	localStorage.removeItem('todos');
    window.location.reload();
}

deleteAllBtn.addEventListener("click", clearTodos);