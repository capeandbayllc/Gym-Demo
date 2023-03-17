<template>
    <div>
        <div class="people-lead-tbl-row mr-2">
            <div class="flex items-center text-base font-semibold text-green-600" :class="`w-[${columns[0].width}px]`">
                <input type="checkbox" class="checkbox checkbox-secondary bg-white mr-2" />
                {{ data.segment }}
            </div>
            <div class="flex items-center" :class="`w-[${columns[1].width}px]`">
                <AlertIcon class="mr-2 text-red-600" @click="openAlertModal"/>
                <AlertIcon class="mr-2 text-yellow-500" @click="openAlertModal"/>
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
        <daisy-modal ref="alertModal" id="alertModal" :closable="false">
            <simple-card class="p-4 w-[400px] mx-auto alert-modal">
                <close-btn :isBlack="true" @click="closeAlertModal"/>
                <h5 class="text-3xl mb-2">Alert</h5>
                <div class="number-alert-circle mb-3">
                    <div class="number">
                        3
                    </div>
                </div>
                <p class="text-[19px] mb-1">Overdue membership. Missing fees.</p>
                <p class="font-thin mb-6">Aya Buchanan | 5/5/2022, 12:24:44 PM</p>
                <div class="text-center flex gap-4 justify-center my-4">
                    <button class="text-white text-sm border border-white rounded-xl px-4 py-1" @click="closeAlertModal">Resolve</button>
                    <button class="text-white hover:text-secondary text-sm bg-secondary hover:bg-gray-900 border border-secondary rounded-xl px-4 py-1 transition-all duration-75" @click="closeAlertModal">Read alert notes</button>
                </div>
            </simple-card>
        </daisy-modal>
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
    @apply top-0 sticky bg-black h-10 text-white;
}
.alert-modal{
    @apply bg-cover bg-center text-center;
    background-image: url('/notification-modal-background.png');
}
.number-alert-circle{
    @apply flex justify-center;
}

.number-alert-circle .number{
    @apply bg-white w-[40px] h-[40px] rounded-full text-black flex justify-center items-center font-bold pb-[3px] pl-[2px] text-[30px];
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

// import {
//   closeBtn
// } from "~~/components";

const props = defineProps({
    data: Object,
    columns: {
        type: Array,
        default: [],
    },
});
const alertModal = ref(null);

const openAlertModal =()=>{
    console.log(alertModal.value)
    alertModal.value.open()
}
const closeAlertModal =()=>{
    alertModal.value.close()
}

</script>
