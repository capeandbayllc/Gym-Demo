<template>
  <ul class="item-grid-list">
    <div
      class="grid capitalize justify-items-start text-secondary font-bold pl-2"
      :class="'grid-cols-[' + spacings.join('_') + ']'"
    >
      <span v-for="(head, ix) in headers" :key="`${head}_${ix}`">{{
        head.replace("_", "")
      }}</span>
    </div>
    <li
      class="grid py-4 items-center"
      :class="'grid-cols-[' + spacings.join('_') + ']'"
      v-for="(row, idx) in data"
      :key="idx"
    >
      <span
        :class="{
          'bg-secondary/40 text-secondary': idx % 4 === 0,
          'bg-orange-500/40 text-orange-500': idx % 4 === 1,
          'bg-purple-500/40 text-purple-500': idx % 4 === 2,
          'bg-red-500/40 text-red-400': idx % 4 === 3,
        }"
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
  spacings: {
    type: Array,
    default: ["5rem", "1fr", "5rem"],
  },
  data: {
    type: Array,
    default: [
      { title: "Membership Units Sold", amount: 20 },
      { title: "Appointments", amount: 23 },
      { title: "Sold Amount ($)", amount: 430.25 },
      { title: "Sold Amount (%)", amount: 85 },
    ],
  },
  indexColors: {
    type: Array,
    default: ["secondary", "orange", "purple", "red"],
  },
});

// doesn't seem to work and I don't know why so it's a static 4 colors for now.
// const itemColorClasses = ref([]);

// onMounted(() => {
//   const ixLen = props.indexColors.length;
//   const rowCount = props.data.length;

//   for (let i = 0; i < rowCount; i++) {
//     let colorIx = i % ixLen;
//     itemColorClasses.value.push(
//       `bg-${props.indexColors[colorIx]}-500/50 text-${props.indexColors[colorIx]}`
//     );
//   }
// });
</script>
