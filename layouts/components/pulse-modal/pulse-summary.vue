<template>
  <div class="pulse-summary">
    <!-- scrolling side container (no container title, component titles) -->
    <section
      class="max-h-[50vh] h-full flex gap-4 justify-center pb-8 px-8 overscroll-contain"
    >
      <div class="overflow-y-scroll w-full pr-12">
        <ul class="w-full flex flex-col gap-16">
          <li>
            <PulseItemCard title="Club Membership Details">
              <template #card-content>
                <DetailList />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <h4>Membership Draft Breakdown</h4>
            <PulseMultigraph />
          </li>
          <li>
            <PulseItemCard title="Membership Sales Leaderboard">
              <template #card-content>
                <SalesLeaderboard :data="membershipSalesLeaderboard" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <PulseItemCard title="Membership Calls and Mass Comms">
              <template #card-content>
                <MassCommsList
                  @view="handleViewMemberComm"
                  :data="membershipCallsAndMassComms"
                />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <PulseItemCard title="Personal Training Details">
              <template #card-content>
                <DetailList :data="personalTrainingDetailData" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <h4>Personal Training Draft Breakdown</h4>
            <PulseMultigraph />
          </li>
          <li>
            <PulseItemCard title="Personal Training Sales Leaderboard">
              <template #card-content>
                <SalesLeaderboard :data="membershipSalesLeaderboard" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <PulseItemCard title="Personal Training Events">
              <template #card-content>
                <TrainingEvents
                  @view="handlePersonalEvent"
                  :events="personalTrainingEvents"
                />
              </template>
            </PulseItemCard>
          </li>
        </ul>
      </div>
      <div class="right-sect w-full max-h-full overflow-y-auto pr-8">
        <PulseItemCard title="Club History & details" contentClass="px-12">
          <template #card-content>
            <!-- location & call type -->
            <div class="flex justify-between">
              <!-- location -->
              <div class="flex flex-col justify-center">
                <span class="text-xl">Location:</span>
                <span class="text-2xl font-semibold">Club 1234</span>
              </div>

              <!-- calltype -->
              <div class="min-w-[12rem] py-2">
                <select class="bg-secondary rounded-2xl px-4 w-full h-full">
                  <option>Call Type</option>
                </select>
              </div>
            </div>

            <div class="flex justify-between items-center mt-2">
              <ClubDateLabel text="start date" date="12/01/23" />
              <ClubDateLabel text="end date" date="12/31/23" />
            </div>

            <div class="mt-4">
              <div class="right-detail-list-grid px-6 capitalize">
                <span>title</span>
                <span class="text-right">Amount</span>
              </div>
              <ul class="right-sect-list max-h-52 overflow-y-scroll">
                <li class="right-detail-list-grid bg-secondary">
                  <span>Active Memberships</span>
                  <span>243</span>
                </li>
                <li class="right-detail-list-grid bg-lime-500">
                  <span>Personal Training Classes</span>
                  <span>24</span>
                </li>
                <li class="right-detail-list-grid bg-secondary">
                  <span>Membership Upgrades</span>
                  <span>7</span>
                </li>
                <li class="right-detail-list-grid bg-yellow-500">
                  <span>Cancelations</span>
                  <span>3</span>
                </li>
              </ul>
            </div>
          </template>
        </PulseItemCard>
      </div>
    </section>
  </div>
</template>

<script setup>
import PulseMemberSummary from "./pulse-member-summary.vue";
import PulseClubEvents from "./pulse-club-events.vue";
import PulseCheckHistory from "./pulse-check-history.vue";
import PulseItemCard from "./partials/pulse-item-card.vue";
import DetailList from "./partials/detail-list.vue";
import SalesLeaderboard from "./partials/sales-leaderboard-list.vue";
import MassCommsList from "./partials/mass-comms-list.vue";
import ClubDateLabel from "./partials/club-date-label.vue";
import PulseMultigraph from "./partials/pulse-multigraph.vue";
import TrainingEvents from "./partials/training-events.vue";

import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const query = gql`
  query AllMembers {
    members(first: 100) {
      data {
        id
        first_name
        last_name
        profile_photo_path
      }
      paginatorInfo {
        count
        perPage
        total
      }
    }
  }
`;

const { result } = useQuery(query);

const members = computed(() => {
  return result?.value ? result.value : null;
});

const personalTrainingEvents = computed(() => {
  if (!result?.value) return [];
  return result.value.members.data.map((m) => {
    return {
      id: m.id,
      name: `${m.first_name} ${m.last_name}`,
      time: "12:00 PM",
      subject: "One-on-One",
      profile_photo_path: m.profile_photo_path,
    };
  });
});

watch(members, (nv, ov) => {
  console.log("members", members.value);
});

const personalTrainingDetailData = ref([
  { title: "Appointments Sold", amount: 23, colorName: "secondary" },
  { title: "Appointments Completed", amount: 23, colorName: "orange" },
  { title: "Sold Amount ($)", amount: 430.25, colorName: "orange" },
  { title: "Sold Amount (%)", amount: 85, colorName: "purple" },
  { title: "Percentage to Goal", amount: 75, colorName: "red" },
]);

const membershipSalesLeaderboard = ref([
  { rank: 1, name: "Sty Stance", points: 120, trending: "up" },
  { rank: 2, name: "Aya Bauchanan", points: 120, trending: "down" },
  { rank: 3, name: "Butch Fierce", points: 120, trending: "neutral" },
  { rank: 4, name: "Henry Owens", points: 120, trending: "down" },
  { rank: 5, name: "Penny Earns", points: 120, trending: "up" },
  { rank: 6, name: "Max Smallson", points: 120, trending: "up" },
  { rank: 7, name: "Steve Maxum", points: 110, trending: "down" },
  { rank: 8, name: "Rich J.", points: 100, trending: "neutral" },
  { rank: 9, name: "Mary Joe", points: 90, trending: "down" },
  { rank: 10, name: "Gary Holmes", points: 80, trending: "up" },
]);

const membershipCallsAndMassComms = ref([
  { id: 0, days: 4, status: "Pending", subject: "Email" },
  { id: 1, days: 2, status: "Pending", subject: "SMS Message" },
  { id: 2, days: 8, status: "Pending", subject: "Follow Up" },
  { id: 3, days: 1, status: "Pending", subject: "Follow Up" },
  { id: 4, days: 2, status: "Pending", subject: "SMS Message" },
]);

const handleViewMemberComm = (ctx) => {
  let clickedComm = membershipCallsAndMassComms.value.filter(
    (m) => m.id === ctx
  );
  console.log("view mass comm:", Object.assign({}, ...clickedComm));
};

const handlePersonalEvent = (id) => {
  console.log("view event with id:", id);
};
</script>

<style scoped>
::-webkit-scrollbar {
  @apply w-2 py-4;
}

::-webkit-scrollbar-track {
  @apply bg-gray-400/10;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary outline-secondary outline-4 outline;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-secondary/60 outline-secondary/60;
}

div.right-sect h4 {
  @apply text-2xl font-semibold;
}

ul.right-sect-list::-webkit-scrollbar {
  @apply hidden;
}

.right-detail-list-grid {
  @apply grid grid-cols-[80%_20%] items-center;
}

li.right-detail-list-grid {
  @apply w-full py-3 px-6 my-3 rounded-2xl border text-xl;
}

li.right-detail-list-grid span:last-child {
  @apply font-bold text-2xl text-right;
}

h4 {
  @apply text-xl font-semibold;
}
</style>
