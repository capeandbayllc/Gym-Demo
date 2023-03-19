<template>
    <button class='fitness-plus-button'>
        <span>+</span>
        <label>{{ label }}</label>
    </button>
</template>
   
<style scoped>
.fitness-plus-button {
    background : transparent;
    border: 2px solid #0077cb;
    border-radius: 50px;
    display: flex;
    min-height : 44px;
    max-width: 200px;
    min-width: 120px;
    color : white;
    cursor : pointer;
    transition : all 0.3s;
}
.fitness-plus-button:hover{
    background : #0077cb;
}
.fitness-plus-button span{
    width: 30px;
    height :30px;
    min-width: 30px;
    min-height: 30px;
    border : 2px solid lightgrey;
    border-radius : 50%;
    margin: auto 7px;
}
.fitness-plus-button label{
    margin: auto 7px;
}

</style>
<script setup>

const props = defineProps({
    label :{
        type : String,
        default : "View"
    }
});

</script>