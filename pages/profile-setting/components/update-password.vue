<template>
  <div class="mx-auto mt-20 gradient-bg p-4 page-border w-1/2 ">
    <div class="bg-black page-border">
      <!--    BASIC INFO SECTION-->
      <div class="grid grid-cols-1 py-2">
        <div class="w-5/6 ml-auto mr-auto mt-2 mb-4">
          <div class="grid grid-cols-1 py-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
            <div v-for="item in passwordInfo" :key="item.key"
                 class="mb-5 col-span-4 multi-select-input w-full">
              <div class="mb-1.5">
                <span class="font-light">{{ item.label }} </span>
              </div>
              <input :class="item.class" class="rounded-xl"
                     :placeholder="item.placeholder"
                     v-model="form[item.key]" />
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "update-password"
}
</script>

<style scoped>
.page-setting-container {
  @apply py-4 w-full h-fit;
}

.page-border {
  @apply border border-secondary rounded-2xl;
}

input, select, option {
  @apply h-9 w-full pl-2 min-w-min;
}

.multi-select-input {
  @apply h-9 rounded pl-2;
}
#relationship option {
  background-color: #333;
}

#relationship option:hover {
  background-color: #333
}

input:focus {
  @apply outline-none;
}

.secondary-input {
  @apply bg-secondary;
}

.neutral-input {
  @apply bg-base-content/20;
}

.readonly-input {
  @apply bg-transparent text-base-content/50;
}

.outline-input {
  @apply bg-transparent border border-secondary;
}

input:hover {
  background-color: #0075C9;
}

.availability-time-span {
  @apply mx-2 inline-block mb-2;
}

.profile-image {
  border-width: 3px;
  border-radius: 2.5rem;
  border-color: #1C6bbC;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.profile-image > img {
  border-radius: 1.75rem;
}

</style>

<script setup>
import {ref} from 'vue';
import '@vueform/multiselect/themes/default.css'
import {MembersIcon, LockIcon, BlueClockIcon} from "@/components/icons";
import Divider from "./divider";
import MultiSelectDropdown from "./multi-select-dropdown";

let user = useState("auth");

let form = {};
const initBasicForm = () => {
  form.value = {
    ...form.value,
    username: 'kevinbuchanan@email.com',
    relationship: 0,
    address: {
      address: '',
      city: '',
      state: '',
      zipcode: '',
    },
    social: {
      instagram: '',
      twitter: '',
      tiktok: '',
      youtube: '',
      snapchat: '',
      facebook: ''
    },
    homeLocations:  [],
    roles: [],
    departments: [],
    teams: [],
    calendarDepartments: [],
    notes: "",
  };
  console.log('form.value: ', form.value);
  return form.value;
};

form = ref(initBasicForm());

let basicInfo = {};

let passwordInfo = [
  {
    key: 'current',
    label: 'Current Password',
    class: 'neutral-input rounded-xl',
    required: true
  },
  {
    key: 'new',
    label: 'New Password',
    class: 'neutral-input rounded-xl',
    required: true,
  },
  {
    key: 'confirm',
    label: 'Confirm Password',
    class: 'neutral-input rounded-xl',
    required: true,
  },
];

let resetBasicForm = () => {
  initBasicForm();
};

const saveBasicInfo = () => {
  basicInfo = form.value;
  console.log('basic info: ', basicInfo);
};

</script>