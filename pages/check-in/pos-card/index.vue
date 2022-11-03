<template>
    <simple-card class="checkin-pos-card" :closable="true" title="Point of Sale">
        <div class="profile-info">
            <div class="profile-avatar">
                <img :src="mock.img"/>
            </div>
            <div class="flex flex-col">
                <div class="profile-name">{{mock.name}}</div>
                <div class="pb-5 text-lg">
                    Member since {{mock.joined}}
                    <br />
                    Club ID# {{mock.club_id}}
                </div>
                <Button secondary size="md" class="text-base-content">Edit card on file</Button>
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.checkin-pos-card {
    @apply bg-neutral;
    .profile-info {
        @apply flex flex-row space-x-7;
        .profile-avatar {
            @apply w-fit h-fit bg-secondary rounded-full p-1;
            img {
                @apply w-32 h-32;
            }
        }
        .profile-name {
            @apply text-3xl font-semibold pt-4 pb-2;
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
}
</script>