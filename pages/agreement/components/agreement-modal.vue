<template>
    <div :class="modalClass">
        <div>
            <div class="text-center text-xl mt-4 font-semibold mb-6">
                Select your Agreement Type
            </div>
            <div class="flex justify-around cursor-pointer gradient-bg w-fit w-[450px] p-6 mx-auto rounded border border-secondary">
                <div v-for="(type, ndx) in filesTypes" :key="ndx" class="create-option mx-6" :class="{'transition-all scale-[1.2]': activeTab == ndx}" @click="activeTab = ndx">
                    <empty-file-icon class="mb-2 mx-auto w-14" />
                    <span class="mb-4">{{type}}</span>
                </div>
            </div>
            <slot></slot>
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
    /* .chart-content{
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

const props = defineProps({
    modalClass:{
        type: String,
        default: ''
    },
    newAgreementData: {
		type: Object,
		default: null,
	}
})

const activeTab = ref(null);

const changeNewAgreementData = ()=>{
    if(props.newAgreementData){
        let changeNewAgreementData = props.newAgreementData;
        changeNewAgreementData.type = filesTypes[activeTab.value]
        emit('changeNewAgreementData', changeNewAgreementData)
    }
};

watch(activeTab, () => {
    changeNewAgreementData()
});

const filesTypes = [ "Membership", "Personal Training", "FLA. PIF" ];


const emit = defineEmits(['close', 'changeNewAgreementData']);


watch(activeTab,()=>{
    emit("changeType",filesTypes[activeTab.value])
})

</script>