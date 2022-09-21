let todoList = [];

let handleTodos = {
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



