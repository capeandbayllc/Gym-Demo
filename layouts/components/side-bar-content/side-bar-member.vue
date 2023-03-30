<template>
  <div class="side-bar-member">
    <div :class="[isFirstIndex ? 'member-normal-content' : 'member-content']">
      <img :src="profile_photo_path" class="member-image"/>
      <!--    temporary condition for demo-->
      <div :class="[isFirstIndex ? 'member-name-one' : 'member-name', isMemberSelected ? 'bg-member' : '']"
           @click="showMemberDetails(id)">
        {{ first_name }} {{ last_name }}
      </div>
      <!--  this is right  <div v-if="unread" class="unread-badge">{{unread}}</div>  -->
      <!--   temporary condition, just to show badge in demo site-->
      <div v-if="isEvenIndex" class="unread-badge">{{ props.unread ?? 3 }}</div>
    </div>

    <div v-if="!isFirstIndex" class="member-check-out-outer">
      <div class="member-check-out"
           :class="[!checkIn && !isCheckedOut ? 'check-out' : 'checked-out']"
           @click="toggleCheckOutStatus">
        {{ !checkIn && !isCheckedOut ? 'Check out' : 'Checked out' }}
      </div>
    </div>

  </div>

</template>
<style scoped>
.side-bar-member {
  @apply flex flex-row items-center self-start relative w-full ml-4;

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

  .bg-member {
    background-color: #0075C9;
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
    @apply flex w-48;
  }

  .member-content {
    @apply flex w-48 ml-0;
    transition: margin-left 0.2s ease-in-out;
  }

  .member-check-out-outer {
    position: fixed;
    left: 92%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }

  &:hover {
    .member-content, .member-content > .unread-badge {
      margin-left: -3.5rem;
    }
    .member-check-out-outer {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 1600px) {
    .member-check-out-outer {
      left: 90%;
    }
  }

  @media (max-width: 1300px) {
    .member-check-out-outer {
      left: 88%;
    }
  }
  @media (max-width: 1024px) {
    .member-check-out-outer {
      left: 86%;
    }
  }

  @media (max-width: 900px) {
    .member-check-out-outer {
      left: 84%;
    }
  }

  @media (max-width: 800px) {
    .member-check-out-outer {
      left: 81%;
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
 * temporary condition only for demo
 */
const isEvenIndex = computed(() => {
  return props.index % 2 === 0;
});

/**
 * temporary condition only for demo
 */
const isFirstIndex = computed(() => {
  return props.index === 0;
});

const isMemberSelected = ref(false);

const showMemberDetails = (id) => {
  if (isFirstIndex) {
    isMemberSelected.value = true;
    navigateTo(`/check-in?id=${id}&preview=true`);
  }
}

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

const toggleCheckOutStatus = () => {
  isCheckedOut.value = !isCheckedOut.value;
};

</script>
