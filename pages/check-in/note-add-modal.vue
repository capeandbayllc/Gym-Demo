<template>
    <div class="note-add-container">
        <div class="note-content">
            <h2 class="py-4">Kevin Attitude</h2>
            <p>
                October 6, 2022
                <br />
                This dudes trouble
            </p>
        </div>
        <div class="note-add-actions">
            <Button size="md" 
                @click="$emit('close')"
            >Cancel</Button>
            <Button secondary size="md" class="border border-base-content">Save</Button>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.note-add-container {
    @apply flex flex-col border border-secondary p-3 bg-base-300 rounded;
    .note-content {
        @apply flex flex-col px-7 bg-neutral border border-secondary rounded font-semibold h-72 overflow-y-auto;
        h2 {
            @apply text-xl;
        }
    }
    .note-add-actions {
        @apply flex flex-row self-end space-x-4 pt-4 pb-1;
        .btn {
            @apply text-base-content w-24;
        }
    }
}
</style>
<script setup>
const resolved = ref(false)
</script>
