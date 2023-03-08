<template>
  <div
    class="overflow-hidden absolute h-[calc(100vh-65px)] top-[62px] right-0 z-10 bg-[#191919] border-2 border-secondary transition-all duration-300 ease-linear"
    :class="{
      'w-[800px] text-[0.9rem]': isLeaderBoardVisible === true,
      'w-[0px] text-[0rem]': isLeaderBoardVisible === false,
    }"
  >
    <div class="p-4">
      <div class="float-left w-[180px] text-2xl">Leaderboard for</div>
      <div class="float-left w-[150px]">
        <select-box :items="items"></select-box>
      </div>
      <div>
        <div class="float-right close-btn" @click="closeSlider">
          <cross-icon @click="toggleLeaderBoard()" />
        </div>
      </div>
    </div>
    <div class="m-6 p-4 w-[100%]">
      <side-bar-leaderboard-card
        :trainerData="trainerData"
        class="float-left"
      />
    </div>
    <div v-for="(leader, index) in trainerData" :key="leader.name">
      <side-bar-leaderboard-card v-if="index <= 3" />
    </div>
    <div class="m-10 p-4">
      <table class="w-full">
        <tr class="text-opacity-50 text-white">
          <td>Place</td>
          <td>Name</td>
          <td>Points</td>
          <td class="p-4"></td>
        </tr>
        <tr class="border-t-2 border-[#FFF]"></tr>
        <LeaderRowDetails
          v-for="leader in trainerData"
          :key="leader.rank"
          :leader="leader"
          :contextId="currentListItemContext?.rank"
          @details="handleListItemClick"
        />
      </table>
    </div>
  </div>
</template>
<style>

.close-btn {
  @apply absolute top-4 right-4 cursor-pointer hover:text-blue-600 pr-4;
}
</style>
<script setup lang="ts">
import { computed, ref } from "vue";
import SideBarLeaderboardCard from "~/layouts/components/leader-board/side-bar-leaderboard-card.vue";
import { CrossIcon } from "~~/components/icons";
import LeaderRowDetails from "./partials/leader-row-details.vue";

const props = defineProps({
  isLeaderBoardVisible: { type: Boolean, default: false },
});

const emit = defineEmits(["show-leader-board"]);
const toggleLeaderBoard = () => {
  emit("show-leader-board");
};

const trainerData = ref([
  {
    name: "Caleb Grill",
    rank: "1st",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 211,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 72,
    attendance: "98%",
    overall: "9.9",
    stars: "5",
    avatar: "/account-lg.png",
  },
  {
    name: "Gabe Kalsheur",
    rank: "2nd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 135,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 53,
    attendance: "94%",
    overall: "9.2",
    stars: "5",
    avatar: "/account-lg.png",
  },
  {
    name: "Aljaz Kunc",
    rank: "3rd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 110,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 24,
    attendance: "90%",
    overall: "8.7",
    stars: "5",
    avatar: "/account-lg.png",
  },
  {
    name: "Osun Osunniyi",
    rank: "4th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 96,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: "88%",
    overall: "8.6",
    stars: "5",
    avatar: "/account-lg.png",
  },
  {
    name: "Jaren Holmes",
    rank: "5th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 72,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: "79%",
    overall: "7.2",
    stars: "4",
    avatar: "/account-lg.png",
  },
  {
    name: "Tre King",
    rank: "6th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 55,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 47,
    attendance: "71%",
    overall: "7.1",
    stars: "4",
    avatar: "/account-lg.png",
  },
  {
    name: "Tamin Lipsey",
    rank: "7th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 52,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 22,
    attendance: "77%",
    overall: "6.8",
    stars: "3",
    avatar: "/account-lg.png",
  },
  {
    name: "Rob Jones",
    rank: "8th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 39,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 10,
    attendance: "72%",
    overall: "6",
    stars: "3",
    avatar: "/account-lg.png",
  },
  {
    name: "Demarion Watson",
    rank: "9th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 12,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 6,
    attendance: "42%",
    overall: "4.7",
    stars: "2",
    avatar: "/account-lg.png",
  },
  {
    name: "Hason Ward",
    rank: "10th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 6,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 4,
    attendance: "43%",
    overall: "2.1",
    stars: "1",
    avatar: "/account-lg.png",
  },
]);
const items = [
  {
    value: "1",
    label: "Week",
  },
  {
    value: "2",
    label: "Month",
  },
  {
    value: "3",
    label: "Year",
  },
];

const isCollapsed = ref(true);

const currentListItemContext = ref(null);

/** the leader-row-details component emits "details" event with it's leader as context which we can compare against */
const handleListItemClick = (ctx = null) => {
  let { rank } = ctx;

  if (!!rank && currentListItemContext.value?.rank === rank) {
    currentListItemContext.value = null;
    return;
  }

  currentListItemContext.value = ctx;
};

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};
const onChange = () => {
  toggleCollapsed();
};
const closeSlider = () => {
  // showLeaderBoard()
};
//
// let isLeaderBoardVisible = props.isLeaderBoardVisible;
// const showLeaderBoard = () => {
//   console.log(isLeaderBoardVisible);
//   isLeaderBoardVisible = !isLeaderBoardVisible;
//   // isLeaderBoardVisible.value = !isLeaderBoardVisible.value;
// };
</script>
