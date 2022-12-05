<template>
    <div class="mt-14 mx-auto">
        <div class="text-center z-20">
        <h1 class="text-9xl sm:text-10xl font-medium mb-8">404</h1>
        <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">Page not found: {{$route.fullPath}}</p>
        <div class="w-full flex items-center justify-center">
            <NuxtLink to="/" class="relative gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">Go back home</NuxtLink>
        </div>
        </div>
    </div>
</template>
<style scoped>
    .gradient-border:hover:before {
        background-position: -50% 0;
        opacity: 1;
    }
    .gradient-border:before {
        background-size: 400% auto;
        border-radius: 0.5rem;
        bottom: 0;
        content: "";
        left: 0;
        -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: .5;
        padding: 2px;
        position: absolute;
        right: 0;
        top: 0;
        transition: background-position .3s ease-in-out,opacity .2s ease-in-out;
        width: 100%;
    }
    .gradient-border:before {
        background: linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1);
    }
</style>