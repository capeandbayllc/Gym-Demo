<template>
  <tr class="bg-base-100 h-14">
    <td>{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td>{{ data.phone }}</td>
    <td>{{ data.email }}</td>
    <td>
      <TableRowDropdown @email="openEmailModal" @call="openCallModal" />
      <daisy-modal ref="callModalRef">
        <outgoing-call-modal
          :user="data"
          @callNow="closeCallModal"
          @close="closeOutgoingCall"
        ></outgoing-call-modal>
      </daisy-modal>
      <daisy-modal ref="emailModalRef">
        <EmailModal :user="data" @close="closeEmailModal" />
      </daisy-modal>
    </td>
  </tr>
</template>

<style scoped lang="postcss">
td {
  @apply border-y-2 border-secondary text-center;
}
td:first-child {
  @apply border-l-2 rounded-l px-4;
}
td:last-child {
  @apply border-r-2 rounded-r capitalize text-accent-focus/60 px-8;
}
</style>

<script setup>
import TableRowDropdown from "../../components/table-row-dropdown.vue";
import OutgoingCallModal from "~/pages/check-in/side-car-split/make-call.vue";
import EmailModal from "../../../check-in/engage/email.vue";

const props = defineProps({
  data: Object,
});

const callModalRef = ref(null);
const emailModalRef = ref(null);

/** Call */
const openCallModal = () => {
  callModalRef.value.open();
};
const closeCallModal = () => {
  callModalRef.value.close();
};

/** Email */
const openEmailModal = () => {
  emailModalRef.value.open();
};
const closeEmailModal = () => {
  emailModalRef.value.close();
};
</script>
