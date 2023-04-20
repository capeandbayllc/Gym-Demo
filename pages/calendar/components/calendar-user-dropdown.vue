<template>
    <div
        class="absolute border border-secondary flex flex-col py-3 rounded-2xl text-[0.6rem] font-light tracking-wider bg-base-100 calendar-style-transition"
        :class="{
            'top-[55%] left-[55%]': isParent,
            'top-[-40%] left-[99.5%]': !isParent,
            'opacity-0 -z-20': !showCalendarUserDropDown,
            'opacity-100 z-20': showCalendarUserDropDown,
        }"
    >
        <span
            class="relative flex flex-row gap-10 justify-between px-3 py-2 hover:bg-secondary cursor-pointer calendar-style-transition min-w-[13vw]"
            :class="{
                'bg-secondary': currentSelect === index,
            }"
            v-for="(option, index) in calendarViewOptions"
            @click="setCurrentSelect(index)"
        >
            <span class="line-clamp-1">{{ option.name }}</span>
            <span v-if="option.children || option.list"
                ><ArrowIcon direction="right" class="my-auto"
            /></span>
            <!-- <div class="relative" v-if="option.children || option.list"> -->
            <CalendarUserDropdown
                :isParent="false"
                :calendarViewOptions="option.children"
                :showCalendarUserDropDown="currentSelect === index"
                v-if="option.children"
            />
            <CalendarUserDropdown
                :isParent="false"
                :calendarViewOptions="option.list"
                :showCalendarUserDropDown="currentSelect === index"
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
    showCalendarUserDropDown: Boolean,
});

const currentSelect = ref(null);
const setCurrentSelect = (index) => {
    currentSelect.value = index;
};

watch(props.showCalendarUserDropDown, () => {
    currentSelect.value = null;
});
</script>

<style scoped lang="postcss">
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
