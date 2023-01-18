<template>
    <p class="text-center mb-4">Select your agreement Category</p>
    <div class="flex justify-between mb-6">
        <Button size="sm" class="px-6 normal-case mx-2 bg-slate-100 hover:bg-secondary hover:text-white" :class="category == 'membership' ? '!bg-secondary text-white' : ''" @click="category = 'membership'">Membership</Button>
        <Button size="sm" class="px-6 normal-case mx-2 bg-slate-100 hover:bg-secondary hover:text-white" :class="category == 'fitness' ? '!bg-secondary text-white' : ''" @click="category = 'fitness'">Fitness</Button>
        <Button size="sm" class="px-6 normal-case mx-2 bg-slate-100 hover:bg-secondary hover:text-white" :class="category == 'hr' ? '!bg-secondary text-white' : ''" @click="category = 'hr'">HR</Button>
    </div>
    <div class="p-4 agreement-forms">
        <p v-if="category == 'membership'" class="mb-4 text-center text-lg">Membership agreement Forms</p>
        <p v-if="category == 'fitness'" class="mb-4 text-center text-lg">Fitness agreement Forms</p>
        <p v-if="category == 'hr'" class="mb-4 text-center text-lg">Human Resource Forms</p>
        <div class="flex justify-around">
            <div class="w-full">
                <EmptyFileIcon class="h-[50px] mx-auto mb-2"/>
                <p class="text-xs text-center w-full">New <br/> Membership</p>
            </div>
            <div class="w-full">
                <EmptyFileIcon class="h-[50px] mx-auto mb-2"/>
                <p class="text-xs text-center w-full">Renew <br/> Membership</p>
            </div>
            <div class="w-full">
                <EmptyFileIcon class="h-[50px] mx-auto mb-2"/>
                <p class="text-xs text-center w-full">Membership <br/> agreement</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import { EmptyFileIcon } from '~~/components/icons';

const category = ref('membership');

</script>
<style scoped>
.agreement-forms{
    @apply border border-secondary mb-4 rounded-md;
    background-image: linear-gradient(#0074c8b5, #000);
}
</style>