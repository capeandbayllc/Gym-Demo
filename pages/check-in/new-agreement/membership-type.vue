<template>
  <simple-card
    title="Select your membership type below:"
    class="max-h-[70vh] overflow-auto"
  >
    <div class="px-10 relative">
      <div
        class="shadow-layer absolute z-[1] gradient-bg overflow-auto right-10 rounded-[18px] top-[100px] bottom-0"
      ></div>
      <table
        class="w-full membership-table relative z-[10] border-separate border-spacing-0 mb-5"
      >
        <thead>
          <tr class="text-center">
            <th></th>
            <th>
              <div
                class="py-2 m-1 border border-secondary rounded-md gradient-bg"
              >
                <b>Bronze</b>
                <p>$9.99</p>
                <p>Per month</p>
              </div>
            </th>
            <th>
              <div
                class="py-2 m-1 border border-secondary rounded-md gradient-bg"
              >
                <b>Silver</b>
                <p>$14.99</p>
                <p>Per month</p>
              </div>
            </th>
            <th>
              <div
                class="py-2 m-1 border border-secondary rounded-md gradient-bg"
              >
                <b>Gold</b>
                <p>$21.99</p>
                <p>Per month</p>
              </div>
            </th>
            <th>
              <div
                class="py-2 m-1 border border-secondary rounded-md gradient-bg"
              >
                <b>Platinum</b>
                <p>$25.99</p>
                <p>Per month</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="relative">
          <tr v-for="(item, index) in membershipTable" :key="index">
            <td
              class="border-b border-secondary py-3 align-bottom"
              :class="index == 0 ? '!border-r-0' : ''"
            >
              {{ item.label }}
            </td>
            <td
              class="border border-secondary py-3 text-center"
              :class="index == 0 ? '!border-solid top-left-corner' : ''"
            >
              <CheckCircleIcon
                v-if="item.bronze == true"
                class="inline-block"
              />
              <Button
                v-else-if="item.bronze == 'select'"
                secondary
                size="sm"
                class="my-5"
                >Select</Button
              >
              <span v-else>
                <span v-if="item.bronze != false"> {{ item.gold }} </span>
              </span>
            </td>
            <td
              class="border border-secondary py-3 text-center"
              :class="index == 0 ? '!border-solid !border-l-0' : ''"
            >
              <CheckCircleIcon
                v-if="item.silver == true"
                class="inline-block"
              />
              <Button
                v-else-if="item.silver == 'select'"
                secondary
                size="sm"
                class="my-5"
                >Select</Button
              >
              <span v-else>
                <span v-if="item.silver != false"> {{ item.gold }} </span>
              </span>
            </td>
            <td
              class="border border-secondary py-3 text-center"
              :class="index == 0 ? '!border-solid' : ''"
            >
              <CheckCircleIcon v-if="item.gold == true" class="inline-block" />
              <Button
                v-else-if="item.gold == 'select'"
                secondary
                size="sm"
                class="my-5"
                >Select</Button
              >
              <span v-else>
                <span v-if="item.gold != false"> {{ item.gold }} </span>
              </span>
            </td>
            <td
              class="border border-secondary py-3 text-center"
              :class="index == 0 ? '!border-solid top-right-corner' : ''"
            >
              <CheckCircleIcon
                v-if="item.platinum == true"
                class="inline-block"
              />
              <Button
                v-else-if="item.platinum == 'select'"
                secondary
                size="sm"
                class="my-5"
                >Select</Button
              >
              <span v-else>
                <span v-if="item.platinum != false"> {{ item.platinum }} </span>
              </span>
            </td>
          </tr>
          <tr>
            <td
              class="text-secondary border border-secondary py-3 align-top !border-b-0 !border-r-0"
            >
              Total Due Today
            </td>
            <td
              class="text-secondary border border-secondary py-3 text-center bottom-left-corner"
            >
              <p class="mb-6">$0.00</p>
              <Button secondary size="sm">Select</Button>
            </td>
            <td class="text-secondary border border-secondary py-3 text-center">
              <p class="mb-6">$0.00</p>
              <Button secondary size="sm">Select</Button>
            </td>
            <td class="text-secondary border border-secondary py-3 text-center">
              <p class="mb-6">$0.00</p>
              <Button secondary size="sm">Select</Button>
            </td>
            <td
              class="text-secondary border border-secondary py-3 text-center bottom-right-corner"
            >
              <p class="mb-6">$0.00</p>
              <Button secondary size="sm">Select</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </simple-card>
</template>

<script setup>
import { CheckCircleIcon } from "@/components/icons";
const membershipTable = ref([
  {
    label: "Month-to-Month",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    label: "Open 24 hours a Day",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    label: "Access to Cardio & Strength Equipment",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    label: "Complimentary Welcome Workout",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    label: "Swimming Pool and Hot Tub",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    label: "Group Fitness Classes",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    label: "Personal Trainer",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    label: "Summary of Fees",
    bronze: "select",
    silver: "select",
    gold: "select",
    platinum: "select",
  },
  {
    label: "Enrollment Fee",
    bronze: "$0.00",
    silver: "$0.00",
    gold: "$0.00",
    platinum: "$0.00",
  },
  {
    label: "Taxes",
    bronze: "$0.00",
    silver: "$0.00",
    gold: "$0.00",
    platinum: "$0.00",
  },
  {
    label: "Monthly Dues",
    bronze: "$0.00",
    silver: "$0.00",
    gold: "$0.00",
    platinum: "$0.00",
  },
  {
    label: "Pro-rated",
    bronze: "$0.00",
    silver: "$0.00",
    gold: "$0.00",
    platinum: "$0.00",
  },
  {
    label: "Taxes",
    bronze: "$0.00",
    silver: "$0.00",
    gold: "$0.00",
    platinum: "$0.00",
  },
  {
    label: "Annual Fee",
    bronze: "$0.00",
    silver: "$0.00",
    gold: "$0.00",
    platinum: "$0.00",
  },
]);
</script>

<style scoped lang="postcss">
.membership-table tbody tr th,
.membership-table tbody tr td {
  @apply px-4;
}
.membership-table tbody tr td {
  @apply border border-solid border-t-0 border-l-0;
}
.membership-table thead tr th:not(:first-child) {
  @apply w-[7rem];
}
.shadow-layer {
  @apply w-[28rem];
}
.top-left-corner {
  @apply rounded-tl-[20px] border-t border-l;
}
.top-right-corner {
  @apply rounded-tr-[20px] border-l-0;
}
.bottom-left-corner {
  @apply rounded-bl-[20px] border-b border-l;
}
.bottom-right-corner {
  @apply rounded-br-[20px] border-l-0;
}
</style>
