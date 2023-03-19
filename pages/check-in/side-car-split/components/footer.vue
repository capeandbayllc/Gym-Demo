<template>
    <div class="flex justify-between  mt-5 mx-3">
        <div>
            <select v-model="selectedoption" name="" id="" class="text-white bg-[#0095FF] px-4 py-1 border rounded-2xl">
                <option value="default">Default</option>
                <option value="call" class="text-black" :selected="selectedType === 'call'">Call Type</option>
                <option value="sms" class="text-black" :selected="selectedType === 'sms'">SMS Type</option>
                <option value="email" class="text-black" :selected="selectedType === 'email'">Email Type</option>
            </select>
        </div>
        <div class="flex justify-items-end space-x-4">
            <div class="cursor-pointer mt-1 hover:text-[#82D300] transition-all duration-200" @click="$emit('close')">Cancel</div>
            <div class="cursor-pointer mt-1 hover:text-[#82D300] transition-all duration-200" @click="$emit('saveNow')">Save</div>
            <div>
                <button class="bg-[#82D300] border-[1px] border-[#82D300] hover:bg-transparent transition duration-100 px-4 py-1 rounded-2xl" @click="$emit('callNow')">{{ submitTitle }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
    submitTitle: {
        type: String
    },
    selectedType: {
        type: String,
        default: 'default'
    }
})

const selectedoption = ref(props.selectedType)
</script>