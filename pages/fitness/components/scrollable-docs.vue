<template>
    <arrow-icon direction="left" class="h-fit cursor-pointer" @click="LeftArrowClick"/>
    <div class="docs-list flex ">
        <div v-for="doc in docs" :key="doc.id" class="member-doc">
            <normal-doc class="mb-2 w-[120px] h-[120px]" />
            <div class="text-base-content text-[14px] ">{{doc.name}}</div>
            <div class="text-secondary text-[14px]">{{doc.date}}</div>
        </div>
    </div>
    <arrow-icon direction="right" class="h-fit cursor-pointer" @click="RightArrowClick"/>
</template>
<style scoped lang="postcss">
.docs-list{
    @apply w-full overflow-x-scroll transition-all duration-300 my-0 mx-[10px];
}
.docs-list::-webkit-scrollbar{
    @apply hidden;
}
.cursor-pointer{
    @apply m-auto text-base-content;
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
    }
});
</script>
<script>
export default{
    methods: {
        LeftArrowClick(event){
            var scroll_doc = event.srcElement;
            while( !scroll_doc.classList.contains('slide-docs') ){
                scroll_doc = scroll_doc.parentNode;
            }
            var doc_list = scroll_doc.querySelector('.docs-list');
            doc_list.scrollLeft -= 50;
        },
        RightArrowClick(event){
            var scroll_doc = event.srcElement;
            while( !scroll_doc.classList.contains('slide-docs') ){
                scroll_doc = scroll_doc.parentNode;
            }
            var doc_list = scroll_doc.querySelector('.docs-list');
            doc_list.scrollLeft += 50;
        }

    }
}
</script>