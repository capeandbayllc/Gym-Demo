<template>
    <div class="address-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class="column.class">
                {{ column.label }}
            </label>
        </div>
        <ul class="address-list">
            <li v-for="category in categorizedItems" :key="category.name">
                <label class="header block text-[14px] text-white text-left pt-4 pb-2">{{ category.label }}</label>
                <ul>
                    <li v-for="item in category.items" :key="item.id" class="address-row">
                        <div class="w-[25%] flex">
                            <div class="flex items-center gap-2">
                                <img class="rounded-lg h-12 w-12 object-cover bg-gray-300 border-2 border-blue-400 hidden md:block" :src="item.photo" alt="{{ item.name }}">
                                <label class="ml-4 font-medium">{{ item.name }}</label>
                            </div>
                        </div>
                        <div class="w-[25%] flex">
                            <label>{{ item.company }}</label>
                        </div>
                        <div class="w-[20%] flex">
                            <label>{{ item.phone }}</label>
                        </div>
                        <div class="w-[20%] flex">
                            <label>{{ item.email }}</label>
                        </div>
                        <div class="w-[10%] flex">
                            <ClubButton :btn_type='default' :label="'Contact'"></ClubButton>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .address-container {
        @apply py-[10px] px-[20px] border-2 border-[#0077ac]
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
    .address-list{
        margin-top: 5px;
        overflow: auto;
        max-height : 240px;
    }
    .address-list::-webkit-scrollbar{
        display: none;
    }
    .address-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .address-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .address-row label{
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
        categorizedItems: {
            type: Array,
            default: []
        }
    });
</script>