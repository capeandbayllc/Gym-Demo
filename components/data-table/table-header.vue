<template>
    <thead class="top-0 text-base-content bg-black">
        <tr>
            <th
                v-for="(column, ndx) in columns"
                :key="column.field ? column.field : ndx"
                class="px-3 capitalize font-normal whitespace-nowrap"
                :class="column.class"
            >
            <div v-if="column.label === 'Action'">
                <font-awesome-icon
                    :icon="[
                        'fas',
                        'align-left',
                    ]"
                    size="lg"
                />
            </div>
            <div v-else>
                {{ column.label ? column.label: column }}
            </div>
            </th>
        </tr>
    </thead>
</template>
<style scoped lang="postcss">
thead {
    @apply z-10;
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAlignLeft);
const props = defineProps({
    columns: {
        type: Array,
        default: [],
    },
});
</script>
