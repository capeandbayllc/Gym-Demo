<template>
    <tr class="conversion-table-row">
        <td>
            <img :src="data.src" alt="User Photo" height="40" width="40" />
        </td>
        <td>
            <div class="conversion-data">{{ data.name }}</div>
        </td>
        <td>
            <div class="conversion-data">{{ data.unit }}</div>
        </td>
        <td>
            <div class="conversion-data">
                <membership-btn :membership="data.membership" />
            </div>
        </td>
        <td>
            <div class="conversion-data">{{ data.revenue }}</div>
        </td>
    </tr>
</template>
<style>
.conversion-table-row .status-select-box .select-box-btn {
    @apply border-none;
}
</style>
<style scoped>
.conversion-table-row {
    td {
        @apply border-b border-secondary;
        > img {
            @apply mb-1.5 ml-1.5;
        }
        .conversion-title {
            @apply text-xl font-bold;
        }
        @apply px-4;
    }
}
</style>

<script setup>
import MembershipBtn from "@/components/buttons/membership-btn.vue";

const props = defineProps({
    data: Object,
});
</script>
