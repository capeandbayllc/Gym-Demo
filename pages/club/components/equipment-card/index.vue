<template>
  <club-card :title-icon="EquipmentIcon" title="Equipment">
    <equipment-list :clubItems="clubItems"></equipment-list>
  </club-card>
</template>
<script setup>
import { EquipmentIcon } from "~~/components/icons";
import ClubCard from "../club-card.vue";
import EquipmentList from "./equipment-list.vue";
import { request } from "~/api/utils/request";
import location from "~/api/queries/location";

onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});
const clubItems = ref({
  club_name: "",
  items: [
    {
      id: 1,
      type: "Treadmills",
      quantity: 25,
    },
    {
      id: 2,
      type: "Stationary Bikes",
      quantity: 20,
    },
    {
      id: 3,
      type: "Ellipticals",
      quantity: 25,
    },
    {
      id: 4,
      type: "Stairmasters",
      quantity: 15,
    },
    {
      id: 5,
      type: "Dumbbel Sets",
      quantity: 30,
    },
  ],
});
const locationData = ref(null);
request(location.query.browse, { first: 1 }).then(({ data }) => {
  locationData.value = data.data.locations.data[0];
  clubItems.value.club_name = locationData.value.name;
});
</script>
