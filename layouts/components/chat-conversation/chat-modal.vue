<template>
  <div class="chat-conversation-container" v-if="viewChat === null">
    <div class="chat-content border-2 gradient-bg bg-white m-1 p-4 z-22 rounded-md">
      <div class=" left-side-chat-container border-black-700  h-10 rounded-md">
        <div class="justify-center bg-transparent">
          <chat-search-input
              transparent size="xs"
              border="1px solid #fff"
          />
        </div>
        <div class="scroll-chat relative overflow-y-scroll scroll-smooth scroll-mr-1">
          <div class="w-full justify-start bg-black rounded-md flex mt-4">
            <div class=" pl-4 inline-block py-2 justify-start">
              <img :src="user.profile_photo_path" class="w-16 h-16 rounded-full"/>
            </div>
            <div class="inline-block place-self-center pl-8 ml-2 ">
              <div class="text-xl -lg:text-lg font-semibold ">{{ user.first_name }} {{ user.last_name }}</div>
              <div class="text-sm text-accent-focus/80">Online</div>
              <i class="fa-solid fa-check-square"></i>
            </div>
          </div>
          <div class=" justify-start bg-black rounded-md grid flex mt-4 ">
            <div class=" pl-4 inline-block pt-2 justify-start">
              <div class="text-xl -lg:text-lg font-semibold pt-2">
                Chat Channels
              </div>
              <div class="flex">
                <div class="relative cursor-pointer pl-2" v-for="(item, index) in chatItems" :key="index">
                  <div class="p-2 inline">
                    <div class="chat-icons m-1">
                      <font-awesome-icon
                          :class="['w-4 h-4 -lg:w-4 -lg:h-4 m-auto border rounded-full p-3',item.name=='New Channel'?'hover-icon':'']"
                          :icon="item.icon"/>
                    </div>
                    <div class="text-min -xs:text-xs pt-1 pr-2">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" pl-4 inline-block pb-2 justify-start">
              <div class="text-xl -lg:text-lg font-semibold">
                Favorites
              </div>
              <div class="flex">
                <div class="relative cursor-pointer ml-1" v-for="(item, index) in onlineMembers" :key="index">
                  <div class="inline">
                    <div class="p-2 m-1 relative">
                      <img
                          class="w-12 h-12 -lg:w-12 -lg:h-12 m-auto rounded-full"
                          :src="item.avatar"
                          alt=""
                          @click="viewChat = item"
                      />
                      <div v-if="index===1" class="rounded-full w-3 h-3 bg-red-700 absolute  right-3 bottom-2"></div>
                      <div v-else class="rounded-full w-3 h-3 bg-accent-focus/80 absolute right-3 bottom-2"></div>
                    </div>
                    <div class="text-min -xs:text-xs pr-1 h-auto justify-center">
                      {{ item.name }}
                    </div>

                  </div>
                </div>
                <div class="relative cursor-pointer ml-1">
                  <div class="inline">
                    <div class="p-2 m-1 relative">
                      <font-awesome-icon
                          class="hover-icon w-5 h-5 -lg:w-5 -lg:h-5 m-auto border rounded-full p-3 "
                          :icon="['fas', 'fa-plus-circle']"
                      />
                    </div>
                    <div class="text-min -xs:text-xs pr-1 h-auto justify-center">New Favorite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-xl -lg:text-lg font-semibold pt-2">Conversations</div>
          <div class="inline">
            <div
                class="conversation-block justify-start bg-white rounded-md flex mt-4"
                v-for="(chat, index) in messages"
                :key="index"
                @click="viewChat = chat"
            >
              <div class="relative flex p-2">
                <img :src="chat.avatar" class="w-[43px] h-[43px] rounded-full" alt=""/>
                <div
                    class="rounded-full w-2 h-2 absolute right-2 bottom-3"
                    :class="chat.active ? 'bg-accent-focus/80' : 'bg-red-700'"
                />
              </div>

              <div class="grid p-2">
                <div class="flex">
                  <div class="text-sm -xs:text-xs text-black font-semibold inline">{{ chat.name }}</div>
                  <div v-if="index===1" class="text-extra-small text-white bg-blue-500 rounded-full ml-1 font-semibold">
                    +2
                  </div>
                </div>
                <div class="flex text-end w-64 ">
                  <div
                      class="text-xs -xs:text-xs items-start text-start text-black justify-start overflow-hidden text-ellipsis inline w-2/3 whitespace-nowrap"
                  >
                    {{ chat.message }}
                  </div>
                  <div v-if="index ===3 || index===4"
                       class="text-xs -xs:text-xs text-end items-end text-black justify-end w-1/3">
                    yesterday
                  </div>
                  <div v-else class="text-xs -xs:text-xs text-end items-end text-black justify-end w-1/3">
                    {{ new Date().toJSON().slice(12, 16).replace(/-/g, '/') }} pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="chat-conversation-container max-h-screen" v-if="viewChat !== null">
    <div class="chat-message-block flex">
      <div class="pills-body grid w-1/16 bg-black relative border-white-800 border rounded-t-full rounded-b-full">
        <div class="mx-auto mt-3 max-h-1/6">
          <div>
            <font-awesome-icon
                class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3 "
                :icon="['fas', 'fa-plus-circle']"
            />
          </div>
          <div class="py-2" @click="viewChat = null">
            <font-awesome-icon
                class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3 "
                :icon="['fas', 'fa-message']"
            />
          </div>
        </div>
        <div class="mx-2 max-h-5/6 pb-2 mb-3 overflow-x-visible overflow-y-auto no-scrollbar overscroll-true">
          <div class="py-2" v-for="(item, index) in onlineMembers" :key="index">
            <img
                id="chat-head"
                :class="['sticky w-12 h-12 -lg:w-12 -lg:h-12 border-blue-700 border-2 rounded-full z-20 opacity-40']"
                :src="item.avatar" alt=""
                @click="viewChat = item"
            />
            <div class="relative">
              <div class="chat-names absolute bg-blue-800 whitespace-nowrap right-10 bottom-3 z-10 w-100 invisible">
                {{ item.name }}
              </div>
            </div>
          </div>
          <hr v-if="offlineMembers.length > 0" class="mx-1 my-2">
          <div class="py-2" v-for="(item, index) in offlineMembers" :key="index">
            <img
                id="chat-head"
                :class="['sticky w-12 h-12 -lg:w-12 -lg:h-12 border-blue-700 border-2 rounded-full opacity-40 z-10']"
                :src="item.avatar" alt=""
                @click="chatItems = item"
            />
            <div class="relative">
              <div
                  v-if="index === 2"
                  class="text-extra-small text-white bg-blue-500 rounded-full absolute right-0 font-semibold z-20"
              >
                +2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" inline ml-2 gradient-bg border rounded-lg max-h-auto h-auto">
        <div class="flex bg-black m-2">
          <div class="relative p-1">
            <img src="/chat-conversation/group-chat.svg" class="w-16 h-16 -lg:w-14 -lg:h-14" @click="toggleChatOpen"/>
          </div>
          <div class="align-top mb-1 ml-2 mr-2">
            <div class="text-xl -lg:text-sm font-semibold pt-2 overflo overflow-hidden text-ellipsis w-[200px] whitespace-nowrap">
              {{ viewChat.name }}
            </div>
            <div class="text-accent-focus/80 text-xs">Online Now</div>
          </div>
          <div class="align-middle ml-auto justify-end mt-3 pt-4 px-2">
            <div class="flex justify-between gap-4 -lg:gap-4 ">
              <img src="/chat-conversation/call.svg" class="w-4 h-4 -lg:w-4 -lg:h-4"/>
              <img src="/chat-conversation/video.svg" class="w-4 h-4 -lg:w-4 -lg:h-4" @click="toggleDropdown"/>
              <img src="/chat-conversation/menu.svg" class="w-4 h-4 -lg:w-4 -lg:h-4" @click="toggleDropdown"/>
            </div>
          </div>
          <DropdownCard v-if="showDropDown" @closeDropdown="toggleDropdown"/>
        </div>
        <div class="message-body px-7 pb-4 -lg:px-2 -lg:py-2 -lg:pr-6 overflow-auto">
          <div class="relative">
            <ChatMessagesCard/>
          </div>
        </div>
        <div class="bg-base-content p-4 py-2 -lg:p-2 rounded-b-md">
          <div class="flex justify-between">
            <input type="text" placeholder="Type here"
                   class="input w-full max-w-md -lg:max-w-max bg-base-content text-base-300 "/>
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
.chat-conversation-container {
  @apply bg-black fixed z-20 rounded-xl border-sky-700 border-2;
  position: relative;
  padding: 6px;

.chat-content {
  height: calc(108vh - 14rem);


.left-side-chat-container {
  bottom: 2em;

.chat-messages-container {
  height: calc(106vh - 380px);
}

}
.right-side-chat-container {
  overflow: hidden;
  min-width: 550px;

.message-body {
  height: calc(106vh - 380px);
  background: linear-gradient(0deg, rgba(0, 116, 200, 1) 0%, rgba(0, 0, 0, 1) 100%);
}

}
}
}
@media (max-width: 820px) {
  .chat-conversation-container .chat-content .right-side-chat-container {
    min-width: 100px !important;
  }
}

.scroll-chat {
  max-height: calc(106vh - 279px);
  padding-right: 1em;
}

.chat-message-block {
  width: auto;
}

.message-body {
  height: calc(106vh - 380px);
}

.pills-body {
  height: calc(106vh - 228px);
}

.chat-icons {
  height: 3em;
  width: 3em;
  margin: auto;
}

.text-min {
  font-size: 10px;
  text-align: -webkit-center;
}

.chat-pill {
  bottom: 0.8em;
  right: 2.7em;
}

@media (max-width: 1024px) {
  .chat-pill {
    bottom: 0.4em;
    right: 2.3em;
  }
}

.text-extra-small {
  font-size: 10px;
  height: 2.2em;
  padding: 0.35em;
  width: 2.2em;
}

#chat-head:hover {
  cursor: pointer;
  opacity: 1;

.relative {

.chat-names {
  visibility: visible;
}

}
}
.hover-icon:hover {
  cursor: pointer;
  color: #007FD5;
  border: 1px solid #007FD5;
}

.conversation-block:hover {
  background-color: #007FD5;
  cursor: pointer;

.grid {

.flex {

.text-black {
  color: white;
}

}
}
}
</style>
<script setup>
import {ref} from 'vue'
import ChatMessagesCard from './components/chat-messages-card.vue'
import DropdownCard from './components/dropdown-card.vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {far} from '@fortawesome/pro-regular-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/pro-solid-svg-icons'
import {request} from "~/api/utils/request";
import member from "~/api/queries/member";
import {getRandomInt} from "~/api/utils/number";
import {faker} from "@faker-js/faker";

library.add(far, fas)
const viewChat = ref(null)
const showDropDown = ref(false)


const members = ref([]);
const chatItems = [
  {
    name: "Trainers Forum",
    image: "/chat-conversation/trainer.png",
    icon: ['fas', 'fa-window-maximize']
  },
  {
    name: "New Members",
    image: "/chat-conversation/member.png",
    icon: ['fas', 'fa-user-plus']
  },
  {
    name: "Club #1234",
    image: "/chat-conversation/club.png",
    icon: ['fas', 'fa-warehouse-alt']
  },
  {
    name: "New Channel",
    image: "/chat-conversation/plus.png",
    icon: ['fas', 'fa-plus-circle']
  }
];

const user = useState('auth');

const status = ['online', 'offline'];

request(member.query.browse, {first: 10}).then(({data}) => {
  data.data.members.data.forEach((member) => {
    members.value.push({
      name: `${member.first_name} ${member.last_name}`,
      message: faker.random.words(3),
      avatar: member.profile_photo_path,
      active: getRandomInt(50) > 15,
      status: status[getRandomInt(status.length - 1)],
      conversationAt: getRandomInt(12, 1) + ':' + getRandomInt(59, 1)
    },)
  });
});

const messages = computed(() => members.value.slice(0, 5));
const offlineMembers = computed(() => pluckRandom(members.value.filter(m => !m.active)));
const onlineMembers = computed(() => pluckRandom(members.value.filter(m => m.active)));

function pluckRandom(list, limit = 3) {
  return list.sort(() => Math.random() - Math.random()).slice(0, limit);
}

const toggleDropdown = () => {
  showDropDown.value = !showDropDown.value;
}
const toggleChatOpen = () => {
  viewChat.value = !viewChat.value;
}


</script>
