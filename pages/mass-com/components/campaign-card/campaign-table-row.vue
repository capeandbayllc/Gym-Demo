<template>
    <tr class="campaign-table-row">
        <td><div class="campaign-title">{{data.title}}</div></td>
        <td><div class="campaign-data">{{data.started}}</div></td>
        <td><div class="campaign-data">{{data.in_progress}}</div></td>
        <td><div class="campaign-data">{{data.completed}}</div></td>
        <td>
            <div class="campaign-view">
                <diagram-icon class="text-accent-focus/80"/>
                <Button secondary class="text-base-content" size="xs" @click.stop="openCampaignDetailModal(data)">View</Button>

                <DaisyModal ref="campaignDetailModalRef">
                    <CampaignDetailsModal @close="closeCampaignDetailModal" :data="data"></CampaignDetailsModal>
                </DaisyModal>
            </div>
        </td>
        <td>
            <div class="status-select-box">
                <select-box
                    class="text-sm"
                    :items="items"
                    :value="data.status"
                />
            </div>
        </td>
    </tr>
</template>
<style>
.campaign-table-row .status-select-box .select-box-btn {
    @apply border-none;
}
</style>
<style scoped>
.campaign-table-row:first-child {
    td {
        @apply border-t border-secondary;
        > div {
            @apply mt-1.5;
        }
    }
}
.campaign-table-row {
    td {
        @apply border-b border-secondary;
        > div {
            @apply mb-1.5 border-l border-secondary text-center;
        }
        .campaign-title {
            @apply text-xl;
        }
        .campaign-data {
            @apply text-2xl font-bold text-secondary;
        }
        .status-select-box {
            @apply flex justify-center;
        }
        .campaign-view {
            @apply flex flex-row items-center justify-center space-x-2;
        }

    }
    td:first-child {
        > div {
            @apply border-none text-left;
        }
    }
}
</style>
<script setup>
import DiagramIcon from "./diagram-icon.vue"
import CampaignDetailsModal from "../campaign-details/index.vue";

const props = defineProps({
    data: Object
})

const items = [{
    value: 'in_progress',
    label: 'In Progress'
}, {
    value: 'completed',
    label: 'Completed'
}]

const campaignDetailModalRef = ref(null);

const openCampaignDetailModal = (data) => {
    campaignDetailModalRef.data = data;
    campaignDetailModalRef.value.open();
}
const closeCampaignDetailModal = () => {
    campaignDetailModalRef.value.close();
}
</script>
