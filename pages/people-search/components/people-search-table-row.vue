<template>
    <div>
        <div class="people-lead-tbl-row mr-2">
            <div class="flex items-center text-base font-semibold text-green-600" :class="`w-[${columns[0].width}px]`">
                <input type="checkbox" class="checkbox checkbox-secondary bg-white mr-2" />
                {{ data.segment }}
            </div>
            <div class="flex items-center" :class="`w-[${columns[1].width}px]`">
                <AlertIcon class="mr-2 text-red-600"/>
                <AlertIcon class="mr-2 text-yellow-500"/>
                <span>2</span>
            </div>
            <div class="" :class="`w-[${columns[2].width}px]`">
                <div class="flex items-center ">
                    <img
                        :src="data.profile_photo_path"
                        :gender="data.gender"
                        class="w-[40px] border-2 border-secondary rounded-[12px] mr-2"
                    />
                    {{ data.first_name }} {{ data.last_name }}
                </div>
            </div>
            <div class="flex items-center px-[20px]" :class="`w-[${columns[3].width}px]`">
                <SmsSquareIcon class="mr-[40px]" />
                <EmailSquareIcon class="mr-[40px]" />
                <CallSquareIcon />
                <!-- {{ data.phone }} -->
            </div>
            <!-- <div class="whitespace-nowrap w-full" :class="`w-[${columns[4].width}px]`">{{ data.email }}</div> -->
            <div class="text-xs" :class="`w-[${columns[4].width}px]`" :title="data.homeLocation.name">
                Club 4
            </div>
            <div class="" :class="`w-[${columns[5].width}px]`">
                <membership-btn :membership="data.type" class="max-w-[100px]" />
            </div>
            <div :class="`w-[${columns[6].width}px]`">
                
            </div>
            <!-- <div class="text-xs w-full" :class="`w-[${columns[6].width}px]`">{{ data.created_at.replace(/:\d{2}$/, "") }}</div> -->
        </div>
    </div>
</template>
<style scoped>
.people-lead-tbl-row {
    @apply bg-base-100 rounded-[15px] h-14 flex items-center px-[20px] py-[30px] my-[13px] cursor-pointer transition-all duration-75 border-2 border-base-100 hover:border-secondary hover:bg-primary;

    td {
        @apply border-y-2 border-secondary text-left px-3;
    }
    td:first-child {
        @apply border-l-2 rounded-l text-accent-focus/60;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .type-warning {
        @apply bg-orange-400;
    }
    .type-secondary {
        @apply bg-secondary;
    }
}
</style>
<style>
.people-search-tbl-content thead {
    @apply top-0 sticky bg-black h-10;
}
</style>
<script setup>
import MembershipBtn from "~/components/buttons/membership-btn.vue";
import {
  AlertIcon,
  SmsSquareIcon,
  EmailSquareIcon,
  CallSquareIcon,
} from "~~/components/icons";

const props = defineProps({
    data: Object,
    columns: {
        type: Array,
        default: [],
    },
});
</script>
