<template>
    <div class="form-group todo-form-container">
        <input 
            class="form-control"
            :class="{'border-danger-class': isValidInput}"
            placeholder="Type your todo list"
            name="todo"
            type="text"
            v-model="enteredText"
            @keyup.enter="addTodo()"
        />
        <button class="todo-add-action" :class="enteredText.length > 0 ? 'active' : 'inactive'" @click="addTodo(true)"><b-icon-plus-circle-fill /></button>
        <p v-if="isValidInput" class="text-danger">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    emits: ["add-todo"],
    setup(_, context) {
        const enteredText = ref('');
        const isValidInput = ref(false);
        const errorMessage = ref('');

        watch(enteredText, function(val){
            if(!val){
                errorMessage.value = "Please enter the todo...";
                isValidInput.value = true;
                return;
            }
            isValidInput.value = false;
        })

        function addTodo(enterCheck){
            if(!enteredText.value && enterCheck){
                errorMessage.value = "Please enter the todo...";
                isValidInput.value = true;
                return;
            }
            isValidInput.value = false;
            context.emit('add-todo', enteredText.value);
            enteredText.value = "";
        }
        return { 
            enteredText,
            isValidInput,
            errorMessage,
            addTodo
        }
    }
}
</script>

<style scoped>
    .todo-form-container{
        position: relative;
    }
    .todo-form-container input{
        height:60px;
        border-radius: 15px;
        padding: 12px 55px;
        background-color: #efefef;
        border: 1px solid #efefef;
        font-size:18px;
        transition: all 0.5s ease-in-out;
    }
    .todo-form-container p{
        text-align: left;
        margin:0;
    }
    .todo-form-container input:hover, .todo-form-container input:focus{
        outline:none;
        box-shadow: none;
        border: 1px solid #efefef;
    }
    .todo-form-container .border-danger-class, .todo-form-container input.border-danger-class:hover, .todo-form-container input.border-danger-class:focus{
        border: 1px solid #ff0000;
    }
    .todo-form-container input:focus{
        background-color: #ddd;
    }
    .todo-form-container .todo-add-action{
        position: absolute;
        top:12px;
        right:12px;
        font-size:22px;
        background-color: transparent;
        border:none;
        color: #000;
        transition: all 0.4s ease-in-out;
    }
    .todo-form-container::before{
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNiAxMmgxMHYxaC0xMHYtMXptNy44MTYtM2gtNy44MTZ2MWg5LjA0N2MtLjQ1LS4yODMtLjg2My0uNjE4LTEuMjMxLTF6bS03LjgxNi0yaDYuNWMtLjEzNC0uMzItLjIzNy0uNjU2LS4zMTktMWgtNi4xODF2MXptMTMgMy45NzV2Mi41NjhjMCA0LjEwNy02IDIuNDU3LTYgMi40NTdzMS41MTggNi0yLjYzOCA2aC03LjM2MnYtMjBoOS41Yy4zMTItLjc0OS43NjMtMS40MjQgMS4zMTYtMmgtMTIuODE2djI0aDEwLjE4OWMzLjE2MyAwIDkuODExLTcuMjIzIDkuODExLTkuNjE0di0zLjg4NmMtLjYyMy4yNi0xLjI5Ny40MjEtMiAuNDc1em00LTYuNDc1YzAgMi40ODUtMi4wMTUgNC41LTQuNSA0LjVzLTQuNS0yLjAxNS00LjUtNC41IDIuMDE1LTQuNSA0LjUtNC41IDQuNSAyLjAxNSA0LjUgNC41em0tMi4xNTYtLjg4MmwtLjY5Ni0uNjk2LTIuMTE2IDIuMTY5LS45OTItLjk0MS0uNjk2LjY5NyAxLjY4OCAxLjYzNyAyLjgxMi0yLjg2NnoiLz48L3N2Zz4=');
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top:0;
        left:0;
        z-index:1;
        width:60px;
        height:60px;
    }
    .todo-form-container .todo-add-action.inactive{
        display:none;
        animation: hideaddicon-anim 0.9s ease;
    }
    .todo-form-container .todo-add-action.active{
        display:block;
        animation: showaddicon-anim 0.9s ease;
    }
    .todo-form-container .todo-add-action{
        transition: all 0.5s ease-in-out;
    }
    .todo-form-container .todo-add-action, .todo-form-container .todo-add-action:hover{
        color: rgb(65,184,131);
        border:none;
        outline:none;
    }
     @keyframes showaddicon-anim {
        0% {
            opacity: 0;
            transform:scale(0);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes hideaddicon-anim {
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
