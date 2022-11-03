<template>
    <div class="app-body-content">
        <div class="page-checkin-container">
            <div class="page-title">Member account page</div>
            <div class="page-content">
                <event-card />
                <profile-card />
            </div>
        </div>
        <footer-logo class="m-auto"/>
    </div>
</template>
<style scoped>
.app-body-content {
    @apply flex flex-col w-full items-center;
    }
.page-checkin-container {
    @apply py-4 pr-5 bg-base-300 w-full h-fit border-b border-secondary pl-16;
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