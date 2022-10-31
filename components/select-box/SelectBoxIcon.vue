<template>
    <span
        class="select-box-icon"
        :class="{
            'rotate-0': !isCollapsed,
            'rotate-180': isCollapsed,
        }"
    >
        <arrow-icon
            direction="down"
            :class="{
                color,
                'fill-base-content': !isCollapsed,
            }"
            :size="size"
        />
    </span>
</template>
<style scoped>
.select-box-icon {
	@apply transform transition transition-transform ml-2;
}
</style>
<script setup>
import { ArrowIcon } from "@/components/icons";
const props = defineProps({
    isCollapsed: {
        type: Boolean,
    },
    color: {
        type: String,
        default: "text-base-content",
    },
});
</script>
