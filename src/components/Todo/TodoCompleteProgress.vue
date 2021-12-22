<template>
    <div class="todo-complete-progress-container mb-3" v-if="todoCount > 0">
        <div class="todo-item-count todo-complete-item">
            {{ todoCount }}
        </div>
        <div class="todo-completed-progressbar todo-complete-item">
            <circular-progress 
                :diameter="45" 
                :total-steps="todoCount"
                :inner-stroke-width="5" 
                :stroke-width="5" 
                :inner-stroke-color='innerStrokeColor' 
            />
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import CircularProgress  from '../ProgressBar/CircularProgressBar.vue';
    export default {
        props:["todoCount"],
        components: {
            CircularProgress
        },
        setup(){
            const innerStrokeColor = ref('#ffffff');
            return { 
                innerStrokeColor
            }
        }
    }
</script>

<style scoped>
    .todo-complete-progress-container{
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 2px 1px #fff, 0 0 14px 2px #f1f1f1;
        border-radius: 6px;
        padding: 15px 20px;
    }
    .todo-complete-item{
        display:flex;
        flex: 0 0 50%;
    }
    .todo-item-count{
        justify-content: flex-start;
        font-size: 16px;
        font-weight:600;
    }
    .todo-complete-progress{
        justify-content: flex-end;
    }
</style>

