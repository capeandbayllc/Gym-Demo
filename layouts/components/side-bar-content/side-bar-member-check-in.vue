<template>
  <!--  todo 4: responsive check-->
  <!--  todo 5: Make scrollable vertically -->
  <div class="side-bar-member" >
    <div class="member-content">
      <img :src="profile_photo_path" class="member-image" :class="getImageBorder()"/>
      <div class="member-name">
        {{first_name}} {{ last_name }}
      </div>
      <!--  this is right  <div v-if="unread" class="unread-badge">{{unread}}</div>  -->
      <!--   this condition is temporary, just to show badge in demo site-->
      <div v-if="isEvenIndex" class="unread-badge">{{ props.unread ?? 3 }}</div>
    </div>

  </div>

</template>
<style scoped>
.side-bar-member {
  @apply flex flex-row items-center self-start relative w-full;
  img {
    @apply w-10 h-10 rounded-3xl border-2 mr-3;
  }
  .img-one {
    border-color: #0A00FF ;
  }
  .img-two {
    border-color: #00C7F7 ;
  }
  .img-three {
    border-color: #FFD800 ;
  }
  .img-four {
    border-color: #B908FB ;
  }

  .member-name {
    @apply cursor-pointer px-2 rounded-lg border border-secondary h-8;
    border: 1px solid transparent;
    transition: padding-left 0.2s ease-in-out, border-color 0.2s ease-in-out 0.2s;
    font-size: 0.875rem;
    line-height: 2rem;
    margin-top: 3px;
  }

  .unread-badge {
    @apply absolute w-5 h-5 top-0 text-[11px] rounded-xl bg-error flex items-center justify-center ml-0;
    left: -0.65rem;
  }

  .member-content {
    @apply flex w-44 ml-0;
  }
}


</style>

<script>
export default {
  'name': 'side-bar-member-check-in'
}
</script>

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

const getImageBorder = () => {
  if (props.index % 2 === 0) { return "img-two"; }
  else if (props.index % 3 === 0) { return "img-three"; }
  else if (props.index % 4 === 0) { return "img-four"; }
  else { return "img-one"; }
}

</script>
