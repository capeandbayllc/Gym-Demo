<template>
    <div>
        <div class="chat-conversation-container" v-if="chatConversation">
            <div class="chat-content">
                <div class="flex">
                    <div class="left-side-chat-container border-r-2 border-secondary w-96">
                        <div class="bg-neutral px-8 py-4 border-b border-secondary">
                            <div class="relative p-1 inline-block">
                                <img src="/account.png" class="w-16 h-16"/>
                            </div>
                            <div class="inline-block align-top mb-1 ml-2">
                                <div class="text-2xl font-semibold pt-2">Kevin Buchanam</div>
                                <div class="text-accent-focus/80">Online</div>
                            </div>
                        </div>
                        <div class="bg-base-300 py-2 px-4">
                            <div class="grid justify-end">
                                <search-input transparent size="md" border=""/>
                            </div>
                            <div class="online-chat-content">
                                <div class="mt-5">
                                    Online Members (18)
                                </div>
                                <div class="flex gap-4  mt-5">
                                    <div class="relative cursor-pointer" v-for="(item, index) in onlineMembers">
                                        <img class="w-12 h-12" :src="item.profile" alt="" :key="index">
                                        <div class="rounded-full w-3 h-3 bg-accent-focus/80 absolute right-0 bottom-0"></div>
                                    </div>
                                </div>
                                <div class="mt-5">
                                   Messages
                                </div>
                                <div class="chat-messages-container">
                                    <UserMessagesCard v-for="(chat, index) in messages" :key="index" :chat="chat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-side-chat-container">
                        <div class="bg-base-300 px-4 py-4 border-b border-secondary flex">
                            <div class="relative p-1">
                                <img src="/chat-conversation/group-chat.svg" class="w-18 h-18"/>
                            </div>
                            <div class="align-top mb-1 ml-2">
                                <div class="text-xl font-semibold pt-2 text-ellipsis">Mona Parksdale, Geor…</div>
                                <div class="text-accent-focus/80 text-xs">Online</div>
                            </div>
                            <div class="align-middle ml-auto justify-end mt-3">
                                <div class="flex justify-between gap-8">
                                    <img src="/chat-conversation/call.svg"  class="w-7 h-7"/>
                                    <img src="/chat-conversation/video.svg" class="w-7 h-7" />
                                    <img src="/chat-conversation/menu.svg" class="w-7 h-7" />
                                </div>
                            </div>
                        </div>
                        <div class="message-body px-10 py-4">
                            <div>
                                <ChatMessagesCard />
                            </div>
                        </div>
                        <div class="bg-base-content p-4 py-2">
                            <div class="flex justify-between">
                                <input type="text" placeholder="Type here" class="input w-full max-w-md bg-base-content text-base-300" />
                                <div class="gap-5 flex">
                                    <img src="/chat-conversation/image.svg" class="w-5"/>
                                    <img src="/chat-conversation/send.svg" class="w-5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/close_arrow.svg" class="close-chat-icon-btn" @click="toggleChatConversation"/>
        </div>
        <div class="chat-icon" @click="toggleChatConversation" v-else>
            <img src="/chat_icon.svg" class="hover-chat-icon-none" />
            <img src="/chat_hover.svg" class="hover-chat-icon-display" />
        </div>
    </div>
</template>

<style scoped>
    .chat-icon{
        border-radius: 100px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: fixed;
        bottom: 20px;
        right: 40px;
        padding: 0px 7px;
        background-color: #fff;
        display: flex;
        &:hover{
            background-color: #0074C8;
            .hover-chat-icon-none{display: none;}
            .hover-chat-icon-display{ display: block; cursor: pointer;}
        }
        .hover-chat-icon-display{
            display: none;
        }
    }
    .chat-conversation-container {        
        min-width: 400px;        
        position: fixed;
        bottom: 0;
        right: 20px;
        max-width: 1000px;
        z-index: 10;

        .chat-content{
            height: calc(100vh - 4rem);
            border: 2px solid #0074C8;
            overflow: hidden;
            .left-side-chat-container {
                .chat-messages-container{
                    height: calc(100vh - 380px);
                    overflow: auto;       
                }
                .chat-messages-container::-webkit-scrollbar {
                    display: none;
                }
            }
            .right-side-chat-container{
                width: 600px;
                .message-body{
                    height: calc(100vh - 220px);
                    overflow: auto;
                    background-image: url('/background-gradient.svg');
                    background-size: cover;
                }
                .message-body::-webkit-scrollbar {
                    display: none;
                }
            }
        }
        .close-chat-icon-btn{
            width: 40px;
            position: absolute;
            left: -16px;
            bottom: 35px;
            cursor: pointer;
        }
    }
</style>

<script setup>
import UserMessagesCard from './components/user-messages-card.vue'
import ChatMessagesCard from './components/chat-messages-card.vue'
const chatConversation = ref(false);
const toggleChatConversation = () => {
    chatConversation.value = !chatConversation.value;
};

const onlineMembers = [
    {
        id: '1',
        profile: '/chat-conversation/1.png'
    },
    {
        id: '2',
        profile: '/chat-conversation/2.png'
    },
    {
        id: '3',
        profile: '/chat-conversation/3.png'
    },
    {
        id: '4',
        profile: '/chat-conversation/4.png'
    },
    {
        id: '5',
        profile: '/chat-conversation/5.png'
    },
];

const messages = [
    {
        name: 'Catherine Shalanky',
        message: 'Hi, how is it going now?',
        avatar: '/chat-conversation/catherine.png',
        active: false,
        status: 'online',
        conversationAt: 'Yesterday'
    },
    {
        name: 'Mona Parksdale',
        message: 'Hello all, I heard back…',
        avatar: '/chat-conversation/mona.png',
        active: true,
        status: 'online',
        conversationAt: 'Yesterday'
    },
    {
        name: 'Johnny B. Good',
        message: 'Did you get the $?',
        avatar: '/chat-conversation/johnny.png',
        active: false,
        status: 'online',
        conversationAt: '10:20'
    },
    {
        name: 'Derrickgeeder@email.com',
        message: 'Hello, I am reaching out…',
        avatar: '/chat-conversation/dg.png',
        active: false,
        status: 'online',
        conversationAt: '10:03'
    },
    {
        name: 'Benjamin Scottsdale',
        message: 'On Thursday.',
        avatar: '/chat-conversation/benjamin.png',
        active: false,
        status: 'meeting',
        conversationAt: '9:20'
    },
];
</script>