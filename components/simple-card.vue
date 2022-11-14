<template>
    <div class="simple-card">
		<component
			:is="titleComponent"
			v-if="titleComponent"
			v-bind="$attrs"
		/>
	    <div class="simple-card-title" v-else-if="title">
			<div>
				{{title}}
			</div>
			<cross-icon v-if="closable" class="cursor-pointer" @click="$emit('close')"/>
		</div>
		<slot name="title" v-else />
		<slot />
    </div>
</template>
<style scoped>
.simple-card {
	@apply relative border border-secondary rounded bg-black;
	.simple-card-title {
		@apply flex items-center h-14 text-xl font-semibold px-6 text-base-content bg-secondary justify-between;
	}
}
</style>
<script setup>
import { CrossIcon } from './icons';
const props = defineProps({
	title: String,
	titleComponent: Object,
	closable: {
		type: Boolean,
		default: false
	}
})
</script>