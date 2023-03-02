<template>
    <simple-card class="guest-pass-card" :closable="true" title="Guest Pass">
        <div class="guest-card-form card-gradient-bg">
            <div class="text-xl text-secondary col-span-2 font-bold">Create Guest Pass</div>
            <template v-for="item in fields" :key="item.key">
                <div>
                    <div>{{item.label}}</div>
                    <input
                        v-if="item.key != 'date'"
                        class="bg-secondary"
                        v-model="form[item.key]"
                    />
                    <div v-else class="flex flex-row justify-between">
                        <div class="flex flex-row items-center ">
                            <calendar-icon />
                            <Datepicker
                                v-model="form['start']"
                                placeholder="00-00-0000"
                                text-input
                                input-class-name="dp-custom-input"
                                hide-input-icon
                                :format="format"
                                :enable-time-picker="false"
                            />
                        </div>
                        <div class="flex flex-row items-center ">
                            <calendar-icon />
                            <Datepicker
                                v-model="form['end']"
                                placeholder="00-00-0000"
                                text-input
                                input-class-name="dp-custom-input"
                                hide-input-icon
                                :format="format"
                                :enable-time-picker="false"
                            />
                        </div>
                    </div>
                </div>
            </template>
            <div>
                <div>Location</div>
                <select-box
                    class="bg-base-content/30"
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
        @apply py-16 px-4 lg:px-36 rounded grid  grid-cols-1  lg:grid-cols-2 gap-x-16 gap-y-8;
        input {
            @apply h-9 rounded mt-3 w-full pl-2;
        }
        input:focus {
            @apply outline-none;
        }
    }
}

</style>
<style>
    .dp-custom-input {
        @apply bg-transparent border-none text-secondary mt-1;
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            @apply text-secondary font-bold;
        }
    }

</style>
<script setup>
import {ref} from 'vue'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { CalendarIcon } from '~~/components/icons';

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

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