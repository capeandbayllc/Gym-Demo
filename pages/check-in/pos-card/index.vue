<template>
    <simple-card class="checkin-pos-card" :closable="true" title="Point of Sale">
        <div class="p-4 lg:p-7 flex flex-col lg:flex-row gap-3">
            <div class="flex flex-col">
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
                <div class="past-purchase">
                    <div class="text-xl font-semibold">Past Purchases</div>
                    <data-table
                        :columns="columns"
                        :data="mock.history"
                        :row-component="PosTableRow"
                        class="min-h-80 overflow-y-auto"
                    />
                </div>
            </div>
            <div class="new-cart-container">
                <h3>New cart</h3>
                <cart-card />
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.checkin-pos-card {
    @apply bg-neutral m-auto;
    @screen -lg {
        margin: 20px 40px 19px 83px;
    }
    .profile-info {
        @apply flex flex-col items-center sm:flex-row space-x-7;
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
    .past-purchase {
        @apply border border-secondary rounded p-5 mt-7;
    }
    .new-cart-container {
        @apply flex flex-col lg:items-center w-full lg:w-96;
        h3 {
            @apply text-2xl font-semibold;
        }
    }
}
</style>
<script setup>
import PosTableRow from './pos-table-row.vue';
import CartCard from './cart-card.vue';
const columns = new Array(3).fill("")
const mock = {
    img: '/checkin/kevin.png',
    name: 'Kevin Buchanan',
    joined: 2020,
    club_id: 1234567890,
    history: [{
        id: 1,
        name: 'Kevin Buchanan',
        membership: 'Premimum'
    }, {
        id: 2,
        name: 'Kevin Buchanan',
        membership: 'Premimum'
    }, {
        id: 3,
        name: 'Kevin Buchanan',
        membership: 'Premimum'
    }]
}
</script>