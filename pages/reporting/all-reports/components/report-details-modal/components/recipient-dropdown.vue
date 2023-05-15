<template>
  <div class="dropdown">
    <div class="dropdown-container">
      <button class="absolute right-[11px] top-[13px]" @click="emit('close')">
        <cross-icon class="h-[15px]" />
      </button>

      <div class="flex justify-between text-[12px] items-center px-5">
        <div class="flex gap-2">
          <button
            :class="{ 'text-secondary': nameOptionSelected == 'first' }"
            @click="nameOptionSelected = 'first'"
          >
            First
          </button>
          <button
            :class="{ 'text-secondary': nameOptionSelected == 'lastName' }"
            @click="nameOptionSelected = 'lastName'"
          >
            Last name
          </button>
        </div>
        <div class="border-r border-white h-4"></div>
        <div class="flex gap-2">
          <button
            :class="{ 'text-secondary': orderOptionSelected == 'A-Z' }"
            @click="orderOptionSelected = 'A-Z'"
          >
            A-Z
          </button>
          <button
            :class="{ 'text-secondary': orderOptionSelected == 'Z-A' }"
            @click="orderOptionSelected = 'Z-A'"
          >
            Z-A
          </button>
        </div>
      </div>

      <div class="dropdown-selected" v-if="memberSelected">
        <div
          class="dropdown-circle"
          :class="`bg-${memberSelected.color}`"
        ></div>
        <span
          >{{ memberSelected.first_name }} {{ memberSelected.last_name }}</span
        >
      </div>

      <div class="dropdown-selection">
        <button
          class="dropdown-item"
          v-for="member in members"
          :class="{
            'dropdown-item-selected': memberSelected
              ? member.id == memberSelected.id
              : false,
          }"
          :key="member.id"
          @click="memberSelected = member"
        >
          <div class="dropdown-circle" :class="`bg-${member.color}`"></div>
          {{ member.first_name }} {{ member.last_name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropdown {
  @apply absolute top-[28px] right-[0px] h-auto z-[60];
  .dropdown-container {
    @apply bg-base-300 border-secondary border text-base font-normal rounded-2xl pt-8 w-[220px] relative;
    .dropdown-selection {
      @apply max-h-[220px] overflow-y-auto;
      .dropdown-item {
        @apply px-4 mb-2 py-[4px] w-full cursor-pointer flex items-center gap-3;
      }
      .dropdown-item-selected {
        @apply bg-secondary font-semibold;
        .dropdown-circle {
          @apply hidden;
        }
      }
    }
    .dropdown-selected {
      @apply bg-secondary m-3 rounded-lg p-1 px-2 font-semibold flex items-center gap-4;
    }
    .dropdown-circle {
      @apply w-[19px] h-[19px] rounded-full;
    }
  }
}
</style>

<script setup>
import member from "~/api/queries/member";
import { getRandomInt } from "~/api/utils/number";
import { useQuery } from "@vue/apollo-composable";
import { CrossIcon } from "~/components/icons";

const colors = [
  "primary",
  "primary-focus",
  "secondary",
  "secondary-focus",
  "accent-focus",
  "warning",
  "success",
  "error",
];

const emit = defineEmits(["close"]);

const memberSelected = ref(null);
const members = ref([]);
const { result: memberResult } = useQuery(member.query.browse, { first: 50 });
watchEffect(() => {
  if (!memberResult.value) return;
  memberResult.value.members.data.forEach((member) => {
    members.value.push({
      ...member,
      name: `${member.first_name} ${member.last_name}`,
      color: colors[getRandomInt(colors.length - 1)],
    });
  });
  console.log("members.value");
  console.log(members.value);
});

const nameOptionSelected = ref("first");
const orderOptionSelected = ref("A-Z");
</script>
