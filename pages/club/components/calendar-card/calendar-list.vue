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
<style scoped>
    .calendar-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 240px;
    }
    .calendar-list::-webkit-scrollbar{
        display: none;
    }
    .calendar-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .calendar-row .img-avatar {
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .calendar-row label{
        margin : auto;
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