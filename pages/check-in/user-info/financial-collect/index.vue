<template>
  <div class="flex w-[900px] gap-4">
    <div class="w-7/12 border border-secondary rounded-md p-4 card-details">
        <div class="w-full flex justify-between">
            <p>Due Today*</p>
            <div class="w-[200px]">
                <label class="text-sm font-bold mb-2 inline-block">Add Promo Code</label>
                <input class="white-input w-full p-1 rounded-sm" placeholder="Add Promo"/>
            </div>
        </div>
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
          <div><input type="checkbox" class="toggle" checked /></div>
          <p class="text-sm">By checking this box, you agree to allow Fitness Connection to charge the credit card provided above in lieu of presenting it for in club purchases.</p>
        </div>
    </div>
    <div class="border border-secondary p-4 rounded-md flex-1">
      <div class="border border-secondary p-4 rounded-md summury-wrap">
        <div class="flex justify-between mb-4">
          <p>Summary</p>
          <p><span class="text-xs border-r border-secondary pr-2 mr-2 h-full">Gym</span> Tampa, Florida</p>
        </div>
        <div class="border border-secondary rounded-md">
          <p class="p-2 text-lg mb-2">Primary Member</p>
          <div class="px-8 mb-4">
            <div class="flex justify-between mb-2"><p>Enrollment Fee</p> <span class="font-bold"> <i class="bg-secondary px-2 mr-2 rounded-full">i</i> $0.00</span> </div>
            <div class="flex justify-between mb-2"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
            <div class="flex justify-between mb-2"><p>Monthly Dues</p> <span class="font-bold"><i class="bg-secondary px-2 mr-2 rounded-full">i</i> $0.00</span> </div>
            <div class="flex justify-between mb-2">
              <p>Pro-rated</p>
              <div>
                <i class="bg-secondary px-2 mr-2 rounded-full">i</i>
                <s class="font-bold">$18.96</s>
                <p class="font-bold text-right mt-2">$9.48</p>
              </div>
            </div>
            <div class="flex justify-between mb-2"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
            <div class="flex justify-between mb-2"><p>Annual Fee</p> <span class="font-bold">$0.00</span> </div>
          </div>
          <p class="text-xs px-2 mb-4">Annual fee will be billed on January 20th. <br/> Taxes may apply.</p>
          <div class="bg-secondary text-center mb-2">
            <p>Effective Date</p>
            <p class="text-lg font-bold">22 Dec 2022</p>
          </div>
          <div class="px-8 mb-4">
            <div class="flex justify-between mb-2"><p>Enrollment Fee</p> <span class="text-secondary"> $0.00</span> </div>
            <div class="flex justify-between mb-2"><p>This Month's Dues</p> <span class="text-secondary"> $0.00</span> </div>
            <div class="flex justify-between mb-2"><p>Taxes</p> <span class="text-secondary"> $0.00</span> </div>
            <div class="flex justify-between mb-2"><p>Original Total Due</p> <span class="text-secondary"> $18.96</span> </div>
            <div class="flex justify-between mb-2"><p class="text-secondary">Total Due Today</p> <span class="text-secondary">$9.48</span> </div>
          </div>
          <div class="bg-secondary text-center">
            <p>PROMO CODE</p>
            <p class="text-lg font-bold">XMAS DAY <span class="ml-10">-$9.48</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.card-details,.summury-wrap{
  background-image: linear-gradient(#0074c8b5, #000);
}
</style>