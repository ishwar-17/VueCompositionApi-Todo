<template>
    <radial-progress-bar 
        :diameter="diameter"
        :inner-stroke-width="innerStrokeWidth"
        :stroke-width="strokeWidth"
        :inner-stroke-color="innerStrokeColor"
        :completed-steps="completedSteps"
        :total-steps="totalSteps"
    >
        <p>{{ completedSteps }}</p>
    </radial-progress-bar>
</template>
 
<script>
    import { ref } from 'vue'; 
    import RadialProgressBar from 'vue-radial-progress';
    export default {
        name: 'CircularProgress',
        props: ['diameter, innerStrokeWidth, strokeWidth, innerStrokeColor, totalSteps'],
        components: {
            RadialProgressBar
        },
        setup(props){
            const completedSteps = ref(props.totalSteps != undefined ? props.totalSteps : 0);
            console.log(completedSteps.value);
            return {
                completedSteps
            }
        }
    }
</script>