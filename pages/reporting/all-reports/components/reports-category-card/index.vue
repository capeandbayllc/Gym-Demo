<template>
  <div class="card-container">
    <div class="card-header">
      <div class="all-reports-search">
        <input
          class="search-input"
          type="text"
          placeholder="Search All Reports"
        />
      </div>
      <div class="actual-category">
        {{ actualCategory }}
      </div>
    </div>
    <div class="card-content">
      <div class="categories-container">
        <div class="section" v-for="(section, i) in categories" :key="i">
          <div
            v-for="(category, j) in section"
            :key="j"
            @click="actualCategory = category"
            class="item"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-auto w-full py-[8px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left;
  .card-title-container {
    @apply flex justify-between items-center;
  }
  .card-header {
    @apply h-[100px] flex flex-col justify-between;
    .all-reports-search {
      @apply min-h-[30px] p-4;
      .search-input {
        @apply min-w-full min-h-[32px] rounded-[10px] bg-neutral-content/40 text-base-content float-right py-[2px] px-[10px] transition-all duration-300 text-[16px] !tracking-normal;
      }
      .search-input:hover,
      .search-input:focus {
        @apply bg-neutral-content/70;
      }
      .search-input:focus {
        box-shadow: none;
        outline: none;
      }
    }
    .actual-category {
      @apply bg-secondary py-1 px-8 font-light;
    }
  }
  .card-content {
    @apply h-full;
    .section {
      @apply border-b border-base-content/30;
      .item {
        @apply my-1 py-1 px-8 font-light cursor-pointer;
      }
    }
    .section:last-child {
      @apply border-b-0;
    }
    .header-selected {
      @apply bg-secondary font-semibold;
    }
    .categories-container {
      @apply overflow-auto w-full;
      height: calc(70vh - 120px);
    }
  }
}
</style>
<script setup>
var actualCategory = ref("My Reports");
var categories = [
  [
    "My Reports",
    "All Reports",
    "Favorites",
    "Recently Viewed",
    "Scheduled Reports",
    "Recently Deleted",
    "Report Queue",
  ],
  [
    "Campaign Reports",
    "Communication Reports",
    "Email Reports",
    "Financial Reports",
    "Fitness Reports",
    "Lead Reports",
    "Member Reports",
    "People Reports",
  ],
];
</script>
