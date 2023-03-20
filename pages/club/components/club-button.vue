<template>
    <button :class="['club-button', `${btn_type}`]">
        {{ label }}
    </button>
  </template>
   
<style scoped>
.club-button {
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
    min-width: 50px;
    font-weight: normal;
    cursor : default;
    transition : all 0.3s;
}
.default{
    border : 2px solid #0077CB;
    background : #181916;
    min-width : 70px;
    cursor : pointer;
    padding: 1px 10px;
    font-size: 18px;
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