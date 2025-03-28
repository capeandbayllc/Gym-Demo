<template>
  <ul class="detail-list">
    <div
      class="grid grid-cols-[5rem_1fr_5rem] capitalize justify-items-start text-secondary font-bold pl-2"
    >
      <span v-for="(head, ix) in headers" :key="`${head}_${ix}`">{{
        head.replace("_", "")
      }}</span>
    </div>
    <li
      class="grid grid-cols-[5rem_1fr_5rem] py-4 items-center"
      v-for="(row, idx) in items"
      :key="idx"
    >
      <span
        :class="row.colorClass"
        class="flex flex-col items-center justify-center aspect-square w-12 text-xl font-bold rounded-lg"
        >{{ fmtIndex(idx + 1) }}</span
      >

      <template v-for="(hdr, hdix) in headers" :key="hdix">
        <p
          v-if="hdr !== '_'"
          class="capitalize text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
          :class="{
            'flex flex-col items-center justify-center place-self-center bg-white/20 h-full w-full rounded-lg':
              hdr === 'amount',
          }"
        >
          {{ row[hdr] }}
        </p>
      </template>
    </li>
  </ul>
</template>

<style scoped>
.detail-list li:not(:first-of-type) {
  @apply border-t border-white/50;
}

.secondary {
  @apply bg-secondary/50 text-secondary;
}

.orange {
  @apply bg-orange-500/50 text-orange-500;
}

.purple {
  @apply bg-purple-500/50 text-purple-500;
}

.red {
  @apply bg-red-500/50 text-red-500;
}
</style>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: ["title", "_", "amount"],
  },
  data: {
    type: Array,
    default: [
      { title: "Membership Units Sold", amount: 20, colorName: "secondary" },
      { title: "Appointments", amount: 23, colorName: "orange" },
      { title: "Sold Amount ($)", amount: 430.25, colorName: "purple" },
      { title: "Sold Amount (%)", amount: 85, colorName: "red" },
      { title: "Percentage to Goal", amount: 75, colorName: "secondary" },
    ],
  },
});

const colorLists = {};
const items = computed(() =>
  props.data.map((item) => {
    if (item.colorName === undefined) {
      item.colorName = "secondary"; // default color scheme
    }

    if (colorLists[item.title] === undefined) {
      colorLists[item.title] = item.colorName;
    }

    return Object.assign({}, { colorClass: colorLists[item.title] }, item);
  })
);

const fmtIndex = (ix = 0) => {
  return `${ix}`.length === 1 ? `0${ix}` : ix;
};
</script>
