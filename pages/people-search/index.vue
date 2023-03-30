<template>
  <div
    id="ppl-search"
    class="p-6 w-full max-w-7xl rounded-2xl border-2 border-secondary bg-gradient-to-b from-[#031222]/75 to-black mt-8"
  >
    <div>
      <input
        type="text"
        placeholder="Search"
        class="input w-2/4 bg-secondary/50 text-white text-lg"
        v-model="searchInput"
      />
    </div>

    <search-list @row-clicked="rowClicked" :filter="tblFilter"></search-list>
  </div>
</template>

<style>
.app-body-content:has(#ppl-search) {
  @apply px-20;
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
