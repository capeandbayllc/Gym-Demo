<template>
  <div class="audience-builder-container">
    <template v-if="!!isLoading">
      <!-- <spinner /> -->
    </template>

    <div class="flex gap-1 w-full">
      <Button secondary size="xs" @click.stop="currentTab = 'leads'"
        >Leads</Button
      >
      <Button outline secondary size="xs" @click.stop="currentTab = 'members'"
        >Members</Button
      >
      <Button outline secondary size="xs" class="ml-auto">+ Add New</Button>
    </div>

    <div class="felx flex-grow overflow-y-auto my-3 w-full">
      <template v-if="currentTab == 'leads'">
        <data-table
          :columns="columns"
          :data="leads"
          :row-component="AudienceBuilderTableRow"
        />
      </template>
      <template v-if="currentTab == 'members'">
        <data-table
          :columns="columns"
          :data="members"
          :row-component="AudienceBuilderTableRow"
        />
      </template>
    </div>

    <div class="flex gap-1 w-full justify-end">
      <Button size="xs" @click.stop="$emit('close')">Cancel</Button>
      <Button secondary size="xs" @click.stop="$emit('close')">Save</Button>
    </div>
  </div>
</template>
<style scoped>
.audience-builder-container {
  @apply flex flex-col justify-center items-center h-full w-full;

  :deep(th) > div {
    @apply text-xs text-left;
  }
}
</style>
<script setup>
import { request } from "~/api/utils/request";
import lead from "~/api/queries/lead";
import member from "~/api/queries/member";
import AudienceBuilderTableRow from "./audience-builder-table-row.vue";

const isLoading = ref(true);
const leads = ref([]);
const members = ref([]);
const currentTab = ref("leads");
const columns = [" ", "name", "", "", ""];

request(lead.query.browse).then(({ data }) => {
  leads.value = data.data.leads.data;

  isLoading.value = false;
});

request(member.query.browse).then(({ data }) => {
  members.value = data.data.members.data;

  isLoading.value = false;
});
</script>
