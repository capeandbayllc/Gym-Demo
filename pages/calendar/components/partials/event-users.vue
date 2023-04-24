<template>
    <div class="flex flex-row justify-end mt-auto overflow-hidden">
        <div class="pr-1" v-if="users.length > 0">
            <div
                class="bg-base-content flex flex-row gap-[1px] rounded-full h-[16px] px-[2px] py-[1px]"
                v-if="users.length <= 4"
            >
                <span
                    class="rounded-full w-[12px] h-[12px] p-[2px] border-[1px] border-base-200 inline-block my-auto"
                    v-for="user in users"
                >
                    <UserIcon />
                </span>
            </div>
            <div
                class="bg-base-content flex flex-row gap-[1px] rounded-full h-[16px] px-[2px] py-[1px]"
                v-else
            >
                <span
                    class="rounded-full w-[12px] h-[12px] p-[2px] border-[1px] border-base-200 inline-block my-auto"
                    v-for="i in [0, 1, 2, 3]"
                >
                    <UserIcon />
                </span>
                <span class="text-secondary-content inline-block my-auto mr-1"
                    >+{{ users.length - 4 }}</span
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { UserIcon } from "../../../../components/icons";

const props = defineProps({
    users: {
        type: Array,
        default: [],
    },
});
</script>
