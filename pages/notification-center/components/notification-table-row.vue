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
                        'bg-warning border-warning': data.tag === 'warning',
                        'bg-error border-error': data.tag === 'error',
                        'bg-green-500 border-green-500 tag-tick-icon': data.tag === 'success',
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
                <Button size="sm" class="rounded-xl">Notes</Button>
            </div>
        </td>
        <td>
            <div class="px-4">
                Response: Text
                <Button secondary size="sm" class="ml-3 rounded-xl">Reply</Button>
            </div>
        </td>
        <td >
            <div class="px-4 flex gap-2">
                <Button ghost size="sm">Edit</Button>
                <Button secondary size="sm" class="rounded-xl">View</Button>
            </div>
        </td>
    </tr>
</template>
<style scoped lang="postcss">
.notification-table-row > td:first-child {
    @apply rounded-l-xl;
}
.notification-table-row > td:last-child {
    @apply !rounded-r-xl;
}
.notification-table-row {
    @apply bg-base-200;
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
        .tag{
            @apply rounded-full w-7 h-7;
            content: ""
        }
        .tag-tick-icon::before{
            content: "✓";
            width: 28px;
            height: 28px;
            text-align: center;
            display: inherit;
            line-height: 28px;
            font-weight: bolder;
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
import NotificationTableRow from './notification-table-row.vue';
const props = defineProps({
    data: Object
})
</script>
