<template>
  <div class="profile-info-container">
    <div
      class="profile-avatar outline-4 hover:outline-[0.75rem] transition-all outline-yellow-400 duration-200 ease-in-out outline-none border-none"
    >
      <div class="alert-badge" v-if="user.notifications.length > 0">
        {{ user.notifications.length }}
      </div>
      <img :src="user.profile_photo_path" alt="profile image" />
    </div>
    <div class="profile-name">{{ user.first_name }} {{ user.last_name }}</div>
    <div class="pb-5">
      Member since 2022
      <br />
      Club ID# 123456789
    </div>
    <div class="flex items-center justify-between w-full mb-4">
      <div class="profile-status">
        <button
          class="bg-amber-500 text-xl w-10 h-10 text-center justify-center font-bold rounded-xl px-1.5 relative flex items-center hover:text-[0px] group/p-btn"
          @click="$emit('toggle-detail', true)"
        >
          P
          <span class="edit-icon"
            ><edit-icon class="mb-2 group-hover/p-btn:visible"
          /></span>
        </button>
        <addon-btn
          :value="true"
          class="profile-membership-btn"
          @click="$emit('toggle-detail', true)"
        />
        <button
          class="profile-membership-btn rounded-xl px-1.5 femily-member"
          secondary
          @click="$emit('toggle-detail', true)"
        >
          FM
          <span class="edit-icon"><edit-icon class="mb-2" /></span>
        </button>
      </div>
      <OfferUpBtn />
    </div>
    <div class="grid w-full">
      <div
        class="flex group/container justify-between items-center px-8 py-3 relative border-2 border-secondary rounded-2xl mb-4 z-[1]"
      >
        <div
          class="absolute group-hover/container:opacity-100 opacity-0 h-full -z-[1] w-full transition-all duration-200 ease-in top-0 left-0 rounded-2xl bg-gradient-to-b from-secondary to-secondary/30"
        ></div>
        <button
          v-for="({ icon }, ndx) in engageOptions"
          :key="ndx"
          class="border-2 border-white rounded-xl bg-secondary h-full p-2 hover:border-gray-200/50 transition-all duration-300"
          @click="$emit('open-engage')"
        >
          <component :is="icon" />
        </button>
      </div>
      <div class="border-secondary border-2 bg-neutral rounded-2xl py-2">
        <h6 class="text-sm mb-2 font-semibold">Guest Pass:</h6>
        <ul class="no-scrollbar max-h-20 overflow-y-scroll font-semibold px-4">
          <li
            class="flex my-4 items-center"
            v-for="guest in guests"
            :key="guest.id"
          >
            <div class="mr-2">
              <div
                class="w-full rounded-xl bg-secondary text-primary-content text-xs h-full p-2"
              >
                Issued {{ guest.date }}
              </div>
            </div>
            <span class="text-xs ml-2 flex whitespace-nowrap items-center"
              >Day Left:
              <b
                class="text-md bg-black/20 border-2 border-secondary py-2 px-3 rounded-xl ml-2"
                >{{ guest.dat_left }}</b
              ></span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.edit-on-hover {
  &:hover {
    font-size: 0;
    @apply px-4;
    .edit-icon {
      @apply visible;
    }
  }
  .edit-icon {
    @apply absolute h-[20px] w-[20px] invisible;
    svg {
      @apply h-full w-full;
    }
  }
}
.profile-info-container {
  @apply flex flex-col flex-1 items-center text-lg text-center;
  .profile-avatar {
    @apply relative rounded-full border-4 p-1.5 overflow-hidden;
    img {
      @apply w-36 h-36 rounded-full;
    }
    .alert-badge {
      @apply absolute flex items-center justify-center w-12 h-12 rounded-full bg-error text-3xl font-semibold;
      left: -0.5rem;
      top: -0.375rem;
    }
  }
  .alert-badge {
    @apply absolute flex items-center justify-center w-12 h-12 rounded-full bg-error text-3xl font-semibold;
    left: -0.5rem;
    top: -0.375rem;
  }
}
.profile-name {
  @apply text-3xl font-semibold pt-4 pb-2;
}
.profile-status {
  @apply flex flex-row space-x-4;
  .profile-membership-btn {
    @apply text-xl w-10 h-10 text-center justify-center font-bold text-white;
  }
  > div > button {
    @apply relative;
  }
}
.femily-member {
  @apply relative bg-secondary flex items-center justify-center;
  &:hover {
    font-size: 0;
    @apply px-4;
    .edit-icon {
      @apply visible;
    }
  }
}
.edit-icon {
  @apply absolute h-5 w-5 invisible mx-auto left-0 right-0;
  svg {
    @apply h-full w-full;
  }
}

.guest-pass {
  @apply border border-secondary rounded p-5;
}
.profile-actions {
  @apply flex flex-row space-x-12 pb-5 text-center;
  .btn {
    @apply text-base-content text-sm font-semibold;
  }
}
</style>
<script setup>
import MembershipBtn from "~~/components/buttons/membership-btn.vue";
import AddonBtn from "~~/components/buttons/addon-btn.vue";
import OfferUpBtn from "~~/components/buttons/offer-up-btn.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import {
  CallIcon,
  EmailIcon,
  MessageIcon,
  EditIcon,
} from "~~/components/icons";
const user = useState("auth");

const guests = [
  {
    id: 1,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 2,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 3,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 4,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 5,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 6,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 7,
    date: "December 12, 2021",
    dat_left: 2,
  },
  {
    id: 8,
    date: "December 12, 2021",
    dat_left: 2,
  },
];
const engageOptions = [
  {
    icon: CallIcon,
  },
  {
    icon: EmailIcon,
  },
  {
    icon: MessageIcon,
  },
];
</script>
