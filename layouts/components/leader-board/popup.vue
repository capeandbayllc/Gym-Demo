<template>
  <div ref="popoverContainer">
    <div class="close-btn" @click="$emit('close')">
      <cross-icon />
    </div>

    <div class="leader-pop-info">
      <TrophyIcon class="w-12" />

      <div class="leader-pop-title justify-center">Leaderboard</div>
      <div
        class="justify-center bg-[#18203A] border-color-[#073A76] button2 w-[60%] h-8"
      >
        <button
          type="button"
          class="btn-xs text-white pl-3 pr-3 m-1 button2"
          @click="
            (e) => {
              selected = 'clubs';
            }
          "
          :class="{ 'btn-secondary': selected === 'clubs' }"
          name="clubs"
        >
          Clubs
        </button>
        <button
          type="button"
          class="btn-xs text-white pl-3 pr-3 m-1 button2"
          :class="{ 'btn-secondary': selected === 'trainers' }"
          @click="
            (e) => {
              selected = 'trainers';
            }
          "
          name="trainers"
        >
          Trainers
        </button>
      </div>

      <search-input border="base-content" />
      <div
        class="leader-pop-help bg-black border border-secondary px-0 rounded-md"
      >
        <div class="carousel-wrap col-span-6">
          <div
            v-if="selected === 'trainers'"
            :breakpoints="breakpoints"
            class="m-2"
            name="data"
          >
            <tr v-for="leader in leaderbordEmployees" :key="leader.first_name">
              <td>
                <div class="px-1 m-1">{{ leader.rank }}</div>
              </td>
              <td class="pr-4">
                <div v-if="leader.trending === 'up'" class="arrow-up"></div>
                <div v-if="leader.trending === 'down'" class="arrow-down"></div>
                <div v-if="leader.trending === '-'" class="solid"></div>
              </td>
              <td>
                <div class="px-1">
                  {{ leader.first_name }} {{ leader.last_name }}
                </div>
              </td>
              <td>
                <div class="px-1 text-right">{{ leader.unitSold }}</div>
              </td>
              <td><div class="px-1">PTS</div></td>
            </tr>
          </div>
          <div
            v-if="selected === 'clubs'"
            :breakpoints="breakpoints"
            class="m-2"
            name="data"
          >
            <tr v-for="leader in locationData" :key="leader.name">
              <td>
                <div class="px-1 m-1">{{ leader.rank }}</div>
              </td>
              <td class="pr-4">
                <div v-if="leader.trending === 'up'" class="arrow-up"></div>
                <div v-if="leader.trending === 'down'" class="arrow-down"></div>
                <div v-if="leader.trending === '-'" class="solid"></div>
              </td>
              <td>
                <div class="px-1">{{ leader.name }}</div>
              </td>
              <td>
                <div class="px-1 text-right">{{ leader.unitSold }}</div>
              </td>
              <td><div class="px-1">PTS</div></td>
            </tr>
          </div>
        </div>
      </div>
    </div>

    <div class="float-right m-2">
      <button class="text-xs" @click="showSlideout">View More</button>
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

.button2 {
  border-radius: 4px;
}
.solid {
  border-top: 1px solid #bbb;
  padding-bottom: 4px;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid #5bc600;
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  padding-bottom: 1px;
  border-top: 5px solid #ff0000;
}
</style>
<script setup>
import { ref } from "vue";
import { CrossIcon } from "~~/components/icons";
import TrophyIcon from "~/components/icons/trophy-circle.vue";
import employee from "~/api/queries/employee";
import { useQuery } from "@vue/apollo-composable";

const { result } = useQuery(employee.query.browse);
const selected = ref("trainers");
const leaderbordEmployees = ref([]);
const locationData = ref([
  {
    name: "Ames",
    rank: "1st",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 1150,
    trending: "-",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Lubbock",
    rank: "2nd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 1100,
    trending: "up",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Stillwater",
    rank: "3rd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 1050,
    trending: "down",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Fort Worth",
    rank: "4th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 1000,
    trending: "-",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Manhattan",
    rank: "5th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 950,
    trending: "up",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Morgantown",
    rank: "6th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 900,
    trending: "down",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Lawrence",
    rank: "7th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 850,
    trending: "-",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Waco",
    rank: "8th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 800,
    trending: "up",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Norman",
    rank: "9th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 750,
    trending: "-",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
  {
    name: "Austin",
    rank: "10th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 700,
    trending: "down",
    goalRevenue: "$1950",
    dollarAmount: "$1,2000",
  },
]);
const trainerData = ref([
  {
    rank: "1st",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 120,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "2nd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 110,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "3rd",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 110,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "4th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "5th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "6th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 100,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "7th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 90,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "8th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 90,
    trending: "up",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "9th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 80,
    trending: "-",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
  {
    rank: "10th",
    clubLocation: 65,
    goalUnitSold: 90,
    unitSold: 80,
    trending: "down",
    goalRevenue: "$195",
    dollarAmount: "$1,200",
  },
]);
const breakpoints = ref({
  // 700px and up
  0: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});

watch(() => {
  leaderbordEmployees.value = result?.value?.employee?.data.map((e, index) => {
    return {
      ...e,
      ...trainerData.value[index],
    };
  });
});

const emit = defineEmits(["show-leader-board"]);
const showSlideout = () => {
  console.log("show slideout");
  emit("show-leader-board");
  emit("close");
};

const popoverContainer = ref();

onMounted(() => {
  document.addEventListener("click", onMenuOutsideClickHandler);
});

onUnmounted(() => {
  document.removeEventListener("click", onMenuOutsideClickHandler);
});

const onMenuOutsideClickHandler = (event) => {
  const isClickInside = popoverContainer.value.contains(event.target);

  if (!isClickInside) {
    // The click was outside the specifiedElement, do something
    emit("close");
  }
};
</script>
