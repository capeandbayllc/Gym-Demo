<template>
    <simple-card title="Folders">
        <div class="folder-card-content">
            <div class="folder-docs">
                <div v-for="(item, index) in foldersList" :key="index" class="folder-doc">
                    <folder-icon class="mb-2 mx-2" />
                    <div class="text-xs">{{item}}</div>
                </div>
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.folder-card-content {
    @apply flex flex-row pt-4 pb-2 px-9 bg-transparent items-center w-full;
    .folder-docs {
        @apply grid grid-cols-7 gap-5 mr-6;
        .folder-doc {
            @apply flex flex-col items-center;
        }
    }
}
</style>
<script setup>
import FolderIcon from '../../file-browser/components/folder-icon.vue';
const foldersList = ["Folder 1", "Folder 2", "Folder 3", "Folder 4", "Folder 5", "Folder 6", "Folder 7"]
</script>