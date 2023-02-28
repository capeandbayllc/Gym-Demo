<template>
    <div class="grid grid-cols-3 gap-x-6 w-full -md:grid-cols-1">
        <simple-card>
            <div class="detail-card card-gradient-bg">
                <h3>Two Factor Authentication</h3>
                <p class="mb-4 flex-1">Add additional security to your account using two factor authentication.
                    <br/><br/>
                    You have not enabled two factor authentication.
                    <br/><br/>
                    When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone’s Google Authenticator application. 
                </p>
                <Button secondary size="sm" class="mx-auto capitalize">Enable</Button>
            </div>
        </simple-card>
        <simple-card>
            <div class="detail-card card-gradient-bg">
                <h3>Browser Sessions</h3>
                <p class="mb-4 flex-1">Manage and log out your active sessions on other browsers and devices.
                    <br/><br/>
                    If necessary, you may log out of all of your other browser sessions across all of your devices. 
                    <br/><br/>
                    Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.
                </p>
                <Button secondary size="sm" class="mx-auto capitalize">Log Out Other Browser Sessions</Button>
            </div>
        </simple-card>
        <simple-card>
            <div class="detail-card card-gradient-bg">
                <h3>Delete Account <LockIcon class="inline-block"/></h3>
                <p class="mb-4 flex-1">Permanently delete your account.
                    <br/><br/> Once your account is deleted, all of its resources and data will be permanently deleted. 
                    <br/><br/> Before deleting your account, please download any data or information that you wish to retain.
                </p>
                <Button secondary size="sm" class="mx-auto capitalize">Delete Account</Button>
            </div>
        </simple-card>
    </div>
 </template>
<script setup>
import { LockIcon } from '~~/components/icons';
</script>
<style scoped>
.detail-card {
    @apply p-4 flex flex-col w-full h-full mb-4;
    h3 {
        @apply text-lg font-bold mb-4;
    }
}
</style>