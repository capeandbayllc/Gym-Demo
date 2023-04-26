<template>
  <tr class="bg-base-100 h-14">
    <td>{{ dateFormat(data.created_at, "dd/mm/yyyy") }}</td>
    <td>
      <div :class="data.opportunity" class="gr-opportunity w-6 mx-auto"></div>
    </td>
    <td>{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td>Club {{ Math.floor(Math.random() * 10) }}</td>
    <td>
      <div class="gr-lead-type" :class="data.type">
        {{ data.type.replace("_", " ") }}
      </div>
    </td>
    <td class="capitalize text-accent-focus/60">
      {{ data.status }} {{ contactOption }}
    </td>
    <td>
      <div class="dropdown dropdown-end">
        <button class="btn btn-ghost btn-sm text-base-content" tabindex="0">
          <font-awesome-icon icon="ellipsis-h" size="lg" />
        </button>

        <div
          class="dropdown-content menu p-2 shadow bg-base-300 rounded w-fit items-start"
        >
          <button
            class="dropdown-item"
            tabindex="-1"
            @click="navigateToCheckIn(true)"
          >
            Preview
          </button>
          <div class="dropdown-item" tabindex="-1">
            <button @click="navigateToCheckIn(false)">Edit</button>
          </div>

          <div class="" tabindex="-1">
            <div
              class="dropdown dropdown-left dropdown-end dropdown-hover contact-menu group"
            >
              <div class="dropdown-item cursor-pointer" tabindex="0">
                Contact Lead
              </div>
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
          <div class="dropdown-item" tabindex="-1" @click="openNoteCardModal">
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

  button {
    @apply uppercase;
  }
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
  @apply border-y-2 border-secondary text-center;
}

td:first-child {
  @apply border-l-2 rounded-l-2xl px-4;
}

td:last-child {
  @apply border-r-2 rounded-r-2xl px-8;
}
</style>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Options from "~/pages/components/contact/Options.vue";
import NoteCardModal from "~/pages/check-in/note-card/index.vue";

import dateFormat from "dateformat";

const router = useRouter();
library.add(faEllipsisH);

const props = defineProps({
  data: {
    type: Object,
    default: {
      id: "xxxxxxxx-xxxx-xxxx-xxxx-78b879249d11",
      first_name: "First",
      last_name: "Last",
      opportunity: ["accent", "warning", "error"].at(0),
      created_at: new Date(),
      updated_at: new Date(),
      email: "addr@email.com",
      phone: "1234567890",
      profile_photo_path: "/images/profile/users_1.jpg",
      type: [
        "app_referal",
        "snapshot",
        "grand_opening",
        "free_trial",
        "streaming_preview",
      ].at(0),
      homeLocation: {
        name: "Home Location",
      },
      status: "available",
    },
  },
});

const contactOption = ref(null);
const noteCardModalRef = ref(null);

const openNoteCardModal = () => {
  noteCardModalRef.value.open();
};
const closeNoteCardModal = () => {
  noteCardModalRef.value.close();
};

function navigateToCheckIn(preview) {
  router.push({
    name: "check-in",
    query: { id: props.data.id, type: "lead", preview },
  });
}
</script>
