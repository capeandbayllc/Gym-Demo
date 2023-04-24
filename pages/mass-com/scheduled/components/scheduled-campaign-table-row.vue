<template>
  <tr class="campaign-table-row group hover:bg-primary">
    <td>
      <div>
        <action-icon :action="data.action" />
      </div>
    </td>
    <td>
      <div>{{ data.title }}</div>
    </td>
    <td>
      <div class="campaign-data gap-2">
        <div
          class="grid items-center bg-error rounded-full aspect-square min-h-6 justify-center text-base-content text-sm"
        >
          {{ data.deployment_days }}
        </div>

        <Button
          secondary
          class="text-base-content group-hover:rounded-xl"
          size="xs"
          @click.stop="openCampaignDetailModal(data)"
          >View All</Button
        >
      </div>
    </td>
    <td>
      <div>
        <status-select-box :status="data.status" />
      </div>
    </td>
    <td>
      <div>
        <Button
          secondary
          class="text-base-content group-hover:rounded-xl"
          size="xs"
          @click.stop="openCampaignDetailModal(data)"
          >View</Button
        >

        <DaisyModal ref="campaignDetailModalRef">
          <CampaignDetailsModal
            @close="closeCampaignDetailModal"
            :data="data"
          ></CampaignDetailsModal>
        </DaisyModal>
      </div>
    </td>
    <td>
      <div>
        <diagram-icon class="text-accent-focus/80" />
      </div>
    </td>
  </tr>
</template>

<style scoped lang="postcss">
.campaign-table-row:first-child {
  td {
    @apply border-t border-secondary;
    > div {
      @apply mt-2;
    }
  }
}
.campaign-table-row {
  td {
    @apply border-b border-secondary;
    > div {
      @apply mb-2 border-l border-secondary flex items-center justify-center;
      > div {
        @apply w-auto;
      }
    }
  }

  td:first-child {
    > div {
      @apply border-none text-left;
    }
  }

  td:last-child {
    @apply text-center;

    > svg {
      display: inline-flex;
    }
  }
}
</style>
<script setup>
import ActionIcon from "./action-icon.vue";
import StatusSelectBox from "./status-select-box.vue";
import DiagramIcon from "../../components/campaign-card/diagram-icon.vue";
import CampaignDetailsModal from "../../components/campaign-details/index.vue";

const props = defineProps({
  data: Object,
});

const status_items = [
  {
    value: "in_progress",
    label: "In Progress",
  },
  {
    value: "pause",
    label: "Pause",
  },
  {
    value: "rescheduled",
    label: "Rescheduled",
  },
  {
    value: "completed",
    label: "Completed",
  },
];

const campaignDetailModalRef = ref(null);

const openCampaignDetailModal = (data) => {
  campaignDetailModalRef.data = data;
  campaignDetailModalRef.value.open();
};
const closeCampaignDetailModal = () => {
  campaignDetailModalRef.value.close();
};
</script>
