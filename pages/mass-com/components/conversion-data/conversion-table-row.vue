<template>
  <tr>
    <td class="grid items-center justify-center">
      <img :src="data.src" alt="User Photo" />
    </td>
    <td>
      <div>{{ data.name }}</div>
    </td>
    <td>
      <div>{{ data.unit }}</div>
    </td>
    <td>
      <div>
        <membership-btn :membership="data.membership" />
      </div>
    </td>
    <td>
      <div>{{ data.revenue }}</div>
    </td>
  </tr>
</template>

<style scoped lang="postcss">
tr td {
  @apply border-b border-secondary px-4;
  > img {
    @apply p-1 rounded-2xl aspect-square max-h-12;
  }
  .conversion-title {
    @apply text-xl font-bold;
  }
}
</style>

<script setup>
import MembershipBtn from "@/components/buttons/membership-btn.vue";

const props = defineProps({
  data: Object,
});
</script>
