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
                    <ClubButton :btn_type="getKlass(item.status)" :label="item.status"></ClubButton>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="postcss">
    .ticket-container {
        @apply py-[10px] px-[20px] border-2 border-secondary;
    }
    .columns-header {
        @apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
    }
    .column-item{
        @apply text-[12px];
    }
    .ticket-list{
        @apply mt-[5px] overflow-y-auto max-h-[240px];
    }
    .ticket-list::-webkit-scrollbar{
        @apply hidden;
    }
    .ticket-row{
        @apply  flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
    }
    .ticket-row .img-avatar{
        @apply shadow shadow-secondary shadow-lg w-[40px] h-[40px] rounded-[15px] border-[2px] border-solid border-secondary;
    }
    .ticket-row label{
        @apply m-auto;
    }
</style>
<script setup>
    import ClubButton from '../club-button.vue';
    const STATUS_OPEN = 'Open';
    const STATUS_PENDING = 'Pending';
    const STATUS_RESOLVED = 'Resolved';

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

    const getKlass = (status) => {
        if(status===STATUS_OPEN) {
            return 'bg-error bg-opacity-60';
        } else if(status===STATUS_PENDING) {
            return 'bg-neutral-content/90';
        } else if(status===STATUS_RESOLVED) {
            return 'bg-success bg-opacity-60';
        }
    }
</script>