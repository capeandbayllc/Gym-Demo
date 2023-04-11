<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" :class="size=='big'?'w-6 h-6 rounded-full':'w-4 h-4 rounded-full'">
        <g id="close_me_685" transform="translate(2 2)">
            <g id="Ellipse_1500" data-name="Ellipse 1500" stroke="#fff" stroke-width="2">
            <circle cx="14" cy="14" r="14" stroke="none"/>
            <circle cx="14" cy="14" r="15" fill="none"/>
            </g>
            <line id="Line_892" data-name="Line 892" y2="16" transform="translate(19.657 8.343) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
            <line id="Line_893" data-name="Line 893" x1="15" transform="translate(8.697 8.697) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
        </g>
    </svg>
</template>
<script setup>
const props=defineProps({
    size:String,
})
</script>