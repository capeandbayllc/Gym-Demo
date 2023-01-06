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
            <membership-btn :membership="mock.membership" />
            <addon-btn :value="true" />
            <Button size="sm" class="rounded-full px-[6px] femily-member" secondary>
                FM
                <span class="edit-icon"><empty-file-icon class="mb-2" /></span>
            </Button>
        </div>
        <div class="profile-contact-methods">
            <span class="mr-14 font-bold text-xl">Engage</span>
            <button class="-sm:!ml-2"><CallIcon/></button>
            <button class="-sm:!ml-2"><EmailIcon/></button>
            <button class="-sm:!ml-2"><MessageIcon/></button>
        </div>
        <!-- <div class="profile-actions">
            <Button secondary size="sm"
                @click="$emit('create-note')" 
                class="-sm:!mr-1"
            >
                Create a Note
            </Button>
            <Button secondary size="sm"
                @click="$emit('create-alert')" 
            >
                Add an Alert
            </Button>
        </div> -->
        <div class="bg-gray p-4 border border-secondary bg-[#191919]">
            <p class="text-sm mb-2">Guest Pass:</p>
            <ul class="max-h-[80px] overflow-auto px-2">
                <li class="flex my-4">
                    <div class="mr-2">
                        <input type="text" class="rounded-md bg-white text-black text-xs h-full px-2" value="Issued December 12, 2021">
                    </div>
                    <Button size="sm" class="!bg-[#5BC600] text-black">Day Left:2</Button>
                </li>
                <li class="flex my-4">
                    <div class="mr-2">
                        <input type="text" class="rounded-md bg-white text-black text-xs h-full px-2" value="Issued December 12, 2021">
                    </div>
                    <Button size="sm" class="!bg-[#5BC600] text-black">Day Left:2</Button>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.profile-info-container {
    @apply flex flex-col items-center text-lg text-center;
    .profile-avatar {
        @apply relative rounded-full border-2 p-2;
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
        > div, > button{
            @apply relative;
            /* &:before{
                @apply absolute w-full rounded-md h-full text-sm top-0 left-0 text-center invisible capitalize;
                content:"edit";
                background: inherit;
                line-height: 30px;
            } 
            &:hover {
                color:inherit;
                &:before{
                    @apply visible;
                }
            } */
        }
    }
    .femily-member{
        @apply relative;
        &:hover {
            font-size:0;
            @apply px-4;
            .edit-icon{
                @apply visible;
            }
        }
    }
    .edit-icon{
        @apply absolute h-[20px] w-[20px] invisible mx-auto left-0 right-0;
        svg {
            @apply h-full w-full;
        }
    }
    
    .profile-contact-methods {
        @apply flex flex-row  space-x-7 p-4 mb-4 border border-secondary rounded-md;
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
}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';
import AddonBtn from '~~/components/buttons/addon-btn.vue'
import { CallIcon,EmailIcon,MessageIcon,EmptyFileIcon } from '~~/components/icons';
const mock = {
    img: '/checkin/kevin.png',
    name: 'Kevin Buchanan',
    joined: 2020,
    club_id: 1234567890,
    membership: 'p',
    addOns: 'pt',
    notifications: 3,
}
</script>