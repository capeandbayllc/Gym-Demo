<template>
  <div v-for="(leader, index) in trainerData" :key="leader.name">
    <div class="border-container">
      <div class="side-bar-leaderboard-card w-[25%] float-left border border-secondary rounded p-4 m-4"  @mouseenter="addCircleColor" @mouseleave="addCircleColor" v-if="index < 3">
        <div class="relative">
          <img :src="avatar" class="relative" />
          <div v-if="isHovering == false" class="dot ">{{leader.rank}}</div>
          <div v-if="isHovering == true" class="dothover ">{{leader.rank}}</div>
        </div>
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
  </div>
</template>
<style scoped>
.border-container {
  @apply border-transparent hover:border-0;
}
.side-bar-leaderboard-card {
  @apply flex flex-col items-center self-start relative hover:border-2;
  img {
    @apply w-16 h-16 rounded-full mr-3;
  }
  .dot {
    @apply flex flex-col justify-center items-center h-[2rem] w-[2rem] rounded-full bottom-0 right-2 text-black bg-[#FFF] absolute ;
  }
  .dothover {
    @apply flex flex-col justify-center items-center h-[2rem] w-[2rem] rounded-full bottom-0 right-2 text-black bg-[#FFD800] absolute;
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