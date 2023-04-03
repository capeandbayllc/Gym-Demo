<template>
	<div class="">
		<div class="columns-header">
			<label v-for="column in columns" class="column-item" :class="column.class">
			{{ column.label }}
			</label>
		</div>
		<ul class="hours-list">
			<li v-for="item in items" :key="item.id" class="hours-row">
				<div class="flex text-center justify-evenly w-full">
					<label class="text-sm font-light">{{ item.hoursAsking }}</label>
				</div>
				<div class="flex text-center justify-evenly w-full">
          <label class="text-sm font-light">{{ item.dates }}</label>
				</div>
				<div class="flex text-center justify-evenly w-full">
          <label class="text-sm font-light">{{ item.dateSubmitted }}</label>
				</div>
				<div class="flex text-center justify-evenly w-full">
					<label class="text-sm capitalize">{{ item.status }}</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.columns-header {
  @apply text-[#0075c9] border-[#0075c9] border-b-[3px] py-[8px] px-[15px] mt-[15px] flex justify-evenly;
}
.hours-list{
  @apply mt-[5px] overflow-y-auto max-h-[230px]
}
.hours-row{
  @apply flex mt-[8px] bg-[#181916] border-2 border-[#0075c9] rounded-[10px] py-[8px] px-[15px] text-white h-[64px];
}
.hours-row label{
  @apply m-auto
}
</style>
<script setup>
const props = defineProps({
	columns: {
		type: Array,
		default: []
	},
	items: {
		type: Array,
		default: []
	}
});
</script>