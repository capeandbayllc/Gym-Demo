<template>
    <!-- <simple-card class="text-center">
        <p class="font-semibold text-lg my-8">Please select an option:</p>
        <ul class="options-wrap flex gap-8 w-[480px] pb-8">
            <li class="shrink-0 mx-3 cursor-pointer text-center" :class="{'selected':option.selected}" v-for="(option, index) in options" :key="index" @click="selectOption(option)">
                <div class="h-40 w-40 p-8 border-8 border-secondary rounded-full m-6">
                    <PersonInHandIcon v-if="option.title == 'Join'" class="h-full w-full"/>
                    <EyeIcon v-else class="h-full w-full"/>
                </div>
                <span class="font-bold text-lg">{{ option.title }}</span>
            </li>
        </ul>
    </simple-card> -->
</template>
<script setup>
import { EyeIcon, PersonInHandIcon } from "@/components/icons";

const options = ref([
    {
        title: "Join",
        selected: false,
    },
    {
        title: "Tour",
        selected: false,
    },
]);

const selectOption = (opt) => {
    options.value.forEach((o) => {
        o.selected = false;
    });
    opt.selected = true;
};
</script>
<style setup>
.options-wrap li > div {
    transition: all 0.3s;
}
.selected > div {
    transform: scale(1.2);
}
</style>
