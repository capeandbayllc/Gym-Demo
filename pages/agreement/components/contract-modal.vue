<template>
    <div class="text-center text-xl mt-4 font-semibold mb-6">
        Select your Contract
    </div>
    <div class="flex justify-around cursor-pointer gradient-bg w-fit w-[450px] p-6 mx-auto rounded border border-secondary">
        <div v-for="(type, ndx) in filesTypes" :key="ndx" class="create-option mx-6" :class="{'transition-all scale-[1.2]': activeTab == ndx}" @click="activeTab = ndx">
            <empty-file-icon class="mb-2 mx-auto w-14" />
            <span class="mb-4">{{type}}</span>
        </div>
    </div>
</template>
<style scoped>
.agreement-builder-modal-container {
	@apply pl-2 pr-2 pt-6 pb-6;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    .create-option {
        @apply inline-block items-center text-xs text-center w-20 mb-4;
    }
    
    .content {
        @apply border border-secondary;
    }
}
.agreement-builder-modal-card {
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
</style>

<script setup>
import { EmptyFileIcon } from '~~/components/icons';
const emit = defineEmits(['close']);

const activeTab = ref(null);
const filesTypes = [ "Florida MTN", "Florida Term", "FLA. PIF" ];

watch(activeTab,()=>{
    emit("changeType",filesTypes[activeTab.value])
})

</script>