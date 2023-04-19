<template>
    <div class="text-start font-semibold">Category</div>
    <tr class="club-table-row">
        <td><div class="w-48 flex items-center justify-center"><img class="w-10 pr-2" src="/account.png" /> {{data.name}}</div></td>
        <td>
            <div class="w-36 px-4">
                Rank: 
                <span class="text-secondary ml-2" :class="rank[data.rank - 1].textClass"> {{rank[data.rank - 1].label}}</span>
                <span :class="[rank[data.rank - 1].iconClass,'text-lg','ml-1']"><star-icon /></span>
            </div>
        </td>
        <td><div class="px-3">Location: <span class="text-secondary ml-2"> {{data.location}}</span></div></td>
        <td><div class="px-3">Units Sold: <span class="text-secondary ml-2">{{data.units_sold}}</span></div></td>
        <td><div class="px-3">Revenue Genrated: <span class="text-secondary ml-2">{{data.revenue_genrated}}</span></div></td>
    </tr>
</template>
<style scoped>
.club-table-row {
    @apply bg-neutral;
    td {
        @apply border-y h-14 py-3;
        > div {
            @apply flex items-center justify-center text-sm border-r h-full;
        }
    }
    td:first-child {
        @apply border-l;
    }
    td:last-child {
        @apply border-r;
        > div {
            @apply border-none;
        }
    }
}
</style>
<script setup>
import { StarIcon } from "~/components/icons";
const props = defineProps({
    data: Object
})
const rank = ref([
{"label":"First", "textClass": "text-lime-500", "iconClass": "text-yellow-500"},
{"label":"Second", "textClass": "text-lime-500", "iconClass": "text-yellow-400"},
{"label":"Third", "textClass": "text-lime-500", "iconClass": "text-yellow-400"},
{"label":"Fourth", "textClass": "text-lime-500", "iconClass": "text-yellow-400"},
{"label":"Fifth", "textClass": "text-lime-500", "iconClass": "text-yellow-400"}
]);
</script>
