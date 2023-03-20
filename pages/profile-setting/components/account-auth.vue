<template>
  <div>
    <div class="mx-auto mt-20 p-4 md:w-3/4 lg:w-3/5 ">
      <div class="grid grid-cols-2 gap-8">

        <div class="grid grid-cols-1 py-2">
          <h5 class="text-lg font-medium">{{ browserSession.title }}</h5>
          <p> {{ browserSession.shortDetails }}</p>
        </div>

        <div class="grid grid-cols-1 py-2">
          <h5 class="text-lg font-medium inline-block">
            {{ deleteAccount.title }} <LockIcon class="inline-block ml-3 -mt-1" />
          </h5>
          <p> {{ deleteAccount.shortDetails }}</p>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-1 gradient-bg p-4 page-border md:w-3/4 lg:w-3/5 ">
      <div class="grid grid-cols-2 gap-8">

        <div class="bg-black page-border">

          <div class="p-10 min-height">
            <p class="mb-5"> {{ browserSession.details.lineOne }}</p>
            <p> {{ browserSession.details.lineTwo }}</p>
          </div>

          <!-- Save section -->
          <div class="browser-session">
            <Button  @click="logOutSession()" type="submit">
              Log Out Other Browser Sessions
            </Button>
          </div>

        </div>
        <div class="bg-black page-border">
          <div class="p-10 min-height">
            <p class="mb-5"> {{ deleteAccount.details.lineOne }}</p>
            <p> {{ deleteAccount.details.lineTwo }}</p>
          </div>

          <!-- Save section -->
          <div class="grid grid-cols-1 pt-2 pb-8">
            <div class="grid grid-cols-1 justify-items-center">
              <div class="text-center">
                <Button secondary size="sm"
                        class="capitalize rounded-xl text-base font-light"
                        @click="accountDelete()">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account-auth"
}
</script>

<style scoped>

.page-border {
  @apply border border-secondary rounded-2xl;
}

.min-height {
  height: 80%;
}

.browser-session {
  @apply text-center pt-2 pb-8;
  padding-left: 20px;
  padding-right: 20px;
  > button {
    @apply rounded btn-secondary text-base-content btn-sm capitalize rounded-xl text-base font-light w-auto;
    height: fit-content;
    padding-bottom: 4px;
    padding-top: 4px;
    white-space: break-spaces;
  }
}


</style>

<script setup>
import {ref} from 'vue';
import {LockIcon} from "@/components/icons";
import Button from "../../../components/Button";


let sessionLoggedOut = ref(false);
let accountDeleted = ref(false);

const browserSession = {
  title: "Browser Sessions",
  shortDetails: "Manage and log out your active sessions on other browsers and devices.",
  details: {
    lineOne : "If necessary, you may log out of all of your other browser sessions across all of your devices.",
    lineTwo : "Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.",
  }
};

const deleteAccount = {
  title: "Delete Account",
  shortDetails: "Permanently delete your account",
  lockIcon: true,
  details: {
    lineOne : "Once your account is deleted, all of its resources and data will be permanently deleted",
    lineTwo : "Before deleting your account, please download any data or information that you wish to retain.",
  }
};


const logOutSession = () => {
  sessionLoggedOut.value = !sessionLoggedOut.value;
  console.log('sessionLoggedOut: ', sessionLoggedOut);
};

const accountDelete = () => {
  accountDeleted.value = !accountDeleted.value;
  console.log('accountDeleted: ', accountDeleted);
};

</script>
