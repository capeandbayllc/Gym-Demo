<template>
    <div class="club-ref-sheet-list-container">
        <div class="columns-header">
            <label v-for="column in columns" class="column-item" :class="column.class">
                {{ column.label }}
            </label>
        </div>
        <ul class="club-list">
            <li v-for="item in items" :key="item.id" class="club-row">
                <div class="w-[15%] flex">
                    <label>{{ item.name }}</label>
                </div>
                <div class="w-[25%] flex">
                    <label>{{ item.state }}, {{ item.city }}, {{ item.address1 }}</label>
                </div>
                <div class="w-[15%] flex">
                    <label>{{ item.phone }}</label>
                </div>
                <div class="w-[15%] flex">
                    <label>{{ item.poc_first }} {{ item.poc_last }}</label>
                </div>
                <div class="w-[15%] flex">
                    <label>{{ item.poc_first }} {{ item.poc_last }}</label>
                </div>
                <div class="w-[15%] flex">
                    <ClubButton :btn_type="'bg-secondary bg-dark'" :label="'12,324'"></ClubButton>
                </div>
                <div class="w-[15%] flex">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="postcss">
    .club-ref-sheet-list-container {
        @apply py-[10px] px-[40px] border-2 border-secondary;
    }
    .columns-header {
        @apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
    }
    .column-item{
        @apply text-[12px];
    }
    .club-list{
        @apply mt-[5px] overflow-y-auto max-h-[240px];
    }
    .club-list::-webkit-scrollbar{
        @apply hidden;
    }
    .club-row{
        @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
    }
    .club-row .img-avatar{
        @apply shadow shadow-secondary shadow-lg w-[40px] h-[40px] rounded-[15px] border-[2px] border-solid border-secondary;
    }
    .club-row label{
        @apply m-auto;
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