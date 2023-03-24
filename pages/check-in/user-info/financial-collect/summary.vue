<template>
    <div class="border border-secondary p-4 rounded-[20px] summury-wrap card-gradient-bg w-full">
        <div class="flex justify-between mb-4 mr-2">
            <p class="text-lg">Summary</p>
            <p>
                <span class="border-r-[2px] border-secondary pr-3 py-2 mr-2 h-full text-[13px]">Gym</span>
                <span class="text-[17px]">Tampa, Florida</span>
            </p>
        </div>
        <div class="border border-secondary rounded-[14px] bg-black">
            <div class="px-[10px] py-[1px]">
                <p class="p-2 text-lg mb-1 font-semibold">Primary Member</p>
                <div class="px-8 mb-4">
                    <div class="flex justify-between mb-1"><p>Enrollment Fee</p><span class="font-bold w-[90px] flex justify-between"><i class="bg-secondary px-2 mr-2 rounded-full font-normal">i</i> $0.00</span></div>
                    <div class="flex justify-between mb-1"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
                    <div class="flex justify-between mb-1"><p>Monthly Dues</p> <span class="font-bold w-[90px] flex justify-between"><i class="bg-secondary px-2 mr-2 rounded-full font-normal">i</i> $0.00</span> </div>
                    <div class="flex justify-between mb-1">
                    <p>Pro-rated</p>
                    <div>
                        <div class="w-[90px] flex justify-between">
                        <i class="bg-secondary px-2 mr-2 rounded-full">i</i>
                        <s class="font-bold">$18.96</s>
                        </div>
                        <p class="font-bold text-right mt-1">$9.48</p>
                    </div>
                    </div>
                    <div class="flex justify-between mb-1"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
                    <div class="flex justify-between mb-1"><p>Annual Fee</p> <span class="font-bold">$0.00</span> </div>
                </div>
                <p class="text-xs px-2 mb-5 font-light">Annual fee will be billed on January 20th. <br/> Taxes may apply.</p>
            </div>
            <div class="bg-gradient-to-b from-secondary to-[#003255] text-center py-1">
                <p class="font-light text-sm -mb-1">Effective Date</p>
                <p class="text-xl font-semibold">22 Dec 2022</p>
            </div>
            <div class="px-12 py-3">
            <div class="mb-2 w-full flex">
                <p class="w-9/12">Enrollment Fee</p>
                <span class="text-secondary font-semibold w-3/12"> $0.00</span>
            </div>
            <div class="mb-2 w-full flex">
                <p class="w-9/12">This Month's Dues</p>
                <span class="text-secondary font-semibold w-3/12"> $0.00</span>
            </div>
            <div class="mb-2 w-full flex">
                <p class="w-9/12">Taxes</p>
                <span class="text-secondary font-semibold w-3/12"> $0.00</span>
            </div>
            <div class="mb-2 w-full flex">
                <p class="w-9/12">Original Total Due</p>
                <span class="text-secondary font-semibold w-3/12"> $18.96</span>
            </div>
            <div class="mb-2 font-semibold w-full flex">
                <p class="text-secondary w-9/12">Total Due Today</p>
                <span class="text-secondary font-semibold w-3/12">$9.48</span>
            </div>
            </div>
            <div class="bg-gradient-to-b from-secondary to-[#003255] rounded-b-[14px] text-center py-3">
                <p class="font-light text-sm -mb-1">PROMO CODE</p>
                <p class="text-xl font-semibold">XMAS DAY <span class="ml-10">-$9.48</span></p>
            </div>
        </div>
    </div>
</template>