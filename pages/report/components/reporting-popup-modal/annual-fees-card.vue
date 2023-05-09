<template>
  <card
    title="Annual Fees"
    class="annual-fees-card"
    :options="{
      collapse: false,
      favorite: false,
    }"
  >
    <template #content>
      <div class="card-content">
        <div class="grid grid-cols-2 gap-4 space-x-8 mb-2 mt-5">
          <daisy-select
            :label="'Months'"
            :class="'select-bordered select-primary'"
            :items="month"
          >
          </daisy-select>
        </div>
        <div class="amount-input mt-6">
          <label>Amount:</label>
          <input
            disabled
            class="outline-input"
            placeholder=""
            value="$276.78"
          />
        </div>
        <div class="py-4">
          <annual-fee-chart :data="chartValue" />
        </div>
      </div>
    </template>
  </card>
</template>
<script setup>
import AnnualFeeChart from "./annual-fee-chart.vue";
const chartValue = [
  {
    name: "series1",
    data: [118, 100, 112, 130, 125, 145, 138],
  },
  {
    name: "series2",
    data: [52, 55, 50, 77, 87, 108, 125],
  },
  {
    name: "series3",
    data: [75, 51, 45, 40, 56, 112, 150],
  },
];

const month = [
  {
    id: 1,
    label: "January",
    value: "January",
  },
  {
    id: 2,
    label: "February",
    value: "February",
  },
  {
    id: 3,
    label: "March",
    value: "March",
  },
  {
    id: 4,
    label: "April",
    value: "April",
  },
  {
    id: 5,
    label: "May",
    value: "May",
  },
  {
    id: 6,
    label: "June",
    value: "June",
  },
  {
    id: 7,
    label: "July",
    value: "July",
  },
  {
    id: 8,
    label: "August",
    value: "August",
  },
  {
    id: 9,
    label: "September",
    value: "September",
  },
  {
    id: 10,
    label: "October",
    value: "October",
  },
  {
    id: 11,
    label: "November",
    value: "November",
  },
  {
    id: 12,
    label: "December",
    value: "December",
  },
];
</script>
<style scoped>
.annual-fees-card {
  .card-content {
    @apply items-center border-t border-base-content/50 mt-2 h-full;
  }
  .card-actions {
    @apply space-x-8 mb-2 mt-5;
  }
  .amount-input {
    label {
      @apply text-sm text-secondary mr-2;
    }
    .outline-input {
      @apply bg-transparent border border-secondary rounded-md px-3 py-1 w-36;
    }
  }
  .reporting-select {
    background: #fff;
    color: #000;
  }
}
</style>
