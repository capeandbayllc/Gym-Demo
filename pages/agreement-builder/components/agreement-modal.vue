<template>
    <card
        title="" class="agreement-builder-modal-card"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="agreement-builder-modal-container flex flex-col">
                <div class="content col-span-3 mb-8 h-32">
                    <div class="text-center text-xl mt-4 font-semibold">
                        Category
                    </div>
                    <div class="tab-list mt-8 justify-center ">
                        <div
                            v-for="(tab, ndx) in tabs"
                            :key="ndx"
                            class="tab-item"
                            :class="{
                                'active': activeTab === ndx
                            }"
                            @click="(activeTab = ndx)"
                        >{{tab}}</div>
                    </div>
                </div>
                <div class="content col-span-3 text-center h-52">
                    <div class="text-center text-xl mt-4 font-semibold mb-4">
                        Files
                    </div>
                    <div v-for="(type, ndx) in filesTypes[activeTab]" :key="ndx" class="create-option">
                        <empty-file-icon class="mb-2 mx-auto w-14" />
                        <span class="mb-4">{{type}}</span>
                    </div>
                </div>
                <div class="flex justify-end mt-11">
                    <button
                        type="button"
                        class="btn w-max rounded btn-sm font-medium mr-3 bg-base-200 border-base-200"
                        error
                        outline
                    >
                        Cancel
                    </button>
                    <button
                        class="btn w-max rounded btn-secondary text-base-content btn-sm font-medium"
                    >
                        Save
                    </button>
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped lang="postcss">
.agreement-builder-modal-container {
	@apply pl-2 pr-2 pt-6 pb-6;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    .create-option {
        @apply inline-block items-center text-xs text-center mx-12 w-20 mb-4;
    }
    
    .chart-content{
        @apply bg-base-300 rounded w-full text-3xl font-bold border-base-content border-2 text-center;
    }
    .content {
        @apply border border-secondary;
    }
    .tab-list {
        @apply flex flex-row space-x-5 pb-4;
        .tab-item {
            @apply px-4 py-1 rounded bg-base-content text-secondary text-base cursor-pointer;
        }
        .tab-item.active {
            @apply bg-secondary text-base-content relative;
        }
    }
}
.agreement-builder-modal-card {
    @apply bg-base-200;
}
</style>

<script setup>
import { EmptyFileIcon } from '~~/components/icons';
const activeTab = ref(0)
const tabs = ["Membership", "Fitness", "HR"];
const filesTypes = [
    [
        "New Membership", "Renew Membership", "Membership Agreement"   
    ],
    [
        "Fitness File 1", "Fitness File 2", "Fitness File 3"   
    ],
    [
        "HR File 1", "HR File 2", "HR File 3"   
    ]
];
</script>