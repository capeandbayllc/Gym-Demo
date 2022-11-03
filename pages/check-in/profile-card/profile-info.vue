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
            <btn-membership :membership="mock.membership" />
            <btn-addon :value="true" />
        </div>
        <div class="font-semibold pb-2">Contact</div>
        <div class="profile-contact-methods">
            <Button secondary>Phone</Button>
            <Button secondary>Email</Button>
            <Button secondary>SMS</Button>
        </div>
        <div class="flex flex-row space-x-12 pb-5">
            <Button secondary class="text-base-content text-sm font-semibold" size="sm">Create a Note</Button>
            <Button secondary class="text-base-content text-sm font-semibold" size="sm">Add an Alert</Button>
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
        @apply flex flex-row w-full space-x-7 pb-8;
        button {
            @apply text-base-content text-lg font-semibold border border-base-content w-24;
        }
    }
}
</style>
<script setup>
const mock = {
    img: '/checkin/kevin.png',
    name: 'Kevin Buchanan',
    joined: 2020,
    club_id: 1234567890,
    membership: 'premimum',
    addOns: 'pt',
    notifications: 3,
}
</script>