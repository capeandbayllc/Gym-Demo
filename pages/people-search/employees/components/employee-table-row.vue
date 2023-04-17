<template>
  <tr class="bg-base-100 h-14 rounded-2xl">
    <td>{{ dateFormat(data.created_at, "dd/mm/yyyy") }}</td>
    <td>{{ data.last_name }}</td>
    <td>{{ data.first_name }}</td>
    <td>Club {{ Math.floor(Math.random() * 10) }}</td>
    <td>
      {{ data.department }}
    </td>
    <td>
      {{ data.position }}
    </td>
    <td class="capitalize text-accent-focus/60">
      {{ data.status }} {{ contactOption }}
    </td>
    <td>
      <div class="dropdown dropdown-end">
        <div
          class="btn btn-ghost btn-sm text-base-content"
          tabindex="0"
          @click.prevent.stop
        >
          <font-awesome-icon icon="ellipsis-h" size="lg" />
        </div>

        <div
          class="dropdown-content menu p-2 shadow bg-base-300 rounded w-fit items-start"
        >
          <div
            class="dropdown-item"
            tabindex="-1"
            @click="navigateToCheckIn(true)"
          >
            Preview
          </div>
          <div class="dropdown-item" tabindex="-1">
            <span @click="navigateToCheckIn(void 0)">Edit</span>
          </div>
          <div class="dropdown-item" tabindex="-1">Trash</div>
          <div class="" tabindex="-1">
            <div
              class="dropdown dropdown-left dropdown-end dropdown-hover contact-menu group"
            >
              <div class="dropdown-item" tabindex="0">Contact Member</div>
              <ul
                class="dropdown-content group-hover:!inline-grid menu p-2 shadow bg-base-300 rounded items-start hidden"
              >
                <li>
                  <button @click="contactOption = 'text'">Text</button>
                </li>

                <li>
                  <button @click="contactOption = 'email'">Email</button>
                </li>

                <li>
                  <button @click="contactOption = 'call'">Call</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown-item" tabindex="-1" @click="openNoteModal">
            Add a Note
          </div>
        </div>
      </div>

      <Options
        :user="data"
        :show="contactOption"
        @on:close="contactOption = null"
      />

      <daisy-modal ref="noteCardModalRef" :closable="false">
        <NoteCardModal @close="closeNoteCardModal" />
      </daisy-modal>
    </td>
  </tr>
</template>

<style scoped lang="postcss">
.dropdown-item {
  @apply text-secondary uppercase border transition rounded border-secondary my-1 px-2 py-1 w-full whitespace-nowrap;
  @apply hover:bg-base-content hover:text-base-300;
}

ul.dropdown-content {
  li {
    @apply w-full whitespace-nowrap;
    button {
      @apply uppercase border w-full transition whitespace-nowrap rounded border-primary px-2 py-1 text-secondary;
      @apply hover:bg-base-content hover:text-base-300;
      @apply focus:bg-base-content focus:text-base-300;
      @apply motion-reduce:transition-none;
    }
  }
}

td {
  @apply border-y-2 border-secondary text-center px-4;
}
td:first-child {
  @apply border-l-2 rounded-l px-4;
}
td:last-child {
  @apply border-r-2 rounded-r capitalize px-8;
}

.people-lead-tbl-row {
  @apply bg-base-100 h-14;

  td {
    @apply border-y-2 border-secondary text-center;
  }

  td:first-child {
    @apply border-l-2 rounded-l px-4;
  }

  td:last-child {
    @apply border-r-2 rounded-r capitalize text-accent-focus/60 px-8;
  }
}
</style>
<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Options from "~/pages/components/contact/Options.vue";
import NoteCardModal from "~/pages/check-in/note-card/index.vue";
import { Ref } from "vue";
import dateFormat from "dateformat";

export type ContactMethod = "text" | "email" | "call" | null;
const router = useRouter();

library.add(faEllipsisH);
const props = defineProps<{
  data: Object;
}>();

const contactOption: Ref<ContactMethod> = ref(null);
const noteCardModalRef: Ref<any> = ref(null);

const openNoteCardModal = () => {
  noteCardModalRef.value.open();
};
const closeNoteCardModal = () => {
  noteCardModalRef.value.close();
};

function navigateToCheckIn(preview: boolean) {
  router.push({
    name: "check-in",
    query: { id: props.data.id, type: "lead", preview },
  });
}
</script>
