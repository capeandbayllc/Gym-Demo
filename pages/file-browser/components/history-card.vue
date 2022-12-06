<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-between gap-5">
            <simple-card title="History">
                <div class="history-folder-icon">
                    <div v-for="(type, ndx) in types" :key="ndx" class="create-option">
                        <folder-icon class="mb-2 mr-3" />
                        {{type}}
                    </div>
                </div>
            </simple-card>       
            <simple-card title="Trash Bin">
                <div class="history-trash-icon h-40 w-36 py-4">
                   <trash-icon></trash-icon>
                </div>
            </simple-card>
        </div>
    </div>
</template>
<style scoped>
.history-folder-icon {
    @apply grid grid-cols-5 gap-4 py-6 px-9 bg-neutral;
    .create-option {
        @apply flex flex-col items-center text-sm;
    }
}
.history-trash-icon {
    @apply flex gap-4 py-6 px-9 bg-primary;
}

</style>
<style>
    .history-trash-icon .hover-svg{display: none;}
    .history-trash-icon:hover .display-svg{display: none;}
    .history-trash-icon:hover .hover-svg{display: inline-block;}
</style>
<script setup>
import FolderIcon from './folder-icon.vue';
import TrashIcon from './trash-icon.vue';
const types = ["Folder 1", "Campaign Folder", "Campaign Folder", "Folder 2", "Folder 3"]
</script>