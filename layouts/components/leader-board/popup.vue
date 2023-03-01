<template>
    <div
        class="leader-pop"
        :class="{
            'hidden': !showLeaderPop,
            'block': showLeaderPop
        }"
    >
        <div class="close-btn" @click="toggleLeaderPop">
          <cross-icon></cross-icon>

        </div>
        <div class="leader-pop-info">
            <leader-pop-avatar />
            <div class="leader-pop-title justify-center">Leader Board</div>
            <radio-group class="justify-center bg-[#18203A] border-color-[#073A76] border-2 ">
              <radio-group-option>
                Clubs
              </radio-group-option>
              <radio-group-option>
                Trainers
              </radio-group-option>

            </radio-group>


            <search-input border="base-content"/>
            <div class="leader-pop-help">
              <div class="employee-lead-table">
                <data-table
                    :columns="columns"
                    :data="employees"
                    :row-component="LeaderboardTableRow"
                    class="h-56 overflow-y-auto"
                />
              </div>
            </div>
        </div>
      <div class="float-right">
        View More...
      </div>
    </div>
</template>
<style scoped>
.leader-pop {
    @apply absolute right-10 top-16 bg-secondary z-50 w-72 rounded-lg;
    .close-btn {
        @apply absolute top-4 right-4 cursor-pointer hover:text-neutral;
    }
    .leader-pop-info {
        @apply flex flex-col px-2 pt-5 items-center space-y-2;
        .leader-pop-title {
            @apply text-xl font-bold;
        }
        .leader-pop-help {
            @apply text-xs font-semibold flex flex-col pb-4;
            > div {
                @apply flex flex-row items-center;
            }
        }
    }
}
</style>
<script setup>
import {ref} from 'vue'
import { CrossIcon, QuestionRoundIcon } from '~~/components/icons';
import LeaderPopAvatar from './leader-pop-avatar.vue';
import LeaderboardTableRow from "~/pages/leaderboard/components/leaderboard-table-row.vue";
import {RadioGroup, RadioGroupOption} from "@headlessui/vue";

const showLeaderPop = ref(false);

const toggleLeaderPop = () => showLeaderPop.value = !showLeaderPop.value;
const open = () => showLeaderPop.value = true;
defineExpose({open})
</script>