<template>
    <div class="club-ref-sheet-list-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class=column.class>
                {{ column.label }}
            </label>
        </div>
        <ul class="club-list">
            <li v-for="item in items" :key="item.id" class="club-row">
                <div class="w-[15%] flex">
                    <label>{{ item.location }}</label>
                </div>
                <div class="w-[25%] flex">
                    <label>{{ item.address }}</label>
                </div>
                <div class="w-[15%] flex">
                    <label>{{ item.phone }}</label>
                </div>
                <div class="w-[15%] flex">
                    <label>{{ item.manager }}</label>
                </div>
                <div class="w-[15%] flex">
                    <label>{{ item.assent_manager }}</label>
                </div>
                <div class="w-[15%] flex">
                    <ClubButton :btn_type="'bg-secondary bg-dark'" :label="item.member_total"></ClubButton>
                </div>
                <div class="w-[15%] flex">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .club-ref-sheet-list-container {
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
    .club-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 180px;
    }
    .club-list::-webkit-scrollbar{
        display: none;
    }
    .club-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .club-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .club-row label{
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