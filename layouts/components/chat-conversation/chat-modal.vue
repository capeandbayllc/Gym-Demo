<template>
    <div class="chat-conversation-container " v-if="chatOpen==false" >
        <div class="chat-content border-2 gradient-bg bg-white m-1 p-4 z-22 rounded-md">
            <div class=" left-side-chat-container border-black-700  h-10 rounded-md">
                <div class="justify-center bg-transparent">
                    <chat-search-input
                    transparent size="lg"
                    border="1px solid #fff"
                    />
                </div>
                <div class="scroll-chat relative overflow-y-scroll scroll-smooth scroll-mr-1">
                    <div class="w-full justify-start bg-black rounded-md flex mt-4">
                        <div class=" pl-4 inline-block py-2 justify-start">
                            <img src="/account.png" class="w-16 h-16"/>
                        </div>
                        <div class="inline-block place-self-center pl-2 ml-2 p-y">
                            <div class="text-xl -lg:text-lg font-semibold pt-2">Kevin Buchanam</div>
                            <div class="text-sm text-accent-focus/80">Online</div>
                            <i class="fa-solid fa-check-square"></i>
                        </div>
                    </div>
                    <div class=" justify-start bg-black rounded-md grid flex mt-4 ">
                        <div class=" pl-4 inline-block py-2 justify-start">
                            <div class="text-xl -lg:text-lg font-semibold pt-2">
                                Chat Channels
                            </div>
                            <div class="flex">
                                <div class="relative cursor-pointer mx-2" v-for="(item, index) in chatItems" :key="index" >
                                    <div  class="p-2 inline">
                                        <div class="chat-icons m-1">
                                            <font-awesome-icon class="w-6 h-6 -lg:w-10 -lg:h-10 m-auto border rounded-full p-2 " :icon="item.icon" />
                                            <!-- <font-awesome-icon class="w-6 h-6 -lg:w-10 -lg:h-10 m-auto border rounded-full p-2 " :icon="['far', 'fa-window-maximize']" /> -->
                                            <!-- <img class="w-12 h-12 -lg:w-10 -lg:h-10 m-auto border rounded-full p-2 " :src="item.image" alt="" @click="toggleChatOpen"/> -->
                                        </div>
                                        <div class="text-min -xs:text-xs pt-1 pr-2">
                                            {{item.name}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" pl-4 inline-block pb-2 justify-start">
                            <div class="text-xl -lg:text-lg font-semibold pt-2">
                                Favorites
                            </div>
                            <div class="flex">
                                <div class="relative cursor-pointer mx-2" v-for="(item, index) in onlineMembers" :key="index" >
                                    <div class="inline">
                                        <div class="p-2 relative">
                                            <img v-if="index!=3" class="w-12 h-12 -lg:w-10 -lg:h-10 m-auto" :src="item.profile" alt="" @click="toggleChatOpen"/>
                                            <img v-else class="w-12 h-12 -lg:w-10 -lg:h-10 m-auto border rounded-full p-2 m-auto" src="/chat-conversation/plus.png" alt="" @click="toggleChatOpen"/>
                                            <div v-if="index==1" class="rounded-full w-3 h-3 bg-red-700 absolute  right-3 bottom-2"></div>
                                            <div v-else-if="index==3" class=""></div>
                                            <div v-else class="rounded-full w-3 h-3 bg-accent-focus/80 absolute right-3 bottom-2"></div>
                                        </div>
                                        <div class="text-min -xs:text-xs pt  pr-2 justify-center">
                                            {{ item.name }}
                                        </div> 
                                        
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-xl -lg:text-lg font-semibold pt-2">conversation</div>
                    <div class="inline">
                        <div  class="justify-start bg-white rounded-md flex mt-4 " v-for="(chat, index) in messages" :key="index" >
                            <div class="relative flex p-2">
                                <img :src="chat.avatar" alt=""/>
                                <div v-if="index==1 || index==4" class="rounded-full w-2 h-2 bg-red-700 absolute right-2 bottom-3"></div>
                                <div v-else class="rounded-full w-2 h-2 bg-accent-focus/80 absolute right-2 bottom-3"></div>
                            </div>
                            
                            <div class="grid p-2">
                                <div class="text-xs -xs:text-xs text-black font-semibold inline">
                                            {{chat.name}}
                                </div>
                                <div class="flex ">
                                    <div class="text-xs -xs:text-xs text-black inline">
                                            {{ chat.message }}
                                    </div>
                                    <div class="text-xs -xs:text-xs items-end flex text-black justify-end">
                                        yesterday
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>

    <div class="chat-conversation-container " v-if="chatOpen==true" >
        <div class="chat-message-block flex">
            <div class="grid w-1/16 bg-black relative border-white-800 rounded-lg border rounded-t-full rounded-b-full">
                <div class="grid py-2">
                    <div class="m-auto px-2" v-for="(item, index) in onlineMembers" :key="index" >
                        <img v-if="index==0" class="w-12 h-12 border-2 rounded-full p-2 -lg:w-10 -lg:h-10" src="/chat-conversation/plus.png" alt="" @click="toggleChatOpen"/>
                        <img v-else-if="index!==2" class="w-12 h-12 -lg:w-10 -lg:h-10 opacity-40" :src="item.profile" alt="" @click="toggleChatOpen"/>
                        <div  v-else class="inline relative" >
                            <div class="chat-pill absolute text-sm whitespace-nowrap bg-blue-700 rounded-l-full px-2">
                               {{item.name}}
                            </div>
                            <img class="sticky w-12 h-12 -lg:w-10 -lg:h-10 border-blue-700 border-2 rounded-full z-2" :src="item.profile" alt="" @click="toggleChatOpen"/>
                            
                        </div>
                    </div>
                    <hr class="mx-2 mt-2">
                    <div class="m-auto px-2" v-for="(item, index) in messages" :key="index" >
                        <img v-if="index<4" class="w-12 h-12 -lg:w-10 -lg:h-10 opacity-40" :src="item.avatar" alt="" @click="toggleChatOpen"/>
                    </div>
                </div>
            </div>
            <div class="inline ml-2 gradient-bg border rounded-lg">
                <div class="flex bg-black m-2">
                    <div class="relative p-1">
                        <img src="/chat-conversation/group-chat.svg" class="w-16 h-16 -lg:w-14 -lg:h-14" @click="toggleChatOpen"/>
                    </div>
                    <div class="align-top mb-1 ml-2 mr-2">
                        <div class="text-xl -lg:text-sm font-semibold pt-2 text-ellipsis">Mona Parksdale, Geor…</div>
                        <div class="text-accent-focus/80 text-xs">Online Now</div>
                    </div>
                    <div class="align-middle ml-auto justify-end mt-3 p-1">
                        <div class="flex justify-between gap-8 -lg:gap-4 ">
                            <img src="/chat-conversation/call.svg"  class="-lg:w-4 -lg:h-4"/>
                                <img src="/chat-conversation/video.svg" class="-lg:w-4 -lg:h-4"  @click="toggleDropdown"  />
                            <img src="/chat-conversation/menu.svg" class="-lg:w-4 -lg:h-4" @click="toggleDropdown" />
                        </div>
                    </div>
                    <DropdownCard v-if="showDropDown" @closeDropdown="toggleDropdown"/>
                </div>
                <div class="message-body px-10 py-4 -lg:px-2 -lg:py-2 -lg:pr-6 overflow-auto">
                    <div>
                        <ChatMessagesCard />
                    </div>
                </div>
                <div class="bg-base-content p-4 py-2 -lg:p-2 ">
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
        @apply bg-black fixed z-20 rounded-md;
        position: relative; 
        padding: 6px;
        .chat-content{
            height: calc(108vh - 14rem);
            
            
            .left-side-chat-container {
                bottom:2em;
                .chat-messages-container{
                    height: calc(106vh - 380px);
                }
            }
            .right-side-chat-container{
                overflow: hidden;
                min-width: 550px;
                .message-body{
                    height: calc(106vh - 380px);
                    background: linear-gradient(0deg, rgba(0,116,200,1) 0%, rgba(0,0,0,1) 100%);
                }
            }
        }
    }
    @media (max-width:820px) {
     /*    .chat-conversation-container .chat-content .right-side-chat-container{
            min-width: 100px !important;
        } */
    }

    .scroll-chat{
        max-height: calc(106vh - 279px);
        padding-right: 1em;
    }
    .chat-message-block{
        width: auto;
    }
    .message-body{
                    height: calc(106vh - 380px);
                    background: linear-gradient(0deg, rgba(0,116,200,1) 0%, rgba(0,0,0,1) 100%);
                }
    .chat-icons{
        height: 3em;
        width:3em;
        margin: auto;
    }
    .text-min{
        font-size:10px;
        text-align: -webkit-center;
    }
    .chat-pill{
        bottom: 0.7em;
        right: 2.7em;
    }
</style>
<script setup>
import {ref} from 'vue'
import ChatMessagesCard from './components/chat-messages-card.vue'
import DropdownCard from './components/dropdown-card.vue';
import {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome'
import {far} from '@fortawesome/pro-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/pro-solid-svg-icons'

library.add(far,fas)
const chatOpen = ref(false)
const showDropDown= ref(false)
const onlineMembers = [
    {
        id: '1',
        name: 'Stacy Caldania',
        profile: '/chat-conversation/1.png',
       
    },
    {
        id: '2',
        name: 'Al wanter',
        profile: '/chat-conversation/catherine.png',
       
    },
    {   name: 'Dan Cuckens',
        id: '3',
        profile: '/chat-conversation/3.png',
       
    },
    {   name: 'New Favorite',
        id: '4',
        profile: '/chat-conversation/4.png',
       
    },
    
];

const chatItems = [
    {
        name:"Trainers Forum",
        image:"/chat-conversation/trainer.png",
        icon:['fas', 'fa-window-maximize']
    },
    {
        name:"New Members",
        image:"/chat-conversation/member.png",
        icon:['fas', 'fa-user-plus']
    },
    {
        name:"Club #1234",
        image:"/chat-conversation/club.png",
        icon:['fas', 'fa-warehouse-alt']
    },
    {
        name:"New Channel",
        image:"/chat-conversation/plus.png",
        icon:['fas', 'fa-plus-circle']
    }
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


</script>