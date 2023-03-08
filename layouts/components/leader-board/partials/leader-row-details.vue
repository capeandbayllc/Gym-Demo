<template>
  <tr>
    <!-- rank & trend -->
    <td>
      <div>{{ leader.rank }}</div>
    </td>

    <!-- name -->
    <td>{{ leader.name }}</td>

    <!-- points -->
    <td>
      <span>{{ leader.unitSold }} PTS</span>
    </td>

    <!-- details button -->
    <td>
      <button @click="handleMoreDetails">
        <ArrowIcon :direction="detailsVisible ? 'down' : 'up'" />
      </button>
    </td>
  </tr>
  <template v-if="detailsVisible">
    <tr colspan="4" class="py-2 border-y-2 border-white w-full">
      <td colspan="4">
        <div class="bg-secondary flex flex-col w-full min-h-[5rem]">
          <p>{{ leader.overall }}</p>
        </div>
      </td>
    </tr>
  </template>
</template>

<script setup>
import { ArrowIcon } from "~~/components/icons";

const props = defineProps({
  leader: {
    type: [Object, null],
    default: null,
  },
  contextId: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["details"]);

const detailsVisible = computed(() => {
  return props.contextId === props.leader.rank; // rank as a surrogate id
});

const handleMoreDetails = () => {
  emit("details", props.leader);
};
</script>
