<template>
  <div class="side-bar-leaderboard-card">
    <img :src="avatar"/>
    <div class="leaderboard-name">{{name}}</div>
    <div class="bg-[#0074C8]"> </div>
  </div>
</template>
<style scoped>
.side-bar-leaderboard-card{
  @apply flex flex-col items-center self-start relative;
img {
  @apply w-10 h-10 rounded-full mr-3;
}
.leaderboard-name {
  @apply text-lg cursor-pointer hover:border hover:border-secondary hover:rounded hover:font-bold p-2;
}
}
</style>
<script setup>
const props = defineProps({
  avatar: {
    type: String,
    default: "/account-lg.png"
  },
  name: String,
  unread: Number
})
</script>