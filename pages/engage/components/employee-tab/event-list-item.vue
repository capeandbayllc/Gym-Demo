<template>
  <tr class="call-list-item">
    <td>
      <div class="flex items-center">
        <img :src="data.avatar" class="h-7 mr-2" />{{ data.name }}
      </div>
    </td>
    <td>
      <div>{{ data.event_type }}</div>
    </td>
    <td>
      <div>{{ data.time }}</div>
    </td>
    <td>
      <div class="px-2">
        <membership-status :status="data.membership" class="px-4 py-1" />
      </div>
    </td>
    <td>
      <div>{{ data.phone }}</div>
    </td>
    <td>
      <div>{{ data.email }}</div>
    </td>
    <td>
      <div>
        <Button size="xs" class="text-base-content bg-neutral-content"
          >Notes</Button
        >
      </div>
    </td>
  </tr>
</template>
<style scoped lang="postcss">
.call-list-item {
  @apply h-10 text-xs;

  td {
    @apply border-y-2 text-center;
    > div {
      @apply flex items-center justify-center border-r px-1;
    }
  }
  td:first-child {
    @apply border-l-2 rounded-l;
    > div {
      @apply justify-start;
    }
  }
  td:last-child {
    @apply border-r-2 rounded-r capitalize text-accent-focus/60;
    > div {
      @apply border-none px-2;
    }
  }
}
</style>
<script setup>
import MembershipStatus from "@/components/buttons/membership-status.vue";
const props = defineProps({
  data: Object,
});
</script>
