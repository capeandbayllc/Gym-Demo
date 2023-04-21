<template>
    <div class="gradient-bg rounded border border-secondary grid grid-cols-1 p-3 gap-4 w-[400px] text-sm max-h-[75vh] overflow-auto">
        <div class="text-center text-xl font-semibold">
            Save
        </div>
        <div>
            <div class="mb-2">Agreement Name</div>
            <input type="text" v-model="agreementName" placeholder="Pre Populated Name" class="white-input w-full p-2 rounded" />
        </div>
    </div>
</template>
<style scoped lang="postcss">
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
    @apply bg-base-200;
}

.white-input {
    @apply bg-base-content text-base-300;
}
</style>

<script setup>
const props = defineProps({
    newAgreementData: {
		type: Object,
		default: null,
	}
})
const emit = defineEmits(['changeNewAgreementData']);

const agreementName = ref('');

onMounted(() => {
  if (props.newAgreementData.agreementName !== null) {
    agreementName.value =  props.newAgreementData.agreementName;
  }
});

const changeNewAgreementData = ()=>{
    let changeNewAgreementData = props.newAgreementData;
    changeNewAgreementData.agreementName = agreementName.value;
    emit('changeNewAgreementData', changeNewAgreementData)
};

watch(agreementName, () => {
    changeNewAgreementData()
});

</script>