<template>
    <div>
        <div class="chat-conversation-container mt-2 bg-black fixed bottom-0 right-5 z-20 rounded-md" v-if="chatConversation">
            <div class="chat-content border-2 gradient-bg bg-white overflow-hidden m-2 p-4 z-22 rounded-md">
                <div class="flex">
                    
                    <div class="w-full left-side-chat-container border-black-700 w-80 h-10 rounded-md" v-if="chatOpen==false">
                        <div class="w-full justify-center bg-transparent">
                            <chat-search-input
                            transparent size="md"
                            />
                        </div>
                        <div>
                            <div class="w-full justify-start bg-black rounded-md flex mt-4">
                                <div class=" pl-4 inline-block py-4 justify-start">
                                    <img src="/account.png" class="w-16 h-16"/>
                                </div>
                                <div class="inline-block place-self-center pl-6 ml-2 p-y">
                                    <div class="text-2xl -lg:text-lg font-semibold pt-2">Kevin Buchanam</div>
                                    <div class="text-accent-focus/80">Online</div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="grid w-96 justify-center bg-transparent">
                                <search-input transparent size="md" border="solid 1px #fff"/>
                            </div>
                        <div class="bg-neutral px-8 py-4 border-b border-secondary">
                            <div class="relative p-1 inline-block">
                                <img src="/account.png" class="w-16 h-16"/>
                            </div>
                            <div class="inline-block align-top mb-1 ml-2">
                                <div class="text-2xl -lg:text-lg font-semibold pt-2">Kevin Buchanam</div>
                                <div class="text-accent-focus/80">Online</div>
                               
                            </div>
                        </div>
                        <div class="bg-base-300 py-2 px-4">
                            <div class="grid justify-end">
                                <search-input transparent size="md" border="solid 1px #fff"/>
                            </div>
                            <div class="online-chat-content">
                                <div class="mt-5">
                                    Online Members (18)
                                </div>
                                <div class="flex gap-4  mt-5">
                                    <div class="relative cursor-pointer" v-for="(item, index) in onlineMembers" :key="index" >
                                        <img class="w-12 h-12 -lg:w-10 -lg:h-10" :src="item.profile" alt="" @click="toggleChatOpen">
                                        <div class="rounded-full w-3 h-3 -lg:w-2 -lg:h-2 bg-accent-focus/80 absolute right-0 bottom-0"></div>
                                    </div>
                                </div>
                                <div class="mt-5">
                                   Messages
                                </div>
                                <div class="chat-messages-container overflow-auto no-scrollbar" >
                                    <UserMessagesCard v-for="(chat, index) in messages" :key="index" :chat="chat"/>
                                </div>
                            </div> 
                        </div>-->
                    </div>
                    <div class="right-side-chat-container" v-if="chatOpen==true">
                        <div class="bg-base-300 px-4 py-4 -lg:p-2 border-b border-secondary flex relative">
                            <div class="relative p-1">
                                <img src="/chat-conversation/group-chat.svg" class="w-16 h-16 -lg:w-14 -lg:h-14" @click="toggleChatOpen"/>
                            </div>
                            <div class="align-top mb-1 ml-2 mr-2">
                                <div class="text-xl -lg:text-sm font-semibold pt-2 text-ellipsis">Mona Parksdale, Geor…</div>
                                <div class="text-accent-focus/80 text-xs">Online</div>
                            </div>
                            <div class="align-middle ml-auto justify-end mt-3">
                                <div class="flex justify-between gap-8 -lg:gap-4 ">
                                    <img src="/chat-conversation/call.svg"  class="-lg:w-4 -lg:h-4"/>
                                    <img src="/chat-conversation/video.svg" class="-lg:w-4 -lg:h-4" />
                                    <img src="/chat-conversation/menu.svg" class="-lg:w-4 -lg:h-4" @click="toggleDropdown" />
                                </div>
                            </div>
                            <DropdownCard v-if="showDropDown" @closeDropdown="toggleDropdown"/>
                        </div>
                        <div class="message-body no-scrollbar px-10 py-4 -lg:px-2 -lg:py-2 -lg:pr-6 overflow-auto">
                            <div>
                                <ChatMessagesCard />
                            </div>
                        </div>
                        <div class="bg-base-content p-4 py-2 -lg:p-2 h-full">
                            <div class="flex justify-between">
                                <input type="text" placeholder="Type here" class="input w-full max-w-md -lg:max-w-max bg-base-content text-base-300" />
                                <div class="gap-5 flex">
                                    <img src="/chat-conversation/image.svg" class="w-5"/>
                                    <img src="/chat-conversation/send.svg" class="w-5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/close_arrow.svg" class="close-chat-icon-btn w-10 absolute -left-4 bottom-9 cursor-pointer" @click="toggleChatConversation"/>
        </div>
        <div class="chat-icon rounded-full w-12 h-12 text-center fixed bottom-5 right-10 px-2 bg-base-content flex z-20" @click="toggleChatConversation" v-else>
            <img src="/chat_icon.svg" class="hover-chat-icon-none" />
            <img src="/chat_hover.svg" class="hover-chat-icon-display" />
        </div>
    </div>
</template>

<style scoped>
    .chat-icon{
        line-height: 50px;
        &:hover{
            background-color: #0074C8;
            .hover-chat-icon-none{
                display: none;
            }
            .hover-chat-icon-display{
                display: block; cursor: pointer;
            }
        }
        .hover-chat-icon-display{
            display: none;
        }
    }
    .chat-conversation-container {
        .chat-content{
            height: calc(100vh - 4rem);
            .left-side-chat-container {
                .chat-messages-container{
                    height: calc(100vh - 380px);
                }
            }
            .right-side-chat-container{
                min-width: 550px;
                .message-body{
                    height: calc(100vh - 220px);
                    background: linear-gradient(0deg, rgba(0,116,200,1) 0%, rgba(0,0,0,1) 100%);
                }
            }
        }
    }
    @media (max-width:820px) {
        .chat-conversation-container .chat-content .right-side-chat-container{
            min-width: 100px !important;
        }
    }
</style>

<script setup>
import UserMessagesCard from './components/user-messages-card.vue'
import ChatMessagesCard from './components/chat-messages-card.vue'
import DropdownCard from './components/dropdown-card.vue';
const chatConversation = ref(false);
const toggleChatConversation = () => {
    chatConversation.value = !chatConversation.value;
};
const showDropDown = ref(false);
const chatOpen = ref(false)
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

const toggleDropdown = () => {
    showDropDown.value = !showDropDown.value;
}
const toggleChatOpen=()=>{
    chatOpen.value=!chatOpen.value;
}
/* const toggleChatClose=()=>{
    
} */

/* watch(chatOpen, (newChatOpen) => {
    
}); */

</script>