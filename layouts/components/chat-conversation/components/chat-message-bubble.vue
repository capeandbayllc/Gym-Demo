<template>
  <div class="flex" :class="{ 'justify-end': isAuthorMe }" v-if="message?.from">
    <div class="relative">
      <div
        class="text-neutral w-52 -lg:w-52 p-4 text-sm py-3 bg-base-content text-base chat-container whitespace-pre-line"
        :class="{ 'rounded-bl rounded-br-none': isAuthorMe }"
      >
        {{ message.message }}
      </div>
      <div class="rounded-full bg-base-content p-0.5 absolute -top-5 -right-5">
        <img
          :src="message.from.profile_photo_path"
          class="w-10 h-10 rounded-full"
        />
      </div>
      <div
        class="text-base-content/70 text-xs font-semibold"
        :class="{ 'text-right': !isAuthorMe }"
      >
        {{ message.created_at }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.chat-container {
  border-radius: 20px;
}
</style>
<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const me = useMe();

const isAuthorMe = computed(() => props.message.from.id === me.value.id);
</script>
