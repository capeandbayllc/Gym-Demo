<template>
    <simple-card title="Select your membership type below:">
        <div class="px-10 relative">
            <div class="shadow-layer absolute gradient-bg overflow-auto right-10 rounded-[18px] top-[100px] bottom-0"></div>
            <table class="w-full membership-table border-separate border-spacing-0 mb-5">
                <thead>
                    <tr class="text-center">
                        <th></th>
                        <th>
                            <div class="py-2 m-1 border border-secondary rounded-md gradient-bg">
                                <b>Basic</b>
                                <p>$9.99</p>
                                <p>Per month</p>
                            </div>
                        </th>
                        <th>
                            <div class="py-2 m-1 border border-secondary rounded-md gradient-bg">
                                <b>Basic</b>
                                <p>$14.99</p>
                                <p>Per month</p>
                            </div>
                        </th>
                        <th>
                            <div class="py-2 m-1 border border-secondary rounded-md gradient-bg">
                                <b>Basic</b>
                                <p>$21.99</p>
                                <p>Per month</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="relative">
                    <tr v-for="(item, index) in membershipTable" :key="index">
                        <td class="border-b border-secondary py-3 align-bottom" :class="index==0 ? '!border-r-0' : '' ">{{ item.label }}</td>
                        <td class="border border-secondary py-3 text-center" :class="index==0 ? '!border-solid top-left-corner':''">
                            <CheckCircleIcon v-if="item.basic == true" class="inline-block"/>
                            <Button v-else-if="item.basic == 'select'" secondary size="sm" class="my-5">Select</Button>
                            <span v-else> <span v-if="item.basic != false"> {{ item.premiumPlus }} </span> </span>
                        </td>
                        <td class="border border-secondary py-3 text-center" :class="index==0 ? '!border-solid' : '' ">
                            <CheckCircleIcon v-if="item.premium == true" class="inline-block"/>
                            <Button v-else-if="item.premium == 'select'" secondary size="sm" class="my-5">Select</Button>
                            <span v-else> <span v-if="item.premium != false"> {{ item.premiumPlus }} </span> </span>
                        </td>
                        <td class="border border-secondary py-3 text-center" :class="index==0 ? '!border-solid top-right-corner' : '' ">
                            <CheckCircleIcon v-if="item.premiumPlus == true" class="inline-block"/>
                            <Button v-else-if="item.premiumPlus == 'select'" secondary size="sm" class="my-5">Select</Button>
                            <span v-else> <span v-if="item.premiumPlus != false"> {{ item.premiumPlus }} </span> </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-secondary border border-secondary py-3 align-top !border-b-0 !border-r-0">Total Due Today</td>
                        <td class="text-secondary border border-secondary py-3 text-center bottom-left-corner">
                            <p class="mb-6">$0.00</p>
                            <Button secondary size="sm">Select</Button>
                        </td>
                        <td class="text-secondary border border-secondary py-3 text-center">
                            <p class="mb-6">$0.00</p>
                            <Button secondary size="sm">Select</Button>
                        </td>
                        <td class="text-secondary border border-secondary py-3 text-center bottom-right-corner">
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
        border-style: none solid solid none;
    }
    .shadow-layer{
        width:calc(100% - 24.5rem)
    }
    .top-left-corner{
        border-top-left-radius: 20px;
        border-top-style: solid !important;
        border-left-style: solid !important;
    }
    .top-right-corner{
        border-top-right-radius: 20px;
    }
    .bottom-left-corner{
        border-bottom-left-radius: 20px;
        border-bottom-style: solid !important;
        border-left-style: solid !important;
    }
    .bottom-right-corner{
        border-bottom-right-radius: 20px;
    }
</style>