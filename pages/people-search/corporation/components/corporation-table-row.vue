<template>
  <tr class="bg-base-100 h-14">
    <td>{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td>{{ data.phone }}</td>
    <td>{{ data.email }}</td>
    <td>
      <TableRowDropdown @email="openEmailModal" @call="outgoingCall" />
      <daisy-modal ref="outgoingCallModalRef">
        <outgoing-call-modal
          @callNow="showInCallModal"
          @close="closeOutgoingCall"
        ></outgoing-call-modal>
      </daisy-modal>
      <daisy-modal ref="emailModalRef">
        <EmailModal @close="closeEmailModal" />
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

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import OutgoingCallModal from "../../../call-user/components/outgoing-call-modal.vue";
import EmailModal from "../../../check-in/engage/email.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
const props = defineProps({
  data: Object,
});

const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);

const outgoingCall = () => {
  outgoingCallModalRef.value.open();
};
const closeOutgoingCall = () => {
  outgoingCallModalRef.value.close();
};

const openEmailModal = () => {
  emailModalRef.value.open();
};
const closeEmailModal = () => {
  emailModalRef.value.close();
};

const showInCallModal = () => {
  outgoingCallModalRef.value.close();
};
</script>
