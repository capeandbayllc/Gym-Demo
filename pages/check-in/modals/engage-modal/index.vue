<template>
    <simple-card
        title="Engage"
        :closable="true"
        @close="emit('close')"
    >
    <div class="bg-base-200">
        <div class="flex flex-row space-x-4">
            <div class="engage-contact-option"><CallIcon/></div>
        </div>
    </div>
    </simple-card>
</template>
<script setup>
import { CallIcon, EmailIcon, MessageIcon } from '~~/components/icons';
</script>
<style scoped>
.engage-contact-option {
    @apply flex items-center justify-center w-14 h-14 border-4 border-secondary rounded-full bg-base-300;
}
</style>