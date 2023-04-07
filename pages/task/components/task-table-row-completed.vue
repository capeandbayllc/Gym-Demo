<template>
  <tr class="people-lead-tbl-row">
    <td>
      <div class="flex gap-2 border-r-2">
        <img :src="data.profile_photo_path" class="profile_photo" alt=""> {{ data.first_name }} {{ data.last_name }}
      </div>
    </td>
    <td> <div class="gap-2 border-r-2 px-2"> Welcome Call</div></td>
    <td><div class="gap-2 border-r-2">Location {{ Math.floor(Math.random() * (5 - 1 + 1) + 1)}}</div></td>
    <td><div class="gap-2 border-r-2">18 Nov 2020</div></td>
    <td>
      <div class="flex gap-2 border-r-2"> 
        <div class="dropdown dropdown-end">
              <div class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2 " tabindex="0" @click.prevent.stop>
                  project status  <CheckMark/>
              </div>
              <div class="dropdown-content top-0 left-2 p-1 menu bg-white w-32 items-start text-[#5A5A5A] text-sm whitespace-nowrap cursor-pointer gap-2 rounded-md">
                <div class="flex">
                  <div class="text-secondary font-bold">Project Status</div>
                </div>
                <div class="flex ml-1">
                  <div class=" m-auto mr-2"> <Completed/> </div>
                  <div>Completed</div>
                </div>
                <div class="flex ml-1">
                  <div class="rounded-full w-4 h-4 bg-[#A8A8A8] m-auto mr-2"></div>
                  <div>No-Show</div>
                </div>
                <div class="flex ml-1">
                  <div class="rounded-full w-4 h-4 bg-[#00A7FF] m-auto mr-2"></div>
                  <div>Rescheduled</div>
                </div>
                <div class="flex ml-1">
                  <div class="rounded-full w-4 h-4 bg-[#FF0000] m-auto mr-2"></div>
                  <div>Canceled</div>
                </div>
                <div class="flex ml-1">
                  <div class=" m-auto mr-2"> <CloseMe/> </div>
                  <div>Overdue</div>
                </div>
              </div>
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
  @apply border-y-2  text-center;
  
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
}
</style>
<script setup lang="ts">
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

import {CheckMark,Completed,CloseMe } from "@/components/icons";

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
