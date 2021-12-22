<template>
    <div class="todo-list-container" v-if="todos.length > 0">
        <div class="todo-top-section">
            <a href="#" class="completed-all-todo" :class="{'active': allCompleted}" @click="allDone(allCompleted)" ><b-icon-check2-all /> Complete all task</a>
        </div>
        <ul>
            <li v-for="(list, index) in todos" :key="index" :class="allCompleted || list.completed ? 'active-class' : 'inactive-class'">
                <div class="todo-name todo-list-item">
                    <a href="#" @click="completedTodo(list)" class="todo-item-circle" v-show="!list.completed"><b-icon-circle /></a>
                    <a href="#" @click="completedTodo(list)" class="todo-item-check-fill" v-show="list.completed"><b-icon-patch-check-fill /></a>
                    <span :class="{'active-class': allCompleted || list.completed}">{{ list.name }}</span>
                </div>
                <div class="todo-action todo-list-item">
                    <a href="#" @click="deleteTodo(list)" class="todo-item-close"><b-icon-trash /></a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['todos', 'allCompleted'],
        emits:['all-done', 'çompleted-todo', "delete-todo"],
        setup(_, context){
            function allDone(value){
                context.emit('all-done', !value);
            }
            function completedTodo(id){
                context.emit('completed-todo', id);
            }
            function deleteTodo(todoIdRemove){
                context.emit('delete-todo', todoIdRemove);
            }
            return {
                allDone,
                completedTodo,
                deleteTodo
            }
        }
    }
</script>

<style scoped>
    .todo-list-container .todo-top-section{
        text-align: left;
        margin:15px 0;
    }
    .todo-list-container .todo-top-section .completed-all-todo {
        color: #676a6c;
        font-size: 14px;
        text-decoration: none;
        transition: all 0.5s ease-in-out;
    }
    .todo-list-container .todo-top-section .completed-all-todo > svg{
        font-sizE:20px;
        color: #ddd;
        transition: all 0.5s ease-in-out;
    }
    .todo-list-container .todo-top-section:hover .completed-all-todo, .todo-list-container .todo-top-section:hover .completed-all-todo.active, 
    .todo-list-container .todo-top-section:hover .completed-all-todo > svg, .todo-list-container .todo-top-section:hover .completed-all-todo.active > svg{
        color:rgb(65,184,131);
    }
    .todo-list-container .todo-top-section .completed-all-todo.active{
        font-weight: 500;
        color:rgb(65,184,131);
    }
    .todo-list-container .todo-top-section .completed-all-todo.active > svg{
        color:rgb(65,184,131);
    }
    .todo-list-container ul{
        padding:0;
        margin:0;
        list-style: none;
    }
    .todo-list-container ul > li{
        display:flex;
        flex-direction: row;
        padding: 10px 20px;
        color: #444444;
        text-align: left;
        border-left:6px solid#99933f;
        border-radius: 6px;
        background-color: #ffffff;
        font-weight: 600;
        box-shadow: 0 0 2px 1px #fff, 0 0 14px 2px #f1f1f1;
        margin-bottom: 20px;
    }
    .todo-list-container ul > li:last-child{
        margin-bottom: 0;
    }
    .todo-list-container ul > li > .todo-list-item > .active-class{
        text-decoration: line-through;
        color: #ddd;
    }
    .todo-list-container ul > li.active-class{
        opacity: 0.5;
    }
    .todo-list-container ul > li > .todo-list-item{
        display:flex;
        flex: 0 0 50%;
    }
    .todo-list-container ul > li > .todo-name{
        justify-content: flex-start;
        align-items: center;
    }
    .todo-list-container ul > li > .todo-action {
        justify-content: flex-end;
    }
    .todo-list-container ul > li > .todo-action > a{
        display: inline-block;
        width:40px;
        height:40px;
        line-height: 40px;
        text-align: center;
        transition: all 0.5s ease-in-out;
    }
    .todo-list-container ul > li > .todo-list-item > .todo-item-circle, .todo-list-container ul > li > .todo-list-item > .todo-item-check-fill{
        font-weight: 600;
        font-size:22px;
        padding-right:10px;
    }
    .todo-list-container ul > li > .todo-list-item > .todo-item-circle{
        color: #676a6c;
        animation: fadeScaleNotCompleted-anim 0.5s ease; 
    }
    .todo-list-container ul > li > .todo-list-item > .todo-item-check-fill{
        color: rgb(65,184,131);
        animation: fadeScaleCompleted-anim 0.9s ease; 
    }
    .todo-list-container ul > li.active-class > .todo-action > .todo-item-close{
        opacity: 1;
    }
    .todo-list-container ul > li > .todo-action > .todo-item-close{
        opacity: 0;
        color: #ff0000;
        transition: all 0.5s ease-in-out;
    }
    .todo-list-container ul > li.inactive-class:hover .todo-action > .todo-item-close{
        animation: faderight-anim 0.9s ease;
        opacity: 1;
    }
    .todo-list-container ul > li > .todo-action > a:hover{
        background-color: #ddd;
        border-radius: 50%;
    }
    .todo-list-container ul > li{
        animation: fade-anim 0.9s ease;
    }
    @keyframes fade-anim {
        0% {
            opacity: 0;
            transform:translateY(-100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
    @keyframes faderight-anim {
        0% {
            opacity: 0;
            transform:translateX(-100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes fadeScaleCompleted-anim {
        0% {
            opacity: 0;
            transform:scale(0);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes fadeScaleNotCompleted-anim {
        0% {
            opacity: 1;
            transform:scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>