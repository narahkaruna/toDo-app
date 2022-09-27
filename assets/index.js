const todoList = [];
const taskCompleted = [];
const taskTodo = [];

let todos = {
    addTodo: (todo) => {
        todoList.push(todo)
    },
    deleteTodo: function(todo){
        let index = todoList.indexOf(todo);
        todoList.splice(index, 1);
    },
    editTodo: function(todo, newTodo){
        let index = todoList.indexOf(todo);
        todoList[index] = newTodo;
    }
};

let count = 1;
let taskList = document.querySelector('#taskList');
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addTask)

function addTask(){
    let inputTask = document.querySelector('#task');
    let id = `task${count++}`;
    let chkbox = `<label for='${id}'></label>
        <input type='checkbox' id='${id}' name='task' value='${inputTask.value}'>${inputTask.value}</input>`;
    todos.addTodo(inputTask.value);
    taskList.insertAdjacentHTML("beforeend", chkbox);
    inputTask.value = '';
}

function handleTask(){
    let tasks = document.querySelectorAll('taskList input[type="checkbox"]');
    tasks.forEach(task => {
        task.checked ? taskCompleted.push(task.value) : taskTodo.push(task.value)
    });
}




