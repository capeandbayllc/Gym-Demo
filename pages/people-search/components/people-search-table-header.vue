<template>
    <div class="border-b-[4px] border-primary text-secondary mb-[15px] pb-[15px] px-[20px]">
        <div class="flex justify-start">
            <div
                v-for="(column, ndx) in columns"
                :key="column.field ? column.field : ndx"
                class="capitalize font-normal whitespace-nowrap"
                :class="column.class + ` w-[${column.width}px]`"
            >
                <div v-if="column.label === 'Alerts'" class="flex items-center">
                    <AlertIcon class="mr-2 text-secondary"/>
                    {{ column.label ? column.label: column }}
                </div>
                <div v-else-if="column.label === 'Segment'" class="flex items-center">
                    <input type="checkbox" class="checkbox checkbox-secondary bg-white mr-2" />
                    {{ column.label ? column.label: column }}
                </div>
                <div v-else>
                    {{ column.label ? column.label: column }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
thead {
    @apply z-50 sticky;
}

thead th {
  @apply py-3;
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  AlertIcon
} from "~~/components/icons";

library.add(faAlignLeft);
const props = defineProps({
    columns: {
        type: Array,
        default: [],
    },
});
</script>
