<template>
    <div class="mb-4">
        <label class="text-sm font-bold mb-2 inline-block">Name on Account</label>
        <input type="text" class="white-input w-full py-1 px-2 rounded-sm text-black"/>
    </div>
    <div class="flex items-center">
        <label class="mr-4">Type of Account*</label>
        <div class="flex items-center mr-4"><input type="checkbox" class="toggle toggle-info mr-2" checked /> Checking</div>
        <div class="flex items-center"><input type="checkbox" class="toggle toggle-info mr-2" checked /> Savings </div>
    </div>
    <div class="mb-4">
        <label class="text-sm font-bold mb-2 inline-block">Bank Name</label>
        <input type="text" class="white-input w-full py-1 px-2 rounded-sm text-black"/>
    </div>
    <div class="mb-4">
        <label class="text-sm font-bold mb-2 inline-block">Bank Routing Number*</label>
        <input type="password" class="white-input w-full py-1 px-2 rounded-sm text-black"/>
    </div>
    <div class="mb-6">
        <label class="text-sm font-bold mb-2 inline-block">Bank Account Number</label>
        <input type="text" class="white-input w-full py-1 px-2 rounded-sm text-black"/>
    </div>
    <div class="mb-4 text-right">
        <img src="/checkin/check_scaled_for_resolution.png" class="w-[300px] inline-block">
    </div>
    <div>
        <label class="w-full text-sm font-bold mb-2 inline-block mb-4">Billing address</label>
        <p><input type="checkbox" class="toggle toggle-info align-middle" checked /> <span class="align-middle">Same as home address</span></p>
    </div>
</template>
<script setup>

</script>