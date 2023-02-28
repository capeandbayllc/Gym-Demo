<template>
    <setting-base-card>
        <div class="col-span-3 w-full py-4 px-10 mx-auto max-w-[600px]">
            <h2>Update Password</h2>
            <p class="text-center leading-10 text-sm mb-6">Ensure your account is using a long, random password to stay secure.</p>
            <div class="mx-auto w-full mb-4">
                <div class="mb-2">Current Password</div>
                <input type="password" class="neutral-input w-full p-1 rounded-sm" v-model="updatePassword.currentPass"/>
            </div>
            <div class="mx-auto w-full mb-4">
                <div class="mb-2">New Password</div>
                <input type="password" class="neutral-input w-full p-1 rounded-sm" v-model="updatePassword.newPass"/>
            </div>
            <div class="mx-auto w-full mb-4">
                <div class="mb-2">Confirm Password</div>
                <input type="password" class="neutral-input w-full p-1 rounded-sm" v-model="updatePassword.confirmPass"/>
            </div>
            <p v-if="updatePassword.newPass !== updatePassword.confirmPass" class="text-sm text-red-500 mb-2">New Password and Confirm password dose not matched!</p>
            <div class="col-span-3 mx-auto w-full text-center">
                <Button ghost size="sm" class="capitalize mr-4">Cancel</Button>
                <Button secondary size="sm" class="capitalize" :disabled="updatePassword.currentPass == '' || updatePassword.newPass == '' || updatePassword.confirmPass == '' || updatePassword.newPass !== updatePassword.confirmPass">Save</Button>
            </div>
        </div>
    </setting-base-card>
 </template>
<script setup>
import SettingBaseCard from './setting-base-card.vue'

const updatePassword = ref({
    currentPass:"",
    newPass:"",
    confirmPass:""
});
</script>