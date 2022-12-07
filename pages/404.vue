<template>
    <div>
        <div class="mx-auto pt-32">
            <div class="text-center z-20">
                <h1 class="text-9xl sm:text-10xl font-medium mb-8 text-secondary">404</h1>
                <p class="text-xl px-8 sm:px-0 sm:text-4xl  font-light mb-16 leading-tight">Page not found: {{$route.fullPath}}</p>
                <div class="w-full flex items-center justify-center">
                    <NuxtLink to="/" class="relative border border-white text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">Go back home</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    onMounted(() => {
        document.getElementsByClassName('app-layout')[0].classList.add("page-not-found")
    });
    onUnmounted(() => {
        document.getElementsByClassName('app-layout')[0].classList.remove("page-not-found")
    })
</script>
<style>
    .page-not-found{
        background: linear-gradient(-174deg, #0074c72b 0%, transparent 21%, #0074c75c 100%);
    }
</style>