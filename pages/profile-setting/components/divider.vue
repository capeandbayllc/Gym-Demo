<template>
  <div class="divider w-5/6 ml-auto mr-auto mt-10 mb-10"></div>
</template>

<script>
export default {
  name: "divider"
}
</script>

<style scoped>
.divider {
  @apply border-b-2  border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
}
</style>
