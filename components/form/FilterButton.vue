<template>
  <button class=" border-2 rounded-[19px] transition-all h-[45px] text-white flex items-center justify-between" :class="[isExpand ? 'w-full px-4 bg-white' : 'w-[119px] bg-[rgba(255,255,255,0.25)]']">
    <Transition name="slide-fade">
      <div v-if="isExpand" class="flex justify-between items-center">
        <ArrowLeft class="rotate-180 text-blue-600 mr-4"/>
        <slot name="filters"></slot>
      </div>
    </Transition>
    <div class="flex items-center space-x-5 w-full transition-all" :class="isExpand ? 'justify-end' : 'justify-center'" @click="isExpand = !isExpand">
    <ArrowLeft v-if="!isExpand" />
      <span>
        {{isExpand ? 'Clear' : 'Filter'}}
      </span>
    </div>
  </button>
</template>
<script setup>
import {ref} from 'vue'
import { ArrowLeft } from '~~/components/icons/index'
let isExpand = ref(false)
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}</style>