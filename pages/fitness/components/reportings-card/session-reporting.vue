<template>
  <div class="session-container">
    <label class="header block text-[14px] text-base-content text-left py-2"
      >Session Reporting</label
    >
    <member-search-list :columns="columns" :items="membersData" filter="id" />
  </div>
</template>
<script setup>
import MemberSearchList from "./member-session-list.vue";
import { useQuery } from "@vue/apollo-composable";
import location from "~/api/queries/location";

const props = defineProps({
  filter: {
    type: String,
    default: null,
  },
});
const columns = [
  {
    label: "Member",
    class: "text-secondary text-center w-[25%]",
  },
  {
    label: "Location",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Start Time",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "End Time",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Date Completed",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Session Type",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "",
    class: "text-secondary text-center w-[15%]",
  },
];
const membersData = ref([
  {
    id: 1,
    name: "Aya Buchanan",
    location: "",
    start: "01:23 PM",
    end: "02:23 PM",
    date: "02/01/2023",
    type: "PT",
    img_url: "chat-conversation/2.png",
  },
  {
    id: 2,
    name: "Sty Stance",
    location: "",
    start: "01:23 PM",
    end: "02:23 PM",
    date: "02/01/2023",
    type: "PT",
    img_url: "chat-conversation/3.png",
  },
  {
    id: 3,
    name: "Aya Buchanan",
    location: "",
    start: "Premium",
    end: "02:23 PM",
    date: "02/01/2023",
    type: "PT",
    img_url: "chat-conversation/4.png",
  },
  {
    id: 4,
    name: "Sty Stance",
    location: "",
    start: "Basic",
    end: "02:23 PM",
    date: "02/01/2023",
    type: "PT",
    img_url: "chat-conversation/2.png",
  },
  {
    id: 5,
    name: "Henny Owens",
    location: "",
    start: "Premium",
    end: "02:23 PM",
    date: "02/01/2023",
    type: "PT",
    img_url: "chat-conversation/3.png",
  },
  {
    id: 6,
    name: "Butch Eierra",
    location: "",
    start: "Premium",
    end: "02:23 PM",
    date: "02/01/2023",
    type: "PT",
    img_url: "chat-conversation/4.png",
  },
]);

const locationData = ref(null);
const { result } = useQuery(location.query.browse, { first: 1 });
watch(result, () => {
  locationData.value = result.value.locations.data[0];
  membersData.value.forEach((e) => {
    e.location = locationData.value.name;
  });
});
</script>
<style lang="postcss">
.session-container {
  @apply py-[10px] px-[20px] border-[2px] border-solid border-info-content rounded-[15px];
}
</style>
