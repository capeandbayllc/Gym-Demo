<template>
    <div>
        <div class="close-btn" @click="toggle">
          <cross-icon />
        </div>

        <div class="leader-pop-info">
            <leader-pop-avatar />

            <div class="leader-pop-title justify-center">Leaderboard</div>
            <div class="justify-center bg-[#18203A] border-color-[#073A76] button2 w-[60%] h-10 p-1">
              <button type="button" class="btn-xs button2 pad-left">
                Clubs
              </button>
              <button type="button" class="btn-xs btn-secondary text-white p-1 m-1 button2">
                Trainers
              </button>

            </div>

            <search-input border="base-content"/>
            <div class="leader-pop-help bg-black border border-secondary px-0 rounded-md">
                <div class="carousel-wrap col-span-6">
                  <carousel
                      :breakpoints="breakpoints"
                      class="m-2"
                  >
                    <tr
                        v-for="(leader, index) in leaderBoardData"
                        :key="index"
                    >
                      <td><div class="px-1">{{ leader.rank }}</div></td>
                      <td

                      >
                        <div v-if="leader.trending === 'up'" class="arrow-up"></div>
                        <div v-if="leader.trending === 'down'" class="arrow-down"></div>
                        <div v-if="leader.trending === '-'" class="solid"></div>
                      </td>
                      <td><div class="px-1"> {{ leader.name }}</div></td>
                      <td><div class="px-1 text-right"> {{leader.unitSold}}</div></td>
                      <td><div class="px-1"> PTS</div></td>
                    </tr>
                  </carousel>
                </div>
            </div>

        </div>

      <div class="float-right m-2">
        <button class="text-xs">View More</button>
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
.solid {
  border-top: 1px solid #bbb;
  padding-bottom: 4px;
}

.button2 {border-radius: 4px;}

.pad-left {
  padding-left: 17.5%;
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid #5BC600;
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  padding-bottom: 1px;
  border-top: 5px solid #FF0000;
}
</style>
<script setup>
import {ref} from 'vue'
import { CrossIcon} from '~~/components/icons';
import LeaderPopAvatar from './leader-pop-avatar.vue';
const leaderBoardData = ref([
  {
  name: 'Caleb Grill',
      rank: '1st',
      clubLocation: 65,
      goalUnitSold: 90,
      unitSold: 120,
      trending: '-',
      goalRevenue: '$195',
      dollarAmount: '$1,200',
  },
  {
    name: 'Gabe Kalsheur',
    rank: '2nd',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 110,
    trending: 'up',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Aljaz Kunc',
    rank: '3rd',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 110,
    trending: 'down',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Osun Osunniyi',
    rank: '4th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: '-',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Jaren Holmes',
    rank: '5th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: 'up',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Tre King',
    rank: '6th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: 'down',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Tamin Lipsey',
    rank: '7th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 90,
    trending: '-',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Rob Jones',
    rank: '8th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 90,
    trending: 'up',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Demarion Watson',
    rank: '9th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 80,
    trending: '-',
    goalRevenue: '$195',
    dollarAmount: '$1,200',
  },
  {
    name: 'Hason Ward',
    rank: '10th',
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 80,
    trending: 'down',
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