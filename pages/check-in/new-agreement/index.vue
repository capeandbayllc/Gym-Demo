<template>
    <simple-card title="Agreements" class="agreements-card" closable>
        <div class="p-8">
            <CurrentAgreement/>
            <MembershipType/>
        </div>
    </simple-card>
</template>

<script setup>
import CurrentAgreement from './current-agreement.vue'
import MembershipType from './membership-type.vue'
</script>

<style scoped>
.agreements-card {
    @apply m-auto bg-neutral;
    @screen -lg {
        @apply m-4;
    }
}
</style>