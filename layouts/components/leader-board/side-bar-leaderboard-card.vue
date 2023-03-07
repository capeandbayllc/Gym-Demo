<template>
  <div v-for="(leader, index) in trainerData" :key="leader.name">
    <div class="side-bar-leaderboard-card w-[25%] float-left border border-secondary rounded p-4 m-4"  @mouseenter="addCircleColor" @mouseleave="addCircleColor" v-if="index < 3">
      <img :src="avatar" />
        <div v-if="isHovering == false" class="dot"></div>
        <div v-if="isHovering == true" class="dothover"></div>
      <div class="leaderboard-name">{{leader.name}}</div>
      <div class="points">{{leader.unitSold}} PTS</div>
      <div class="bg-[#0074C8]"> </div>
      <div class="bg-secondary rounded text-[7px] p-4">
        <tr>
          <td class="p-1">Classes</td>
          <td class="p-1">Attendance</td>
          <td class="p-1">Overall</td>
        </tr>
        <tr>
          <td class="p-1">{{leader.classes}}</td>
          <td class="p-1 justify-center">{{leader.attendance}}</td>
          <td class="p-1">{{leader.overall}}</td>
        </tr>
      </div>
    </div>
  </div>
</template>
<style scoped>
.side-bar-leaderboard-card {
  @apply flex flex-col items-center self-start relative hover:border-2;
  img {
    @apply w-16 h-16 rounded-full mr-3;
  }
  .dot {
    @apply h-[25px] w-[25px] rounded-xl bg-[#FFF];
  }
  .dothover {
    @apply h-[25px] w-[25px] rounded-xl bg-[#FFD800];
  }
  .points {
    @apply bg-[#FFD800] rounded-full m-3 pl-2 pr-2 pb-1 pt-1 text-black text-xs;
  }

  .leaderboard-name {
    @apply text-lg cursor-pointer p-2;
  }
}


</style>
<script setup>
const props = defineProps({
    avatar: {
      type: String,
      default: "/account-lg.png"
    },
    trainerData:{
      type: Array,

    }
});
let isHovering = ref(false)

const addCircleColor = () => {
  isHovering = !isHovering;
}
</script>