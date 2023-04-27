<template>
  <div
    id="ppl-search"
    class="p-6 w-full max-w-7xl rounded-2xl border-2 border-secondary gr-gradient mt-8"
  >
    <div>
      <input
        type="text"
        placeholder="Search"
        class="input w-full max-w-md bg-secondary/50 text-primary-content text-lg"
        v-model="searchInput"
      />
    </div>

    <search-list @row-clicked="rowClicked" :filter="tblFilter"></search-list>
  </div>
</template>

<style lang="postcss">
.app-body-content:has(#ppl-search) {
  @apply pl-20 pr-4;
}
</style>

<script setup>
import SearchList from "./components/search-list.vue";
const router = useRouter();
const searchInput = ref("");
const tblFilter = ref(null);

const filterSelected = (value) => {
  tblFilter.value = value;
};

const rowClicked = (member) => {
  router.push({
    path: "/check-in",
    query: { id: member.id, preview: true },
  });
};
</script>
