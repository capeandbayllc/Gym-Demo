<template>
  <ul class="item-grid-list">
    <div
      class="grid grid-cols-[5rem_1fr_5rem] capitalize justify-items-start text-secondary font-bold pl-2"
    >
      <div
        class="hidden bg-purple-500/50 text-purple-500 bg-secondary/50 text-secondary bg-orange-500/50 text-orange-500 bg-red-500/50 text-red-500"
      />
      <span v-for="(head, ix) in headers" :key="`${head}_${ix}`">{{
        head.replace("_", "")
      }}</span>
    </div>
    <li
      class="grid grid-cols-[5rem_1fr_5rem] py-4 items-center"
      v-for="(row, idx) in data"
      :key="idx"
    >
      <span
        :class="getColor(idx)"
        class="flex flex-col items-center justify-center aspect-square w-12 text-xl font-bold rounded-lg"
        >{{ idx }}</span
      >

      <template v-for="(hdr, hdix) in headers" :key="hdix">
        <p
          v-if="hdr !== '_'"
          class="capitalize text-lg font-semibold"
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
.item-grid-list li:not(:first-of-type) {
  @apply border-t border-white/50;
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
      { title: "Membership Units Sold", amount: 20 },
      { title: "Appointments", amount: 23 },
      { title: "Sold Amount ($)", amount: 430.25 },
      { title: "Sold Amount (%)", amount: 85 },
      { title: "Percentage to Goal", amount: 75 },
    ],
  },
  indexColors: {
    type: Array,
    default: ["secondary", "orange", "purple", "red"],
  },
});

function getColor(ix = 0) {
  let colorIx = ix % props.indexColors.length;
  if (props.indexColors[colorIx] === "secondary")
    return `bg-secondary/50 text-secondary`;
  return `bg-${props.indexColors[colorIx]}-500/50 text-${props.indexColors[colorIx]}-500`;
}
</script>
