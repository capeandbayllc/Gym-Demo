<template>
    <div class="text-center my-4">
        <button class="border border-white rounded-md px-4 py-1 mx-2 transition" :class="{'bg-black border-black':messagingPrefs}" @click="messagingPrefs = !messagingPrefs">Messaging Prefs</button>
        <button class="border border-white rounded-md px-4 py-1 mx-2 transition" :class="{'bg-black border-black':dataPrefs}" @click="dataPrefs = !dataPrefs">Data Prefs</button>
        <button class="border border-white rounded-md px-4 py-1 mx-2 transition" :class="{'bg-black border-black':qr}" @click="qr = !qr">Identification/QR/ Fingerprint</button>
        <button class="border border-white rounded-md px-4 py-1 mx-2 transition" :class="{'bg-black border-black':credit}" @click="credit = !credit">Credit</button>
    </div>
    <Messaging/>
    <Marketing/>
    <UpdatePassword/>
    <Details/>
    <!-- <button class="mx-auto p-4 w-full" @click="backToTop"> Back to Top</button> -->
 </template>
<script setup>
import Messaging from "./messaging.vue";
import Marketing from "./marketing.vue";
import UpdatePassword from "./updatePassword.vue";
import Details from "./details.vue";

const messagingPrefs = ref(false)
const dataPrefs = ref(false)
const qr = ref(false)
const credit = ref(false)
</script>
<style scoped>

</style>