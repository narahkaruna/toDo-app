let todoList = [];

let todos = {
    displayTodo: todoList,
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
        <input type='checkbox' id='${id}' name='task'>${inputTask.value}</input>`;
    todos.addTodo(inputTask.value);
    taskList.insertAdjacentHTML("beforeend", chkbox);
    inputTask.value = '';
}

function deleteTask(event){
    if(event.target.input === checked)
    todos.deleteTodo(event.target.input);
}
