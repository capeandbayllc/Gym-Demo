<template>
  <div v-for="(leader, index) in trainerData" :key="leader.name">
    <div class="border-container">
      <div class="side-bar-leaderboard-card w-[25%] relative float-left border-2 border-secondary rounded p-2 m-3"  @mouseenter="addCircleColor" @mouseleave="addCircleColor" v-if="index < 3">
        <div class="relative">
          <img :src="avatar" class="relative" />
          <div class="dot" v-bind:class="{isHovering: 'dothover'}" >{{leader.rank}}</div>
        </div>
        <div class="leaderboard-name relative">{{leader.name}}</div>
        <div class="points ">{{leader.unitSold}} PTS</div>
        <div class="bg-[#0074C8] relative"> </div>
        <div class="bg-secondary text-[9px] border-[#0074C8] relative pr-3 pl-3 -bottom-2 ">
          <tr class="flex">
            <td class="flex flex-col pt-2 pb-1 pr-2 pl-2 relative">Classes</td>
            <td class="flex flex-col pt-2 pb-1 pr-2 pl-2 relative">Attendance</td>
            <td class="flex flex-col pt-2 pb-1 pr-2 pl-2 relative">Overall</td>
          </tr>
          <tr class="flex">
            <td class="flex flex-col pr-5 pl-5 pb-2 relative">{{leader.classes}}</td>
            <td class="flex flex-col pr-5 pl-5 pb-2 relative">{{leader.attendance}}</td>
            <td class="flex flex-col pr-5 pl-5 pb-2 relative">{{leader.overall}}</td>
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
  @apply flex flex-col items-center self-start relative hover:border-4;
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
    @apply bg-[#FFD800] relative rounded-full m-3 pl-2 pr-2 pb-1 pt-1 text-black text-xs;
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
let isHovering = false

const addCircleColor = () => {
  isHovering = !isHovering;
  console.log(isHovering);
}
</script>