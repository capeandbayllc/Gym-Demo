<template>
    <div class="map-contacts-container">
        <h4 class="text-center text-md">Create a map of your contact's journey.</h4>
        <p class="text-center text-xs font-light mt-2">
            Put your contacts on a path that's right for them. With a custom journey,<br>
            you can always be there for your contacts when they need you most.
        </p>

        <div class="flex flex-row justify-center">
            <div class="map-contacts-form">
                <!-- Folder Name -->
                <div class="form-control w-full">
                    <label class="label" for="folder_name">
                        <span class="label-text">Folder Name*</span>
                        <span class="label-text-alt">required</span>
                    </label>
                    <input id="folder_name" type="text" placeholder="Internal name (e.g. Journey #4 or Customer welcome flow)" class="text-input-field" />
                </div>
                
                <!-- Audience -->
                <div class="form-control w-full mt-3">
                    <label class="label" for="audience">
                        <span class="label-text">Audience*</span>
                        <span class="label-text-alt">required</span>
                    </label>
                    <input id="audience" type="text" placeholder="Gymrevenue Fitness" class="text-input-field" />
                </div>

                <div class="flex mt-6 justify-center">
                    <Button outline size="xs" class="rounded-full" @click.stop="$emit('next-page', 'lead-sources')">Connect Leads</Button>
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
