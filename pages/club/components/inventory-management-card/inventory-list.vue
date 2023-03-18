<template>
    <div class="inventory-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class="column.class">
                {{ column.label }}
            </label>
        </div>
        <ul class="inventory-list">
            <li v-for="item in items" :key="item.id" class="inventory-row">
                <div class="w-[30%]">
                    <label>{{ item.name }}</label>
                </div>
                <div class="w-[30%]">
                    <ClubButton :btn_type="getStatus(item.quantity)" :label="item.quantity"></ClubButton>
                </div>
                <div class="w-[40%]">
                    <label>{{ item.item_number }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .inventory-container {
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
    .inventory-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 240px;
    }
    .inventory-list::-webkit-scrollbar{
        display: none;
    }
    .inventory-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .inventory-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .inventory-row label{
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

    const getStatus = (itemCount) => {
        if(itemCount <= 2) {
            return 'bg-error bg-opacity-60';
        } else if(itemCount <=5) {
            return 'bg-warning bg-opacity-60';
        } else {
            return 'bg-success bg-opacity-60';
        }
    }
</script>