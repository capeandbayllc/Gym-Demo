<template>
  <!-- <div class="pulse-modal-border">
		<div class="pulse-modal-container">
			<pulse-summary />
			<div class="pulse-icon">
				<img src="/pulse-logo.svg" alt="" class="w-20 h-5">
			</div>
		</div>
	</div> -->
  <div
    class="border-4 border-white rounded-3xl z-10 p-8 outline-[1rem] outline-secondary outline relative bg-black"
  >
    <pulse-summary />
    <div class="">
      <img src="/pulse-logo.svg" alt="" class="m-auto" />
    </div>
    <div
      class="absolute h-full w-full bg-gradient-to-t from-secondary/10 to-secondary/50 top-0 left-0 rounded-3xl -z-[1]"
    ></div>
  </div>
</template>
<style scoped>
/* .pulse-modal-border {
  @apply border-8 rounded-lg border-secondary w-full;
  box-shadow: 0 0 16px 4px hsl(var(--s, var(--nc)));
}
.pulse-modal-container {
  @apply flex flex-col p-5 xl:p-10 border-4 rounded-lg shadow-lg justify-center bg-neutral space-y-10;
  margin: -3px;
}
.pulse-icon {
  @apply flex justify-center;
  transform: scale(2);
} */
</style>
<script setup>
import PulseSummary from "./pulse-summary.vue";
</script>
