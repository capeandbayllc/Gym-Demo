<template>
    <div class="border-[1px] border-white p-4 rounded-lg">
        <div class="flex justify-between mb-3">
            <div class="flex space-x-4 justify-end">
                <div>
                    <img :src="UserCallerImage" alt="profile image" class="w-20 h-20 rounded-xl border-2 border-[#008AE0]">
                </div>
                <div class="flex flex-col justify-end">
                    <p class="text-2xl mb-1">Aya Buchanan</p>
                    <p class="text-sm text-[#C4C4C4]">outgoing call</p>
                </div>
            </div>

            <div>
                <img :src="PhoneImage" alt="phone icon" class="border-2 border-[#008AE0] p-3 rounded-full bg-[#11609E]">
            </div>
        </div>

        <div class="text-center mb-2">
            <p class="text-2xl text-[#008AE0] font-medium">+ 1 (912) 456-7890</p>
            <p class="text-sm mt-2">December 12 9:14 am</p>
        </div>
        <div class="text-right">
            <button class="border-[1px] px-2 rounded-md hover:bg-[#008AE0]">notes</button>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import UserCallerImage from '@/public/images/profile/users_84.jpg'
import PhoneImage from '@/public/phone.png'
</script>