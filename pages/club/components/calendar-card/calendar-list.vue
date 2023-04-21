<template>
    <ul class="calendar-list">
        <li v-for="item in items" :key="item.id" class="calendar-row">
            <div class="text-left w-[30%]">
                <label>{{ item.event_name }}</label>
            </div>
            <div class="w-[30%]">
                <label>{{ item.event_time }}</label>
            </div>
            <div class="w-[40%]">
                <label>{{ item.event_location }}</label>
            </div>
        </li>
    </ul>
</template>
<style scoped lang="postcss">
    .calendar-list{
        @apply mt-[5px] overflow-y-auto max-h-[240px];
    }
    .calendar-list::-webkit-scrollbar{
        @apply hidden;
    }
    .calendar-row{
        @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
    }
    .calendar-row .img-avatar {
        @apply shadow shadow-secondary shadow-lg rounded-[15px] w-[40px] h-[40px] border-[2px] border-solid border-secondary;
    }
    .calendar-row label{
        @apply m-auto;
    }
</style>
<script setup>
    import ClubButton from '../club-button.vue';
    const props = defineProps({
        items: {
            type: Array,
            default: [],
        }
    });
</script>