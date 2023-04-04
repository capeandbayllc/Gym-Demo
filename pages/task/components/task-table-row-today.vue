<template>
 <tr class="people-lead-tbl-row">
    <td>
      <div class="flex gap-2 border-r-2 border-[#0075C9]">
        <img :src="data.profile_photo_path" class="profile_photo" alt=""> {{ data.first_name }} {{ data.last_name }}
      </div>
    </td>
    <td> <div class="gap-2 border-r-2 border-[#0075C9] px-2"> Welcome Call</div></td>
    <td><div class="gap-2 border-r-2 border-[#0075C9]">Location {{ Math.floor(Math.random() * (5 - 1 + 1) + 1)}}</div></td>
    <td><div class="gap-2 border-r-2 border-[#0075C9]">18 Nov 2020</div></td>
    <td>
      <div class="flex gap-2 border-r-2 border-[#0075C9]"> 
        <div class="text-[#5A5A5A] px-2 hover:text-[#0075C9] cursor-pointer" @click="toggleStatus">Project Status
          
        </div><CheckMark/>
         <div class="inline absolute z-10 bg-white p-3 text-black" v-if="status">
            <div>Completed</div>
            <div>No-Show</div>
            <div>Rescheduled</div>
            <div>Canceled</div>
            <div>Overdue</div>
          </div> 
        
      
      </div>
    </td>
    <td>
      <div class="bg-[#0075C9] cursor-pointer border-transparent border text-white text-xs p-1 hover:bg-transparent hover:text-[#0075C9] hover:border hover:border-[#0075C9]">Edit</div>
    </td>
  </tr>
</template>
<style scoped>

.people-lead-tbl-row {
  @apply bg-base-100 h-14;

td {
  @apply border-y-2 border-[#0075C9] text-center;
}
.profile_photo{
    @apply w-7 h-7 mr-2 rounded-xl;
    box-shadow: 2px 4px 6px #0075C964;

  }
td:first-child {
  @apply border-l-2 rounded-l-lg px-4;
}

td:last-child {
  @apply border-r-2 rounded-r-lg capitalize text-accent-focus/60 px-8;
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
import {CheckMark } from "@/components/icons";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Ref} from "vue";
import dateFormat from "dateformat";

export type Type = 'text' | 'email' | 'call' | null;
const router = useRouter()

/* const status = Ref<Type> = ref(null);
const toggleStatus = ()=>{
  status=true;
} */

library.add(faEllipsisH);
const props = defineProps<{
  data: Object
}>()
</script>
