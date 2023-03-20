<template>
    <div class="mx-auto mt-20 gradient-bg p-4 page-border md:w-3/4 lg:w-4/5">
      <div class="bg-black page-border">
          <div class="hierarchy-parent">
            <img src="/hierarchy-foreground.png" class="ml-auto mr-auto"/>
          </div>

        </div>
    </div>

</template>

<script>
export default {
  name: "hierarchy"
}
</script>

<style scoped>

.page-border {
  @apply border border-secondary rounded-2xl;
}

.min-height {
  height: 80%;
}

.browser-session {
  @apply text-center pt-2 pb-8;
  padding-left: 20px;
  padding-right: 20px;
  > button {
    @apply rounded btn-secondary text-base-content btn-sm capitalize rounded-xl text-base font-light w-auto;
    height: fit-content;
    padding-bottom: 4px;
    padding-top: 4px;
    white-space: break-spaces;
  }
}

.hierarchy-parent {
  @apply p-10 min-height;
  background-image: url('/hierarchy-background.png');
  border-radius: 1rem
}


</style>

<script setup>

</script>
