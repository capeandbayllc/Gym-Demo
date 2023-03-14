<template>
    <tr class="campaign-table-row">
        <td>
            <div class="campaign-data">
                <action-icon :action="data.action" />
            </div>
        </td>
        <td><div class="campaign-data">{{data.title}}</div></td>
        <td>
            <div class="campaign-data gap-2">
                <div class="deployment-circle">
                    {{data.deployment_days}}
                </div>

                <Button secondary class="text-base-content" size="xs" @click.stop="openCampaignDetailModal(data)">View All</Button>
            </div>
        </td>
        <td>
            <div class="campaign-data">
                <select-box
                    class="text-sm"
                    :items="status_items"
                    :value="data.status"
                />
            </div>
        </td>
        <td>
            <div class="campaign-view">
                <Button secondary class="text-base-content" size="xs" @click.stop="openCampaignDetailModal(data)">View</Button>

                <DaisyModal ref="campaignDetailModalRef">
                    <CampaignDetailsModal @close="closeCampaignDetailModal" :data="data"></CampaignDetailsModal>
                </DaisyModal>
            </div>
        </td>
        <td>
            <diagram-icon class="text-accent-focus/80" />
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
            
        }
        .campaign-data {
            @apply flex items-center justify-center;
        }
        .status-select-box {
            @apply flex justify-center;
        }
        .campaign-view {
            @apply flex flex-row items-center justify-center space-x-2;
        }
        .deployment-circle {
            @apply inline-flex items-center bg-red-600 rounded-full min-w-[30px] min-h-[30px] justify-center text-white text-sm;
        }
    }
    td:first-child {
        > div {
            @apply border-none text-left;
        }
    }
    td:last-child {
        @apply text-center;
    }
}
.campaign-table-row:hover {
    @apply bg-[#0074c8bf];
    td {
        button {
            @apply rounded-xl;
        }
    }
}
</style>
<script setup>
import DiagramIcon from "../../components/campaign-card/diagram-icon.vue";
import ActionIcon from "./action-icon.vue";
import CampaignDetailsModal from "../../components/campaign-details/index.vue";

const props = defineProps({
    data: Object
})

const status_items = [{
    value: 'in_progress',
    label: 'In Progress'
}, {
    value: 'pause',
    label: 'Pause'
}, {
    value: 'rescheduled',
    label: 'Rescheduled'
}, {
    value: 'completed',
    label: 'Completed'
}];

const campaignDetailModalRef = ref(null);

const openCampaignDetailModal = (data) => {
    campaignDetailModalRef.data = data;
    campaignDetailModalRef.value.open();
}
const closeCampaignDetailModal = () => {
    campaignDetailModalRef.value.close();
}
</script>
