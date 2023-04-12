<template>
    <div class="w-[900px] width-full mx-auto">
        <div class="bg-base-content text-base-300 rounded max-h-[60vh] overflow-auto">
            <div class="text-center py-5">
                <img src="/gym-revenue-base-300.png" class="h-11 inline-block">
                <div class="font-semibold text-xl">Type Agreement</div>
            </div>
            <div class="px-8 pb-8">
                <h5 class="text-lg font-semibold mb-2">Membership Agreement</h5>
                <p class="mb-5 text-xs">Please review and agree to the terms and conditions for the agreements below.</p>
                <p class="text-xs">Additionally, you confirm that that you currently have the hardware and software required to read and retain your membership and/or other services agreement(s) (that are provided in a .PDF format), and any notices and other information that the company may send to you in electronic form. These requirements include internet access, a working email address, and access to a working printer. You also confirm that you will promptly notify the company if your email address is discontinued or changed. You may withdraw your consent to receive electronic notices any time, request a written copy of a specific document or notice previously sent you in electronic form, or provide an updated email and/or address information by contacting the company at 1-000-000-000.</p>
                <div class="flex justify-between items-center gap-2 pt-2 px-2">
                    <input type="checkbox" name="terms" id="terms" v-model="data.agreeTerms"/>
                    <label class="mr-auto text-lg" for="terms">Yes, I agree to all the Terms & Conditions</label>
                </div>
            </div>
            <div class="px-8 pb-8">
                <h5 class="text-lg font-semibold mb-2">IMPORTANT ELECTRONIC SIGNATURE TERMS</h5>
                <p class="text-xs">By checking the “I agree” box(es) above, you are (1) consenting to the use of your electronic signature to record your commitment to the terms of the agreement(s) in lieu of an original signature on paper, (2) agreeing to the receipt of electronic communications and (3) acknowledging that you have read, understand and agree to such terms and conditions. A copy of the agreement(s) will be sent to the email you provided.</p>
                <div class="flex justify-between items-center gap-2 pt-2 px-2">
                    <input type="checkbox" name="agree" id="agree" v-model="data.agreeElectronics"/>
                    <label class="mr-auto text-lg" for="agree">I agree</label>
                </div>
            </div>
            <div class="px-8 pb-8">
                <h5 class="text-lg font-semibold mb-2">Heading</h5>
                <p class="text-xs">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
            </div>
            <div class="px-8 pb-8 w-2/3">
                <div class="mb-2">Signature:</div>
                <input type="text" v-model="data.signature" class="border border-base-300 input w-full bg-base-content text-base-300 text-lg mb-6 bg-gray-300" />
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <div class="mb-2">Full name:</div>
                        <input type="text" v-model="data.fullName" class="border border-base-300 input w-full bg-base-content text-base-300 text-lg mb-6" />
                    </div>
                    <div>
                        <div class="mb-2">Date:</div>
                        <input type="text" v-model="data.date" class="border border-base-300 input w-full bg-base-content text-base-300 text-lg mb-6" />
                    </div>
                    <div>
                        <div class="mb-2">Id number:</div>
                        <input type="text" v-model="data.idNumber" class="border border-base-300 input w-full bg-base-content text-base-300 text-lg mb-6" />
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script setup>
const data = ref({
    agreeTerms: false,
    agreeElectronics: false,
    signature: '',
    fullName: '',
    date: '',
    idNumber: ''
});

</script>
<style scoped lang="postcss">
input[type="checkbox"] {
  @apply rounded-full bg-base-content appearance-none m-0 h-5 w-5 border border-base-content/70 outline-none;
  @apply focus:border;
}

input[type="checkbox"]:checked {
  @apply bg-secondary border-primary;
}

</style>