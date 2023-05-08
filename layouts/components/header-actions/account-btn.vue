<template>
  <div
    class="bg-no-repeat relative h-16 flex items-center justify-center bg-contain self-end bg-[center_5px]"
  >
    <div class="account-btn w-10 ml-[20px]">
      <img
        :src="user.profile_photo_path"
        alt="profile image"
        class="rounded-full"
      />
    </div>
  </div>
</template>
<style scoped>
.account-btn {
  @apply cursor-pointer;
}
.bg-image {
  @apply bg-[url("/assets/profile-bg.svg")];
}
</style>
<script setup>
import { inject } from "vue";

const profileMenuIsOpen = inject("profileMenu");
const user = useState("auth");
</script>
