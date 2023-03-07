<template>
  <div
      :class="{ 'right-0': sidebarVisible, 'right-[20rem]': !sidebarVisible }"
  >
    <div>
      Leaderboard Slideout
    </div>
    <div v-for="(leader, index) in trainerData" :key='leader.name'>
        <side-bar-leaderboard-card v-if="index <= 3" />
    </div>
    <div>
      <tr>
        <td>Place</td>
        <td class="pr-4"></td>
        <td>name</td>
        <td>Points</td>
        <td class="p-2"></td>
      </tr>
      <tr v-for="leader in trainerData" :key='leader.name' >
        <td>
          <div class="px-1 m-1">{{ leader.rank }}</div>
        </td>
        <td class="pr-4">
          <div v-if="leader.trending === 'up'" class="trend-arrow-up"></div>
          <div v-if="leader.trending === 'down'" class="trend-arrow-down"></div>
          <div v-if="leader.trending === '-'" class="solid"></div>
        </td>
        <td>
          <div class="px-1">{{ leader.name }}</div>
        </td>
        <td>
          <div class="px-1 text-right">{{ leader.unitSold }}</div>
        </td>
        <td><div class="px-1">PTS</div></td>
        <td class="p-2"><div class="px-1 arrow-down"></div></td>
      </tr>
    </div>
  </div>
</template>
<style>
.solid {
  border-top: 1px solid #bbb;
  padding-bottom: 4px;
}

.trend-arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid #5bc600;
}
.trend-arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  padding-bottom: 1px;
  border-top: 5px solid #ff0000;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  padding-bottom: 1px;
  /*border-top: 5px solid #ff0000;*/
}
</style>
<script setup lang="ts">
import {ref} from "vue";
import SideBarLeaderboardCard from "~/layouts/components/leader-board/side-bar-leaderboard-card.vue";
const showLeaderBoardSlideout = ref (false);

const sidebarVisible = () => {
  showLeaderBoardSlideout.value = !showLeaderBoardSlideout.value;
  console.log(showLeaderBoardSlideout);
}

const trainerData = ref([
  {
    name: "Caleb Grill",
    rank: "1st",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 120,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Gabe Kalsheur",
    rank: "2nd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 110,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
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
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Osun Osunniyi",
    rank: "4th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Jaren Holmes",
    rank: "5th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Tre King",
    rank: "6th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Tamin Lipsey",
    rank: "7th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 90,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Rob Jones",
    rank: "8th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 90,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Demarion Watson",
    rank: "9th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 80,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
  {
    name: "Hason Ward",
    rank: "10th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 80,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
    classes: 30,
    attendance: '90%',
    overall: '4.9',
    stars: '5'
  },
]);
</script>