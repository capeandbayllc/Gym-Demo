<template>
    <div
        class="leader-board"
        :class="{
            'hidden': !showLeaderBoard,
            'block': showLeaderBoard
        }"
    >
        <div class="close-btn" @click="toggleLeaderBoard">
            <cross-icon/>
        </div>
        <div class="leader-pop-info">
            <leader-pop-avatar />
            <div class="leader-pop-title">Leader Board</div>
            <search-input border="base-content"/>
            <div class="leader-pop-help">
                <div><question-round-icon class="scale-50"/><b>This is the Leader Board</b></div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.leader-board {
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

const showLeaderBoard = ref(false);

const toggleLeaderBoard = () => showLeaderBoard.value = !showLeaderBoard.value;
const open = () => showLeaderBoard.value = true;
defineExpose({open})
</script>