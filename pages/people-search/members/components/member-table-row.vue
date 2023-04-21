<template>
  <tr class="people-member-tbl-row rounded-2xl">
    <td class="whitespace-nowrap">
      {{ new Date(data.created_at).toLocaleString() }}
    </td>
    <td>{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td class="px-4 whitespace-nowrap">{{ fmtMobile(data.phone) }}</td>
    <td class="px-4">{{ data.email }}</td>
    <td>{{ data.location }}</td>
    <td>
      <membership-status :status="data.membership_type" />
    </td>
    <td>
      <addon-btn :value="data.addOns" class="!rounded-full" />
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
        <!-- <div class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start">
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1"  @click.stop="openEmailModal">+ Email</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1" @click.stop="outgoingCall">+ Call</div>
                </div> -->
        <div
          class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start"
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
              class="dropdown dropdown-left dropdown-end dropdown-hover contact-menu"
            >
              <div class="dropdown-item" tabindex="0" @click.prevent.stop>
                Contact Member
              </div>
              <div
                class="dropdown-content menu p-2 shadow bg-black rounded w-40 items-start hidden"
              >
                <Button
                  outline
                  size="sm"
                  class="my-1 border-primary"
                  @click.stop="contactOption = 'text'"
                  >Text</Button
                >
                <Button
                  outline
                  size="sm"
                  class="my-1 border-primary"
                  @click.stop="contactOption = 'email'"
                  >Email</Button
                >
                <Button
                  outline
                  size="sm"
                  class="my-1 border-primary"
                  @click.stop="contactOption = 'call'"
                  >Call</Button
                >
              </div>
            </div>
          </div>
          <div class="dropdown-item" tabindex="-1" @click.stop="openNoteModal">
            Add a Note
          </div>
        </div>
      </div>

      <daisy-modal ref="addNoteModalRef">
        <AddNoteModel @saveNote="saveNote" @deleteNote="deleteNote" />
      </daisy-modal>

      <Options
        :user="data"
        :show="contactOption"
        @on:close="contactOption = null"
      />
    </td>
  </tr>
</template>
<style scoped>
.dropdown-item {
  @apply hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary;
}
.contact-menu:hover .dropdown-content {
  display: inline-grid !important;
}
.people-member-tbl-row {
  @apply bg-base-100 h-14;

  td {
    @apply border-y-2 border-secondary text-center px-4;
  }
  td:first-child {
    @apply border-l-2 rounded-l-2xl;
  }
  td:last-child {
    @apply border-r-2 rounded-r-2xl;
  }
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Options from "~/pages/components/contact/Options.vue";
import AddonBtn from "~~/components/buttons/addon-btn.vue";
import MembershipStatus from "~~/components/buttons/membership-status.vue";
import AddNoteModel from "./add-note-modal.vue";
import dateFormat from "dateformat";

library.add(faEllipsisH);

const router = useRouter();

const props = defineProps({
  data: Object,
});
const contactOption = ref(null);
console.log("Proposss ", props.data.id);
const navigateToCheckIn = (preview) => {
  router.push({
    name: "check-in",
    query: { id: props.data.id, type: "member", preview },
  });
};

const fmtMobile = (n) => {
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
};

const addNoteModalRef = ref(null);

const openNoteModal = () => {
  addNoteModalRef.value.open();
};
const deleteNote = () => {
  addNoteModalRef.value.close();
};
const saveNote = () => {
  addNoteModalRef.value.close();
};

const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const smsModalRef = ref(null);

const saveEmail = () => {
  emailModalRef.value.close();
};
const sendEmail = () => {
  emailModalRef.value.close();
};
const saveSms = () => {
  smsModalRef.value.close();
};
const sendSms = () => {
  smsModalRef.value.close();
};

const saveNow = () => {
  outgoingCallModalRef.value.close();
};
</script>
