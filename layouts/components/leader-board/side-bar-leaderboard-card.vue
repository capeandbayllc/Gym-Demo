<template>
  <div v-for="(leader, index) in trainerData" :key="leader.first_name">
    <div class="border-container">
      <div
        class="group side-bar-leaderboard-card w-[27.5%] relative float-left border-2 border-secondary rounded-2xl m-3.5"
        @mouseenter="addCircleColor"
        @mouseleave="addCircleColor"
        v-if="index < 3"
      >
        <div class="relative py-2">
          <img :src="leader.profile_photo_path" class="profile-img" />
          <div class="dot bg-[#FFF] group-hover:bg-[#FFD800]">
            {{ leader.rank }}
          </div>
        </div>
        <div class="leaderboard-name relative">
          {{ leader.first_name }} {{ leader.last_name }}
        </div>
        <div
          class="points bg-[#5A5A5A5A] text-white group-hover:bg-[#FFD800] group-hover:text-black"
        >
          {{ leader.unitSold }} PTS
        </div>
        <div class="bg-secondary text-[8px] w-full rounded-b-xl">
          <div class="flex w-full h-4 mt-2">
            <div class="w-1/3 text-center">Classes</div>
            <div class="w-1/3 text-center">Attendance</div>
            <div class="w-1/3 text-center">Overall</div>
          </div>
          <div class="flex w-full h-4">
            <div class="w-1/3 text-center">{{ leader.classes }}</div>
            <div class="w-1/3 text-center">{{ leader.attendance }}</div>
            <div class="w-1/3 text-center">{{ leader.overall }}</div>
          </div>
          <!-- <tr class="flex gap-1.5">
            <td class="card-value text-center">{{leader.classes}}</td>
            <td class="card-value text-center">{{leader.attendance}}</td>
            <td class="card-value text-center">{{leader.overall}}</td>
          </tr> -->
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
  @apply flex flex-col items-center self-start relative hover:border-2 cursor-pointer bg-[#5A5A5A5A];
  .profile-img {
    @apply w-16 h-16 rounded-3xl mr-3 relative;
    border: 5px solid #0077ac;
    box-shadow: 0px 3px 10px #0077ac;
  }
  .card-header {
    @apply flex flex-col pt-2 pb-1 px-2 relative;
  }
  .card-value {
    @apply flex flex-col px-4 pb-2 relative;
  }
  .dot {
    @apply flex flex-col justify-center items-center h-[1.75rem] w-[1.75rem] rounded-full bottom-0 right-2 text-[12px] text-black absolute font-bold;
  }
  .points {
    @apply relative rounded-full m-3 pl-2 pr-2 pb-1 pt-1 text-xs font-bold;
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
    default: "/account-lg.png",
  },
  trainerData: {
    type: Array,
  },
});
let isHovering = false;

const addCircleColor = () => {
  isHovering = !isHovering;
  console.log(isHovering);
};
</script>
