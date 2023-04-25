<template>
  <div class="helpbot-container gradient-bg">
    <div class="flex flex-col">
      <div class="m-auto mt-4">
        <font-awesome-icon
          class="action-icon"
          :icon="['fas', 'fa-message-bot']"
        />
      </div>
      <div class="text-center">HelpBot</div>
      <div class="flex" style="height: 38px">
        <input
          type="text"
          :placeholder="search"
          class="help-search"
          @mouseenter="replacePlaceholder"
          @mouseleave="getBackSearch"
        />
      </div>
    </div>
    <div class="text-sm pl-5 pt-4 pb-2">Recommended Topics</div>
    <div class="action-block pt-4">
      <div
        class="action-part"
        v-for="(item, index) in actionFirstRowData"
        :key="index"
      >
        <div
          :class="[
            item.id == 2
              ? 'border-r border-l px-2 action-border border-b'
              : 'border-b action-border',
            item.id == 1 ? 'ml-4' : '',
            item.id == 3 ? 'mr-4' : '',
          ]"
        >
          <help-actions
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
    <div class="action-block">
      <div
        class="action-part"
        v-for="(item, index) in actionSecondRowData"
        :key="index"
      >
        <div
          :class="[
            index == 1 ? 'border-r border-l px-2 action-border' : '',
            index == 0 ? 'ml-4' : '',
            index == 2 ? 'mr-4' : '',
          ]"
        >
          <help-actions
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
    <div class="justify-end flex items-end w-full my-4">
      <div class="action-button">Contact Us</div>
    </div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { ref } from "vue";
import HelpActions from "./help-actions.vue";
let search = ref("search");
const actionFirstRowData = [
  //first row data
  {
    id: 1,
    title: "Getting Started",
    description: "",
    icon: ["far", "fa-person-running"],
  },
  {
    id: 2,
    title: "Profile Preferences",
    description: "",
    icon: ["fas", "fa-circle-user"],
  },
  {
    id: 3,
    title: "Username & Password",
    description: "",
    icon: ["fas", "fa-unlock-keyhole"],
  },
];
const actionSecondRowData = [
  //second row data
  {
    id: 1,
    title: "Calendar",
    description: "",
    icon: ["fas", "fa-calendar-days"],
  },
  {
    id: 2,
    title: "Billing & Subscription",
    description: "",
    icon: ["fas", "fa-dollar-sign"],
  },
  {
    id: 3,
    title: "Tips & Tricks",
    description: "",
    icon: ["fas", "fa-lightbulb"],
  },
];

library.add(far, fas);
const replacePlaceholder = () => {
  search.value = "";
};
const getBackSearch = () => {
  search.value = "search";
};
</script>
<style scoped>
.helpbot-container {
  @apply fixed z-20 rounded-xl border-sky-700 border-2 max-w-[516px] h-auto p-[6px] cursor-pointer;
  position: relative;
}
.action-block {
  @apply grid grid-cols-3 border-[#0075C9];
}
.action-part {
  @apply inline justify-center items-center m-auto;
}
.help-search {
  @apply rounded-md w-1/2 m-auto text-base pl-3 hover:placeholder-opacity-0 mt-2 bg-[#0075C9];
}
.action-border {
  @apply border-[#0075C9];
}
.help-search:hover {
  placeholder-opacity: 0;
  cursor: pointer;
}
.action-icon {
  @apply w-6 h-6 -lg:w-5 -lg:h-5 border rounded-full p-3 bg-white text-[#0075C9];
}
.action-button {
  @apply text-sm text-center px-2 py-1 rounded-lg mr-4 bg-[#0075C9] border border-[#0075C9];
}
.action-button:hover {
  @apply text-white bg-black border-white border cursor-pointer;
}
</style>
