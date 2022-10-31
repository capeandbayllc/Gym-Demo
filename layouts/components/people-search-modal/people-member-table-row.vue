<template>
    <tr class="people-member-tbl-row">
        <td>{{data.data.created}}</td>
        <td>{{data.data.first_name}}</td>
        <td>{{data.data.last_name}}</td>
        <td class="px-4">{{data.data.phone}}</td>
        <td class="px-4">{{data.data.email}}</td>
        <td>{{data.data.location}}</td>
        <td>
            <div
                :class="'type-' +data.data.type"
            >
                {{data.data.type}}
            </div>
        </td>
        <td>
            <span
                class="add-ons"
                :class="{
                'add-ons-active': data.data.addOns,
            }">
                PT
            </span>
        </td>
    </tr>
</template>
<style scoped>
.people-member-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-center;
    }
    td:first-child {
        @apply border-l-2 rounded-l px-4;
    }
    td:last-child {
        @apply border-r-2 rounded-r px-4;
    }
    .type-premimum {
        @apply bg-accent rounded px-4 py-1.5 font-semibold;
    }
    .type-basic {
        @apply border-2 rounded font-semibold px-4 py-1.5;
    }
    .type-gold {
        @apply bg-warning/80 rounded font-semibold px-4 py-1.5;
    }
    .add-ons {
        @apply w-fit border rounded-full px-2;
    }
    .add-ons.add-ons-active {
        @apply bg-accent-focus/60 border-accent-focus/60;
    }
}
</style>
<script setup>
const data = defineProps({
    data: Object
})
</script>
