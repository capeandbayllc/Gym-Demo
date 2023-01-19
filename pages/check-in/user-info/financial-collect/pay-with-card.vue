<template>
    <div class="mb-4">
        <label class="text-sm mb-4">Pay With Card</label>
        <img src="/checkin/cards-image.png" alt="">
    </div>
    <div class="mb-4">
        <label class="text-sm font-bold mb-2 inline-block">Cardholder Name</label>
        <input class="white-input w-full py-1 px-2 rounded-sm text-black" placeholder="Cardholder Name"/>
    </div>
    <div class="mb-4">
        <label class="text-sm font-bold mb-2 inline-block">Card Number</label>
        <input type="number" class="white-input w-full py-1 px-2 rounded-sm text-black" placeholder=".... .... .... ...."/>
    </div>
    <div class="mb-4 flex gap-4">
        <div class="w-2/4">
        <label class="text-sm font-bold mb-2 inline-block">Expiration Date (MM/YY)</label>
        <input type="number" class="white-input w-full py-1 px-2 rounded-sm text-black" placeholder="MM/YY"/>
        </div>
        <div>
        <label class="text-sm font-bold mb-2 inline-block">CVV (3 digits)</label>
        <input type="password" class="white-input w-full py-1 px-2 rounded-sm text-black" placeholder=""/>
        </div>
    </div>
    <div class="mb-6">
        <label class="text-sm font-bold mb-2 inline-block">Postal Code</label>
        <input type="number" class="white-input w-full py-1 px-2 rounded-sm text-black"/>
    </div>
    <div class="flex gap-4">
        <div><input type="checkbox" class="toggle toggle-info" checked /></div>
        <p class="text-sm">By checking this box, you agree to allow Fitness Connection to charge the credit card provided above in lieu of presenting it for in club purchases.</p>
    </div>
</template>
<script setup>

</script>