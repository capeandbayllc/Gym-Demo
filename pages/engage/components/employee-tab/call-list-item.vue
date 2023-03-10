<template>
    <tr class="call-list-item bg-[#1A1A1A] hover:bg-secondary hover:bg-opacity-30">
      <td>
        <div class="flex items-center min-h-[28px] ">
          <input type="checkbox" class="h-7 mr-2"/>
        </div>
      </td>
        <td>
            <div class="flex items-center min-h-[28px]">
                <img :src="data.avatar" class="h-7 mr-2"/>{{data.name}}
            </div>
        </td>
        <td>
            <div class="min-h-[28px]">{{data.location}}</div>
        </td>

        <td>
<!--            <div class="min-h-[28px]">{{data.call_type}}</div>-->
        </td>
        <td>
            <div class="px-2 min-h-[28px]">
                <membership-btn :membership="data.type"/>
            </div>
        </td>
        <td>
          <div class="min-h-[28px]">{{data.date}}</div>
        </td>
        <td>
            <div class="min-h-[28px]">
                <Button secondary size="xs" class="!text-xs">Contact</Button>
            </div>
        </td>
    </tr>
</template>
<style scoped>
.call-list-item {
    @apply h-12 text-xs;

    td {
        @apply border-y-2 border-secondary text-center;
        > div {
            @apply flex items-center justify-center border-r border-secondary px-1 ;
        }
    }
    td:first-child {
        @apply border-l-2 rounded-l-xl;
        > div {
            @apply justify-start;
        }
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize text-accent-focus/60;
        > div {
            @apply border-none px-2;
        }
    }
    .type-warning {
        @apply bg-orange-400;
    }
}
</style>
<script setup>
import MembershipBtn from '@/components/buttons/membership-btn.vue';
const props = defineProps({
    data: Object
})
</script>
