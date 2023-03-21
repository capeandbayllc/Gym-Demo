<template>
  <tr class="reporting-members-list-item">
    <td>
      <div class="flex items-center">
        <img :src="data.profile_photo_path" alt="" class="h-7 mr-2 rounded-full"/>
        {{ data.first_name }} {{ data.last_name }}
      </div>
    </td>
    <td>
      <div class="px-2">
        <membership-btn :membership="data.type" class="px-4 py-1 reporting-btn-member"/>
      </div>
    </td>
    <td>
      <div>{{ dateformat(data.created_at, 'dd/mm/yyyy') }}</div>
    </td>
  </tr>
</template>
<style scoped>
.reporting-members-list-item {
    @apply h-10 text-xs;

    td {
        @apply text-center;
        > div {
            @apply flex items-center justify-center px-1;
        }
    }
    td:first-child {
        @apply rounded-l;
        > div {
            @apply justify-start;
        }
    }
    td:last-child {
        @apply  rounded-r capitalize;
        > div {
            @apply border-none px-2;
        }
    }
}
</style>
<script setup>
import MembershipBtn from '@/components/buttons/membership-btn.vue';
import dateformat from "dateformat";
const props = defineProps({
    data: Object
})
</script>
