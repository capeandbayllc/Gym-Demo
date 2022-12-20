<template>
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81" height="19" viewBox="0 0 81 19">
	  <defs>
		<pattern :id="'pattern-pulse-' + id" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 920 221">
		  <image width="920" height="221" :href="iconPath"/>
		</pattern>
	  </defs>
	  <rect width="81" height="19" :fill="`url(#pattern-pulse-${id})`"/>
	</svg>
</template>
<script setup>
const props = defineProps({
	id: String,
	iconPath: String,
})
</script>