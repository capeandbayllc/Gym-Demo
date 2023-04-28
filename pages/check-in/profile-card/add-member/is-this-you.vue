<template>
  <simple-card class="text-center p-4 w-[450px]">
    <h1 class="text-2xl font-bold my-4">Is this you?</h1>
    <h2 class="text-xl font-semibold">{{ name }}</h2>
    <h3 class="text-lg font-normal mb-6">{{ email }}</h3>
    <div class="flex w-fit mx-auto gap-8">
      <button>
        <CheckCircleBlueIcon class="mb-4" />
        <p>Yes</p>
      </button>
      <button>
        <CrossCircleRedIcon class="mb-4" />
        <p>No</p>
      </button>
    </div>
  </simple-card>
</template>
<script setup>
import { CheckCircleBlueIcon, CrossCircleRedIcon } from "@/components/icons";

const name = ref("Kevin Buchanan");
const email = ref("kevinbuchanan@gmail.com");
</script>
