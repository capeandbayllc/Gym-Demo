<template>
    <div class="side-bar-member">
        <img :src="avatar"/>
        <div class="member-name">{{name}}</div>
        <div v-if="unread" class="unread-badge">{{unread}}</div>
    </div>
</template>
<style scoped>
.side-bar-member {
    @apply flex flex-row items-center self-start relative;
    img {
        @apply w-10 h-10 rounded-full mr-3;
    }
    .member-name {
        @apply text-lg cursor-pointer hover:border hover:border-secondary hover:rounded hover:font-bold p-2;
    }
    .unread-badge {
        @apply absolute w-5 h-5 top-0 text-sm rounded-full bg-error flex items-center justify-center;
        left: -0.25rem;
    }
}
</style>
<script setup>
const props = defineProps({
    avatar: {
        type: String,
        default: "/account-lg.png"
    },
    name: String,
    unread: Number
})
</script>
