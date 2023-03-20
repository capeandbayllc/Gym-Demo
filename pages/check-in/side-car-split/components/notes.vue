<template>
    <simple-card title="Notes" class="rounded-xl">
        <div class="bg-gradient-to-t from-[#18203A] to-[#11609E] p-5 w-[420px] ">
            <div class="bg-white p-4 border-[1px] border-[#008AE0] rounded-xl">
                <div class="text-[#0095FF] flex justify-between">
                    <p>14:34:56 PM</p>
                    <p>December 6, 2022</p>
                </div>
                <div class="mb-4">
                    <input type="text" :placeholder="placeholderTitle" class="w-full font-semibold placeholder-[#1174CB] text-[#808080]">
                </div>
                <div class="text-[#808080]">
                   <textarea class="w-full h-[150px] p-2"></textarea>
                </div>

                <div class="text-center mt-2">
                    <button class="bg-[#5FC600] border border-[#5FC600] px-8 py-2 rounded-3xl hover:text-black hover:bg-white">Create an action</button>
                </div>
                
            </div>
       </div>
    </simple-card>
</template>

<script setup>
const props = defineProps({
    placeholderTitle:{
        type:String
    }
})
</script>
