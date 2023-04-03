<template>
  <tr class="people-lead-tbl-row">
    <td>
      <div class="flex gap-2 border-r-2">
        <img :src="data.profile_photo_path" class="w-4 h-5 rounded-full" alt=""> {{ data.first_name }} {{ data.last_name }}
      </div>
    </td>
    <td>  {{ data.position }}</td>
    <td>Club {{ Math.floor(Math.random() * 10) }}</td>
    <td>  {{ data.position }}</td>
    <td>
      {{data.department}}
    </td>
    <td>
      {{ data.position }}
    </td>
    <!-- <td class="capitalize text-accent-focus/60">{{ data.status }} {{ contactOption }}</td>
    <td>
     
    </td> -->
  </tr>
</template>
<style scoped>

.people-lead-tbl-row {
  @apply bg-base-100 h-14;

td {
  @apply border-y-2 border-red-700 text-center;
}

td:first-child {
  @apply border-l-2 rounded-l px-4;
}

td:last-child {
  @apply border-r-2 rounded-r capitalize text-accent-focus/60 px-8;
}

/* .table-action-menu  {
    position: absolute;
    top: -50%;
} */
}
</style>
<script setup lang="ts">
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Ref} from "vue";
import dateFormat from "dateformat";

export type Type = 'text' | 'email' | 'call' | null;
const router = useRouter()

library.add(faEllipsisH);
const props = defineProps<{
  data: Object
}>()
</script>
