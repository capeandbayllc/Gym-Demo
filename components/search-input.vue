<template>
    <div class="search-input-wrapper">
        <input
            :class="{
                'search-input': true,
				'border-secondary': border === 'secondary',
                'h-6 text-sm': size === 'xs',
                'h-7 text-base': size === 'sm',
                'search-input-lg text-lg': size === 'lg',
            }"
            :placeholder="placeholder"
            v-model="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
<style scoped>
.search-input {
    @apply rounded border overflow-hidden px-2 text-right bg-secondary;
}
.search-input-lg {
	height: 34px;
}

.search-input:hover,
.search-input:focus {
    @apply text-left outline-0 bg-transparent;
}

.search-input-wrapper {
	@apply flex items-center relative w-fit;
}

.search-submit {
    font-size: 1.5rem;
    margin-left: auto;
    background: 0;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: background 200ms ease-out;
    width: calc(var(--size) - 10px);
    height: calc(var(--size) - 10px);
    color: var(--clr-body);
}
</style>
<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: "Search",
    },
    size: {
        type: String,
        default: "sm",
    },
	border: {
		type: String,
		default: "secondary",
	},
    modelValue: String
})
</script>
