<template>
    <div
        class="leader-pop"
        :class="{
            'hidden': !showLeaderPop,
            'block': showLeaderPop
        }"
    >
        <div class="close-btn" @click="togglePop">
          <cross-icon />
        </div>
        <div class="leader-pop-info">
            <leader-pop-avatar />
            <div class="leader-pop-title justify-center">Leader Board</div>
            <div class="justify-center bg-[#18203A] border-color-[#073A76] button2 w-[60%] h-10 p-1">
              <button type="button" class="btn-xs button2 pad-left">
                Clubs
              </button>
              <button type="button" class="btn-xs btn-secondary p-1 m-1 button2">
                Trainers
              </button>

            </div>


            <search-input border="base-content"/>
            <div class="leader-pop-help bg-black border border-secondary px-1 rounded-md">
                <div class="carousel-wrap col-span-6">
                  <carousel
                      :breakpoints="breakpoints"
                      class="m-4"
                  >
                    <tr
                        v-for="(leader, index) in leaderBoardData"
                        :key="index"
                    >
                      <td><div class="px-1">{{ leader.rank }}.</div></td>
                      <td><div class="px-1">{{ leader.rank }}.</div></td>
                      <td><div class="px-1"> {{ leader.name }}</div></td>
                      <td><div class="px-1"> {{leader.unitSold}} PTS</div></td>
                    </tr>
                  </carousel>
                </div>
            </div>

        </div>

      <div class="float-right m-2">
        <button> View More...</button>
      </div>
    </div>
</template>
<style scoped>
.leader-pop {
    @apply absolute right-10 top-16 bg-secondary z-50 w-72 rounded-lg;
    .close-btn {
        @apply absolute top-4 right-4 cursor-pointer hover:text-neutral;
    }
    .leader-pop-info {
        @apply flex flex-col px-2 pt-5 items-center space-y-2;
        .leader-pop-title {
            @apply text-xl font-bold;
        }
        .leader-pop-help {
            @apply text-xs font-semibold flex flex-col pb-4;
            > div {
                @apply flex flex-row items-center;
            }
        }
    }
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
}
.flex-item-left {
  /*padding: 2px;*/
  flex: 33%;
}

.flex-item-center {
  /*padding: 2px;*/
  flex: 33%;
}

.flex-item-right {
  /*padding: 2px;*/
  flex: 33%;
}

.button2 {border-radius: 4px;}

.pad-left {
  padding-left: 17.5%;
}
</style>
<script setup>
import {ref} from 'vue'
import { CrossIcon, QuestionRoundIcon } from '~~/components/icons';
import LeaderPopAvatar from './leader-pop-avatar.vue';
import LeaderboardTableRow from "~/pages/leaderboard/components/leaderboard-table-row.vue";
import LeaderPopInput from "~/layouts/components/leader-board/leader-pop-input.vue";
import {RadioGroup, RadioGroupOption} from "@headlessui/vue";

const showLeaderPop = ref(false);
const togglePop = () => { console.log('1' + showLeaderPop.value); showLeaderPop.value = !showLeaderPop.value; console.log('2' + showLeaderPop.value);};
const open = () => showLeaderPop.value = true;
defineExpose({open})
const leaderBoardData = ref([
  {
  name: 'Caleb Grill',
    rank: '1st',
      isFavourite: false,
      clubLocation: 65,
      goalUnitSold: 90,
      unitSold: 89,
      goalRevenue: '$195',
      dollarAmount: '$1,200',
  },
  {
    name: 'Gabe Kalsheur',
    rank: '2nd',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 86,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Aljaz Kunc',
    rank: '3rd',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 85,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Osun Osunniyi',
    rank: '4th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 85,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Jaren Holmes',
    rank: '5th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 84,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Tre King',
    rank: '6th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 83,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Tamin Lipsey',
    rank: '7th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 83,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Rob Jones',
    rank: '8th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 82,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Demarion Watson',
    rank: '9th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 82,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Hason Ward',
    rank: '10th',
    isFavourite: false,
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 81,
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },

    ]);
const breakpoints = ref({
  // 700px and up
  0: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
});

</script>