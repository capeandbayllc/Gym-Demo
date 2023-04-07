<template>
  <div class="chat-conversation-container" v-if="selectedConversation === null">
    <div
        class="chat-content border-2 gradient-bg bg-white m-1 p-4 z-22 rounded-md"
    >
      <div class="left-side-chat-container border-black-700 h-10 rounded-md">
        <div class="justify-center bg-transparent">
          <chat-search-input transparent size="xs" border="1px solid #fff"/>
        </div>
        <div
            class="scroll-chat relative overflow-y-scroll scroll-smooth scroll-mr-1"
        >
          <div class="w-full justify-start bg-black rounded-md flex mt-4">
            <div class="pl-4 inline-block py-2 justify-start">
              <img
                  :src="user.profile_photo_path"
                  class="w-16 h-16 rounded-full"
              />
            </div>
            <div class="inline-block place-self-center pl-8 ml-2">
              <div class="text-xl -lg:text-lg font-semibold">
                {{ user.first_name }} {{ user.last_name }}
              </div>
              <div class="text-sm text-accent-focus/80">Online</div>
              <i class="fa-solid fa-check-square"></i>
            </div>
          </div>
          <div class="justify-start bg-black rounded-md grid flex mt-4">
            <div class="pl-4 inline-block pt-2 justify-start">
              <div class="text-xl -lg:text-lg font-semibold pt-2">
                Chat Channels
              </div>
              <div class="flex">
                <div
                    class="relative cursor-pointer pl-2"
                    v-for="(item, index) in chatItems"
                    :key="index"
                >
                  <div class="p-2 inline">
                    <div class="chat-icons m-1">
                      <font-awesome-icon
                          :class="[
                          'w-4 h-4 -lg:w-4 -lg:h-4 m-auto border rounded-full p-3',
                          item.name == 'New Channel' ? 'hover-icon' : '',
                        ]"
                          :icon="item.icon"
                      />
                    </div>
                    <div class="text-min -xs:text-xs pt-1 pr-2">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-4 inline-block pb-2 justify-start">
              <div class="text-xl -lg:text-lg font-semibold">Favorites</div>
              <div class="flex">
                <div
                    class="relative cursor-pointer ml-1"
                    v-for="(item, index) in onlineMembers"
                    :key="index"
                >
                  <div class="inline">
                    <div class="p-2 m-1 relative">
                      <img
                          class="w-12 h-12 -lg:w-12 -lg:h-12 m-auto rounded-full"
                          :src="item.profile_photo_path"
                          alt=""
                          @click="selectedConversation = item"
                      />
                      <div
                          v-if="index === 1"
                          class="rounded-full w-3 h-3 bg-red-700 absolute right-3 bottom-2"
                      ></div>
                      <div
                          v-else
                          class="rounded-full w-3 h-3 bg-accent-focus/80 absolute right-3 bottom-2"
                      ></div>
                    </div>
                    <div
                        class="text-min -xs:text-xs pr-1 h-auto justify-center"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>
                <div class="relative cursor-pointer ml-1">
                  <div class="inline">
                    <div class="p-2 m-1 relative">
                      <font-awesome-icon
                          class="hover-icon w-5 h-5 -lg:w-5 -lg:h-5 m-auto border rounded-full p-3"
                          :icon="['fas', 'fa-plus-circle']"
                      />
                    </div>
                    <div
                        class="text-min -xs:text-xs pr-1 h-auto justify-center"
                    >
                      New Favorite
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-xl -lg:text-lg font-semibold pt-2">
            Conversations
          </div>
          <div class="inline">
            <template v-for="(chat, index) in conversations">

            <div
                class="conversation-block justify-start bg-white rounded-md flex mt-4"
                v-if="conversationMessages[chat.id]?.length"
                :key="index"
                @click="selectedConversation = chat"
            >
              <div class="relative flex p-2">
                <img
                    :src="chat.profile_photo_path"
                    class="w-[43px] h-[43px] rounded-full"
                    alt=""
                />
                <div
                    class="rounded-full w-2 h-2 absolute right-2 bottom-3"
                    :class="chat.active ? 'bg-accent-focus/80' : 'bg-red-700'"
                />
              </div>

              <div class="grid p-2">
                <div class="flex">
                  <div
                      class="text-sm -xs:text-xs text-black font-semibold inline"
                  >
                    {{ chat.name }}
                  </div>
                  <div
                      v-if="index === 1"
                      class="text-extra-small text-white bg-blue-500 rounded-full ml-1 font-semibold"
                  >
                    +2
                  </div>
                </div>
                <div class="flex text-end w-64">
                  <div
                      class="text-xs -xs:text-xs items-start text-start text-black justify-start overflow-hidden text-ellipsis inline w-2/3 whitespace-nowrap"
                  >
                    {{ chat.message }}
                  </div>
                  <div
                      v-if="index === 3 || index === 4"
                      class="text-xs -xs:text-xs text-end items-end text-black justify-end w-1/3"
                  >
                    yesterday
                  </div>
                  <div
                      v-else
                      class="text-xs -xs:text-xs text-end items-end text-black justify-end w-1/3"
                  >
                    {{ new Date().toJSON().slice(12, 16).replace(/-/g, "/") }}
                    pm
                  </div>
                </div>
              </div>
            </div>
            </template>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div
      class="chat-conversation-container max-h-screen"
      v-if="selectedConversation !== null"
  >
    <div class="chat-message-block flex">
      <div
          class="pills-body grid w-1/16 bg-black relative border-white-800 border rounded-t-full rounded-b-full"
      >
        <div class="mx-auto mt-3 max-h-1/6">
          <div>
            <font-awesome-icon
                class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3"
                :icon="['fas', 'fa-plus-circle']"
            />
          </div>
          <div class="py-2" @click="selectedConversation = null">
            <font-awesome-icon
                class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3"
                :icon="['fas', 'fa-message']"
            />
          </div>
        </div>
        <div
            class="mx-2 max-h-5/6 pb-2 mb-3 overflow-x-visible overflow-y-auto no-scrollbar overscroll-true"
        >
          <div
              class="py-2 floating-tooltip"
              v-for="(item, index) in onlineMembers"
              :key="index"
              :data-name="item.name"
              @mouseover="showName"
              @mouseleave="hideName"
          >
            <div class="relative chat-imag-container">
              <img
                  id="chat-head"
                  :class="[
                  'sticky w-12 h-12 -lg:w-12 -lg:h-12 border-blue-700 border-2 rounded-full z-20 opacity-40',
                ]"
                  :src="item.profile_photo_path"
                  alt=""
                  @click="selectedConversation = item"
              />
            </div>
          </div>
          <hr
              v-if="offlineMembers.length > 0 && onlineMembers.length > 0"
              class="mx-1 my-2"
          />
          <div
              class="py-2"
              v-for="(item, index) in offlineMembers"
              :key="index"
              :data-name="item.name"
              @mouseover="showName"
              @mouseleave="hideName"
          >
            <div class="relative chat-imag-container">
              <img
                  id="chat-head"
                  :class="[
                  'sticky w-12 h-12 -lg:w-12 -lg:h-12 border-blue-700 border-2 rounded-full opacity-40 z-10',
                ]"
                  :src="item.profile_photo_path"
                  alt=""
                  @click="chatItems = item"
              />
            </div>
            <div class="chat-names invisible">
              {{ item.name }}
            </div>
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
      <div class="inline ml-2 gradient-bg border rounded-lg max-h-auto h-auto">
        <div class="flex bg-black m-2">
          <div class="relative p-3">
            <img
                :src="selectedConversation.profile_photo_path"
                class="w-12 h-12 -lg:w-14 -lg:h-14 rounded-full"
            />
          </div>
          <div class="align-top mb-1 ml-2 mr-2">
            <div
                class="text-xl -lg:text-sm font-semibold pt-2 overflo overflow-hidden text-ellipsis w-[200px] whitespace-nowrap"
            >
              {{ selectedConversation.name }}
            </div>
            <div class="text-accent-focus/80 text-xs">Online Now</div>
          </div>
          <div class="align-middle ml-auto justify-end mt-3 pt-4 px-2">
            <div class="flex justify-between gap-4 -lg:gap-4">
              <img
                  src="/chat-conversation/call.svg"
                  class="w-4 h-4 -lg:w-4 -lg:h-4"
              />
              <img
                  src="/chat-conversation/video.svg"
                  class="w-4 h-4 -lg:w-4 -lg:h-4"
                  @click="toggleDropdown"
              />
              <img
                  src="/chat-conversation/menu.svg"
                  class="w-4 h-4 -lg:w-4 -lg:h-4"
                  @click="toggleDropdown"
              />
            </div>
          </div>
          <DropdownCard v-if="showDropDown" @closeDropdown="toggleDropdown"/>
        </div>
        <div
            class="message-body px-7 pb-4 -lg:px-2 -lg:py-2 -lg:pr-6 overflow-auto"
        >
          <div class="relative">
            <ChatMessagesCard
                :me="me"
                :with="selectedConversation"
                :messages="selectedChatMessages"
            />
          </div>
        </div>
        <div class="bg-base-content p-4 py-2 -lg:p-2 rounded-b-md">
          <div class="flex justify-between">
            <input
                v-if="selectedConversation.id !== alChatBot.id"
                type="text"
                placeholder="Type here"
                class="input w-full max-w-md -lg:max-w-max bg-base-content text-base-300"
                v-model="newMessage"
                @keyup.enter="handleSendNewMessage"
            />
            <select
                v-else
                class="input w-full max-w-md -lg:max-w-max bg-base-content text-base-300"
                :class="{'opacity-50': !newMessage}"
                v-model="newMessage"
                @keyup.enter="handleSendNewMessage"
                @input="handleQuestionChangeForChatBot"
            >
              <option :value="null" selected>Select a question...</option>
              <option v-for="({question}, idx) in alChatBotTrainingSet" :value="question">{{ question }}</option>
            </select>
            <div class="gap-5 flex">
              <img src="/chat-conversation/image.svg" class="w-5"/>
              <button ref="sendNewMessageNode" class="w-10" @click="handleSendNewMessage">
                <img
                    src="/chat-conversation/send.svg"
                    alt="Send Message"
                    class="w-5"
                />
              </button>
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
        background: linear-gradient(
            0deg,
            rgba(0, 116, 200, 1) 0%,
            rgba(0, 0, 0, 1) 100%
        );
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

.chat-names {
  @apply text-sm rounded px-3 py-1 fixed bg-blue-800 whitespace-nowrap z-10;
}

#chat-head:hover {
  cursor: pointer;
  opacity: 1;
}

.hover-icon:hover {
  cursor: pointer;
  color: #007fd5;
  border: 1px solid #007fd5;
}

.conversation-block:hover {
  background-color: #007fd5;
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
import ChatMessagesCard from "./components/chat-messages-card.vue";
import DropdownCard from "./components/dropdown-card.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {far} from "@fortawesome/pro-regular-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/pro-solid-svg-icons";
import { useQuery } from "@vue/apollo-composable";
import member from "~/api/queries/member";
import location from "~/api/queries/location";
import {getRandomInt} from "~/api/utils/number";
import {faker} from "@faker-js/faker";

library.add(far, fas);
const selectedConversation = ref(null);
const showDropDown = ref(false);
const sendNewMessageNode = ref();

const me = useMe();

const alChatBot = {
  id: "al-chat-bot",
  name: "Al",
  profile_photo_path: "https://cdn-icons-png.flaticon.com/512/2582/2582389.png",
  // avatar: "/chat-bot.png",
};

const members = ref([alChatBot]);
const chatItems = ref([
  {
    name: "Trainers Forum",
    image: "/chat-conversation/trainer.png",
    icon: ["fas", "fa-window-maximize"],
  },
  {
    name: "New Members",
    image: "/chat-conversation/member.png",
    icon: ["fas", "fa-user-plus"],
  },
  {
    name: "",
    image: "/chat-conversation/club.png",
    icon: ["fas", "fa-warehouse-alt"],
  },
  {
    name: "New Channel",
    image: "/chat-conversation/plus.png",
    icon: ["fas", "fa-plus-circle"],
  },
]);

const locationData = ref(null);
const { result } = useQuery(location.query.browse, { first: 1 });
watch(result, () => {
  locationData.value = result.value.locations.data[0];
  chatItems.value[2].name = locationData.value.name;
})

const user = useState("auth");
const floatingTooltip = inject("floating-modal");
const status = ["online", "offline"];

const { result: memberResult } = useQuery(member.query.browse, { first: 50 });
watch(memberResult, () => {
  memberResult.value.members.data.forEach((member) => {
    members.value.push({
      ...member,
      name: `${member.first_name} ${member.last_name}`,
      message: faker.random.words(3),
      profile_photo_path: member.profile_photo_path,
      active: getRandomInt(50) > 15,
      status: status[getRandomInt(status.length - 1)],
      conversationAt: getRandomInt(12, 1) + ":" + getRandomInt(59, 1),
    });
  });
});

const offlineMembers = computed(() =>
    pluckRandom(members.value.filter((m) => !m.active))
);
const onlineMembers = computed(() => [
  alChatBot,
  ...pluckRandom(
      members.value.filter((m) => m.active),
      2
  ),
]);

const conversations = computed(() => members.value.slice(0, 5));

const test_message_list = [
  {
    id: 1,
    from: me.value,
    message: "Hey...\n\nDo I need to bring a mat to yoga class tonight?",
    created_at: "4:40 PM",
  },
  {
    id: 3,
    from: me.value,
    message:
        "Also, I have a friend Wanda that would like to join. Can she come too?",
    created_at: "4:46 PM",
  },
  {
    id: 4,
    from: null,
    message:
        "Hi George, We have mats available but you can bring your own. Yes, Wanda can attend.  There are a few spots available.",
    created_at: "4:50 PM",
  },
];

const conversationMessages = ref({});

watch(conversations, () => {
  conversations.value.forEach((c) => {
    let defaultMessages = [];
    if (c.id !== alChatBot.id) {
      defaultMessages = test_message_list.map((m) =>
          m.from ? m : {...m, from: c}
      );
    }
    conversationMessages.value[c.id] = defaultMessages;
  });
  conversationMessages.value = {...conversationMessages.value};
});

const selectedChatMessages = computed(() => {
  if (selectedConversation.value?.id) {
    return conversationMessages.value[selectedConversation.value.id];
  }
});

function pluckRandom(list, limit = 3) {
  return list.sort(() => Math.random() - Math.random()).slice(0, limit);
}

const toggleDropdown = () => {
  showDropDown.value = !showDropDown.value;
};
const toggleChatOpen = () => {
  selectedConversation.value = !selectedConversation.value;
};

function showName(e) {
  const imageContainer = e.currentTarget
      .querySelector(".chat-imag-container")
      .getBoundingClientRect();
  floatingTooltip(e.currentTarget.getAttribute("data-name"), {
    left: (container) => imageContainer.left - container.offsetWidth - 2 + "px",
    top: imageContainer.top + 10 + "px",
  });
}

function hideName(e) {
  floatingTooltip("");
}

const newMessage = ref();

const lastMessage = ref();

const handleSendNewMessage = () => {
  if (newMessage.value) {
    lastMessage.value = newMessage.value;
    addMessageToConversation(me.value, newMessage.value);
    newMessage.value = null;
  }
};

const addMessageToConversation = (from, message) => {
  const conversationId = selectedConversation.value.id;

  //add in new conversation if not exists
  if(!conversationMessages.value[conversationId]) {
    conversationMessages.value[conversationId] = [];
  }

  conversationMessages.value[conversationId].push({
    id: selectedChatMessages.value.length + 1,
    from,
    message,
    created_at: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  });

  //handle AI response
  if (selectedConversation.value.id === alChatBot.id) {
    setTimeout(() => {
      handleAlChatBotResponse();
    }, Math.random() * 2500);
  }
};

const alChatBotTrainingSet = [
  {question: "What is my daily membership sales needed for goal?", answer: "484 new members per day; $14,520 in new EFT per day"},
  {question: "How many specific memberships sold month to date?", answer: "10,162 new members this month"},
  {question: "What am I forecasting this month?", answer: "15,000 New Members; 375 New Personal Training Clients"},
  {question: "What is my membership net change month to date?", answer: "1,350 net members"},
  {question: "What is my draft collection MTD", answer: "$575,800 in Personal Training Draft; $9,145,161 in Membership Draft"},
  {question: "What are my draft projections?", answer: "$13,500,000 in Membership; $2,137,500 in Personal Training"},
  {question: "How many past due members?", answer: "12,500 past due members"},
  {question: "How many frozen accounts", answer: "1,875 frozen accounts"},
  {question: "How much weight has been lost MTD", answer: "18,500lbs lost MTD"},
  {question: "How many training sessions are scheduled today", answer: "1,612 training sessions are scheduled today"},
  {question: "What is my Revenue per member Month to date", answer: "$30 Revenue per Member MTD"},
  {question: "What is the average length of member", answer: "13 months is the average length of member"},
];

const handleAlChatBotResponse = () => {
  let message = "Oops... Something went wrong. Please try again.";

  const response = alChatBotTrainingSet.find(({question}) =>
    question === lastMessage.value
  );

  if(response){
    message = response.answer;
  }
  conversationMessages.value[alChatBot.id].push({
    id: selectedChatMessages.value.length + 1,
    from: alChatBot,
    message,
    created_at: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  });
}

const handleQuestionChangeForChatBot = () => {
  console.log('handleQuestionChangeForChatBot', {newMessage, sendNewMessageNode});
  sendNewMessageNode.value.focus();
}
</script>
