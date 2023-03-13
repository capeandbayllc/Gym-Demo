<template>
    <button :class="['fitness-button', `${btn_type}`]">
        {{ label }}
    </button>
  </template>
   
<style scoped>
.fitness-button {
    /* background-color: #0077CB; */
    border: none;
    color: white;
    padding: 4px 10px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 14px;
    margin: auto;
    cursor: pointer;
    border-radius: 12px;
    min-width: 90px;
    font-weight: bold;
    cursor : default;
    transition : all 0.3s;
}
.default{
    border : 2px solid #0077CB;
    background : #181916;
    min-width : 70px;
    cursor : pointer;
}
.default:hover{
    background : #0077CB;
}
.Premium{
    background : #ff9e01;
}
.Basic{
    background : #5cc300;
}
.Pending{
    background : #5a5b58;
}
.Completed{
    background : #181916;
    border : 2px solid #5cc300
}

</style>
<script setup>
import { createDOMCompilerError } from '@vue/compiler-dom';

const props = defineProps({
    btn_type :{
        type : String,
        default : "default"
    },
    label :{
        type : String,
        default : "View"
    }
});

</script>