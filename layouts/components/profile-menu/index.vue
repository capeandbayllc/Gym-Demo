<template>
  <context-menu
    ref="profileMenu"
    class="gradient-bg profile-menu-container top-[3.80rem]"
    @isProfileMenuOpen="isProfileMenuOpenFn"
  >
    <div class="flex flex-col">
      <ul class="menu-list">
        <li class="menu-items" v-for="(item, ndx) in menu" :key="ndx">
          <span class="">{{ item.label }}</span>
          <ul v-if="item.children" class="submenu-list">
            <li
              class="submenu-items"
              v-for="(child, sub_ndx) in item.children"
              :key="sub_ndx"
            >
              <div v-if="child.label == 'Help'" @click="handleClickActions">
                {{ child.label }}
              </div>
              <div v-else @click="handleProfileMenuNavigate(child.url)">
                {{ child.label }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="self-end cursor-pointer mr-4 mb-4" @click="handleClickLogout">
        Logout
      </div>
    </div>
  </context-menu>

  <daisy-modal :overlay="true" id="helpModal" ref="helpModal">
    <help-modal />
  </daisy-modal>
</template>

<style scoped>
.profile-menu-container {
  @apply z-[30] absolute right-8 p-3 text-sm w-72;
  background: linear-gradient(to bottom right, #004285, #00254c);
  > div {
    @apply border-4 rounded-3xl -m-4;
    border-color: #d4d8dd;
  }
  .menu-list {
    @apply m-6 mb-0 mt-4;
  }
  .menu-items {
    @apply py-2 px-0;
  }
  li {
    @apply py-1.5 pr-2 cursor-pointer;
  }
  li:last-child {
    @apply pb-2;
  }
  .menu-items {
    @apply border-b last:border-b-0;
    border-bottom-color: #a6b8cb;
  }
  .submenu-items {
    @apply my-1 font-normal w-fit;
    > div {
      @apply text-white py-1 px-4 hover:bg-blue-500;
      border-radius: 0.75rem;
      background-color: #0075c9;
    }
  }
}

@media (max-width: 1920px) {
  .profile-menu-container {
    @apply right-12;
  }
}
</style>
<script setup>
import { ref } from "vue";
import HelpModal from "../help-modal/index.vue";
const helpModal = ref(null);
const profileMenu = ref(null);

const open = () => {
  profileMenu.value.open();
};

const close = () => {
  profileMenu.value.close();
};

const emit = defineEmits(["isProfileMenuOpen"]);
const isProfileMenuOpenFn = (data) => {
  emit("isProfileMenuOpen", data);
};
defineExpose({ open, close });

const menu = [
  {
    label: "Manage Account",
    children: [
      {
        label: "Profile",
      },
      {
        label: "Settings",
        url: "/profile-setting",
      },
      {
        label: "User Management",
      },
      {
        label: "Invoices",
      },
      {
        label: "Impersonation",
      },
    ],
  },
  {
    label: "Manage Team Account",
  },
  {
    label: "Extras",
    children: [
      {
        label: "Workout Generator",
      },
      {
        label: "Sales Slideshow",
      },
    ],
  },
  {
    label: "",
    children: [
      {
        label: "Help",
      },
    ],
  },
];

const authToken = useCookie("auth");

const handleClickLogout = () => {
  authToken.value = null;
  console.log("logout", document.cookie, authToken);
  navigateTo("/login");
};

const handleClickActions = () => {
  helpModal.value.open();
};

const handleProfileMenuNavigate = (url) => {
  navigateTo(url);
  close();
};
</script>
