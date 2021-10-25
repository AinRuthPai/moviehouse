const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

toDos = [];

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem("todos");

if (savedTodo !== null) {
    const parseTodo = JSON.parse(savedTodo);
    toDos = parseTodo;
    parseTodo.forEach(paintTodo);
}