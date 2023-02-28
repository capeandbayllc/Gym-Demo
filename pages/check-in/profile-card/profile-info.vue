<template>
    <div class="profile-info-container">
        <div class="profile-avatar">
            <div class="alert-badge">3</div>
            <img :src="mock.img"/>
        </div>
        <div class="profile-name">{{mock.name}}</div>
        <div class="pb-5">
            Member since {{mock.joined}}
            <br />
            Club ID# {{mock.club_id}}
        </div>
        <div class="profile-status">
            <membership-btn editIconOnHover :membership="mock.membership" class="profile-membership-btn"
                @click="$emit('toggle-detail', true)"
            />
            <addon-btn :value="true" class="profile-membership-btn"
                @click="$emit('toggle-detail', true)"
            />
            <button size="sm" class="profile-membership-btn rounded-full px-1.5 femily-member" secondary
                @click="$emit('toggle-detail', true)"
            >
                FM
                <span class="edit-icon"><edit-icon class="mb-2" /></span>
            </button>
        </div>
        <div class="grid">
            <button class="profile-contact-methods" @click="$emit('open-engage')">
                <span class="mr-14 font-bold text-2xl">Engage</span>
                <div
                    v-for="{icon}, ndx in engageOptions"
                    :key="ndx"
                    class="-sm:!ml-2"
                >
                    <component :is="icon"/>
                </div>
            </button>
            <div class="guest-pass-container">
                <h6>Guest Pass:</h6>
                <ul class="no-scrollbar">
                    <li class="flex my-4 items-center" v-for="guest in guests" :key="guest.id">
                        <div class="mr-2">
                            <div class="w-full rounded-md bg-base-content text-base-300 text-xs h-full p-2">Issued {{ guest.date }}</div>
                        </div>
                        <span class="text-xs ml-2 flex whitespace-nowrap items-center">Day Left: <b class="text-md bg-black border-2 border-secondary py-2 px-3 rounded-full ml-2">{{guest.dat_left}}</b></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>

.edit-on-hover {
    &:hover {
        font-size:0;
        @apply px-4;
        .edit-icon{
            @apply visible;
        }
    }
    .edit-icon{
        @apply absolute h-[20px] w-[20px] invisible;
        svg {
            @apply h-full w-full;
        }
    }
}
.profile-info-container {
    @apply flex flex-col flex-1 items-center text-lg text-center;
    .profile-avatar {
        @apply relative rounded-full border-4 p-1.5;
        img {
            @apply w-36 h-36;
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
        @apply flex flex-row space-x-4 pb-3;
        .profile-membership-btn {
            @apply text-xl w-10 h-10 text-center justify-center font-bold;
        }
        > div > button{
            @apply relative;
        }
    }
    .femily-member{
        @apply relative bg-secondary flex items-center justify-center;
        &:hover {
            font-size:0;
            @apply px-4;
            .edit-icon{
                @apply visible;
            }
        }
    }
    .edit-icon{
        @apply absolute h-5 w-5 invisible mx-auto left-0 right-0;
        svg {
            @apply h-full w-full;
        }
    }
    
    .profile-contact-methods {
        @apply flex flex-row space-x-7 px-4 py-2 mb-4 border-2 border-secondary rounded-md items-center hover:bg-secondary;
        button {
            @apply text-base-content text-base xl:text-lg font-semibold;
        }
    }
    .guest-pass {
        @apply border border-secondary rounded p-5;
    }
    .profile-actions {
        @apply flex flex-row space-x-12 pb-5 text-center;
        .btn {
            @apply text-base-content text-sm font-semibold
        }
    }
    .guest-pass-container {
        @apply px-4 py-2 border-2 border-secondary bg-neutral-content/40 rounded-md -xl:mb-2;
        h6 {
            @apply text-sm mb-2 font-semibold;
        }
        ul {
            @apply max-h-[80px] overflow-auto px-4;
        }
    }
}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';
import AddonBtn from '~~/components/buttons/addon-btn.vue'
import { CallIcon,EmailIcon,MessageIcon,EditIcon } from '~~/components/icons';
const mock = {
    img: '/checkin/kevin.png',
    name: 'Kevin Buchanan',
    joined: 2020,
    club_id: 1234567890,
    membership: 'p',
    addOns: 'pt',
    notifications: 3,
}

const guests = [{
    id: 1,
    date: "December 12, 2021",
    dat_left: 2
}, {
    id: 2,
    date: "December 12, 2021",
    dat_left: 2
}]
const engageOptions = [{
    icon: CallIcon
}, {
    icon: EmailIcon
}, {
    icon: MessageIcon
}]
</script>