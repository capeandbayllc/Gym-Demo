<template>
   <div class="call-image-container">
        <div class="profile-avatar" :class="{'bg-secondary': userCallSetting.type === 'outgoing-call' || userCallSetting.type === 'incoming-call', 'bg-gray-600': userCallSetting.type === 'end-call'}">
            <img :src="userCallSetting.callerProfileImage" class="rounded-full" alt=""/>
        </div>
        <div class="profile-info">
            <div class="profile-name">{{ userCallSetting.userName }}</div>
            <div class="call-type" :class="{'text-zinc-500': userCallSetting.type === 'outgoing-call', 'text-secondary': userCallSetting.type === 'end-call', 'text-success': userCallSetting.type === 'incoming-call'}">{{ userCallSetting.callType }}</div>
            <div class="phone-number" :class="{'text-secondary': userCallSetting.type === 'outgoing-call'}">{{ userCallSetting.phone }}</div>
            <div class="date-time" v-if="userCallSetting.type !== 'incoming-call'">
                <span :class="{'text-secondary': userCallSetting.type === 'end-call'}">Date</span>
                <span :class="{'text-secondary': userCallSetting.type === 'end-call'}">Time</span>
            </div>
        </div>
        <div class="profile-call" :class="{'border-secondary bg-primary bg-opacity-40': userCallSetting.type === 'outgoing-call', 'border-gray-600 bg-base-100': userCallSetting.type === 'end-call', 'border-green-400 bg-green-400 bg-opacity-40':userCallSetting.type === 'incoming-call' }">
            <img :src="userCallSetting.callIcon"/>
        </div>
        <div class="grid grid-cols-2 mt-6" v-if="userCallSetting.type !== 'incoming-call'">
            <div class="mt-1">
                <div class="ml-1" v-if="userCallSetting.callDuration">
                    <span class="text-secondary">Call Duration:</span> 
                    {{ userCallSetting.callDuration }}
                </div>
            </div>
            <div class="text-right">
                <Button class="notes h-9 min-h-0" @click="(showNotes = !showNotes)">Notes</Button>
            </div>
        </div>
        <textarea v-if="showNotes" class="neutral-input" placeholder="Caller Notes" rows="5"></textarea>
   </div>
</template>

<script setup>
const props = defineProps({
    userCallSetting: {
        type: Object
    },
});
const showNotes = ref(false);
</script>

<style scoped>
    .call-image-container{
        @apply p-4;
        .profile-avatar {
            @apply relative rounded-full p-1 inline-block;
            img {
                @apply w-36 h-36;
            }
        }
        .profile-info{
            @apply inline-block px-5 align-top;
            .profile-name {
                @apply text-3xl font-semibold pt-4 mb-1;
            }
            .call-type{
                @apply text-sm mb-3 font-medium;
            }
            .phone-number{
                @apply text-2xl font-semibold;
            }
            .date-time {
                @apply mt-1;
                span {
                    @apply text-sm mb-3 mr-5 text-white;
                }
            }
            
        }
        .profile-call{
            @apply inline-block w-14 h-14 align-top rounded-full border-2 text-center pt-3 float-right;
            img{
                @apply inline-block ;
            }
        }
        .notes{
            @apply border-white px-4 bg-transparent;
        }
        .neutral-input {
            @apply bg-base-content/20 block w-full mt-3 rounded-md p-3;
        }
    }
</style>
