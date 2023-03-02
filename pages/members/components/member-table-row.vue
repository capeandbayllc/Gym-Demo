<template>
    <tr class="people-member-tbl-row">
        <td>{{data.created}}</td>
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td class="px-4">{{data.phone}}</td>
        <td class="px-4">{{data.email}}</td>
        <td>{{data.location}}</td>
        <td>
            <membership-btn :membership="data.type"/>
        </td>
        <td>
            <addon-btn :value="data.addOns" class="!rounded-full"/>
        </td>
        <td>
            <div class="dropdown dropdown-end">
                <div class="btn btn-ghost btn-sm text-base-content" tabindex="0" @click.prevent.stop>
                    <font-awesome-icon icon="ellipsis-h" size="lg" />
                </div>
                <!-- <div class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start">
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1"  @click.stop="openEmailModal">+ Email</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1" @click.stop="outgoingCall">+ Call</div>
                </div> -->
                <div class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start">
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1">Preview</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1">Edit</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1">Trash</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1">Contact Lead</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1">Add a Note</div>
                    <!-- <Button outline size="sm" class="my-1 border-primary">Preview</Button>
                    <Button outline size="sm" class="my-1 border-primary">Edit</Button>
                    <Button outline size="sm" class="my-1 border-primary">Trash</Button>
                    <Button outline size="sm" class="my-1 border-primary">Contact Lead</Button>
                    <Button outline size="sm" class="my-1 border-primary">Add a Note</Button> -->
                </div>
            </div> 
        </td>
    </tr>
</template>
<style scoped>
.people-member-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-center px-4;
    }
    td:first-child {
        @apply border-l-2 rounded-l;
    }
    td:last-child {
        @apply border-r-2 rounded-r;
    }
    .type-bronze {
        @apply border border-white;
    }
    .type-silver {
        @apply bg-orange-400;
    }
    .type-gold {
        @apply bg-yellow-400;
    }
    .type-platinum {
        @apply bg-orange-400;
    }
}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';
import AddonBtn from '~~/components/buttons/addon-btn.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
const props = defineProps({
    data: Object
})
</script>
