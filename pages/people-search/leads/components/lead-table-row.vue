<template>
  <tr class="people-lead-tbl-row">
    <td>{{ dateFormat(data.created_at, 'dd/mm/yyyy') }}</td>
    <td>
      <div :class="'opportunity-' + data.opportunity"></div>
    </td>
    <td>{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td> {{ data.homeLocation?.name }} </td>
    <!-- <td> Club {{ Math.floor(Math.random() * 10) }} </td> -->
    <td>
      <div :class="'type-' + data.type?.name">
        {{ data.type?.name }}
      </div>
    </td>
    <td class="capitalize text-accent-focus/60">{{ data.status?.status }} {{ contactOption }}</td>
    <td>
      <div class="dropdown dropdown-end">
        <div class="text-base-content cursor-pointer" tabindex="0" @click.prevent.stop>
          <font-awesome-icon :icon="['far', 'ellipsis-stroke']" size="2xl" />
        </div>
        <div class="dropdown-content menu p-2 shadow bg-black w-52 items-start rounded-xl border border-secondary">
          <!-- <Button outline size="sm" class="my-1 border-primary">Preview</Button>
          <Button outline size="sm" class="my-1 border-primary">Edit</Button>
          <Button outline size="sm" class="my-1 border-primary">Trash</Button>
          <Button outline size="sm" class="my-1 border-primary">Contact Lead</Button>
          <Button outline size="sm" class="my-1 border-primary">Add a Note</Button> -->
          <div class="dropdown-item !rounded-xl" tabindex="-1" @click="navigateToCheckIn(true)">Preview</div>
          <div class="dropdown-item !rounded-xl" tabindex="-1" @click="navigateToCheckIn(void 0)">Edit</div>
          <div class="dropdown-item !rounded-xl" tabindex="-1">Trash</div>
          <div class="" tabindex="-1">
            <div class="dropdown dropdown-left dropdown-end dropdown-hover contact-menu">
              <div class="dropdown-item !rounded-xl" tabindex="0" @click.prevent.stop>
                Contact Lead
              </div>
              <div class="dropdown-content menu p-2 shadow bg-black border border-secondary rounded-xl w-40 items-start hidden">
                <div class="dropdown-item !rounded-xl" tabindex="-1" @click.stop="contactOption = 'text'">Text</div>
                <div class="dropdown-item !rounded-xl" tabindex="-1" @click.stop="contactOption = 'email'">Email</div>
                <div class="dropdown-item !rounded-xl" tabindex="-1" @click.stop="contactOption = 'call'">Call</div>
              </div>
            </div>
          </div>
          <div class="dropdown-item !rounded-xl" tabindex="-1" @click.prevent.stop="openNoteCardModal">Add a Note</div>
        </div>
      </div>

      <Options :user="data" :show="contactOption" @on:close="contactOption = null" />

      <daisy-modal ref="noteCardModalRef" :closable="false">
        <NoteCardModal @close="closeNoteCardModal"/>
      </daisy-modal>
    </td>
  </tr>
</template>
<style scoped>
.dropdown-item {
  @apply text-white border transition rounded border-secondary hover:border-white inline-block my-1 px-2 py-1 cursor-pointer;
}
.contact-menu:hover .dropdown-content {
  display: inline-flex !important;
}

.people-lead-tbl-row {
  @apply bg-base-100 h-14;

  td {
    @apply border-y-2 border-secondary text-center;
  }

  td:first-child {
    @apply border-l-2 rounded-l-2xl px-4;
  }

  td:last-child {
    @apply border-r-2 rounded-r-2xl capitalize text-accent-focus/60 px-8;
  }

  .opportunity-accent {
    @apply w-6 h-6 bg-accent-focus rounded-full m-auto;
    content: "",
  }

  .opportunity-error {
    @apply w-6 h-6 bg-error rounded-full m-auto;
    content: "",
  }

  .opportunity-warning {
    @apply w-6 h-6 bg-warning rounded-full m-auto;
    content: "",
  }

  .type-app_referal {
    @apply border rounded-xl p-1 mx-2 text-sm;
  }
  .type-grand_opening {
    @apply rounded-xl p-1 mx-2 text-sm bg-secondary/40 text-info;
  }
  .type-snapshot {
    @apply rounded-xl p-1 mx-2 text-sm bg-error/10 text-error;
  }
  .type-free_trial {
    @apply rounded-xl p-1 mx-2 text-sm bg-secondary/90;
  }
  .type-streaming_preview {
    @apply rounded-xl p-1 mx-2 text-sm bg-accent-focus/80;
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
import Options from "~/pages/components/contact/Options.vue";
import NoteCardModal from "~/pages/check-in/note-card/index.vue";
import {Ref} from "vue";
import dateFormat from "dateformat";

export type Type = 'text' | 'email' | 'call' | null;
const router = useRouter()

library.add(faEllipsisH);
const props = defineProps<{
  data: Object
}>()

const contactOption: Ref<Type> = ref(null);
const noteCardModalRef: Ref<any> = ref(null);

const openNoteCardModal = () => {
  noteCardModalRef.value.open();
};
const closeNoteCardModal = () => {
  noteCardModalRef.value.close();
};

function navigateToCheckIn(preview) {
  router.push({
    name: 'check-in',
    query: {id: props.data.id, type: 'lead', preview}
  })
}
</script>