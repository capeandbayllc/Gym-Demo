<template>
       <daisy-modal :overlay="true" id="chatModal" ref="chatModal" style=" width:auto; height: auto;">
			<chat-modal />
		</daisy-modal>
    <div>
        <div class="chat-icon rounded-full w-12 h-12 text-center fixed bottom-5 right-10 px-2 bg-base-content flex z-20" @click="toggleChatConversation">
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
import {ref} from 'vue';
import ChatModal from './chat-modal.vue'
const chatConversation = ref(false);
const toggleChatConversation = () => {
    chatModal.value.open()
};
const showDropDown = ref(false);
const chatModal = ref(null);
</script>