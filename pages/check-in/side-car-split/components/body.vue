<template>
    <div class="border-[1px] border-base-content p-4 rounded-lg">
        <div class="flex justify-between mb-3">
            <div class="flex space-x-4 justify-end">
                <div>
                    <img :src="ProfileImage" alt="profile image" class="w-20 h-20 rounded-xl border-2 border-info-content">
                </div>
                <div class="flex flex-col justify-end">
                    <p class="text-2xl mb-1">{{ profileName }}</p>
                    <p class="text-sm text-primary-content">{{ callType }}</p>
                </div>
            </div>

            <div class="bg-secondary-focus border-2 border-info-content rounded-full w-12 h-12 flex justify-items-center justify-center align-middle">
                <component :is="callTypeIcon" class="w-7 h-7 mt-2"></component>
            </div>
        </div>

        <slot name="displayMiddle"></slot>

        <div class="text-right">
            <button class="border-[1px] px-2 rounded-md hover:bg-info-content" @click="$emit('notesModal')">Notes</button>
        </div>
    </div>
</template>

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