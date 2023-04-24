<template>
    <div class="file-card-content col-span-3">
        <file-manager v-if="actionType === 'upload'"></file-manager>
        <file-create-folder v-if="actionType === 'folder'"></file-create-folder>
    </div>
</template>
<style scoped lang="postcss">
.file-card-content {
    @apply border border-secondary rounded mb-12;
}
</style>
<script setup>
import FileManager from "./file-manager.vue"
import FileCreateFolder from "./file-create-folder.vue"
const props = defineProps({
    actionType: {
        type: String,
    },
});
</script>