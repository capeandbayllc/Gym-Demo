<template>
    <div class="property-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class=column.class>
                {{ column.label }}
            </label>
        </div>
        <ul class="property-list">
            <li v-for="item in items" :key="item.id" class="property-row">
                <div class="w-[30%]">
                    <label>{{ item.location }}</label>
                </div>
                <div class="w-[40%]">
                    <label>{{ item.address }}</label>
                </div>
                <div class="w-[30%]">
                    <label>{{ item.manager }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .property-container {
        @apply py-[10px] px-[40px] border-2 border-[#0077ac]
    }
    .columns-header {
        color : #0077ac;
        border-bottom : 3px solid #0077ac;
        padding: 8px 15px;
        margin-top: 15px;
        display: flex;
    }
    .column-item{
        font-size: 12px;
    }
    .property-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 180px;
    }
    .property-list::-webkit-scrollbar{
        display: none;
    }
    .property-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .property-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .property-row label{
        margin : auto;
    }
</style>
<script setup>
    import ClubButton from '../club-button.vue';
    const props = defineProps({
        columns: {
            type: Array,
            default: []
        },
        items: {
            type: Array,
            default: []
        }
    });
</script>