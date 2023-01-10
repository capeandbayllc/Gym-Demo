<template>
    <div class="px-2 py-2 mt-2 rounded cursor-pointer" :class="chat.active ? 'bg-neutral-content/50' : 'bg-base-content'">
        <div class="relative p-1 inline-block">
            <img :src="chat.avatar" class="w-12 h-12"/>
            <div class="rounded-full w-3 h-3 absolute right-1 bottom-1" :class="{'bg-accent-focus/80' : chat.status === 'online', 'bg-error' : chat.status === 'meeting'}"></div>
        </div>
        <div class="inline-block align-top mb-1 ml-2 mt-1">
            <div class="text-lg font-semibold" :class="{'text-base-300': !chat.active}">{{ chat.name }}</div>
            <div class="text-neutral-focus">{{ chat.message }}</div>
        </div>
        <div class="flex text-sm font-semibold justify-end pt-1" :class="{'text-base-300': !chat.active}">
            {{ chat.conversationAt }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    chat: {
		type: Object,
	},
})
</script>