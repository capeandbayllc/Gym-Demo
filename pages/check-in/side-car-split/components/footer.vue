<template>
    <div class="flex justify-between  mt-5 mx-3">
        <div>
            <select name="" id="" class="text-white bg-[#0095FF] px-4 py-1 border rounded-2xl">
                <option value="callType" class="text-black" selected>Call Type</option>
                <option value="smsType" class="text-black">SMS Type</option>
                <option value="emailType" class="text-black">Email Type</option>
            </select>
        </div>
        <div class="flex justify-items-end space-x-4">
            <div class="cursor-pointer mt-1" @click="$emit('close')">Cancel</div>
            <div class="cursor-pointer mt-1" @click="$emit('saveNow')">Save</div>
            <div><button class="bg-[#82D300] px-4 py-1 rounded-2xl" @click="$emit('callNow')">Call Now</button></div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>

</script>