<template>
  <div
    class="data-graph-container pb-2 border-2 border-secondary rounded-[15px] h-full"
  >
    <div class="flex items-center justify-between pt-2 px-4">
      <label
        class="header block text-xs whitespace-nowrap mr-2 text-base-content text-left"
        >Data Graph Analysis</label
      >
      <Listbox as="div" v-model="selected">
        <div class="relative">
          <ListboxButton
            class="relative w-full cursor-default rounded-md bg-transparent border border-secondary py-0 px-2 text-left text-base-content shadow-sm focus:outline-none sm:text-sm"
          >
            <span class="flex items-center justify-between cursor-pointer">
              <span class="block text-xs">{{
                Object.keys(selected).length > 0 ? selected.name : "Date Range"
              }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
              >
                <title>chevron-down</title>
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2 text-base-content"
            >
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-56 w-44 overflow-auto rounded-md bg-base-content py-1 text-base shadow-lg ring-1 ring-base-300 ring-opacity-5 focus:outline-none sm:text-xs"
            >
              <ListboxOption
                as="template"
                v-for="person in people"
                :key="person.id"
                :value="person"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active
                      ? 'bg-primary-focus text-base-content'
                      : 'text-neutral',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block',
                      ]"
                      >{{ person.name }}</span
                    >
                  </div>
                </li>
              </ListboxOption>
              <div
                class="text-right my-2 px-2 cursor-pointer"
                @click="selected = {}"
              >
                <span class="text-base-300">Clear list</span>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
    <div class="w-full">
      <AreaChart />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import {
  Switch,
  SwitchGroup,
  SwitchLabel,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import AreaChart from "./area-chart.vue";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    id: 1,
    name: "February 1-24, 2022",
  },
  {
    id: 2,
    name: "January 1-29, 2022",
  },
];

const selected = ref({});

const filters = ref({
  location: false,
  type: false,
  alert: false,
  segments: false,
});
</script>
