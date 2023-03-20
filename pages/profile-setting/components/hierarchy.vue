<template>
    <div class="mx-auto mt-20  md:w-3/4 lg:w-4/5">
      <div class="mb-5 ml-1">
        <h5 class="text-lg font-medium">
          Hierarchy Chart <LockIcon class="inline-block ml-2 -mt-2"/>
        </h5>
      </div>
      <div class="gradient-bg p-4 page-border">
        <div class="bg-black page-border">
          <div class="hierarchy-parent">
            <img src="/hierarchy-foreground.png" class="ml-auto mr-auto"/>
          </div>

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


.hierarchy-parent {
  @apply p-10 min-height;
  background-image: url('/hierarchy-background.png');
  border-radius: 1rem
}


</style>

<script setup>

import {LockIcon} from "../../../components/icons";

</script>
