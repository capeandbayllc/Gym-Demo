<template>
  <div class="bg-neutral/50 flex items-center max-h-11 group">
    <label
      :for="id"
      class="bg-secondary fill-white flex justify-center w-12 p-1 rounded-l-xl h-full"
    >
      <component :is="currentPlatform.icon" />
    </label>
    <input
      :id="id"
      type="text"
      class="w-full gr-neutral-textfield gr-base-textfield m-0 rounded-l-none group-hover:bg-secondary"
    />
  </div>
</template>

<script setup>
import IG from "@/components/icons/socials/Instagram.vue";
import TW from "@/components/icons/socials/Twitter.vue";
import TKTK from "@/components/icons/socials/Tiktok.vue";
import YT from "@/components/icons/socials/Youtube.vue";
import SC from "@/components/icons/socials/Snapchat.vue";
import FB from "@/components/icons/socials/Facebook-f.vue";

const props = defineProps({
  id: {
    type: [String, Number, null],
    default: null,
  },
  platform: {
    type: String,
    default: "twitter",
  },
});

const platforms = [
  { name: "instagram", icon: IG },
  { name: "twitter", icon: TW },
  { name: "tiktok", icon: TKTK },
  { name: "youtube", icon: YT },
  { name: "snapchat", icon: SC },
  { name: "facebook", icon: FB },
];

const currentPlatform = computed(
  () => platforms.filter((p) => p.name === props.platform)[0]
);
</script>
