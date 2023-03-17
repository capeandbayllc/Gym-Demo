<template>
    <div class="map-contacts-container">
        <h4 class="text-center text-md">Save your Campaign</h4>

        <div class="flex flex-row justify-center">
            <div class="map-contacts-form">
                <!-- Name -->
                <div class="form-control w-full">
                    <label class="label" for="name">
                        <span class="label-text">Name*</span>
                        <span class="label-text-alt">required</span>
                    </label>
                    <input id="name" type="text" placeholder="Commit to a new name" class="text-input-field" />
                </div>
                
                <!-- Location -->
                <div class="form-control w-full mt-3">
                    <label class="label" for="location">
                        <span class="label-text">Location*</span>
                        <span class="label-text-alt">required</span>
                    </label>
                    <input id="location" type="text" placeholder="Gymrevenue Fitness" class="text-input-field" />
                </div>

                <div class="flex mt-6 justify-center">
                    <Button secondary size="xs" class="rounded" @click.stop="$emit('next-page', 'success-message')">Save and Send</Button>
                </div>
            </div>
        </div>

        <div class="flex mt-2">
            <span @click.stop="$emit('back', 'select-templates')" class="text-secondary cursor-pointer">
                <font-awesome-icon :icon="['fas', 'angle-left']" size="sm" />
                <a class="text-xs ml-1" @click.stop="$emit('next-page', 'select-template')">Back</a>
            </span>
        </div>
    </div>
</template>

<style scoped>
.map-contacts-container {
    @apply flex flex-col justify-center;

    .map-contacts-form {
        @apply border border-white rounded-lg min-h-[12vw] mt-5 p-6 w-[30vw] text-xs
    }
    .text-input-field {
        @apply input input-bordered w-full h-8 placeholder:text-xs;
    }
    .label-text {
        @apply text-xs;
    }
    .label-text-alt {
        @apply text-secondary text-[8px]
    }
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft);
</script>
