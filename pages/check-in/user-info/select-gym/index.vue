<template>
  <div :class="modalClass">
    <simple-card :rounded-md="true" class="select-gym">
      <div class="flex px-4 pt-4 ml-2 mr-4 justify-between">
        <p class="text-xl">Select a Gym</p>
        <select-box
          :items="cities"
          label="Florida"
          :showSearch="false"
          :showClearList="false"
          :bgSecondaryOpened="false"
          @onChange=""
          classButton="my-[5px] mx-[10px]"
          class="bg-base-100 text-base-content rounded-[10px] max-w-[200px]"
        >
        </select-box>
      </div>
      <div
        class="w-[600px] gap-4 grid grid-cols-2 p-4 my-5 h-[400px] overflow-auto m-2 width-full"
      >
        <div class="card-gym" v-for="(gym, index) in locations" :key="index">
          <p class="font-semibold mb-[6px]">{{ gym.name }}</p>
          <div class="min-h-[61px] flex justify-between">
            <p class="font-light mb-4 max-w-[154px] text-[18.5px]">
              {{ gym.state }}, {{ gym.city }}, {{ gym.address1 }}
            </p>
            <div class="h-auto flex items-end">
              <Button
                size="sm"
                class="rounded-[10px]"
                secondary
                @click="selectGym(gym)"
                >Join Now</Button
              >
            </div>
          </div>
          <div class="flex justify-between items-center pt-[19px] pb-[5px]">
            <p class="font-light text-[18.5px]">{{ gym.phone }}</p>
            <div class="flex font-light justify-between text-[14px]">
              <a href="#">More Information</a>
            </div>
          </div>
        </div>
      </div>
    </simple-card>
    <slot></slot>
  </div>
</template>
<style scoped lang="postcss">
.select-gym {
  @apply bg-gradient-to-b from-secondary to-base-300;
}
.card-gym {
  @apply bg-gradient-to-b from-secondary to-base-300 bg-secondary bg-blend-darken py-[14px] px-[16px] rounded-[14px] border border-secondary;
}
</style>
<script setup>
import { useQuery } from "@vue/apollo-composable";
import location from "~/api/queries/location";

const emit = defineEmits(["selectGym"]);
function selectGym(location) {
  emit("selectGym", location);
}

const locations = ref([]);

const { result } = useQuery(location.query.browse);
watchEffect(() => {
  console.log(result);
  if (!result.value?.locations) return;
  locations.value = result.value.locations.data;
});

const props = defineProps({
  modalClass: {
    type: String,
  },
});

const city = ref("");
const cities = ref([
  {
    label: "Florida",
    value: "florida",
  },
  {
    label: "California",
    value: "california",
  },
]);
</script>
