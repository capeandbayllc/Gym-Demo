<template>
    <simple-card class="guest-pass-card" :closable="true" title="Guest Pass">
        <div class="guest-card-form">
            <template v-for="item in fields" :key="item.key">
                <div>
                    <div>{{item.label}}</div>
                    <input class="bg-secondary" v-model="form[item.key]"/>
                </div>
            </template>
            <div>
                <div>Location</div>
                <select-box
                    :items="locations"
                    :value="form.location"
                    :on-change="value => form.location = value"
                />
            </div>
            <div class="flex items-end justify-end">
                <Button size="sm">Cancel</Button>
                <Button secondary size="sm">Create Guest Pass</Button>
            </diV>
        </div>
    </simple-card>
</template>
<style scoped>
.guest-pass-card {
    @apply bg-neutral m-auto;
    @screen -lg {
        @apply m-4
    }
    .guest-card-form {
        @apply border border-secondary my-8 mx-4 lg:mx-16 p-8 rounded grid  grid-cols-1  lg:grid-cols-2 gap-x-12 gap-y-8;
        input {
            @apply h-9 rounded mt-3 w-full pl-2;
        }
        input:focus {
            @apply outline-none;
        }
    }
}
</style>
<script setup>
import {ref} from 'vue'

const form = ref({
    location: "1"
})
const fields = [{
    key: "first_name",
    label: "First Name",
}, {
    key: "last_name",
    label: "Last Name",
}, {
    key: "email",
    label: "Email",
}, {
    key: "phone",
    label: "Phone Number",
}, {
    key: "date",
    label: "Date Range",
}, {
    key: "gender",
    label: "Gender",
}]

const locations = [{
    value: "1",
    label: "Gym Location 1"
}, {
    value: "2",
    label: "Gym Location 2"
}, {
    value: "3",
    label: "Gym Location 3"
}]
</script>