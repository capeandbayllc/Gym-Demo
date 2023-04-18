<template>
    <div v-if="ProfileInfo" class="profile-info-container">
        <div class="profile-avatar">
            <div class="alert-badge" v-if="user.notifications.length > 0">
                {{ user.notifications.length }}
            </div>
            <img :src="ProfileInfo.profile_photo_path" alt="profile image" />
        </div>
        <div class="profile-name">
            {{ ProfileInfo.first_name }}
            {{ ProfileInfo.last_name }}
        </div>
        <div class="pb-5">
            Member since 2022
            <br />
            Club ID# 123456789
        </div>
        <div class="flex items-center justify-between w-full mb-4">
            <!--            <OfferUpBtn />-->
        </div>
        <div class="grid w-full">
            <div class="flex group/container justify-between items-center p-3 relative border-2 border-secondary rounded-3xl mb-4 z-[1] mx-10">
                <button class="bg-amber-500 drawer-btn group" @click="$emit('toggle-detail', true)">
                    P
                    <span class="edit-icon persona-style-transitioner group-hover:opacity-100">
                      <edit-icon class="mb-2 group-hover:opacity-100 persona-style-transitioner"/>
                    </span>
                </button>
                <button class="bg-lime-500 drawer-btn group" @click="$emit('toggle-detail', true)">
                    PT
                    <span class="edit-icon persona-style-transitioner group-hover:opacity-100">
                      <edit-icon
                            class="mb-2 group-hover:opacity-100 persona-style-transitioner"/>
                    </span>
                </button>
                <button class="bg-blue-500 drawer-btn group" @click="$emit('toggle-detail', true)">
                    FM
                    <span class="edit-icon persona-style-transitioner group-hover:opacity-100">
                      <edit-icon class="mb-2 group-hover:opacity-100 persona-style-transitioner"/>
                    </span>
                </button>
            </div>
            <div class="flex flex-row justify-between gap-5 px-[3.25rem]">
                <button
                    v-for="({ icon }, ndx) in engageOptions"
                    :key="ndx"
                    class="border-2 border-secondary rounded-2xl h-full p-3 hover:border-gray-200/50 persona-style-transitioner group"
                    @click="$emit('open-engage')"
                >
                    <component
                        :is="icon"
                        class="group-hover:rotate-[360deg] persona-style-transitioner !duration-700"
                    />
                </button>
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
            @apply opacity-100;
        }
    }
    .edit-icon {
        @apply absolute h-[20px] w-[20px] opacity-0;
        svg {
            @apply h-full w-full;
        }
    }
}
.profile-info-container {
    @apply flex flex-col flex-1 items-center text-lg text-center;
    .profile-avatar {
        @apply relative !rounded-full border-4 p-1.5 ring-[4px] hover:ring-[0.75rem] transition-all ring-yellow-400 duration-200 ease-in-out border-none overflow-visible;
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
    @apply flex flex-row space-x-4 px-10 justify-between;
    .profile-membership-status {
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
            @apply opacity-100;
        }
    }
}
.edit-icon {
    @apply absolute h-5 w-5 opacity-0 mx-auto left-0 right-0;
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

.drawer-btn {
    @apply text-xl w-12 h-12 text-center justify-center font-bold rounded-2xl !p-3 relative flex items-center hover:text-[0px] persona-style-transitioner;
}

.persona-style-transitioner {
    @apply transition-all duration-200 ease-linear;
}
</style>
<script setup>
import MembershipStatus from "~~/components/buttons/membership-status.vue";
import AddonBtn from "~~/components/buttons/addon-btn.vue";
import OfferUpBtn from "~~/components/buttons/offer-up-btn.vue";
import {
    CallIcon,
    EmailIcon,
    MessageIcon,
    EditIcon,
} from "~~/components/icons";
import { request } from "~/api/utils/request";
import member from "@/api/queries/member";
import lead from "~/api/queries/lead";

const user = useState("auth");

const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const ProfileInfo = ref(null);
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

getMember();

function getMember() {
    if (profileId) {
        request((isLeadView ? lead : member).query.get, { id: profileId }).then(
            ({ data }) => {
                ProfileInfo.value = data.data[isLeadView ? "lead" : "member"];
            }
        );
    } else {
        ProfileInfo.value = user.value;
    }
}
</script>
