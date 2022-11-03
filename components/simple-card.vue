<template>
    <div class="simple-card">
	    <div class="simple-card-title">
			{{title}}
		</div>
		<slot />
    </div>
</template>
<style scoped>
.simple-card {
	@apply border border-secondary rounded bg-black;
	.simple-card-title {
		@apply flex items-center h-14 text-xl font-semibold pl-6 text-base-content bg-secondary;
	}
}
</style>
<script setup>
const props = defineProps({
	title: String,
	closable: {
		type: Boolean,
		default: false
	}
})
</script>