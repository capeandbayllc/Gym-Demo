<template>
    <div class="page-setting-container">
        <div class="page-content">
            <div
                class="col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-span-1 relative flex justify-center"
            >
                <img
                    src="/account-lg.png"
                    class="w-32 cursor-pointer"
                    @click="uploadPopUp = true"
                />
                <div
                    v-if="uploadPopUp"
                    class="bg-white absolute p-4 w-[300px] text-right rounded border border-secondary"
                >
                    <label class="mb-4 block">
                        <UploadIcon
                            class="bg-secondary rounded-full text-center relative z-10 text-secondary block mx-auto cursor-pointer"
                        />
                        <input
                            type="file"
                            class="absolute z-0 top-0 left-0 hidden"
                        />
                    </label>
                    <Button
                        ghost
                        size="sm"
                        class="text-black"
                        @click="uploadPopUp = false"
                        >Cancel</Button
                    >
                    <Button
                        secondary
                        size="sm"
                        @click="uploadPopUp = false"
                        >Save</Button
                    >
                </div>
            </div>

            <template
                v-for="section in sections"
                :key="section.key"
            >
                <div
                    v-for="item in section.data"
                    :key="item.key"
                    :class="`col-span-${
                        item.span ? item.span : 1
                    } -lg:col-span-1 -md:col-auto`"
                >
                    <div>{{ item.label }}</div>
                    <input
                        :class="item.class"
                        v-model="form[item.key]"
                        :placeholder="item.placeholder"
                    />
                </div>
                <div class="divider"></div>
            </template>
            <profile-relation />
            <div class="divider"></div>
            <div>
                <h4 class="mb-4 inline-block">
                    Calendar Access <LockIcon class="inline-block" />
                </h4>
                <multi-select
                    :options="departments"
                    label="Department(s)"
                    v-model="form.departments"
                />
            </div>
            <div class="col-span-2 3xl:col-span-3 -lg:col-span-1 -md:col-auto">
                <div
                    class="border border-secondary rounded p-4 w-full mb-4 bg-transparent"
                >
                    <h4 class="mb-1 inline-block font-bold w-full">
                        Availability
                    </h4>
                    <label class="mr-3">Daily Times Set:</label>
                    <span class="mx-2 inline-block">
                        <ClockIcon class="inline-block mr-1" /> 10:20 am
                    </span>
                    <span class="mx-2 inline-block">
                        <ClockIcon class="inline-block mr-1" /> 1:00 pm
                    </span>
                    <span class="mx-2 inline-block">
                        <ClockIcon class="inline-block mr-1" /> 3:00 pm
                    </span>
                </div>
                <Button
                    secondary
                    size="sm"
                    class="float-right capitalize"
                    >+ New</Button
                >
                <Button
                    ghost
                    size="sm"
                    class="float-right mr-2 capitalize"
                    >Edit</Button
                >
            </div>
            <div class="divider"></div>
            <div
                class="col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-span-1"
            >
                <h4 class="mb-4 inline-block w-full">Notes</h4>
                <textarea
                    name="notes"
                    rows="6"
                    class="neutral-input rounded w-full mb-4"
                ></textarea>
                <div class="text-center">
                    <Button
                        ghost
                        size="sm"
                        class="mr-2 capitalize"
                        >Cancel</Button
                    >
                    <Button
                        secondary
                        size="sm"
                        class="capitalize"
                        >Save</Button
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-setting-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-content {
        @apply bg-neutral border border-secondary rounded grid grid-cols-3 3xl:grid-cols-4 -lg:grid-cols-2 -md:grid-cols-1 gap-x-12 gap-y-8 w-fit px-8 py-10 m-auto;
    }
    input {
        @apply h-9 rounded mt-3 w-full pl-2;
        min-width: 16rem;
    }
    input:focus {
        @apply outline-none;
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
}
</style>
<script setup>
import {ref} from 'vue';
import ProfileRelation from './components/profile-relation.vue';
import {ClockIcon, LockIcon, UploadIcon} from '~~/components/icons';
const form = ref({
    username: 'kevinbuchanan@email.com',
});
const profile = [
    {
        key: 'first_name',
        label: 'First Name',
        class: 'secondary-input',
    },
    {
        key: 'middle_name',
        label: 'Middle Name',
        class: 'secondary-input',
    },
    {
        key: 'last_name',
        label: 'Last Name',
        class: 'secondary-input',
    },
    {
        key: 'birthday',
        label: 'Date of Birth',
        class: 'neutral-input',
    },
    {
        key: 'gender',
        label: 'Gender',
        class: 'neutral-input',
    },
    {
        key: 'username',
        label: 'Username',
        class: 'readonly-input',
    },
    {
        key: 'email',
        label: 'Email',
        class: 'neutral-input',
    },
    {
        key: 'altenrate_email',
        label: 'Personal Email',
        class: 'neutral-input',
    },
    {
        key: 'phone',
        label: 'Mobile',
        class: 'neutral-input',
    },
    {
        key: 'employee_id',
        label: 'Employee I.D. Number',
        class: 'neutral-input',
    },
    {
        key: 'manager',
        label: 'Manager',
        class: 'outline-input',
        placeholder: 'Session Manager',
    },
];

const location = [
    {
        key: 'address',
        label: 'Address',
        class: 'neutral-input',
        span: 3,
    },
    {
        key: 'city',
        label: 'City',
        class: 'neutral-input',
    },
    {
        key: 'state',
        label: 'State',
        class: 'neutral-input',
    },
    {
        key: 'zip',
        label: 'Zip',
        class: 'neutral-input',
    },
];

const sections = [
    {
        key: 'profile',
        data: profile,
    },
    {
        key: 'location',
        data: location,
    },
];
const departments = [
    {
        value: 1,
        label: 'Operations',
    },
    {
        value: 2,
        label: 'Memberships',
    },
    {
        value: 3,
        label: 'Group Fitness',
    },
];
const uploadPopUp = ref(false);
</script>
