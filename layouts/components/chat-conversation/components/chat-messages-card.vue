<template>
    <div class="grid gap-5">
        <div class="message-from">
            <div class="text-center text-lg -lg:text-xs relative chat-heading text-base-content/70">
               Today
           </div>
        </div>
        <div v-for="chat in chats" :key="chat.id" class="flex" :class="{'justify-end': chat.isMe}">
            <div class="relative">
                <div class="text-neutral w-52 -lg:w-52 -lg:h-auto p-4 py-3 h-28 rounded rounded-bl-none bg-base-content text-base" :class="{'rounded-bl rounded-br-none' : chat.isMe}">
                    {{chat.message}}
                </div>
                <div class="rounded-full bg-base-content p-0.5  absolute -top-5 -right-5">
                    <img :src="chat.avatar" class="w-10 h-10"/>
                </div>
                <div class="text-base-content/70 text-xs font-semibold" :class="{'text-right': !chat.isMe}">{{chat.created_at}}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.chat-heading::before{
    content: '';
    position: absolute;
    width: 43%;
    height: 1px;
    background: #CECECE;
    top: 15px;
    left: 0px;
}
.chat-heading::after{
    content: '';
    position: absolute;
    width: 43%;
    height: 1px;
    background: #CECECE;
    top: 15px;
    right: 0px;
}
@media (max-width:1024px) {
    .chat-heading::before, .chat-heading::after {top: 8px;} 
}
</style>
<script setup>

const chats = [
    {
        id: 1,
        avatar: '/chat-conversation/catherine.png',
        message: "Hello all, I heard back",
        created_at: "4:40 PM",
    },
    {
        id: 2,
        avatar: '/chat-conversation/3.png',
        message: "Hey...",
        created_at: "4:44 PM",
        isMe: true
    },
    {
        id: 3,
        avatar: '/chat-conversation/3.png',
        message: "Also...",
        created_at: "4:46 PM",
        isMe: true
    },
    {
        id: 4,
        avatar: '/chat-conversation/4.png',
        message: "Awesome...",
        created_at: "4:50 PM",
    }, 
]
</script>