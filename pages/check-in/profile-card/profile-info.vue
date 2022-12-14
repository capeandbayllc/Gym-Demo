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
        </div>
        <div class="font-semibold pb-2">Contact</div>
        <div class="profile-contact-methods">
            <Button secondary class="-sm:!ml-2">Phone</Button>
            <Button secondary class="-sm:!ml-2">Email</Button>
            <Button secondary class="-sm:!ml-2">SMS</Button>
        </div>
        <div class="profile-actions">
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
        </div>
    </div>
</template>
<style scoped>
.profile-info-container {
    @apply flex flex-col items-center text-lg text-center;
    .profile-avatar {
        @apply relative rounded-full bg-info p-2;
        img {
            @apply w-36 h-36;
        }
        .alert-badge {
            @apply absolute flex items-center justify-center w-12 h-12 rounded-full bg-error text-3xl font-semibold;
        }
    }
    .profile-name {
        @apply text-3xl font-semibold pt-4 pb-2;
    }
    .profile-status {
        @apply flex flex-row space-x-4 pb-3;
    }
    .profile-contact-methods {
        @apply flex flex-row  space-x-7 pb-8;
        button {
            @apply text-base-content text-base xl:text-lg font-semibold border border-base-content w-24;
        }
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
const mock = {
    img: '/checkin/kevin.png',
    name: 'Kevin Buchanan',
    joined: 2020,
    club_id: 1234567890,
    membership: 'premium',
    addOns: 'pt',
    notifications: 3,
}
</script>