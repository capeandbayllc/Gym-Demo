<template>
    <div class="warranty-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class="column.class">
                {{ column.label }}
            </label>
        </div>
        <ul class="warranty-list">
            <li v-for="item in items" :key="item.id" class="warranty-row">
                <div class="w-[25%]">
                    <label>{{ item.type }}</label>
                </div>
                <div class="w-[25%]">
                    <label>{{ item.company }}</label>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type="item.expiration.klass" :label="item.expiration.label"></ClubButton>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .warranty-container {
        @apply pt-[10px] px-[20px] border-2 border-[#0077ac]
    }
    .warranty-container {
        border-bottom: none;
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
    .warranty-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 260px;
    }
    .warranty-list::-webkit-scrollbar{
        display: none;
    }
    .warranty-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .warranty-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .warranty-row label{
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