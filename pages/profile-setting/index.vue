<!-- TODO: Remains:-->
<!-- TODO: ii) toggle image-->
<!-- TODO: iii) if possible upload-->

<!-- TODO: 2. basic info-->
<!-- TODO: i) responsive checking for ipad screen -->
<!-- TODO: ii) Search manager (have some questions here????) (how will it work):-->

<!-- TODO: 3. Update password: HERE-->
<!-- TODO: 4. Login related-->
<!-- TODO: 5. Attachment-->
<!-- TODO: 6. Salary-->
<!-- TODO: 7. Hierchy-->
<template>
  <div class="page-setting-container">
    <!--    PROFILE IMAGE SECTION-->
    <div class="col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-span-1 relative flex justify-center">
      <div class="profile-image">
      <img
          :src="user.profile_photo_path"
          class="cursor-pointer"
          @click="uploadPopUp = true"
      />
        <div
            v-if="uploadPopUp"
            class="bg-white absolute p-4 w-[300px] text-right rounded border border-secondary"
        >
          <label class="mb-4 block">
            <UploadIcon
                class="bg-secondary rounded-full text-center relative z-10 text-secondary block mx-auto cursor-pointer"
            />
            <input
                type="file"
                class="absolute z-0 top-0 left-0 hidden"
            />
          </label>
          <Button
              ghost
              size="sm"
              class="text-black"
              @click="uploadPopUp = false"
          >Cancel</Button
          >
          <Button
              secondary
              size="sm"
              @click="uploadPopUp = false"
          >Save</Button
          >
        </div>
      </div>
    </div>

    <!--    FIRST SECTION -->
    <basic-info></basic-info>

    <update-password></update-password>
  </div>
</template>


<script>
export default {
  name: "index"
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
import Divider from "./components/divider";
import BasicInfo from "./components/basic-info";
import UpdatePassword from "./components/update-password";

let user = useState("auth");

let uploadPopUp = ref(false);

</script>

