<template>
	<NuxtLink class="nav-item" :to="url">
		<component :is="icon"/>
		<span v-if="url" class="nav-item-label">{{ label }}</span>
	</NuxtLink>
</template>
<style scoped>
.nav-item {
	@apply flex w-full h-16 items-center justify-center cursor-pointer;
}
.nav-item:hover .nav-item-label {
	@apply flex h-9 w-fit left-0 px-4 text-sm font-semibold items-center text-base-content;
}
.nav-item:hover {
	@apply text-secondary;
}
.nav-item-label {
	@apply bg-secondary-focus absolute hidden;
}
</style>
<script setup>
const props = defineProps({
	label: String,
	icon: Object,
	url: String
})
</script>