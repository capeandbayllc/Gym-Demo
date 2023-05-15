<template>
  <div
    class="relative w-9 h-9 equal-to-icon"
    :class="{ 'equal-to-icon': calculateByDropDown }"
    ref="componentRef"
  >
    <div class="equation-icon" @click="showCalculateByDropDown(1)">
      <span class="mx-auto pr-[2px] font-semibold"> = </span>
    </div>
    <div class="calculation-dropdown" v-if="calculateByDropDown">
      <div
        class="gradient-bg border-4 border-base-content border-opacity-75 flex justify-between w-full py-3 px-2 rounded-xl"
      >
        <a class="dropdown-item cursor-pointer">
          <img src="/equal.png" alt="" />
        </a>
        <a class="dropdown-item cursor-pointer">
          <img src="/notequal.png" alt="" />
        </a>
        <a class="dropdown-item cursor-pointer">
          <img src="/greaterthan.png" alt="" />
        </a>
        <a class="dropdown-item cursor-pointer">
          <img src="/lessthan.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.equation-icon {
  @apply flex w-9 h-9 rounded-full text-center border-base-content bg-secondary cursor-pointer border-[3px] border-opacity-50;
}
.equal-to-icon {
  @apply relative z-10 text-2xl pl-[2.5px] leading-6;
  .calculation-dropdown {
    @apply flex w-[180px] absolute -left-[70px] p-[7px] bg-secondary rounded-xl justify-between mt-[6px];
  }
}
.calculation-dropdown::before {
  @apply bg-no-repeat h-[120px] w-[120px] absolute top-[-47px] left-[25px] z-[-1];
  content: "";
  background-image: url("/equal_bg.png");
}
</style>

<script setup>
const calculateByDropDown = ref(false);
const showCalculateByDropDown = () => {
  calculateByDropDown.value = !calculateByDropDown.value;
};
</script>
