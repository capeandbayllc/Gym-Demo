<template>
    <div>
        <div class="mx-auto pt-24 2xl:pt-32">
            <div class="text-center z-20">
                <div class="flex flex-col-3">
                    <img src="/broken_weight-left.png" alt="" class="w-24 h-24 mt-20 m-2">
                    <h1 class="error-type font-medium text-secondary">
                        404
                    </h1>
                    <img src="/broken_weight-right.png" alt="" class="w-24 h-24 mt-20 m-2">
                </div>
                <p class="text-xl px-8 sm:px-0 font-semibold mb-14 2xl:text-2xl">Page not found</p>
                <div class="w-full flex items-center justify-center">
                    <NuxtLink to="/" class="rounded relative border-2 border-primary-content text-sm py-1.5 px-1.5 font-semibold cursor-pointer">Go back home</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .error-type {
        font-size: 168px;
        line-height: 1;
    } 
</style>