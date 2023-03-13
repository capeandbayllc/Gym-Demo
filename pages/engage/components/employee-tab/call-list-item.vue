<template>
    <tr class="relative call-list-item bg-[#1A1A1A] hover:bg-secondary hover:bg-opacity-30">
      <td>
        <div class="flex items-center min-h-[28px] ">
          <input type="checkbox" class="h-5 ml-2 mr-2 w-5 rounded "/>
        </div>
      </td>
        <td>
            <div class="flex text-left min-h-[28px]">
                <img :src="data.avatar" class="h-7 mr-2"/>{{data.first_name}} {{data.last_name}}
            </div>
        </td>
        <td class="text-left">
            <div class="min-h-[28px] text-left">{{data.homeLocation.name}}</div>
        </td>

        <td class="w-[7rem]">
          <button class="contact-button" @click.stop="contactOption='call'">
            <CallIcon class="icon"></CallIcon>
          </button>
          <button class="contact-button" @click.stop="contactOption = 'email'">
            <EmailIcon class="icon"></EmailIcon>
          </button>
          <button class="contact-button" @click.stop="contactOption = 'text'">
            <MessageIcon class="icon"></MessageIcon>
          </button>
        </td>
        <td>
            <div class="w-[6rem]">
                <membership-btn :membership="data.membership"/>
            </div>
        </td>
        <td >
          <div class="min-h-[28px] ml-[1rem]">{{data.updated_at}}</div>
        </td>
        <td>
          <div class="dropdown dropdown-end">
            <div class="btn btn-ghost btn-sm text-base-content" tabindex="0" @click.prevent.stop @mouseover="hovering">
              <font-awesome-icon icon="ellipsis-h" class="text-[#0075C9]" size="lg"/>
            </div>
            <div
                class="dropdown-content menu p-2 bg-secondary border-1 rounded items-start "
            >
              <cross-icon class="flex absolute text-white h-[15px] w-[15px] top-2 right-2 cursor-pointer"></cross-icon>
              <div class="dropdown-item" tabindex="-1">Edit Account</div>
              <div class="dropdown-item" tabindex="-1">View Alerts</div>
              <div class="dropdown-item" tabindex="-1">Add Guest Pass</div>
              <div class="dropdown-item" tabindex="-1">POS</div>
            </div>
          </div>
          <Options :show="contactOption" @on:close="contactOption = null" />
        </td>
    </tr>
</template>
<style scoped>
.call-list-item {
    @apply h-12 text-xs;

    td {
        @apply border-y-2 border-secondary text-center;
        > div {
            @apply flex items-center border-secondary px-1 ;
        }
    }
    td:first-child {
        @apply border-l-2 rounded-l-xl;
        > div {
            @apply justify-start;
        }
    }
    td:last-child {
        @apply border-r-2 rounded-r-xl capitalize text-accent-focus/60;
        > div {
            @apply border-none px-2;
        }
    }
    .type-warning {
        @apply bg-orange-400;
    }
    .dot {
      @apply float-left h-[.5rem] w-[.5rem] rounded-full bottom-0 right-2 mr-[2px] ;
    }
    .contact-button {
      @apply float-left flex-col items-center justify-center w-[1.54rem] h-[1.54rem] mr-3 bg-[#0089FF] border-white border rounded-lg;
    }
    .icon {
      @apply w-[3rem] h-[3rem] p-4 ;
    }
    .dropdown-content {
      display: block !important;
      @apply mt-[8rem] border-2 rounded-xl flex
    }
    .dropdown-item {
      @apply flex flex-col hover:text-opacity-50 uppercase hover:text-black text-left text-xs h-[1.5rem] w-[8rem] text-white transition rounded  inline-block my-1 border-primary px-2 py-1 cursor-pointer
    }
}
</style>
<script setup>
import {library} from "@fortawesome/fontawesome-svg-core";
import MembershipBtn from '@/components/buttons/membership-btn.vue';
import {CallIcon, EmailIcon, MessageIcon, CrossIcon} from "~/components/icons";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Options from "~/pages/components/contact/Options.vue";

library.add(faEllipsisH);


const format_date = (value) => (function() {
    if (value) {
      return moment(String(value)).format('YYYY.MM.DD')
    }
  });



const contactOption = ref(null);

const props = defineProps({
    data: Object
})
let isHovering = false

const hovering = () => {
  console.log(isHovering);
  isHovering = !isHovering;
}
</script>
