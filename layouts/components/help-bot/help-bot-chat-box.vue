<template>
    <div class="help-bot-chat-box-container">
        <div class="chat-box-title">ONLINE</div>
        <div class="bot-chat-box">
            <div
                v-for="chat in chats"
                :key="chat.id"
                class="bot-chat-item"
            >
                <div class="chat-tag-left" v-if="!chat.isMe"></div>
                <div class="chat-time pr-2" v-if="chat.isMe">{{chat.created_at}}</div>
                <div
                    class="bot-chat-content"
                    :class="{
                        'rounded-r-lg bg-base-100/20': !chat.isMe,
                        'rounded-l-lg bg-base-100/60': chat.isMe
                    }"
                >
                    {{chat.content}}
                </div>
                <div class="chat-tag-right" v-if="chat.isMe"></div>
                <div class="chat-time pl-2" v-if="!chat.isMe">{{chat.created_at}}</div>
            </div>
        </div>
        <help-bot-input />
    </div>
</template>
<style scoped>
.help-bot-chat-box-container {
    @apply rounded-lg w-full bg-base-content font-bold;
    .chat-box-title {
        @apply text-accent-focus text-center font-semibold text-xs pt-3;
    }
    .bot-chat-box {
        @apply h-56 rounded-lg w-full overflow-y-auto space-y-3 px-4;
        .bot-chat-item {
            @apply flex flex-row items-end relative;
        }
        .chat-tag-left {
            @apply border-8 border-b-base-100/20 border-r-base-100/20 border-t-transparent border-l-transparent;
            border-radius: 0 0.5rem 0 0.5rem;
        }
        .chat-tag-left:after {
            @apply absolute bg-base-content rounded-full w-4 h-4 top-12 left-0;
            content: "";
        }
        .chat-tag-right {
            @apply border-8 border-b-base-100/60 border-l-base-100/60 border-t-transparent border-r-transparent;
            border-radius: 0.5rem 0 0.5rem 0;
        }
        .chat-tag-right:after {
            @apply absolute bg-base-content rounded-full w-4 h-4 top-12 right-0;
            content: "";
        }
        .bot-chat-content {
            @apply text-neutral h-16 w-full rounded-t-lg p-1;
        }
        .chat-time {
            @apply text-secondary text-xs;
        }
    }
}
</style>
<script setup>
import HelpBotInput from './help-bot-input.vue'

const chats = [{
    id: 1,
    content: "wwww",
    created_at: "11.34"
}, {
    id: 2,
    content: "wwww",
    created_at: "11.34",
    isMe: true
}, {
    id: 3,
    content: "wwww",
    created_at: "11.46"
}, {
    id: 4,
    content: "wwww",
    created_at: "11.34"
}, {
    id: 5,
    content: "wwww",
    created_at: "11.34",
    isMe: true
}, {
    id: 6,
    content: "wwww",
    created_at: "11.46"
}]
</script>