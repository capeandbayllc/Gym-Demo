<template>
  <div v-if="profileInfo">
    <div class="profile-image-container">
      <div class="profile-image">
        <div class="profile-avatar">
          <img :src="profileInfo.profile_photo_path" alt="profile image" />
        </div>
      </div>
    </div>
    <div :class="modalClass">
      <simple-card bg-gradient class="p-4">
        <div class="col-span-2 text-xl font-semibold text-base-content mb-4">
          Personal Information (Profile)
        </div>
        <div
          class="max-h-[50vh] xl:max-h-[70vh] overflow-x-hidden overflow-y-scroll grid pr-2 grid-cols-2 gap-4 w-[650px] text-sm width-full"
        >
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">First Name</div>
            <input class="gray-input" v-model="personalInfoForm.first_name" />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Last Name</div>
            <input class="gray-input" v-model="personalInfoForm.last_name" />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Birth Date</div>
            <input
              class="gray-input"
              v-model="personalInfoForm.date_of_birth"
            />
          </div>
          <div
            class="col-span-1 -lg:col-span-2 -md:col-auto mr-auto flex flex-wrap items-center"
          >
            <custom-toggle
              :modelValue="personalInfoForm.gender == 'male'"
              @update:modelValue="updateGender($event, 'male')"
              title="Male"
            />
            <custom-toggle
              :modelValue="personalInfoForm.gender == 'female'"
              @update:modelValue="updateGender($event, 'female')"
              title="Female"
            />
            <custom-toggle
              :modelValue="personalInfoForm.gender === 'other'"
              @update:modelValue="updateGender($event, 'other')"
              title="Other"
            />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Home Address 1*</div>
            <input class="gray-input" v-model="personalInfoForm.address1" />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Home Address 2</div>
            <input class="gray-input" v-model="personalInfoForm.address2" />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">City*</div>
            <input class="gray-input" v-model="personalInfoForm.city" />
          </div>
          <div
            class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex"
          >
            <div class="mr-4 w-[80%]">
              <div class="mb-2">State*</div>
              <select-box
                :items="cities"
                label="Florida"
                :showSearch="false"
                :showClearList="false"
                :bgSecondaryOpened="false"
                @onChange="personalInfoForm.state = $event"
                classButton="my-[5px] mx-[10px]"
                class="bg-[#5a5a5a] text-white rounded-[10px] w-full"
              >
              </select-box>
            </div>
            <div>
              <div class="mb-2">Zip Code*</div>
              <input class="gray-input" v-model="personalInfoForm.zip" />
            </div>
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Emergency Contact Name</div>
            <input
              class="gray-input"
              v-model="personalInfoForm.emergencyContactName"
            />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Emergency Contact Phone</div>
            <input
              class="gray-input"
              v-model="personalInfoForm.emergencyContactPhone"
            />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Mobile Phone*</div>
            <input class="gray-input" v-model="personalInfoForm.mobilePhone" />
          </div>
          <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Email</div>
            <input class="gray-input" v-model="personalInfoForm.email" />
          </div>
          <p class="col-span-2 py-4 pb-8">
            Yes! I would like a Fitness Club Consultant to follow up with me
            regarding a membership by text message and/or cell phone call; I
            also would like to receive other offers from Fitness Club via text
            message and/or cell phone call. By checking the box, I therefore
            agree to receive autodialed and manually dialed advertising text
            messages and cell phone calls from Fitness Club and its affiliates
            to the mobile phone number provided here. I understand that my
            consent to receive promotional autodialed and manually dialed text
            messages and/or phone calls is not a condition of purchasing goods
            and services from Fitness Club. Message and data rates may apply. I
            understand that I may withdraw my consent at any time by texting
            STOP to a text message or by informing the calling party during a
            phone call. Fitness Club has no intention of selling your personal
            information. Florida** law requires businesses to provide an
            alternate form of opt-out requests via email. If you are a Nevada
            resident, you may submit such opt-out requests to
            info@fitnessclub.com. To be effective, your request must include
            your full name, address, phone number, and email.
          </p>
        </div>
      </simple-card>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import CustomToggle from "~/components/toggle/custom-toggle.vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const emit = defineEmits(["change", "changeNewMemberData"]);
const props = defineProps({
  modalClass: {
    type: String,
  },
  value: {
    Object,
  },
  profileInfo: {
    type: Object,
  },
  newMemberData: {
    type: Object,
    default: null,
  },
});

onMounted(() => {
  if (props.value) {
    personalInfoForm.value = props.value;
  }
});

const updateGender = (value, gender) => {
  if (value) {
    personalInfoForm.value.gender = gender;
  }
};

const personalInfoForm = ref({
  firstName: "",
  lastName: "",
  birthDate: "",
  gender: "",
  homeAddress1: "",
  homeAddress2: "",
  city: "",
  state: "",
  zip: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  mobilePhone: "",
  email: "",
  sendMePromotionalTexts: "",
  sendMePromotionalEmails: "",
});

watchEffect(() => {
  emit("change", personalInfoForm);
});
</script>
<style scoped lang="postcss">
.gray-input {
  @apply bg-base-100 w-full text-base-content py-[10px] px-[10px] outline-none rounded-[10px];
}

.toggle-custom {
  @apply mr-3;
}

.profile-avatar {
  @apply rounded-[25px] p-1 inline-block ring-[4px] bg-base-300 ring-secondary border-none;
  img {
    @apply w-[72px] h-[72px] rounded-[25px];
  }
}

.profile-image-container {
  @apply mb-5;
}

@media (min-width: 1152px) {
  .profile-image-container {
    @apply relative left-[60px] h-0 mb-0;
  }
}
</style>
