<template>
  <div class="mx-auto mt-20 w-3/5 ">
    <div class="mb-5 ml-1">
      <h5 class="text-lg font-medium"> Salary </h5>
    </div>
    <div class="gradient-bg p-4 page-border">
      <div class="bg-black page-border">

        <div class="grid grid-cols-12 py-2">
          <div class="mr-auto mt-2 mb-4 lg:col-span-7 md:col-span-12">
            <div class="grid grid-cols-2 pb-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
              <div class="-mt-16 -ml-16">
                <SalaryPie />
              </div>
              <div :style="{marginTop: '6rem', marginLeft: '5rem'}">
                <h5 class="mb-2 h-7">
                  <p class="breakdown breakdown-1"></p>
                  <span class="breakdown-text">Take Home</span>
                </h5>
                <h5 class="mb-2 h-7"><p class="breakdown breakdown-2"></p>
                  <span class="breakdown-text">Taxes</span>
                </h5>
                <h5 class="mb-2 h-7"><p class="breakdown breakdown-3"></p>
                  <span class="breakdown-text">Benefits</span>
                </h5>
                <h5 class="mb-2 h-7"><p class="breakdown breakdown-4"></p>
                  <span class="breakdown-text">Retirement</span>
                </h5>
              </div>
            </div>
          </div>
          <div class="w-3/5 ml-auto mr-auto mt-2 mb-4 col-span-5">
            <div class="grid grid-cols-1 py-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
              <div v-for="item in salaryFields" :key="item.key"
                   class="mb-1 col-span-4 w-full">
                <div class="mb-1.5">
                  <span class="font-light">{{ item.label }} </span>
                </div>
                <input :class="item.class" disabled class="rounded-xl" v-model="form[item.key]"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "salary"
}
</script>


<style scoped>
.page-border {
  @apply border border-secondary rounded-2xl;
}

input {
  @apply h-9 w-full pl-2 min-w-min;
}


input:focus {
  @apply outline-none;
}


.neutral-input {
  @apply bg-base-content/20;
}

.breakdown {
  width: 20px;
  height: 20px;
  background-color: #f00;
  border-radius: 50%;
  margin-right: 10px;
  float: left
}

.breakdown-1 {
  background-color: #04375C;
}

.breakdown-2 {
  background-color: #CBCBCB;
}

.breakdown-3 {
  background-color: #06538B;
}

.breakdown-4 {
  background-color: #0075C9;
}

.breakdown-text {
  @apply float-left -mt-1 text-xl;
  color: #0068B3;
}
</style>

<script setup>
import {ref} from 'vue';
import {SalaryPie} from "@/components/icons";

let form = ref({
  grossPay: "$00,000",
  classRates: "$0/ class",
  bonuses: "+ $0",
});

let salaryFields = [
  {
    key: 'grossPay',
    label: 'Gross Pay',
    class: 'neutral-input rounded-xl'
  },
  {
    key: 'classRates',
    label: 'Class Rates',
    class: 'neutral-input rounded-xl',
  },
  {
    key: 'bonuses',
    label: 'Bonuses',
    class: 'neutral-input rounded-xl',
  },
];

</script>
