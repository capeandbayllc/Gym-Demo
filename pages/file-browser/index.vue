<template>
    <div class="file-browser-container">
        <div class="-md:px-4 page-content flex-col">
            <file-action @fileActionSelected="actionSelected"></file-action>
            <file-card :actionType="actionType"></file-card>
            <history-card class="history-title"></history-card>
        </div>
    </div>
</template>
<style scoped>
.file-browser-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-content {
        @apply block border border-secondary bg-neutral rounded p-7 ;
    }
}
</style>
<style>
@media (max-width: 1200px) {
    .file-browser-container .page-content {
        width: 90% !important;
    }
}
@media (max-width: 1100px) {
    .history-trash-icon {
        height: 155px !important;
        align-items: center;
    }
    .history-folder-icon svg,
    .history-trash-icon svg {
        width: 80px;
        height: 60px;
        margin: 0 auto;
    }
    .history-title .simple-card-title {
        height: 45px !important;
        font-size: 17px !important;
    }
}
@media (max-width: 980px) {
    .history-folder-icon {
        padding-left: 20px !important;
        padding-right: 20px !important;
    }
    .create-option {
        font-size: 12px;
    }
}
@media (max-width: 820px) {
    .file-card-content .mx-auto {
        width: 75% !important;
    }
    .select-box-wrapper {
        width: 6rem !important;
    }
    .history-trash-icon {
        height: 145px !important;
        align-items: center;
    }
    .history-folder-icon svg,
    .history-trash-icon svg {
        width: 60px;
        height: 50px;
        margin: 0 auto;
    }
    .history-title .simple-card-title {
        height: 45px !important;
        font-size: 17px !important;
    }
}
</style>
<script setup>
import HistoryCard from './components/history-card.vue';
import FileCard from './components/file-card.vue';
import FileAction from './components/file-action.vue';
const actionType = ref('upload');

const actionSelected = (name) => {
    actionType.value = name;
};
</script>
