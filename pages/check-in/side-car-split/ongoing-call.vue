<template>
  <div class="lg:flex space-x-3">
    <simple-card title="Ongoing Call" class="rounded-xl">
      <div
        class="bg-gradient-to-t rounded-b-xl from-secondary-content to-secondary/60 p-6 w-[500px]"
      >
        <div
          class="bg-base-300 p-2 border-[1px] border-info-content rounded-xl"
        >
          <div class="call-image-container">
            <div class="profile-avatar">
              <img :src="user.profile_photo_path" class="rounded-full" alt="" />
            </div>
            <div class="profile-info">
              <div class="profile-name">
                {{ user.first_name }} {{ user.last_name }}
              </div>
              <div class="text-secondary">New Membership Call</div>
            </div>
            <div class="profile-calling">
              <div class="profile-call">
                <img src="/calling-icon.png" />
              </div>
              <span>Calling Now</span>
            </div>
            <div class="audio-track">
              <img src="/audio_img.png" class="mb-2" />
              <img src="/audio_img1.png" class="px-2" />
            </div>
          </div>

          <div class="text-right">
            <button
              class="border-[1px] px-2 rounded-md hover:bg-info-content"
              @click="showNotes = !showNotes"
            >
              Notes
            </button>
          </div>
        </div>
        <div class="flex justify-end mt-5" v-if="showEndCallButton">
          <button
            class="btn w-max bg-error border-error rounded text-base-content btn-sm font-medium"
            @click="$emit('end-call')"
          >
            Hang up
          </button>
        </div>
      </div>
    </simple-card>

    <Notes
      v-if="showNotes"
      class="md:mt-3 lg:mt-0"
      placeholderTitle="Phone Call"
    />
  </div>
</template>

<script setup>
import ProfileImage from "@/public/images/profile/users_2.jpg";
import { CallIcon } from "~~/components/icons";
import Body from "./components/body.vue";
import Footer from "./components/footer.vue";
import Notes from "./components/notes.vue";

defineProps({
  user: Object,
  showEndCallButton: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["end-call"]);
const showNotes = ref(false);
</script>

<style scoped lang="postcss">
.call-image-container {
  @apply p-4;
  .profile-avatar {
    @apply relative rounded-full bg-base-content p-0.5 inline-block;
    img {
      @apply w-20 h-20;
    }
  }
  .audio-track {
    @apply border py-3 border-zinc-500 my-3;
  }
  .profile-info {
    @apply inline-block px-5 align-top;
    .profile-name {
      @apply text-2xl font-semibold pt-2 mb-1;
    }
    .phone-number {
      @apply text-secondary text-2xl font-semibold;
    }
  }
  .profile-calling {
    @apply w-20 text-center float-right;
    .profile-call {
      @apply inline-block w-14 h-14 align-top rounded-full border-2 border-success bg-success bg-opacity-40 text-center pt-3;
      img {
        @apply inline-block;
      }
    }
    span {
      @apply text-xs text-success;
    }
  }
  .notes {
    @apply border-base-content px-4 bg-transparent;
  }
  .neutral-input {
    @apply bg-base-content/20 block w-full mt-3 rounded-md p-3;
  }
}
</style>
