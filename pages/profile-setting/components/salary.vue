<template>
  <div class="mx-auto mt-20 lg:w-3/5 w-4/5">
    <div class="mb-5 ml-1">
      <h5 class="text-lg font-medium"> Salary </h5>
    </div>
    <div class="gradient-bg p-4 page-border">
      <div class="bg-black page-border">

        <div class="grid grid-cols-12 pt-4">
          <div class="section-1 mr-auto mt-2">
            <div class="grid grid-cols-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
              <div class="-mt-16 -ml-14">
                <SalaryPie />
              </div>
              <div class="breakdown-list ml-14 mt-12">
                <ol class="list-decimal list-inside space-y-4" >
                  <li class="breakdown-text">
                    <div class="breakdown breakdown-1"></div>
                    Take Home
                  </li>
                  <li class="breakdown-text">
                    <div class="breakdown breakdown-2"></div>
                    Taxes
                  </li>
                  <li class="breakdown-text">
                    <div class="breakdown breakdown-3"></div>
                    Benefits
                  </li>
                  <li class="breakdown-text">
                    <div class="breakdown breakdown-4"></div>
                    Retirement
                  </li>
                </ol>
              </div>

            </div>
          </div>
          <div class="section-2 ml-auto mr-auto mt-2 mb-4">
            <div class="grid grid-cols-1 py-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
              <div v-for="item in salaryFields" :key="item.key"
                   class="mb-1 col-span-4 w-full">
                <div class="mb-1.5 md:ml-1 sm:ml-1 xs-ml-1">
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
  @apply w-6 h-6 rounded-full mr-4
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
  @apply flex items-center text-xl;
  color: #0068B3;
}
.breakdown-list {
  @apply ml-14
}

@media (min-width:1180px) {
  .section-1 {
    @apply col-span-8
  }

  .section-2 {
    @apply col-span-4 w-3/5
  }
}

@media (max-width:1179px) {
  .section-1 {
    @apply col-span-12
  }

  .section-2 {
    @apply col-span-12 w-4/5 mb-8
  }
}

@media (max-width:1365px) {
  .breakdown-list {
    margin-left: 3.85rem;
  }
}

@media (min-width:1366px) {
  .breakdown-list {
    @apply ml-14
  }
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
