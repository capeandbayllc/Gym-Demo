<template>
    <div class="gradient-bg rounded border border-secondary grid grid-cols-1 p-3 gap-4 w-[400px] text-sm max-h-[75vh] overflow-auto">
        <div class="text-center text-xl font-semibold">
            Save
        </div>
        <div>
            <div class="mb-2">Agreement Name</div>
            <input type="text" placeholder="Pre Populated Name" class="white-input w-full p-2 rounded" />
        </div>
        <!-- Create the name is already in used modal -->
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
    
  /*   .chart-content{
        @apply bg-black rounded w-full text-3xl font-bold border-white border-2 text-center;
    } */
    .content {
        @apply border border-secondary;
    }
    /* .tab-list {
        @apply flex flex-row space-x-5 pb-4;
        .tab-item {
            @apply px-4 py-1 rounded bg-base-content text-secondary text-base cursor-pointer;
        }
        .tab-item.active {
            @apply bg-secondary text-base-content relative;
        }
    } */
}
.agreement-builder-modal-card {
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
</style>

<script setup>
import { EmptyFileIcon } from '~~/components/icons';
const emit = defineEmits(['close']);

const activeTab = ref(null);
const filesTypes = [ "Membership", "Personal Training", "FLA. PIF" ];

watch(activeTab,()=>{
    emit("changeType",filesTypes[activeTab.value])
})

</script>