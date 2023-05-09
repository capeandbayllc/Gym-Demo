<template>
  <tr class="audience-builder-table-row">
    <td>
      <img
        class="w-[20px] border-2 border-secondary rounded-[12px] mr-2 line-clamp-1"
        :src="data.profile_photo_path"
        alt="profile image"
      />
    </td>
    <td>{{ data.first_name }} {{ data.last_name }}</td>
    <td>{{ data.homeLocation.name }}</td>
    <td>
      <div
        class="flex h-[16px] w-[16px] justify-center items-center bg-secondary mr-2"
      >
        <font-awesome-icon :icon="['fas', 'ellipsis']" />
      </div>
    </td>
    <td><check-circle-icon class="text-accent-focus w-[18px]" /></td>
  </tr>
</template>
<style scoped>
.audience-builder-table-row {
  td {
    @apply text-[10px] mb-2 h-[30px] border-b border-white;
  }
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CheckCircleIcon from "~/components/icons/check-circle.vue";

library.add(faEllipsis);
const props = defineProps({
  data: Object,
});
</script>
