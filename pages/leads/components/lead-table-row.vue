<template>
    <tr class="people-lead-tbl-row">
        <td>{{data.created}}</td>
        <td>
            <div :class="'opportunity-' + data.opportunity"></div>
        </td>
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td>{{data.location}}</td>
        <td>
            <div :class="'type-' + data.type">
                {{data.type}}
            </div>
        </td>
        <td class="capitalize text-accent-focus/60">{{data.status}}</td>
        <td>
            <div class="dropdown dropdown-end">
                <div class="btn btn-ghost btn-sm text-base-content" tabindex="0" @click.prevent.stop>
                    <font-awesome-icon icon="ellipsis-h" size="lg" />
                </div>
                <context-menu class="dropdown-content menu p-2 shadow bg-black rounded w-52">
                    <Button outline size="sm" class="my-1 border-primary">Preview</Button>
                    <Button outline size="sm" class="my-1 border-primary">Edit</Button>
                    <Button outline size="sm" class="my-1 border-primary">Trash</Button>
                    <Button outline size="sm" class="my-1 border-primary">Contact Lead</Button>
                    <Button outline size="sm" class="my-1 border-primary">Add a Note</Button>
                </context-menu>
            </div> 
        </td>
    </tr>
</template>
<style scoped>
.people-lead-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-center;
    }
    td:first-child {
        @apply border-l-2 rounded-l px-4;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize text-accent-focus/60 px-8;
    }
    .opportunity-accent {
        @apply w-6 h-6 bg-accent-focus rounded-full m-auto;
        content: "",
    }
    .opportunity-error {
        @apply w-6 h-6 bg-error rounded-full m-auto;
        content: "",
    }
    .opportunity-warning {
        @apply w-6 h-6 bg-warning rounded-full m-auto;
        content: "",
    }
    .type-app_referal {
        @apply border rounded font-semibold p-1 mx-2 text-sm;
    }
    .type-app_referal {
        @apply border rounded font-semibold p-1 mx-2 text-sm;
    }
    .type-grand_opening {
        @apply rounded font-semibold p-1 mx-2 text-sm bg-secondary/40 text-info;
    }
    .type-snapshot {
        @apply rounded font-semibold p-1 mx-2 text-sm bg-error/10 text-error;
    }
    .type-free_trial {
        @apply rounded font-semibold p-1 mx-2 text-sm bg-secondary/90;
    }
    .type-streaming_preview {
        @apply rounded font-semibold p-1 mx-2 text-sm bg-accent-focus/70;
    }
    /* .table-action-menu  {
        position: absolute;
        top: -50%;
    } */
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
const props = defineProps({
    data: Object
})
</script>
