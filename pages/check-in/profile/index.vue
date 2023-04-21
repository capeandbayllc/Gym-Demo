<template>
  <div class="w-full max-w-[1120px] mx-auto">
    <simple-card
      class="profile-wrap"
      :closable="true"
      title="Profile"
      @close="$emit('close')"
    >
      <template v-if="Object.keys(memberInfo).length > 0">
        <BasicInfo
          :modelValue="memberInfo"
          @update:modelValue="(nv) => (memberInfo = nv)"
        />
      </template>

      <div class="flex justify-center items-center gap-6 my-6">
        <button @click="$emit('close')" class="text-base-content/50 hover:text-base-content">
          cancel
        </button>
        <button
          @click.stop="updateUser"
          class="bg-secondary px-4 py-1 rounded-lg"
        >
          Save
        </button>
      </div>
    </simple-card>
    <GradedBorderCard>
      <template #title>
        <div class="w-fit mx-auto mt-24 mb-12">
          <h6 class="text-xl font-semibold">Delete Account</h6>
          <span>Permanently delete your account.</span>
        </div>
      </template>

      <template #content>
        <div class="max-w-xs bg-base-300 p-8">
          <p class="text-sm">
            Once your account is deleted, all of its resources and data will be
            permanently deleted.
          </p>
          <p class="mt-4 text-sm">
            Before deleting your account, please download any data or
            informataion that you wish to retain
          </p>
          <button
            class="mt-16 bg-secondary px-4 py-1 rounded mx-auto w-fit block"
          >
            Delete Account
          </button>
        </div>
      </template>
    </GradedBorderCard>

    <h6 class="mt-24 mb-8 text-xl font-semibold">Attachments</h6>
    <Attachments @edit="handleEditAttachment" @save="handleSaveAttachment" />
  </div>
</template>
<script setup>
import member from "~/api/queries/member";
import { request } from "~/api/utils/request";
import user from "~/api/mutations/user";
import { useMutation } from "@vue/apollo-composable";
import Datepicker from "@vuepic/vue-datepicker";
import MultiSelect from "~/components/multi-select/index.vue";
import lead from "~/api/queries/lead";
import BasicInfo from "./partials/basic-info.vue";
import GradedBorderCard from "~~/components/graded-border-card.vue";
import Attachments from "~/components/attachments";

const emit = defineEmits(["on-profile-update"]);
const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";

request((isLeadView ? lead : member).query.get, { id: profileId }).then(
  ({ data }) => {
    const user = data.data[isLeadView ? "lead" : "member"];

    const homeLocation = user.homeLocation;
    delete user.homeLocation;

    memberInfo.value = {
      ...user,
      ...{ id: user.user_id, address: { ...homeLocation } },
    };
    demographicsObj.value = { ...homeLocation, ...user };
  }
);

const handleEditAttachment = (v) => {
  console.log("edit attachment with id", v);
};

const handleSaveAttachment = (v) => {
  console.log("save attachment with id", v);
};

const isActiveMember = ref(false);
const isProcessing = ref(false);
const memberInfo = ref({});

const demographicsObj = ref({});
const demographics = ref([
  {
    key: "address1",
    label: "Street Address",
    class: "col-span-3 neutral-input",
  },
  {
    key: "city",
    label: "City",
    class: "neutral-input",
  },
  {
    key: "state",
    label: "State",
    class: "neutral-input",
  },
  {
    key: "zip",
    label: "Zip Code",
    class: "neutral-input",
  },
  {
    key: "email",
    label: "Email Address",
    class: "neutral-input",
  },
  {
    key: "phone",
    label: "Primary Phone",
    class: "neutral-input",
  },
  {
    key: "drivers_license_number",
    label: "Driver's License",
    class: "neutral-input",
  },
  {
    key: "alternate_phone",
    label: "Mobile Phone",
    class: "neutral-input",
  },
  /*{
    key: "work-phone",
    label: "Work Phone",
    class: "neutral-input",
  },
  {
    key: "fax-number",
    label: "Fax Number",
    class: "neutral-input",
  },*/
  {
    key: "emergency-contact",
    label: "Emergency Contact",
    class: "neutral-input",
  },
  {
    key: "emergency-contact-phone",
    label: "Emergency Contact Phone",
    class: "neutral-input",
  },
  /*{
    key: "emergency-availability",
    label: "Emergency Availability",
    class: "neutral-input",
  },*/
]);

function updateUser() {
  isProcessing.value = true;
  const { mutate: updateCustomer } = useMutation(user.mutation.updateUser);
  updateCustomer({
    input: {
      id: memberInfo.value.id,
      first_name: memberInfo.value.first_name,
      middle_name: memberInfo.value.middle_name,
      last_name: memberInfo.value.last_name,
      date_of_birth: memberInfo.value.date_of_birth,
      drivers_license_number: demographicsObj.value.drivers_license_number,
      occupation: memberInfo.value.occupation,
      employer: memberInfo.value.employer,
      barcode: memberInfo.value.barcode,
      email: memberInfo.value.email,
      gender: memberInfo.value.gender,
      alternate_phone: demographicsObj.value.alternate_phone,
      // location
      address1: memberInfo.value.address.address1,
      address2: memberInfo.value.address.address2,
      city: memberInfo.value.address.city,
      state: memberInfo.value.address.state,
      phone: memberInfo.value.phone,
      zip: memberInfo.value.address.zip,
    },
  })
    .then(() => emit("on-profile-update"))
    .finally(() => (isProcessing.value = false));
}
</script>
