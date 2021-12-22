// LocalStorage Key.

const STORAGE_KEY = 'todo-app';
export const todoStorage = {
    fetch: function(){
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        todos.map((todo, index) => {
            todo.id = index;
        });
        todoStorage.uuid = todos.length;
        return todos;
    },
    save: function(todos){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};