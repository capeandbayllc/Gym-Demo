<template>
  <div
      class="nav-bar-container"
      :class="{ 'mt-[3.25rem]': windowWidth > 1250 }"
      v-if="navItems.length > 0"
  >
    <div
        class="nav-bar-toggler"
        @click="toggleCollapse"
        v-if="windowWidth <= 1250"
    ></div>
    <div class="nav-bar-items" v-if="collapsed">
      <nav-item
          v-if="windowWidth <= 1250"
          :icon="UpperArrowIcon"
          @click.prevent="toggleCollapse"
      />
      <nav-item
          v-for="(item, ndx) in navItems"
          :key="ndx"
          v-bind="{ ...item }"
      />
    </div>
  </div>
</template>
<style scoped>
.nav-bar-container {
  @apply w-16 z-20 top-0 left-0 -xl:absolute;
}

.nav-bar-toggler {
  @apply bg-secondary h-8 cursor-pointer;
}

.nav-bar-items {
  @apply border border-secondary !bg-[#191919]/[0.8] border-l-0 rounded-r-xl;
}
</style>
<script setup>
import {onMounted, ref} from "vue";
import {
  BackDocument,
  ContractEditIcon,
  ContractIcon,
  CorporationIcon,
  DownloadIcon,
  DraftIcon,
  EmployeeIcon,
  EventTypeIcon,
  FavoriteCircleIcon,
  FitnessIcon,
  LocationIcon,
  MakeCopyeIcon,
  MarketingIcon,
  MassComIcon,
  MembersIcon,
  PersonAddIcon,
  PosIcon,
  RecruitingIcon,
  ReportIcon,
  SpeedMeterIcon,
  TrainingIcon,
  UpperArrowIcon,
  VendorIcon,
  WidgetIcon,
    PeopleSearchIcon
} from "@/components/icons";
import NavItem from "./nav-item.vue";
import PosWindow from "~~/pages/pos/components/pos-window.vue";

const collapsed = ref(false);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

let navItems = shallowRef([]);

const reporting = [
  {
    label: "Financial Reporting",
    icon: ReportIcon,
    url: null,
  },
  {
    label: "Communications",
    url: null,
    icon: MassComIcon,
  },
  {
    label: "Favorites",
    url: null,
    icon: FavoriteCircleIcon,
  },
  {
    label: "Point Of Sale",
    url: null,
    icon: PosIcon,
    modalComponent: PosWindow,
  },
  {
    label: "Fitness",
    url: null,
    icon: FitnessIcon,
  },
  {
    label: "KPIS",
    url: null,
    icon: SpeedMeterIcon,
  },
  {
    label: "Employee Tracking",
    url: null,
    icon: LocationIcon,
  },
  {
    label: "Company Inbox",
    url: null,
    icon: DownloadIcon,
  },
  {
    label: "Marketing",
    url: null,
    icon: MarketingIcon,
  },
];

const navList = [
  {
    type: "agreement",
    navigation: [
      {
        label: "Back To Document Center",
        icon: BackDocument,
        url: "/document",
      },
    ],
  },
  {
    type: "reporting",
    navigation: [
      {
        icon: WidgetIcon,
        url: null,
      },
      {
        label: "Financial Reporting",
        icon: ReportIcon,
        url: null,
      },
      {
        label: "Communications",
        url: null,
        icon: MassComIcon,
      },
      {
        label: "Favorites",
        url: null,
        icon: FavoriteCircleIcon,
      },
      {
        label: "Physical Therapy",
        url: null,
        icon: FitnessIcon,
      },
      {
        label: "KPIS",
        url: null,
        icon: SpeedMeterIcon,
      },
      {
        label: "Employee Tracking",
        url: null,
        icon: LocationIcon,
      },
      {
        label: "Company Inbox",
        url: null,
        icon: DownloadIcon,
      },
      {
        label: "Marketing",
        url: null,
        icon: MarketingIcon,
      },
    ],
  },
  {
    type: "document",
    navigation: [
      {
        label: "Contracts",
        icon: ContractEditIcon,
        url: null,
      },
      {
        label: "Forms",
        url: null,
        icon: ContractIcon,
      },
      {
        label: "Training & Development",
        url: null,
        icon: TrainingIcon,
      },
    ],
  },
  {
    type: "people-search",
    navigation: [
      {
        icon: PeopleSearchIcon,
        url: "/people-search",
      },
      {
        label: "Leads",
        icon: PersonAddIcon,
        url: "/people-search/leads",
      },
      {
        label: "Members",
        icon: MembersIcon,
        url: "/people-search/members",
      },
      // {
      //   label: "Fitness",
      //   url: "/people-search/fitness",
      //   icon: FitnessIcon,
      // },
      {
        label: "Employees",
        icon: EmployeeIcon,
        url: "/people-search/employees",
      },
      {
        label: "Vendors",
        icon: VendorIcon,
        url: "/people-search/vendors",
      },
      {
        label: "Corporation",
        icon: CorporationIcon,
        url: "/people-search/corporation",
      },
      {
        label: "Recruiting",
        icon: RecruitingIcon,
        url: "/people-search/recruitment",
      },
    ],
  },
  {
    type: "engage",
    navigation: [
      {
        icon: WidgetIcon,
        url: "/engage",
      },
      {
        label: "Leads",
        icon: PersonAddIcon,
        url: null,
      },
      {
        label: "Members",
        icon: MembersIcon,
        url: null,
      },
      {
        label: "Fitness",
        url: null,
        icon: FitnessIcon,
      },
      {
        label: "Employees",
        icon: EmployeeIcon,
        url: null,
      },
      {
        label: "Vendors",
        icon: VendorIcon,
        url: null,
      },
      {
        label: "Corporation",
        icon: CorporationIcon,
        url: null,
      },
      {
        label: "Recruiting",
        icon: RecruitingIcon,
        url: null,
      },
    ],
  },
  {
    type: "leaderboard",
    navigation: [
      {
        icon: WidgetIcon,
        url: "/engage",
      },
      {
        label: "Leads",
        icon: PersonAddIcon,
        url: "/leads",
      },
      {
        label: "Members",
        icon: MembersIcon,
        url: "/members",
      },
      {
        label: "Fitness",
        url: "/fitness",
        icon: FitnessIcon,
      },
      {
        label: "Employees",
        icon: EmployeeIcon,
        url: "/leaderboard",
      },
      {
        label: "Vendors",
        icon: VendorIcon,
        url: "/vendors",
      },
      {
        label: "Corporation",
        icon: CorporationIcon,
        url: "/corporation",
      },
      {
        label: "Recruiting",
        icon: RecruitingIcon,
        url: "/recruitment",
      },
    ],
  },
  {
    type: "recruitment",
    navigation: [
      {
        icon: WidgetIcon,
        url: "/engage",
      },
      {
        label: "Leads",
        icon: PersonAddIcon,
        url: "/leads",
      },
      {
        label: "Members",
        icon: MembersIcon,
        url: "/members",
      },
      {
        label: "Fitness",
        url: "/fitness",
        icon: FitnessIcon,
      },
      {
        label: "Employees",
        icon: EmployeeIcon,
        url: "/leaderboard",
      },
      {
        label: "Vendors",
        icon: VendorIcon,
        url: "/vendors",
      },
      {
        label: "Corporation",
        icon: CorporationIcon,
        url: "/corporation",
      },
      {
        label: "Recruiting",
        icon: RecruitingIcon,
        url: "/recruitment",
      },
    ],
  },
  {
    type: "calendar",
    navigation: [
      {
        label: "Event Type",
        icon: EventTypeIcon,
        url: null,
      },
    ],
  },
  {
    type: "agreement-builder",
    navigation: [
      {
        label: "New Template",
        icon: ContractEditIcon,
        url: null,
      },
      {
        label: "Make a Copy",
        icon: MakeCopyeIcon,
        url: null,
      },
      {
        label: "Draft in Progress",
        icon: DraftIcon,
        url: null,
      },
    ],
  },
  {
    type: "profile-setting",
    navigation: [
      {
        icon: WidgetIcon,
        url: null,
      },
      ...reporting
    ],
  },
  {
    type: "club",
    navigation: [
      {
        icon: WidgetIcon,
        url: "/engage",
      },
    ],
  }
];

const route = useRoute();

watch(route, () => {
  getNavList();
});

const getNavList = () => {
  const result = navList.find((data) => {
    if(route.name.includes('people-search')){
      return data.type === 'people-search';//temp hack workaround
    }
    return data.type === route.name;
  });
  if (result) {
    navItems.value = result.navigation;
    collapsed.value = true;
  } else {
    navItems.value = [];
    collapsed.value = false;
  }
};

const windowWidth = ref(null);

onMounted(async () => {
  windowWidth.value = window.innerWidth;
  await nextTick();
  window.addEventListener("resize", onResize);
  getNavList();
});

const onResize = () => {
  windowWidth.value = window.innerWidth;
};
</script>
