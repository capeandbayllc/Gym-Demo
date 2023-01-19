<template>
    <div class="w-full max-w-[1120px] mx-auto">
        <simple-card class="profile-wrap" :closable="true" title="Profile" @close="$emit('close')">
            <div class="grid grid-cols-3 gap-6 py-4 px-10 -lg:grid-cols-2 mb-6 bg-black m-4 rounded-md gradient-bg">
                <!-- <div class="flex justify-between items-center col-span-3 -lg:col-span-2"> -->
                    <div></div>
                    <h2 class="text-center leading-10 text-lg">Member Information</h2>
                    <Button class="text-white capitalize ml-auto -md:!mr-0" :class="isActiveMember ? 'bg-slate-400 hover:bg-slate-500' : 'bg-lime-500 hover:bg-lime-600'" @click="isActiveMember = !isActiveMember" >{{isActiveMember ? "In-Active" : "Active"}}</Button>
                <!-- </div> -->
                
                <div v-for="item in memberInformation" :key="item.key" class="col-span-1 -lg:col-span-1 -md:col-span-2 -md:col-auto mx-auto w-full mb-4">
                    <div class="mb-2">{{item.label}}</div>
                    <input :class="item.class" class="w-full p-1 rounded-sm" v-model="memberInfo[item.key]"/>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-6 py-4 px-10 -lg:grid-cols-2 bg-black m-4 rounded-md gradient-bg">
                <h2 class="text-center leading-10 text-lg col-span-3 -lg:col-span-2">Demographics</h2>
                
                <div v-for="(item, index) in demographics" :key="item.key" :class="index == 0 ? 'col-span-3 -lg:col-span-2' :''" class="col-span-1 -md:col-span-2 -md:col-auto mx-auto w-full">
                    <div class="mb-2">{{item.label}}</div>
                    <input :class="item.class" class="w-full p-1 rounded-sm" v-model="demographicsObj[item.key]"/>
                </div>
            </div>
    </simple-card>
</div>
</template>
<script setup>

const isActiveMember = ref(false);
const memberInfo = ref({});
const memberInformation = [{
    key: "first-name",
    label: "First Name",
    class: "secondary-input"
}, {
    key: "middle-name",
    label: "Middle Name",
    class: "secondary-input"
}, {
    key: "last-name",
    label: "Last Name",
    class: "secondary-input"
}, {
    key: "birthday",
    label: "Date of Birth",
    class: "neutral-input"
}, {
    key: "gender",
    label: "Gender",
    class: "neutral-input"
}, {
    key: "social-security-number",
    label: "Social Security Number",
    class: "neutral-input"
}, {
    key: "occupation",
    label: "Occupation",
    class: "neutral-input"
}, {
    key: "employer",
    label: "Employer",
    class: "neutral-input"
}, {
    key: "barcode",
    label: "Barcode",
    class: "neutral-input"
}, {
    key: "previous-agreement-number",
    label: "Previous Agreement Number",
    class: "neutral-input"
}, {
    key: "wellness-program-id",
    label: "Wellness Program ID",
    class: "neutral-input"
},{
    key: "membership-type",
    label: "Membership Type",
    class: "neutral-input"
},{
    key: "group",
    label: "Group",
    class: "neutral-input"
},{
    key: "member-misc-1",
    label: "Member Misc. 1",
    class: "neutral-input"
},{
    key: "member-misc-2",
    label: "Member Misc. 2",
    class: "neutral-input"
}];

const demographicsObj = ref({})
const demographics = ref([{
    key: "street-address",
    label: "Street Address",
    class: "col-span-3 neutral-input"
},{
    key: "city",
    label: "City",
    class: "neutral-input"
},{
    key: "state",
    label: "State",
    class: "neutral-input"
},{
    key: "zip-code",
    label: "Zip Code",
    class: "neutral-input"
},{
    key: "email-address",
    label: "Email Address",
    class: "neutral-input"
},{
    key: "drivers-license",
    label: "Driver's License",
    class: "neutral-input"
},{
    key: "primary-phone",
    label: "Primary Phone",
    class: "neutral-input"
},{
    key: "mobile-phone",
    label: "Mobile Phone",
    class: "neutral-input"
},{
    key: "work-phone",
    label: "Work Phone",
    class: "neutral-input"
},{
    key: "fax-number",
    label: "Fax Number",
    class: "neutral-input"
},{
    key: "emergency-contact",
    label: "Emergency Contact",
    class: "neutral-input"
},{
    key: "emergency-contact-phone",
    label: "Emergency Contact Phone",
    class: "neutral-input"
},{
    key: "emergency-availability",
    label: "Emergency Availability",
    class: "neutral-input"
}
]);

</script>
<style scoped>
    .profile-wrap{
        @apply w-full max-w-[1120px] mx-auto bg-transparent mb-4;
    }
    .secondary-input {
        @apply bg-secondary;
    }
    .neutral-input {
        @apply bg-base-content/20;
    }
    .readonly-input {
        @apply bg-transparent text-base-content/50;
    }
    .outline-input {
        @apply bg-transparent border border-secondary;
    }
    .divider {
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
    }
</style>