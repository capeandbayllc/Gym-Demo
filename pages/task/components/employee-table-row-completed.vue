<template>
  <tr class="people-lead-tbl-row">
    <td>
      <div class="flex gap-2 border-r-2">
        <img :src="data.profile_photo_path" class="w-6 h-6 mr-2 rounded-full" alt=""> {{ data.first_name }} {{ data.last_name }}
      </div>
    </td>
    <td> <div class="gap-2 border-r-2"> {{ data.position }}</div></td>
    <td><div class="gap-2 border-r-2">Club {{ Math.floor(Math.random() * 10) }}</div></td>
    <td><div class="gap-2 border-r-2">{{ data.position }}</div></td>
    <td>
      <div class="gap-2 border-r-2">{{data.department}}</div>
    </td>
    <td>
      <div class="bg-blue-800 cursor-pointer border-transparent border text-white text-xs p-1 hover:bg-transparent hover:text-blue-700 hover:border hover:border-blue-800">Edit</div>
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
  @apply border-y-2  text-center;
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
onMounted(()=>{
  console.log(data)
})
</script>
