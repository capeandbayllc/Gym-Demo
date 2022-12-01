<template>
    <div class="relative text-secondary flex items-center justify-center">
        <font-awesome-icon icon="file" :size="iconSize" />
        <div
            class="absolute inset-0 text-base-content flex items-center justify-center text-xs font-bold uppercase"
        >
            {{ extension }}
        </div>
        <span
            v-if="size"
            class="absolute bottom-0 inset-x-0 text-gray-400 text-2xs transform translate-y-full whitespace-nowrap flex justify-center"
        >
            {{ prettyBytes(size) }}
        </span>
    </div>
</template>

<script setup>
import prettyBytes from "pretty-bytes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFile);

const props = defineProps({
    extension: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
    },
    iconSize: {
        type: String,
        default: "3x",
    },
});
</script>
