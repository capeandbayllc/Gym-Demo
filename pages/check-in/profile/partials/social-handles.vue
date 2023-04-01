<template>
  <div
    class="border-2 border-secondary rounded-2xl px-16 py-8 max-w-3xl mx-auto w-full mt-16"
  >
    <h6 class="text-xl font-semibold mb-8">Social Media Handles</h6>
    <div class="grid grid-cols-2 gap-8">
      <SocialConnection id="ig" platform="instagram" />
      <SocialConnection id="tw" platform="twitter" />
      <SocialConnection id="tktk" platform="tiktok" />
      <SocialConnection id="yt" platform="youtube" />
      <SocialConnection id="sc" platform="snapchat" />
      <SocialConnection id="fb" platform="facebook" />
    </div>
  </div>
</template>

<script setup>
import SocialConnection from "./social-connection.vue";
</script>
