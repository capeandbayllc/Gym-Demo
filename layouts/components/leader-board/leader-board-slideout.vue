<template>
  <div
    class=" overflow-y-auto overflow-hidden absolute h-[calc(100vh-65px)] top-[62px] right-0 z-10 bg-black border-2 border-secondary transition-all duration-300 ease-linear rounded-l-2xl"
    :class="{
      'w-[600px] text-[0.7rem]': isLeaderBoardVisible === true,
      'w-[0px] text-[0rem]': isLeaderBoardVisible === false,
    }"
  >
    <div class="p-4">
      <div class="float-left w-[215px] pt-3 pb-3 pl-10 text-2xl">Leaderboard for</div>
      <div class="float-left w-[150px] pt-3">
        <select class="bg-[#5A5A5A5A] border-2 rounded-xl ml-3 mt-1 p-1 border-blue-700 ">
          <option  value="">Select</option>
          <option v-for="value in items" :value="value.value" :key="value.value">{{value.label}}</option>
        </select>
      </div>
      <div>
        <div class="float-right close-btn" @click="closeSlider">
          <cross-icon @click="toggleLeaderBoard()" />
        </div>
      </div>
    </div>
    <div class="relative right-6 m-6 p-4 w-[100%] h-20rem">
      <side-bar-leaderboard-card
        :trainerData="leaderbordEmployees"
        class="float-left"
      />
    </div>
    <div class="my-10 mx-5 right-2 p-4 relative">
      <table class="w-full">
        <tr class="text-opacity-50 text-white">
          <td>Place</td>
          <td>Name</td>
          <td>Points</td>
          <td class="p-4"></td>
        </tr>
        <tr class="border-t-2 border-[#FFF]"></tr>
        <LeaderRowDetails
          v-for="leader in leaderbordEmployees"
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
  @apply absolute top-4 right-4 cursor-pointer hover:text-blue-600 border-2 rounded-full p-2;
}
</style>
<script setup lang="ts">
import { computed, ref } from "vue";
import SideBarLeaderboardCard from "~/layouts/components/leader-board/side-bar-leaderboard-card.vue";
import { CrossIcon } from "~~/components/icons";
import { useQuery } from "@vue/apollo-composable";
import LeaderRowDetails from "./partials/leader-row-details.vue";
import employee from "~/api/queries/employee";

const { result } = useQuery(employee.query.browse);
const leaderbordEmployees= ref([]);



const props = defineProps({
  isLeaderBoardVisible: { type: Boolean, default: false },
});

const emit = defineEmits(["show-leader-board"]);
const toggleLeaderBoard = () => {
  emit("show-leader-board");
};



const trainerData = ref([
  {
    
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
    
  },
  {
    
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
    
  },
  {
    
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
    
  },
  {
   
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
    
  },
  {
    
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
    
  },
  {
   
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
   
  },
  {
  
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
   
  },
  {
    
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
   
  },
  {
   
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
   
  },
  {
    
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
    
  },
]);
const items = [
  {
    value: "1",
    label: "Day",
  },
  {
    value: "2",
    label: "Week",
  },
  {
    value: "3",
    label: "Month",
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


watch(() => {
  leaderbordEmployees.value= result?.value?.employee?.data.map((e,index) => {
    return {
      ...e,
      ...trainerData.value[index]
    };
  });

});
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
