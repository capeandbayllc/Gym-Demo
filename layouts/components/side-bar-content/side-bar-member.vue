<template>
    <NuxtLink :to="`/check-in?id=${id}&preview=true`">
        <div class="side-bar-member">
            <img :src="profile_photo_path"/>
            <!--    temporary condition only for demo-->
            <div :class="[isFirstIndex ? 'member-name-one' : 'member-name']">
              {{first_name}} {{ last_name }}
            </div>
        <!--  this is right  <div v-if="unread" class="unread-badge">{{unread}}</div>  -->
        <!--   this condition is temporary, just to show badge in demo site-->
          <div v-if="isEvenIndex" class="unread-badge">{{ props.unread ?? 3 }}</div>
          <div :class="[isEvenIndex ? 'check-out' : 'checked-out']">
            {{ isEvenIndex ? 'Check out' : 'Checked out' }}
          </div>

        </div>
    </NuxtLink>
</template>
<style scoped>
.side-bar-member {
    @apply flex flex-row items-center self-start relative;
    img {
        @apply w-10 h-10 rounded-lg border-2 border-[#0075C9] mr-3;
    }
    .member-name, .member-name-one {
      @apply text-sm cursor-pointer p-1 px-2 rounded-lg;
      border: 1px solid transparent;
      transition: padding-left 0.2s ease-in-out, border-color 0.2s ease-in-out 0.2s;
    }
    .member-name-one:hover {
      @apply pl-4 border-secondary;
    }
    .unread-badge {
        @apply absolute w-4 h-4 top-0 text-[11px] rounded bg-error flex items-center justify-center;
        left: -0.25rem;
    }
    .check-out, .checked-out {
      @apply text-xs text-black bg-white rounded-lg p-1 ml-12
    }
    .checked-out {
      @apply bg-error text-white px-2
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

/**
 * this is a temporary condition only for demo
 * @type {ComputedRef<boolean>}
 */
const isEvenIndex = computed(() => {
  console.info('props: ', props);
  return props.index % 2 === 0;
});

/**
 * this is a temporary condition only for demo
 * @type {ComputedRef<boolean>}
 */
const isFirstIndex = computed(() => {
  console.info('props: ', props);
  return props.index === 0;
});

</script>
