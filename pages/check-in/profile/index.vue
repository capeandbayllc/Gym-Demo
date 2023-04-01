<template>
  <div class="w-full max-w-[1120px] mx-auto">
    <simple-card
      class="profile-wrap"
      :closable="true"
      title="Profile"
      @close="$emit('close')"
    >
      <BasicInfo />
      <!-- <div class="profile-section mb-6">
        <div></div>
        <h2 class="">Member Information</h2>
        <Button
          class="text-base-content py-1 h-auto px-6 rounded-xl capitalize ml-auto -md:!mr-0"
          size="sm"
          :class="
            isActiveMember
              ? 'bg-neutral-content hover:bg-neutral-content/80'
              : 'bg-accent-focus hover:bg-accent-focus/80'
          "
          @click="isActiveMember = !isActiveMember"
          >{{ isActiveMember ? "In-Active" : "Active" }}</Button
        >

        <div
          v-for="item in memberInformation"
          :key="item.key"
          class="col-span-1 -lg:col-span-1 -md:col-auto mx-auto w-full mb-4"
        >
          <div class="mb-2">
            {{ item.label }}
            <span class="text-secondary" v-if="item.key === 'first-name'"
              >*</span
            >
          </div>
          <template v-if="Array.isArray(item.options)">
            <MultiSelect
              v-model="memberInfo[item.key]"
              :options="item.options"
              is-single-select
              placeholder="Select Gender"
            />
          </template>
          <template v-else-if="item.type === 'date'">
            <Datepicker
              class="custom-date"
              v-model="memberInfo[item.key]"
              auto-apply
              :enable-time-picker="false"
              dark
            />
          </template>
          <template v-else>
            <input
              :type="item.type ?? 'text'"
              :class="item.class"
              class="w-full p-1 rounded-xl"
              v-model="memberInfo[item.key]"
            />
          </template>
        </div>
      </div>
      <div class="profile-section">
        <h2 class="col-span-3 -lg:col-span-2">Demographics</h2>

        <div
          v-for="(item, index) in demographics"
          :key="item.key"
          :class="index == 0 ? 'col-span-3 -lg:col-span-2' : ''"
          class="col-span-1 -md:col-auto mx-auto w-full"
        >
          <div class="mb-2">{{ item.label }}</div>
          <input
            :class="item.class"
            class="w-full p-1 rounded-sm"
            v-model="demographicsObj[item.key]"
          />
        </div>
      </div>
      <div class="text-center mx-5 mb-2 rounded-md p-2">
        <Button
          type="button"
          @click.stop="updateUser"
          :class="[{ loading: isProcessing }, 'bg-black']"
        >
          Update Profile
        </Button>
      </div> -->
    </simple-card>
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

const emit = defineEmits(["on-profile-update"]);
const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";

request((isLeadView ? lead : member).query.get, { id: profileId }).then(
  ({ data }) => {
    const user = data.data[isLeadView ? "lead" : "member"];

    const homeLocation = user.homeLocation;
    delete user.homeLocation;

    memberInfo.value = { ...user, ...{ id: user.user_id } };
    demographicsObj.value = { ...homeLocation, ...user };
  }
);

const isActiveMember = ref(false);
const isProcessing = ref(false);
const memberInfo = ref({});

const memberInformation = [
  {
    key: "first_name",
    label: "First Name",
    class: "neutral-input",
  },
  {
    key: "middle_name",
    label: "Middle Name",
    class: "neutral-input",
  },
  {
    key: "last_name",
    label: "Last Name",
    class: "neutral-input",
  },
  {
    key: "date_of_birth",
    label: "Date of Birth",
    class: "neutral-input",
    type: "date",
  },
  {
    key: "gender",
    label: "Gender",
    class: "neutral-input",
    options: ["male", "female", "other"],
  },
  {
    key: "occupation",
    label: "Occupation",
    class: "neutral-input",
  },
  {
    key: "employer",
    label: "Employer",
    class: "neutral-input",
  },
  {
    key: "barcode",
    label: "Barcode",
    class: "neutral-input",
  },
  /*{
    key: "previous-agreement-number",
    label: "Previous Agreement Number",
    class: "neutral-input",
  },
  {
    key: "wellness-program-id",
    label: "Wellness Program ID",
    class: "neutral-input",
  },
  {
    key: "membership-type",
    label: "Membership Type",
    class: "neutral-input",
  },
  {
    key: "group",
    label: "Group",
    class: "neutral-input",
  },
  {
    key: "member-misc-1",
    label: "Member Misc. 1",
    class: "neutral-input",
  },
  {
    key: "member-misc-2",
    label: "Member Misc. 2",
    class: "neutral-input",
  },*/
];

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
      address1: demographicsObj.value.address1,
      address2: demographicsObj.value.address2,
      city: demographicsObj.value.city,
      state: demographicsObj.value.state,
      phone: demographicsObj.value.phone,
    },
  })
    .then(() => emit("on-profile-update"))
    .finally(() => (isProcessing.value = false));
}
</script>
