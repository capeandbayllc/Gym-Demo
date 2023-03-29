<template>
<!--  todo 1: 1st name on click background and border fix-->
<!--  todo 2: 1st name on click model up / page route which is in nuxtlink now-->
<!--  todo 3: check out click, css update and store temporarily-->
<!--  todo 4: responsive check-->
<!--  todo 5: Make scrollable vertically -->
<!--    <NuxtLink :to="`/check-in?id=${id}&preview=true`">-->
<!--  @mouseover="showCheckOut" @mouseleave="hideCheckOut"-->
        <div class="side-bar-member" >
          <div :class="[isFirstIndex ? 'member-normal-content' : 'member-content']">
            <img :src="profile_photo_path" class="member-image"/>
            <!--    temporary condition only for demo-->
            <div :class="[isFirstIndex ? 'member-name-one' : 'member-name']">
              {{first_name}} {{ last_name }}
            </div>
            <!--  this is right  <div v-if="unread" class="unread-badge">{{unread}}</div>  -->
            <!--   this condition is temporary, just to show badge in demo site-->
            <div v-if="isEvenIndex" class="unread-badge">{{ props.unread ?? 3 }}</div>
          </div>

<!--          v-if="!isFirstIndex" :class="[isEvenIndex ? 'check-out' : 'checked-out']"-->
<!--          :class="[isCheckedOut ? 'checked-out' : 'check-out']"-->
<!--          @click="toggleCheckOutStatus"-->
          <div  v-if="!isFirstIndex"
                class="member-check-out-outer"
          >
            <div class="member-check-out" :class="[!checkIn ? 'check-out' : 'checked-out']">
              {{ !checkIn ? 'Check out' : 'Checked out' }}
<!--              {{ isCheckedOut ? 'Checked out' : 'Check out' }}-->
            </div>
            </div>

          </div>
  <!--    </NuxtLink>-->
</template>
<style scoped>
.side-bar-member {
    @apply flex flex-row items-center self-start relative w-full;
    img {
        @apply w-10 h-10 rounded-lg border-2 border-[#0075C9] mr-3;
    }
    .member-name, .member-name-one {
      @apply cursor-pointer px-2 rounded-lg border border-secondary h-8;
      border: 1px solid transparent;
      transition: padding-left 0.2s ease-in-out, border-color 0.2s ease-in-out 0.2s;
      font-size: 0.875rem;
      line-height: 2rem;
      margin-top: 3px;
    }
    .member-name-one:hover {
      @apply pl-4 border-secondary;
    }
    .unread-badge {
        @apply absolute w-4 h-4 top-0 text-[11px] rounded bg-error flex items-center justify-center ml-0;
        transition: margin-left 0.2s ease-in-out;
        left: -0.25rem;
    }
    .check-out, .checked-out {
      @apply text-xs text-black bg-white rounded-lg p-1 ml-10 cursor-pointer;
    }
    .checked-out {
      @apply bg-error text-white px-2
    }
    .member-normal-content {
      @apply flex w-44;
    }
    .member-content {
      @apply flex w-44 ml-0;
      transition: margin-left 0.2s ease-in-out;
    }

    .member-check-out-outer {
      position: fixed;
      left: 93%;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    }

    &:hover {
      .member-content,
      .member-content > .unread-badge {
        margin-left: -3.5rem;
      }
      .member-check-out-outer {
        visibility: visible;
        opacity: 1;
      }
    }
}


</style>

<script>
export default {
  'name': 'side-bar-member'
}
</script>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    profile_photo_path: {
        type: String,
        default: "/account-lg.png"
    },
    id: String,
    first_name: String,
    last_name: String,
    unread: Number,
    index: Number,
    checkIn: Boolean
})

/**
 * this is a temporary condition only for demo
 */
const isEvenIndex = computed(() => {
  console.info('props: ', props);
  return props.index % 2 === 0;
});

/**
 * this is a temporary condition only for demo
 */
const isFirstIndex = computed(() => {
  console.info('props: ', props);
  return props.index === 0;
});

const isCheckOutVisible = ref(false);
const isCheckedOut = ref(false);

const showCheckOut = () => {
  if (!isFirstIndex.value) {
    isCheckOutVisible.value = true;
  }
};

const hideCheckOut = () => {
  if (!isFirstIndex.value) {
    isCheckOutVisible.value = false;
  }
};

// const hideCheckOut = () => {
//   if (!isCheckedOut.value) {
//     isCheckOutVisible.value = false;
//   }
// };
//
// const toggleCheckOutStatus = () => {
//   // console.log('here');
//   isCheckedOut.value = !isCheckedOut.value;
// };

// const isHovering = ref(false);
// const isTransitioning = ref(false);
</script>
