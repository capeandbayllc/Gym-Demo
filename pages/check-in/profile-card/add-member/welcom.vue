<template>
    <simple-card class="text-center">
        <h2 class="text-2xl font-semibold my-2">Welcome!</h2>
        <p class="font-semibold mb-6">Select and option to get started</p>
        <ul class="options-wrap flex gap-8 w-[470px] overflow-auto pb-8">
            <li
                class="shrink-0 mx-3 cursor-pointer text-center"
                :class="{ selected: option.selected }"
                v-for="(option, index) in options"
                :key="index"
                @click="selectOption(option)"
            >
                <div
                    class="h-40 w-40 p-8 border-8 border-secondary rounded-full m-6"
                >
                    <PersonAddIcon
                        v-if="option.title == 'Interested in Membership'"
                        class="h-full w-full"
                    />
                    <PersonIcon v-else class="h-full w-full" />
                </div>
                <span class="w-40 inline-block">{{ option.title }}</span>
            </li>
        </ul>
    </simple-card>
</template>
<script setup>
import { PersonAddIcon, PersonIcon } from "@/components/icons";

const options = ref([
    {
        title: "Interested in Membership",
        selected: false,
    },
    {
        title: "Guest of a Member",
        selected: false,
    },
    {
        title: "Health Insurance Paid Memberships",
        selected: false,
    },
    {
        title: "CATEGORY",
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
<style scoped>
.options-wrap li > div {
    transition: all 0.3s;
}
.selected > div {
    transform: scale(1.2);
}
</style>
