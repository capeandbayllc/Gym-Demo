<template>
    <tr class="people-lead-tbl-row text-sm">
        <td class="text-xs">{{ data.segment }}</td>
        <td>
            <div class="flex items-center">
                <img
                    :src="data.profile_photo_path"
                    :gender="data.gender"
                    class="w-7 rounded-full mr-2"
                />
                {{ data.first_name }}
            </div>
        </td>
        <td>{{ data.last_name }}</td>
        <td>{{ data.phone }}</td>
        <td class="whitespace-nowrap">{{ data.email }}</td>
        <td :title="data.homeLocation.name" class="text-xs">
            {{ data.homeLocation.name }}
        </td>
        <td>
            <membership-btn :membership="data.type" />
        </td>
        <td class="text-xs">{{ data.created_at.replace(/:\d{2}$/, "") }}</td>
    </tr>
</template>
<style scoped>
.people-lead-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-left px-3;
    }
    td:first-child {
        @apply border-l-2 rounded-l text-accent-focus/60;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .type-warning {
        @apply bg-orange-400;
    }
    .type-secondary {
        @apply bg-secondary;
    }
}
</style>
<style>
.people-search-tbl-content thead {
    @apply top-0 sticky bg-black h-10;
}
</style>
<script setup>
import MembershipBtn from "~/components/buttons/membership-btn.vue";
const props = defineProps({
    data: Object,
});
</script>
