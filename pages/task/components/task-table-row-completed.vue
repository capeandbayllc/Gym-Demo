<template>
  <tr class="task-table-row-today">
    <td>
      <div class="flex gap-2 border-r-2">
        <img :src="data.profile_photo_path" class="profile_photo" alt="" />
        {{ data.first_name }} {{ data.last_name }}
      </div>
    </td>
    <td><div class="gap-2 border-r-2 pr-3">Welcome Call</div></td>
    <td>
      <div class="gap-2 border-r-2">
        Location {{ Math.floor(Math.random() * (5 - 1 + 1) + 1) }}
      </div>
    </td>
    <td><div class="gap-2 border-r-2">18/11/2020</div></td>
    <td>
      <div class="flex gap-2 border-r-2">
        <div class="dropdown">
          <div
            v-if="status == 'Completed'"
            class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2"
            tabindex="0"
            @click.prevent.stop
          >
            {{ status }}<CheckMark />
          </div>
          <div
            v-else-if="status == 'No-Show'"
            class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2"
            tabindex="0"
            @click.prevent.stop
          >
            {{ status }}
            <div class="rounded-full w-6 h-6 bg-[#A8A8A8] m-auto ml-2"></div>
          </div>
          <div
            v-else-if="status == 'Rescheduled'"
            class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2"
            tabindex="0"
            @click.prevent.stop
          >
            {{ status }}
            <div class="rounded-full w-6 h-6 bg-[#00A7FF] m-auto ml-2"></div>
          </div>
          <div
            v-else-if="status == 'Canceled'"
            class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2"
            tabindex="0"
            @click.prevent.stop
          >
            {{ status }}
            <div class="rounded-full w-6 h-6 bg-[#FF0000] m-auto ml-2"></div>
          </div>
          <div
            v-else-if="status == 'Overdue'"
            class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2"
            tabindex="0"
            @click.prevent.stop
          >
            {{ status }}
            <div class="m-auto ml-2"><CloseMe size="big" /></div>
          </div>
          <div
            v-else
            class="text-[#5A5A5A] ml-2 hover:text-[#0075C9] cursor-pointer flex gap-2"
            tabindex="0"
            @click.prevent.stop
          >
            {{ status }}<CheckMark />
          </div>

          <div
            class="dropdown-content top-0 left-2 p-1 menu bg-white w-32 items-start text-[#5A5A5A] text-sm whitespace-nowrap cursor-pointer gap-2 rounded-md"
          >
            <div class="flex">
              <div class="text-secondary font-bold">{{ status }}</div>
            </div>

            <button
              class="flex ml-1"
              @click.prevent.stop="toggleStatus('Completed')"
            >
              <div class="m-auto mr-2"><Completed /></div>
              <div>Completed</div>
            </button>
            <button
              class="flex ml-1"
              @click.prevent.stop="toggleStatus('No-Show')"
            >
              <div class="rounded-full w-4 h-4 bg-[#A8A8A8] m-auto mr-2"></div>
              <div>No-Show</div>
            </button>
            <button
              class="flex ml-1"
              @click.prevent.stop="toggleStatus('Rescheduled')"
            >
              <div class="rounded-full w-4 h-4 bg-[#00A7FF] m-auto mr-2"></div>
              <div>Rescheduled</div>
            </button>
            <button
              class="flex ml-1"
              @click.prevent.stop="toggleStatus('Canceled')"
            >
              <div class="rounded-full w-4 h-4 bg-[#FF0000] m-auto mr-2"></div>
              <div>Canceled</div>
            </button>
            <button
              class="flex ml-1"
              @click.prevent.stop="toggleStatus('Overdue')"
            >
              <div class="m-auto mr-2"><CloseMe /></div>
              <div>Overdue</div>
            </button>
          </div>
        </div>
      </div>
    </td>
    <td>
      <div
        class="bg-[#0075C9] cursor-pointer border-transparent border text-white text-xs p-1 hover:bg-transparent hover:text-[#0075C9] hover:border hover:border-[#0075C9]"
      >
        Edit
      </div>
    </td>
  </tr>
</template>
<style scoped>
.task-table-row-today {
  @apply bg-base-100 h-14;

  td {
    @apply border-y-2  text-center;
  }
  .profile_photo {
    @apply w-7 h-7 mr-2 rounded-xl;
    box-shadow: 2px 4px 6px #0075c964;
  }
  td:first-child {
    @apply border-l-2 rounded-l-lg px-4;
  }

  td:last-child {
    @apply border-r-2 rounded-r-lg capitalize text-accent-focus/60 px-8;
  }
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { CheckMark, Completed, CloseMe } from "@/components/icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import dateFormat from "dateformat";

library.add(faEllipsisH);
const props = defineProps({
  data: Object,
});

let status = ref(props.data.status);
const toggleStatus = (text) => {
  status.value = text;
  /* const el = document.getElementsByClassName("dropdown-content");
 el[0].style.visibility = "hidden";
 el[0].style.opacity = 0; */
};
</script>
