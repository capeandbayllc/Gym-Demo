<template>
    <div class="px-2 py-2 mt-2 rounded cursor-pointer" :class="chat.active ? 'bg-neutral-content/50' : 'bg-base-content'">
        <div class="relative p-1 float-left mr-2">
            <img :src="chat.avatar" class="w-12 h-12"/>
            <div class="rounded-full w-3 h-3 absolute right-1 bottom-1" :class="{'bg-accent-focus/80' : chat.status === 'online', 'bg-error' : chat.status === 'meeting'}"></div>
        </div>
        <div class="align-top mb-1 ml-2 mt-1">
            <div class="text-lg font-semibold" :class="{'text-base-300': !chat.active}">
                {{ chat.name }}
                <div class="badge badge-lg badge-secondary rounded-full w-8 h-7 text-base-content" v-if="chat.active">+2</div>
            </div>
            <div class="text-neutral-focus text-base">{{ chat.message }}
                <p class="flex text-sm font-semibold justify-end " :class="{'text-base-300': !chat.active}">
                    {{ chat.conversationAt }}
                </p>
            </div>
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