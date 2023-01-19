<template>
    <simple-card class="text-center p-4 w-[450px]">
        <h2 class="text-lg font-semibold my-2 mb-6">Please enter your information below:</h2>
        <div class="flex w-fit mx-auto gap-8">
            <button>
                <CheckCircleBlueIcon class="mb-4"/>
                <p>Yes</p>
            </button>
            <button>
                <CrossCircleRedIcon class="mb-4"/>
                <p>No</p>
            </button>
        </div>
    </simple-card>
</template>
<script setup>
import {CheckCircleBlueIcon,CrossCircleRedIcon} from '@/components/icons';

const name = ref("Kevin Buchanan");
const email = ref("kevinbuchanan@gmail.com");

</script>
<style setup>
</style>