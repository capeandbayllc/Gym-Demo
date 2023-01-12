<template>
    <simple-card class="mb-8">
        <div class="grid grid-cols-3 gap-6 py-4 px-10 gradient-bg">
            <h2 class="text-center leading-10 text-lg col-span-3">Access Code</h2>
            <div v-for="(item, index) in accessCode" :key="item.key" :class="index == 0 ? 'col-span-2' : 'col-span-1'" class="-md:!col-span-3 -md:col-auto mx-auto w-full">
                <div class="mb-2">{{item.label}}</div>
                <input :class="item.class" class="w-full p-1 rounded-sm" v-model="accessCodeObj[item.key]"/>
            </div>
        </div>
    </simple-card>
</template>
<script setup>
const accessCodeObj = ref({})
const accessCode = [{
    key: "access-code",
    label: "Access Code",
    class: "neutral-input"
},{
    key: "failed-attempts",
    label: "Failed Attempts",
    class: "neutral-input"
}];

</script>

<style scoped>
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