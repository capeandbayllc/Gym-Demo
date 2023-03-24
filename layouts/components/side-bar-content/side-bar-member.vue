<template>
    <NuxtLink :to="`/check-in?id=${id}&preview=true`">
        <div class="side-bar-member">
            <img :src="profile_photo_path"/>
            <div class="member-name">{{first_name}}</div>
            <div v-if="unread" class="unread-badge">{{unread}}</div>
        </div>
    </NuxtLink>
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
    profile_photo_path: {
        type: String,
        default: "/account-lg.png"
    },
    id: String,
    first_name: String,
    last_name: String,
    unread: Number
})
</script>
