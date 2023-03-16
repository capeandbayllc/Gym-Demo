<template>
    <tr class="history-table-row">
        <td>
            <div class="min-w-max">
                {{ data?.date }}:
                <span class="text-secondary ml-0.5">{{ data?.time }}</span>
            </div>
        </td>
        <td>
            <div class="min-w-max !justify-start">
                <img class="w-8 h-9 mr-1 rounded-xl border-blue-700 border shadow-xl" :src="'/'+data?.image" />
                {{data?.name}}
                <img v-if="data?.notification" class="pl-1" src="/bell-table-icon.svg">
            </div>
        </td>
        <td>
            <div><span class="border rounded-2xl px-4 py-1 text-xs whitespace-nowrap">{{data?.event}}</span></div>
        </td>
        <td>
            <div>
                <membership-btn :membership="data?.membership" class="w-28"/>
            </div>
        </td>
       <!--  <td>
            <div>
                <span class="border rounded px-4 py-2">{{ data.event }}</span>
            </div>
        </td> -->
        <!-- <td>
            <div>
                <membership-btn
                    :membership="data.membership"
                    class="w-28"
                />
            </div>
        </td> -->
        <td>
            <div>
                <Button
                    secondary
                    class="text-base-content"
                    size="sm"
                    >View</Button
                >
            </div>
        </td>
    </tr>
</template>
<style scoped>
.history-table-row {
    td {
        @apply border-base-content/40 text-sm;
        background-color: #191919;
        > div {
            @apply my-2  border-base-content/40 text-center flex items-center justify-center h-10 px-1 m-2;
        }
    }
    td:last-child {
        > div {
            @apply border-none text-left;
        }
    }

}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';
import { ref, onMounted } from 'vue'
const props = defineProps({
    data: Object,
});
onMounted(()=>{
    console.log(props.data)
})

</script>
