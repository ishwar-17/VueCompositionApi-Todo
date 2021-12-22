<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <h3 class="mb-3">Todo</h3>
                <div class="todo-container shadow py-3 px-3 rounded">
                <!-- <todo-complete-progress :todo-count="todoCount" /> -->
                    <add-todo @add-todo="addTodo" />
                    <todo-list :todos="todos" :allCompleted="allCompleted" @all-done="allDone" @completed-todo="completedTodo" @delete-todo="deleteTodo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { watch, ref } from 'vue';
    import TodoList from './TodoList.vue'; 
    import AddTodo from './AddTodo.vue';
    import { todoStorage } from './todoConstant';
    export default {
        name: 'Todo',
        components:{
            TodoList,
            AddTodo
        },
        setup(){
            const todos = ref(todoStorage.fetch());
            const allCompleted = ref(false);

            watch(() => todos.value, (newTodos) => {
                todoStorage.save(newTodos);
            },
                { deep: true }
            );

            function addTodo(name){
                const newTodo = {
                    id: todoStorage.uuid++,
                    name: name,
                    completed: false
                }
                todos.value.push(newTodo);
            }
            function allDone(value){
                todos.value.filter(todo => todo.completed = value);
                allCompleted.value = value;
            }
            function completedTodo(todo){
                const currentIndex = todos.value.indexOf(todo);
                todos.value[currentIndex].completed = !todo.completed;
            }
            function deleteTodo(todo){
                todos.value.splice(todos.value.indexOf(todo), 1);
            }
           
            return {
                todos,
                allCompleted,
                addTodo,
                allDone,
                completedTodo,
                deleteTodo
            }
        }
    }
</script>