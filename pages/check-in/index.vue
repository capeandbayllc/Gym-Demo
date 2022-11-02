<template>
    <div class="page-checkin-container">
        <div class="page-title">Member account page</div>
        <div class="page-content">
            <event-card />
            <profile-card />
        </div>
    </div>
</template>
<style scoped>
.page-checkin-container {
    @apply py-4 pr-5 pl-20 bg-base-300 w-full h-fit border-b border-secondary;
    .page-title {
        @apply text-lg font-light pb-3;
    }
    .page-content {
        @apply flex flex-row space-x-5 px-40 justify-center;
    }
}
</style>
<script setup>
import EventCard from './event-card/index.vue'
import ProfileCard from './profile-card/index.vue'
// import { GET_MEMBERS } from '~~/api/queries/member';
// const { result, error } = useQuery(GET_MEMBERS)
// console.log("client", client)
</script>