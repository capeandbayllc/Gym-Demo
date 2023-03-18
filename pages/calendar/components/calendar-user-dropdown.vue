<template>
    <div
        class="absolute border border-secondary flex flex-col gap-3 py-3 rounded-2xl text-[0.6rem] font-light tracking-wider z-20 bg-[#191919]"
        :class="{
            'top-[55%] left-[55%]': isParent,
            'top-[-40%] left-[100%]': !isParent,
        }"
    >
        <span
            class="relative flex flex-row gap-10 justify-between px-3 py-2 hover:bg-secondary cursor-pointer calendar-style-transition min-w-[13vw]"
            v-for="option in calendarViewOptions"
        >
            <span>{{ option.name }}</span>
            <span v-if="option.children || option.list"
                ><ArrowIcon direction="right" class="my-auto"
            /></span>
            <!-- <div class="relative" v-if="option.children || option.list"> -->
            <CalendarUserDropdown
                :isParent="false"
                :calendarViewOptions="option.children"
                v-if="option.children"
            />
            <CalendarUserDropdown
                :isParent="false"
                :calendarViewOptions="option.list"
                v-if="option.list"
            />
            <!-- </div> -->
        </span>
    </div>
</template>

<script setup>
import CalendarUserDropdown from "./calendar-user-dropdown.vue";
import { ArrowIcon } from "~~/components/icons";

const props = defineProps({
    isParent: Boolean,
    calendarViewOptions: Array,
});
</script>

<style scoped>
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
