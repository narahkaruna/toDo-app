let todoList = ['laughing', 'shopping', 'cleaning'];

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

let taskList = document.querySelector('#taskList');
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addTask)

function addTask(){
    let inputTask = document.querySelector('#task').value;
    todos.addTodo(inputTask);
}

function displayTask(){
    for(let i = 0; i < todoList.length; i++){
        let id = `task${i+1}`;
        //Create label
        let label = document.createElement('label');
        label.htmlFor = id;

        //Create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.name = 'task';
        checkbox.innerHTML = todoList[i];

        taskList.appendChild(label);
        taskList.appendChild(checkbox);
    }
    
}
displayTask();

