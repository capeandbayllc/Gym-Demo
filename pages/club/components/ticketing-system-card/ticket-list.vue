<template>
    <div class="ticket-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class="column.class">
                {{ column.label }}
            </label>
        </div>
        <ul class="ticket-list">
            <li v-for="item in items" :key="item.id" class="ticket-row">
                <div class="w-[25%]">
                    <label>{{ item.type }}</label>
                </div>
                <div class="w-[25%]">
                    <label>{{ item.assignee }}</label>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type="item.status.klass" :label="item.status.label"></ClubButton>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .ticket-container {
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
    .ticket-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 240px;
    }
    .ticket-list::-webkit-scrollbar{
        display: none;
    }
    .ticket-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .ticket-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .ticket-row label{
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