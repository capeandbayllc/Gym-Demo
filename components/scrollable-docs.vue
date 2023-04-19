<template>
    <arrow-icon v-show="!hideLeftArrow" direction="left" class="h-fit cursor-pointer" @click="LeftArrowClick"/>
    <div class="docs-list flex gap-6 py-4">
        <div v-for="doc in docs" :key="doc.id" class="doc-item flex flex-col items-center">
            <normal-doc class="mb-2 w-[120px] h-[120px]" />
            <div class="text-white text-[14px]">{{doc.name}}</div>
            <div class="text-secondary text-[11px] mt-[-5px]">{{doc.date}}</div>
        </div>
    </div>
    <arrow-icon v-show="!hideRightArrow" direction="right" class="h-fit cursor-pointer" @click="RightArrowClick"/>
</template> 
<style scoped>
.docs-list{
    width : 100%;
    overflow-x: scroll;
    transition : all 0.3s;
    margin : 0 10px;
}
.docs-list::-webkit-scrollbar{
    display: none;
}
.cursor-pointer{
    margin : auto;
    color : white;
}
</style>
<script setup>
import NormalDoc from '~/pages/mass-com/components/normal-doc.vue';
import {ArrowIcon } from '~~/components/icons';
const props = defineProps({
    docs : {
        type : Array,
        default : [{
            id : 1,
            name :'Waiver',
            date : 'April 4 2022'
        }]
    },
    hideLeftArrow:{
        type: Boolean,
        default: false
    },
    hideRightArrow:{
        type: Boolean,
        default: false
    }
});

const LeftArrowClick =(event) => {
    var scroll_doc = event.srcElement;
    while( !scroll_doc.classList.contains('slide-docs') ){
        scroll_doc = scroll_doc.parentNode;
    }
    var doc_list = scroll_doc.querySelector('.docs-list');
    doc_list.scrollLeft -= 50;
}

const RightArrowClick =(event) => {
    var scroll_doc = event.srcElement;
    while( !scroll_doc.classList.contains('slide-docs') ){
        scroll_doc = scroll_doc.parentNode;
    }
    var doc_list = scroll_doc.querySelector('.docs-list');
    doc_list.scrollLeft += 50;
}
</script>