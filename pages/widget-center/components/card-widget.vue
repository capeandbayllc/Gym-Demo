<template>
  <card
    :title="title"
    :options="{ favorite: false, collapse: true }"
    class="statistics-card"
  >
    <template #summary>
      <div class="statistics-info">
        <slot name="summary"></slot>
      </div>
    </template>
    <template #content>
      <div class="statistics-info">
        <div>
          <slot name="content"></slot>
        </div>
        <button
          v-if="buttonText != ''"
          class="absolute right-[10px] bottom-[-10px] text-white text-right my-4 slim-text text-[0.7rem]"
          :class="buttonSecondary ? 'bg-secondary px-3 rounded py-1' : ''"
        >
          {{ buttonText }}
        </button>
      </div>
    </template>
  </card>
</template>
<style lang="postcss">
.statistics-card {
  @apply w-full h-[380px] flex flex-col;
  .total-sale {
    @apply text-secondary tracking-wider font-normal text-4xl mb-6 flex justify-center items-center;
  }
  .total-symbol {
    @apply text-[30px] inline-block align-top;
  }
  .statistics-info {
    @apply p-4;
    .statistics-list {
      @apply flex flex-col space-y-2;
      div {
        @apply text-secondary text-sm;
      }
    }
    .statistics-sum-up {
      @apply flex flex-row justify-between text-lg font-bold text-secondary;
    }
  }
}
.assessments-chart {
  @apply border-[2px] border-secondary rounded-[15px];
}
.status-div {
  @apply m-auto flex w-full;
}
.status-div span {
  @apply text-base-content pl-[2px] text-[11px];
}
.circled-div {
  @apply w-[14px] h-[14px] rounded-full my-auto mx-[3px];
}
.statistic-icon {
  @apply w-[40px];
}

.slim-text {
  @apply tracking-wider font-light;
}
</style>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  buttonSecondary: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: "View more",
  },
});
</script>
