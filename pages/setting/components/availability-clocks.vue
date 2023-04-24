<template>
    <h4 v-show="title" class="mb-1 inline-block font-bold w-full">
        {{ title }}
    </h4>
    <label class="mr-3 " :class="{'block': displayLabelBlock}">Daily Times Set:</label>
    <span class="mx-2 inline-block">
        <component :is="isBlue ? BlueClockIcon : ClockIcon" class="inline-block mr-1" /> 10:20 am
    </span>
    <span class="mx-2 inline-block">
        <component :is="isBlue ? BlueClockIcon : ClockIcon" class="inline-block mr-1" /> 1:00 pm
    </span>
    <span class="mx-2 inline-block">
        <component :is="isBlue ? BlueClockIcon : ClockIcon" class="inline-block mr-1" /> 3:00 pm
    </span>
</template>

<script setup>
import {ClockIcon, BlueClockIcon} from '~~/components/icons';

const props = defineProps({
    isBlue: {
		type: Boolean,
		default: false
	},
    title: {
        type: String
    },
    displayLabelBlock: {
        type: Boolean,
        default: false
    }
})
</script>