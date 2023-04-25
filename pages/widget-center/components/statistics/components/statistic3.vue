<template>
  <card
    title="Statistic Title"
    class="bg-base-300 text-base-content text-left"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <!-- <div class="px-2 py-4 text-sm element-card">
                <DetailList class="element-list" />
            </div> -->
      <div class="flex flex-col px-7 py-4">
        <div class="element-card">
          <div
            class="text-secondary flex justify pb-7 justify-between w-[100%] font-semibold"
          >
            <div class="ml-8">Title</div>
            <div class="mr-3">Statistic</div>
          </div>
          <div class="element-list mt-[-30px]">
            <div v-for="(item, k) in data" :key="k" class="element-item">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-success w-5 h-5 mr-3"
                />
                <div class="element-box" :class="item.boxColor">
                  {{ item.id }}
                </div>
                <div class="">{{ item.title }}</div>
              </div>
              <div>
                <p class="px-2 font-semibold rounded bg-base-100">
                  {{ item.statistic }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script setup>
import DetailList from "~/layouts/components/pulse-modal/partials/detail-list.vue";

const data = [
  {
    id: "01",
    checkbox: true,
    boxColor: "secondary",
    title: "UI Elements and Widgets",
    statistic: 3890,
  },
  {
    id: "02",
    checkbox: true,
    boxColor: "orange",
    title: "Creative Designer Assets",
    statistic: 4785,
  },
  {
    id: "03",
    checkbox: false,
    boxColor: "purple",
    title: "Designer Components",
    statistic: 9712,
  },
  {
    id: "04",
    checkbox: true,
    boxColor: "red",
    title: "UI Cards and Elements",
    statistic: 3993,
  },
  {
    id: "05",
    checkbox: true,
    boxColor: "secondary",
    title: "Dashboard Interface Design",
    statistic: 1972,
  },
];
</script>

<style scoped lang="postcss">
.element-card {
  @apply w-80 max-w-full mx-auto;

  ::-webkit-scrollbar {
    @apply w-0 h-0;
  }

  .element-list {
    @apply h-[280px] overflow-y-auto text-base-content;

    .element-item {
      @apply border-b border-base-100 flex justify-between items-center mb-[0px] py-5 text-sm;
    }

    .element-box {
      @apply font-bold text-sm w-8 h-8 flex items-center justify-center rounded-lg mr-3 bg-opacity-60;
    }
  }
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
