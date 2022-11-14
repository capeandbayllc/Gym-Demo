<template>
    <tr class="notification-table-row">
        <td><div class="text-base font-semibold w-40 text-center">{{data.type}}</div></td>
        <td>
            <div class="notification-time">
                <div><calendar-icon class="w-4 mr-1"/> {{data.date}}</div>
                <div><clock-icon class="w-4 mr-1"/> {{data.time}}</div>
            </div>
        </td>
        <td>
            <div class="w-12">
                <div
                    class="tag"
                    :class="{
                        'bg-warning border-warning': data.tag === 'warnig',
                        'bg-error border-error': data.tag === 'error',
                    }"
                />

            </div>
        </td>
        <td>
            <div class="notification-member">
                <div class="flex items-center">
                    <img src="/account.png" class="w-7 rounded-full mr-2"/> {{data.name}}
                </div>
                <Button size="sm" primary>	&#8230;</Button>
            </div>
        </td>
        <td>
            <div class="note-btn">
                <Button size="sm">Notes</Button>
            </div>
        </td>
        <td>
            <div class="px-4">
                Response: Text
                <Button secondary size="sm" class="ml-3">Reply</Button>
            </div>
        </td>
        <td>
            <div class="px-4 flex gap-2">
                <Button ghost size="sm">Edit</Button>
                <Button secondary size="sm">View</Button>
            </div>
        </td>
    </tr>
</template>
<style scoped>
.notification-table-row {
    td {
        @apply border-y h-14 py-2 text-sm;
        .notification-time {
            @apply w-36 flex flex-col items-start px-6;
            > div {
                @apply flex justify-start;
            }
        }
        .note-btn {
            @apply px-2;
            .btn {
                @apply bg-base-content text-neutral text-sm hover:text-base-content hover:bg-black;
            }
        }
        .notification-member {
            @apply flex flex-row justify-between px-4 w-52;
        }
        > div {
            @apply flex items-center justify-center text-sm border-r h-full;
        }
        .tag {
            @apply rounded-full w-7 h-7;
            content: ""
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
import { CalendarIcon, ClockIcon } from '~~/components/icons';
const props = defineProps({
    data: Object
})
</script>
