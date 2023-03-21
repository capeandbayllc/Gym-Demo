<template>
    <div class="call-image-container">
        <div class="profile-avatar">
            <img :src="user.profile_photo_path" class="rounded-full" alt=""/>
        </div>
        <div class="profile-info">
            <div class="profile-name">{{ user.first_name }} {{ user.last_name }}</div>
            <div class="text-secondary">New Membership Call</div>
        </div>
        <div class="profile-calling">
            <div class="profile-call">
                <img src="/calling-icon.png"/>
            </div>        
            <span>Calling Now</span>
        </div>
        <div class="audio-track">
            <img src="/audio_img.png" class="mb-2" />
            <img src="/audio_img1.png" class="px-2" />
        </div>
        <div  class="w-full text-right inline-block">
            <Button class="notes h-9 min-h-0" @click="(showNotes = !showNotes)">Notes</Button>
            <textarea v-if="showNotes" class="neutral-input" placeholder="Caller Notes" rows="5"></textarea>
        </div>
    </div>
</template>

<script setup>
defineProps({
  user: Object
})
const showNotes = ref(false);
</script>
 
<style scoped>
.call-image-container{
    @apply p-4;
    .profile-avatar {
        @apply relative rounded-full bg-base-content p-0.5 inline-block ;
        img {
            @apply w-20 h-20;
        }
    }
    .audio-track{
        @apply border py-3 border-zinc-500 my-3;
    }
    .profile-info{
        @apply inline-block px-5 align-top;
        .profile-name {
            @apply text-2xl font-semibold pt-2 mb-1;
        }
        .phone-number{
            @apply text-secondary text-2xl font-semibold;
        }
    }
    .profile-calling{
        @apply w-20 text-center float-right;
        .profile-call{
            @apply inline-block w-14 h-14 align-top rounded-full border-2 border-green-400 bg-green-400 bg-opacity-40 text-center pt-3 ;
            img{
                @apply inline-block ;
            }
        }
        span{
            @apply text-xs text-green-600;
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
