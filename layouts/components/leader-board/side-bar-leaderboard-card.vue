<template>
  <div v-for="(leader, index) in trainerData" :key="leader.name">
    <div class="border-container">
      <div class="group side-bar-leaderboard-card w-[27.5%] relative float-left border-2 border-secondary rounded p-2 m-3.5 "  @mouseenter="addCircleColor" @mouseleave="addCircleColor" v-if="index < 3">
        <div class="relative ">
          <img :src="avatar" class="relative" />
          <div class="dot bg-[#FFF] group-hover:bg-[#FFD800]" >{{leader.rank}}</div>
        </div>
        <div class="leaderboard-name relative">{{leader.name}}</div>
        <div class="points bg-[#5A5A5A5A] text-white group-hover:bg-[#FFD800] group-hover:text-black">{{leader.unitSold}} PTS</div>
        <div class="bg-[#0074C8] relative"> </div>
        <div class="bg-secondary text-[9px] border-[#0074C8] relative pr-2 pl-2 -bottom-2 ">
          <tr class="flex">
            <td class="card-header">Classes</td>
            <td class="card-header">Attendance</td>
            <td class="card-header">Overall</td>
          </tr>
          <tr class="flex">
            <td class="card-value">{{leader.classes}}</td>
            <td class="card-value">{{leader.attendance}}</td>
            <td class="card-value">{{leader.overall}}</td>
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
  .card-header{
    @apply flex flex-col pt-2 pb-1 pr-2 pl-2 relative;
  }
  .card-value{
    @apply flex flex-col pr-5 pl-5 pb-2 relative;
  }
  .dot {
    @apply flex flex-col justify-center items-center h-[2rem] w-[2rem] rounded-full bottom-0 right-2 text-black absolute ;
  }
  .points {
    @apply relative rounded-full m-3 pl-2 pr-2 pb-1 pt-1 text-xs;
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