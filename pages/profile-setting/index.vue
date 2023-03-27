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
        <div v-if="uploadPopUp"
            class="uploadImage absolute p-2 text-right">
          <div  class="bg-black grid grid-cols-12">
            <div class="col-span-4">
              <div class="mb-4 block p-4 ml-3 mt-2 w-full rounded-3xl">
                <UploadIcon
                    class="bg-secondary rounded-xl text-center relative z-10 text-secondary block mx-auto cursor-pointer"/>
                <input type="file" class="absolute z-0 top-0 left-0 hidden"/>
              </div>
            </div>

            <div class="col-span-8">
              <div class="p-4 pt-7 colors">
                <div class="grid grid-cols-12 mb-1 color-buttons-grid">
                  <div class="color-buttons" style="background-color: #8000FF"></div>
                  <div class="color-buttons" style="background-color: #0076FF"></div>
                  <div class="color-buttons" style="background-color: #00FF4E"></div>
                  <div class="color-buttons" style="background-color: #FF0A00"></div>
                  <div class="color-buttons" style="background-color: #FFA700"></div>
                </div>

                <div class="grid grid-cols-12 mb-2 color-buttons-grid">
                  <div class="color-buttons" style="background-color: #FF00B1"></div>
                  <div class="color-buttons" style="background-color: #00F5FF"></div>
                  <div class="color-buttons" style="background-color: #E2FF00"></div>
                  <div class="color-buttons" style="background-color: #001DFF"></div>
                  <div class="col-span-2 rainbow mx-2">
                    <img src="/rainbow.png" />
                  </div>
                </div>
              </div>
              <div class="text-center">
                <Button ghost size="sm" class="mr-2 capitalize hover:bg-transparent">
                <span class="text-light text-gray-500 hover:text-blue-400"
                      @click="uploadPopUp = false">Cancel</span>
                </Button>
                <Button secondary size="sm"
                        class="capitalize rounded-xl font-light"
                        @click="uploadPopUp = false">
                  Save
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <basic-info></basic-info>

    <update-password></update-password>

    <account-auth></account-auth>

    <attachment></attachment>

    <salary></salary>

    <hierarchy></hierarchy>

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

input:focus {
  @apply outline-none;
}

input:hover {
  background-color: #0075C9;
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

.uploadImage {
  @apply border border-secondary w-1/5;
  background-color: #006DC2;
  border-radius: 2.75rem;
  > div {
    @apply border border-secondary;
    border-radius: 2.5rem;
  }
}

.color-buttons {
  @apply col-span-2 w-6 h-6 rounded-full mx-2;
  cursor: pointer;
}

.rainbow {
  @apply rounded-full;
  width: 1.65rem;
  height: 1.65rem;
}

@media (max-width:1650px) {
  .uploadImage {
    width: 30%;
  }
}

@media (max-width:1024px) {
  .colors {
    padding-left: 1.5rem;
  }
  .color-buttons-grid {
    gap: 0.9rem;
  }
}

</style>

<script setup>
import {ref} from 'vue';
import '@vueform/multiselect/themes/default.css'
import {UploadIcon} from "@/components/icons";
import BasicInfo from "./components/basic-info";
import UpdatePassword from "./components/update-password";
import AccountAuth from "./components/account-auth";
import Salary from "./components/salary";
import Hierarchy from "./components/hierarchy";
import Attachment from "./components/attachment";

let user = useState("auth");

let uploadPopUp = ref(false);

</script>

