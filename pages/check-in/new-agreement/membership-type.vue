<template>
    <simple-card title="Select your membership type below:">
        <div class="px-10">
            <table class="w-full membership-table">
                <thead>
                    <tr class="text-center">
                        <th></th>
                        <th>
                            <div class="py-2 border border-secondary rounded-md">
                                <b>Basic</b>
                                <p>$9.99</p>
                                <p>Per month</p>
                            </div>
                        </th>
                        <th>
                            <div class="py-2 border border-secondary rounded-md">
                                <b>Basic</b>
                                <p>$14.99</p>
                                <p>Per month</p>
                            </div>
                        </th>
                        <th>
                            <div class="py-2 border border-secondary rounded-md">
                                <b>Basic</b>
                                <p>$21.99</p>
                                <p>Per month</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in membershipTable" :key="index">
                        <td class="border-b border-secondary py-3 align-bottom">{{ item.label }}</td>
                        <td class="border border-secondary py-3 text-center">
                            <CheckCircleIcon v-if="item.basic == true" class="inline-block"/>
                            <Button v-else-if="item.basic == 'select'" secondary size="sm" class="my-5">Select</Button>
                            <span v-else> <span v-if="item.basic != false"> {{ item.premiumPlus }} </span> </span>
                        </td>
                        <td class="border border-secondary py-3 text-center">
                            <CheckCircleIcon v-if="item.premium == true" class="inline-block"/>
                            <Button v-else-if="item.premium == 'select'" secondary size="sm" class="my-5">Select</Button>
                            <span v-else> <span v-if="item.premium != false"> {{ item.premiumPlus }} </span> </span>
                        </td>
                        <td class="border border-secondary py-3 text-center">
                            <CheckCircleIcon v-if="item.premiumPlus == true" class="inline-block"/>
                            <Button v-else-if="item.premiumPlus == 'select'" secondary size="sm" class="my-5">Select</Button>
                            <span v-else> <span v-if="item.premiumPlus != false"> {{ item.premiumPlus }} </span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-secondary border border-secondary py-3 align-top">Total Due Today</td>
                        <td class="text-secondary border border-secondary py-3 text-center">
                            <p class="mb-6">$0.00</p>
                            <Button secondary size="sm">Select</Button>
                        </td>
                        <td class="text-secondary border border-secondary py-3 text-center">
                            <p class="mb-6">$0.00</p>
                            <Button secondary size="sm">Select</Button>
                        </td>
                        <td class="text-secondary border border-secondary py-3 text-center">
                            <p class="mb-6">$0.00</p>
                            <Button secondary size="sm">Select</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </simple-card>
</template>

<script setup>
import { CheckCircleIcon } from "@/components/icons";
const membershipTable = ref([
    {
        label:"Month-to-Month",
        basic: true,
        premium: true,
        premiumPlus: true
    },
    {
        label:"Open 24 hours a Day",
        basic: true,
        premium: true,
        premiumPlus: true
    },
    {
        label:"Access to Cardio & Strength Equipment",
        basic: true,
        premium: true,
        premiumPlus: true
    },
    {
        label:"Complimentary Welcome Workout",
        basic: true,
        premium: true,
        premiumPlus: true
    },
    {
        label:"Swimming Pool and Hot Tub",
        basic: false,
        premium: true,
        premiumPlus: true
    },
    {
        label:"Group Fitness Classes",
        basic: false,
        premium: false,
        premiumPlus: true
    },
    {
        label:"Summary of Fees",
        basic: "select",
        premium: "select",
        premiumPlus: "select"
    },
    {
        label:"Enrollment Fee",
        basic: "$0.00",
        premium: "$0.00",
        premiumPlus: "$0.00"
    },
    {
        label:"Taxes",
        basic: "$0.00",
        premium: "$0.00",
        premiumPlus: "$0.00"
    },
        {
        label:"Monthly Dues",
        basic: "$0.00",
        premium: "$0.00",
        premiumPlus: "$0.00"
    },
    {
        label:"Pro-rated",
        basic: "$0.00",
        premium: "$0.00",
        premiumPlus: "$0.00"
    },
    {
        label:"Taxes",
        basic: "$0.00",
        premium: "$0.00",
        premiumPlus: "$0.00"
    },
        {
        label:"Annual Fee",
        basic: "$0.00",
        premium: "$0.00",
        premiumPlus: "$0.00"
    }
]);
</script>

<style scoped>
    .membership-table tbody tr th, .membership-table tbody tr td{
        @apply px-4;
    }
    .membership-table tbody tr td{
        @apply border;
    }
</style>