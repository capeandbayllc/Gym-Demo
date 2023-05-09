<template>
  <club-card :title-icon="ClubRefSheetIcon" title="Club Reference Sheet">
    <club-ref-sheet-list :columns="columns" :items="locationsData.data" />
    {{ locationData }}
  </club-card>
</template>
<script setup>
import { ClubRefSheetIcon } from "~~/components/icons";
import ClubCard from "../club-card.vue";
import ClubRefSheetList from "./club-ref-sheet-list.vue";
import { request } from "~/api/utils/request";
import location from "~~/api/queries/location";

onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});

const columns = [
  {
    label: "Location",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Address",
    class: "text-secondary text-center w-[25%]",
  },
  {
    label: "Phone",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Manager",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Assent Manager",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: "Member Total",
    class: "text-secondary text-center w-[15%]",
  },
  {
    label: " ",
    class: "text-secondary text-center w-[15%]",
  },
];

const locationsData = ref([]);
request(location.query.browse).then(({ data }) => {
  locationsData.value = data.data.locations;
});
</script>
