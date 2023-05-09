<template>
  <tr class="bg-base-100 h-14">
    <td class="border-l-2 rounded-l px-4">{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td>{{ data.phone }}</td>
    <td>{{ data.email }}</td>
    <td class="border-r-2 rounded-r capitalize text-accent-focus/60 px-8">
      <TableRowDropdown @email="openEmailModal" @call="openCallModal" />

      <daisy-modal ref="callModalRef">
        <CallModal
          :user="data"
          @callNow="closeCallModal"
          @close="closeCallModal"
        />
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
</style>

<script setup>
import TableRowDropdown from "../../components/table-row-dropdown.vue";
import CallModal from "~/pages/check-in/side-car-split/make-call.vue";
import EmailModal from "../../../check-in/engage/email.vue";

const props = defineProps({
  data: Object,
});

const callModalRef = ref(null);
const emailModalRef = ref(null);

const openCallModal = () => {
  callModalRef.value.open();
};
const closeCallModal = () => {
  callModalRef.value.close();
};

const openEmailModal = () => {
  emailModalRef.value.open();
};
const closeEmailModal = () => {
  emailModalRef.value.close();
};
</script>
