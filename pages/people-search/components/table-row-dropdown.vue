<template>
  <div class="dropdown dropdown-end">
    <!-- we're using a label here instead of button because of a safari bug, 
    more info on daisyUi docs @https://daisyui.com/components/dropdown/ -->
    <label tabindex="0" class="btn btn-ghost btn-sm text-base-content">
      <font-awesome-icon icon="ellipsis-h" size="lg" />
    </label>

    <ul tabindex="0" class="dropdown-content">
      <li v-for="item in items" :key="item.action">
        <button @click="$emit(item.action)">{{ item.label }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
ul {
  @apply menu gap-2 p-3 border border-primary shadow bg-base-300 rounded-lg w-fit items-start;

  li {
    @apply w-full whitespace-nowrap;
    button {
      @apply uppercase border w-full transition whitespace-nowrap rounded border-primary px-2 py-1 text-secondary;
      @apply hover:bg-base-content hover:text-base-300;
      @apply focus:bg-base-content focus:text-base-300;
      @apply motion-reduce:transition-none;
    }
  }
}
</style>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);

const props = defineProps({
  items: {
    type: Array,
    default: [
      { label: "+ Email", action: "email" },
      { label: "+ Call", action: "call" },
    ],
  },
});
</script>
