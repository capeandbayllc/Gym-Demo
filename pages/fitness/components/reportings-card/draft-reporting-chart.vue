<template>
  <div class="percentage-container p-4">
    <div class="flex relative items-center justify-between mb-4">
      <label class="header block text-[14px] py-2 whitespace-nowrap mr-2"
        >Drafting Report</label
      >
      <FormFilterButton>
        <template v-slot:filters>
          <div class="flex space-x-5">
            <SwitchGroup as="div" class="flex items-center">
              <Switch
                v-model="filters.location"
                class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                  ]"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    filters.location
                      ? 'translate-x-5 bg-secondary border-secondary'
                      : 'translate-x-0 bg-neutral-content border-neutral-content',
                    'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                  ]"
                />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span
                  class="font-medium"
                  :class="
                    filters.location ? 'text-secondary' : 'text-neutral-content'
                  "
                  >Location</span
                >
              </SwitchLabel>
            </SwitchGroup>

            <SwitchGroup as="div" class="flex items-center">
              <Switch
                v-model="filters.type"
                class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                  ]"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    filters.type
                      ? 'translate-x-5 bg-secondary border-secondary'
                      : 'translate-x-0 bg-neutral-content border-neutral-content',
                    'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                  ]"
                />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span
                  class="font-medium"
                  :class="
                    filters.type ? 'text-secondary' : 'text-neutral-content'
                  "
                  >Type</span
                >
              </SwitchLabel>
            </SwitchGroup>

            <SwitchGroup as="div" class="flex items-center">
              <Switch
                v-model="filters.alert"
                class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                  ]"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    filters.alert
                      ? 'translate-x-5 bg-secondary border-secondary'
                      : 'translate-x-0 bg-neutral-content border-neutral-content',
                    'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                  ]"
                />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span
                  class="font-medium"
                  :class="
                    filters.alert ? 'text-secondary' : 'text-neutral-content'
                  "
                  >Alert</span
                >
              </SwitchLabel>
            </SwitchGroup>

            <SwitchGroup as="div" class="flex items-center">
              <Switch
                v-model="filters.segments"
                class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                  ]"
                />
                <span
                  aria-hidden="true"
                  :class="[
                    filters.segments
                      ? 'translate-x-5 bg-secondary border-secondary'
                      : 'translate-x-0 bg-neutral-content border-neutral-content',
                    'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                  ]"
                />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span
                  class="font-medium"
                  :class="
                    filters.segments ? 'text-secondary' : 'text-neutral-content'
                  "
                  >Segments</span
                >
              </SwitchLabel>
            </SwitchGroup>
          </div>
        </template>
      </FormFilterButton>
    </div>
    <div class="percent-item grid grid-cols-1">
      <AreaChart class="w-full" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.percentage-container {
  @apply py-[10px] px-[20px] border-[2px] border-solid rounded-[15px] border-info-content;
}
.header {
  @apply text-base-content text-left;
}
</style>
<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import AreaChart from "./area-chart.vue";
const filters = ref({
  location: false,
  type: false,
  alert: false,
  segments: false,
});
</script>
