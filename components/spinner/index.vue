<template>
  <div class="flex flex-col gap-5 justify-center">
    <div class="first-bar spinner-bar"></div>
    <div class="second-bar spinner-bar delay-[5s]"></div>
    <div class="third-bar spinner-bar"></div>
  </div>
</template>

<style scoped>
@keyframes spinner_bar {
  from {
    background-color: #0175c9;
    width: 50px;
  }
  to {
    background-color: white;
    width: 8px;
  }
}

.spinner-bar {
  @apply h-[8px] rounded-full mx-auto;
  animation-name: spinner_bar;
  animation-duration: 999ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-fill-mode: both;
}

.first-bar {
  animation-delay: 333ms;
}

.second-bar {
  animation-delay: 666ms;
}

.third-bar {
  animation-delay: 999ms;
}
</style>
