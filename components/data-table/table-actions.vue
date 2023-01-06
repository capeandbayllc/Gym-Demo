<template>
    <div class="dropdown dropdown-end">
        <slot name="trigger">
            <div class="btn btn-ghost btn-sm" tabindex="0" @click.prevent.stop>
                <font-awesome-icon icon="ellipsis-h" size="lg" />
            </div>
        </slot>
        <slot name="before" />
        <slot>
            <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content text-base-content bg-base-300 rounded-box w-52"
            >
                <li v-for="[key, action] in actions" :key="key">
                    {{ action.label }}
                </li>
            </ul>
        </slot>
        <slot name="after" />
    </div>
</template>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
const props = defineProps({
    actions: {
        type: Array,
        default: [],
    },
})
</script>
