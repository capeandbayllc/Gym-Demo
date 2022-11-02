<template>
    <div class="checkin-profile-card">
        <profile-info />
        <profile-options />
    </div>
</template>
<style scoped>
.checkin-profile-card {
    @apply border border-secondary rounded flex flex-row space-x-16 px-12 pt-7;
}
</style>
<script setup>
import ProfileInfo from './profile-info.vue';
import ProfileOptions from './profile-options.vue';
</script>