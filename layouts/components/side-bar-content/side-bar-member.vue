<template>
    <NuxtLink :to="`/check-in?id=${id}&preview=true`">
        <div class="side-bar-member">
            <img :src="profile_photo_path"/>
            <div class="member-name">{{first_name}} {{ last_name }}</div>
<!--            <div v-if="unread" class="unread-badge">{{unread}}</div>-->
          <div v-if="shouldShowUnread" class="unread-badge">{{ props.unread ?? 3 }}</div>

        </div>
    </NuxtLink>
</template>
<style scoped>
.side-bar-member {
    @apply flex flex-row items-center self-start relative;
    img {
        @apply w-10 h-10 rounded-lg border-2 border-[#0075C9] mr-3;
    }
    .member-name {
        @apply text-base cursor-pointer hover:border hover:border-secondary hover:rounded  p-2;
    }
    .unread-badge {
        @apply absolute w-4 h-4 top-0 text-[11px] rounded bg-error flex items-center justify-center;
        left: -0.25rem;
    }
}
</style>
<script setup>
import {computed} from "vue";

const props = defineProps({
    profile_photo_path: {
        type: String,
        default: "/account-lg.png"
    },
    id: String,
    first_name: String,
    last_name: String,
    unread: Number,
    index: Number
})

const shouldShowUnread = computed(() => {
  console.info('props: ', props);
  return props.index % 2 === 0;
});
</script>
