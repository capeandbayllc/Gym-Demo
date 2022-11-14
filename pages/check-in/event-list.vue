<template>
    <div class="event-list">
        <div
            v-for="item in data"
            :key="item.id"
            class="event-item"
        >
            <div class="event-description">{{item.due}}</div>
            <div class="event-detail">
                <div>{{item.title}}</div>
                <book-checker v-model="form[item.id]"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.event-list {
    @apply flex flex-col space-y-4;
    .event-item {
        @apply flex flex-col text-sm font-semibold space-y-2 w-full;
        .event-detail {
            @apply flex flex-row justify-between items-center justify-between border-b border-secondary pb-2;
        }
        .event-description {
            @apply text-xs font-semibold border-b border-secondary pb-2;
        }
    }
}
</style>
<script setup>
import {ref} from 'vue'
import BookChecker from './book-checker.vue'

const props = defineProps({
    data: {
        type: Array,
        default: []
    },
})


const form = ref({})
for (let item of props.data) {
    form.value[item.id] = item.booked
}
</script>
