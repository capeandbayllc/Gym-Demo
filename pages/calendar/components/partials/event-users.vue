<template>
    <div class="flex flex-row justify-end mt-auto">
        <div class="pr-1" v-if="users.length > 0">
            <div
                class="bg-white flex flex-row gap-[1px] rounded-full h-[20px] px-[2px] py-[1px]"
                v-if="users.length <= 3"
            >
                <span
                    class="rounded-full w-[16px] h-[16px] p-[2px] border-2 border-[#191919] inline-block my-auto"
                    v-for="user in users"
                >
                    <UserIcon />
                </span>
            </div>
            <div
                class="bg-white flex flex-row gap-[1px] rounded-full h-[20px] px-[2px] py-[1px]"
                v-else
            >
                <span
                    class="rounded-full w-[16px] h-[16px] p-[2px] border-2 border-[#191919] inline-block my-auto"
                    v-for="i in [0, 1, 2]"
                >
                    <UserIcon />
                </span>
                <span class="text-[#123456] my-auto mr-1"
                    >+{{ users.length - 3 }}</span
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
