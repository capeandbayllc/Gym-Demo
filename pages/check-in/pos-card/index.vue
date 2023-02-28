<template>
    <simple-card class="checkin-pos-card card-gradient-bg" :closable="true" title="Point of Sale">
        <div class="px-16 py-24 flex flex-col lg:flex-row gap-16">
            <div class="flex flex-col flex-1">
                <div class="profile-info" v-if="viewMode === 'profile'">
                    <div class="profile-avatar">
                        <img :src="mock.img"/>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="profile-name">{{mock.name}}</div>
                        <div class="text-lg">
                            Member since {{mock.joined}}
                            <br />
                            Club ID# {{mock.club_id}}
                        </div>
                        <Button secondary size="sm" class="text-base-content my-5">Edit card on file</Button>
                        <Button ghost outline size="sm" class="text-base-content" @click="showPurchase">View Past Purchases</Button>
                    </div>
                </div>
                <div class="past-purchase" v-if="viewMode === 'purchase'">
                    <div class="text-xl font-semibold">Past Purchases</div>
                    <data-table
                        :columns="columns"
                        :data="mock.history"
                        :row-component="PosTableRow"
                        class="h-96 overflow-y-auto"
                    />
                </div>
            </div>
            <div class="retail-store-container card-gradient-bg">
                <h3>Retail Store</h3>
                <div class="retail-store-options">
                    <div class="card-gradient-bg">Food and Beverage</div>
                    <div class="card-gradient-bg">Apparel</div>
                </div>
                <!-- <h3>New cart</h3>
                <cart-card /> -->
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.checkin-pos-card {
    @apply m-auto w-full max-w-[1120px] xl:w-[1120px] bg-neutral-focus/30;
    .profile-info {
        @apply flex flex-col text-center items-center justify-center w-max w-96;
        .profile-avatar {
            @apply w-fit h-fit bg-secondary rounded-full p-1;
            img {
                @apply w-28 h-28;
            }
        }
        .profile-name {
            @apply text-3xl font-semibold pt-4 pb-2;
        }
    }
    .past-purchase {
        @apply border-2 border-secondary rounded p-5 bg-base-300 w-96;
        margin-top: -2rem;
    }
    .retail-store-container {
        @apply flex flex-col lg:items-center w-full h-96 border rounded;
        h3 {
            @apply text-3xl font-semibold text-left w-full pl-9 pt-4;
        }
        .retail-store-options {
            @apply m-auto flex space-x-10 h-1/2;
            > div {
                @apply flex text-center justify-center items-center w-52 border rounded text-2xl font-bold cursor-pointer;
            }
        }
    }
}
</style>
<script setup>
import PosTableRow from './pos-table-row.vue';
import CartCard from './cart-card.vue';
const columns = new Array(3).fill("")

const viewMode = ref('profile')

const showPurchase = () => {
    viewMode.value = 'purchase'
}
const mock = {
    img: '/checkin/kevin.png',
    name: 'Kevin Buchanan',
    joined: 2020,
    club_id: 1234567890,
    history: [{
        id: 1,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 2,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 3,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 4,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 5,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 6,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    },{
        id: 11,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 12,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    }, {
        id: 13,
        name: 'Item Name',
        price: '0.00',
        amount: 102.22
    },]
}
</script>