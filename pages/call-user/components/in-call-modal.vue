<template>
    <simple-card title="Make a call">
        <div class="in-call-modal-container flex flex-col">
            <div class="content col-span-3">
                <div class="call-inner-content m-5 col-span-3 mb-8">
                    <ongoing-call-card></ongoing-call-card>
                </div>
                <div class="flex justify-end m-5">
                    <button
                        class="btn w-max bg-error border-error rounded text-base-content btn-sm font-medium"
                        @click="$emit('end-call')"
                    >
                        Hang up
                    </button>
                </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import OngoingCallCard from './ongoing-call-card.vue';
</script>

<style scoped>
.in-call-modal-container {
	@apply pl-8 pr-8 pt-8 pb-8 bg-neutral;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    .content {
        @apply border border-secondary bg-black;
        .call-inner-content {
            @apply border border-green-400;
        }
        .btn.bg-error:hover {
            @apply border-error;
        }
    }
}
</style>

