<template>
    <div class="border-[1px] border-white p-4 rounded-lg">
        <div class="flex justify-between mb-3">
            <div class="flex space-x-4 justify-end">
                <div>
                    <img :src="ProfileImage" alt="profile image" class="w-20 h-20 rounded-xl border-2 border-[#008AE0]">
                </div>
                <div class="flex flex-col justify-end">
                    <p class="text-2xl mb-1">{{ profileName }}</p>
                    <p class="text-sm text-[#C4C4C4]">{{ callType }}</p>
                </div>
            </div>

            <div class="bg-[#11609E] border-2 border-[#008AE0] rounded-full w-12 h-12 flex justify-items-center justify-center align-middle">
                <component :is="callTypeIcon" class="w-7 h-7 mt-2"></component>
            </div>
        </div>

        <slot name="displayMiddle"></slot>

        <div class="text-right">
            <button class="border-[1px] px-2 rounded-md hover:bg-[#008AE0]" @click="$emit('notesModal')">Notes</button>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
const props = defineProps({
    ProfileImage:{
        type:String
    },
    profileName:{
        type:String
    },
    callType:{
        type:String
    },
    callTypeIcon: {
        type: Object
    }
})
</script>