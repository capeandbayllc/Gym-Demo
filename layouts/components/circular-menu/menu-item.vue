<template>
	<NuxtLink
		class="menu-item"
		:to="url"
		:style="`transform: rotate(${rotation}deg) translate(18vw) scale(${scale})`"
		@click="toggleMenu"
	>
		<component
			:is="icon"
			:style="`transform: rotate(${-rotation}deg)`"
		/>
	</NuxtLink>
</template>
<style scoped>
.menu-item {
  @apply absolute rounded-full text-center bg-neutral flex items-center justify-center border-4 border-secondary z-10;
  width: 4vw;
  height: 4vw;
  top: 18vw;
  right: 18vw;
}
</style>
<script setup>
const props = defineProps({
	url: String,
	icon: Object,
	rotation: Number,
	scale: {
		type: Number,
		default: .75
	}
})
const emit = defineEmits(['toggleMenu']);

const toggleMenu = () => {
	emit('toggleMenu');
}
</script>