<template>
    <tr class="people-lead-tbl-row">
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td>{{data.phone}}</td>
        <td>{{data.email}}</td>
        <td>
            <div class="dropdown dropdown-end">
                <div class="btn btn-ghost btn-sm text-base-content" tabindex="0" @click.prevent.stop>
                    <font-awesome-icon icon="ellipsis-h" size="lg" />
                </div>
                <div class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start">
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1"  @click.stop="openEmailModal">+ Email</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1" @click.stop="outgoingCall">+ Call</div>
                </div>
                <!-- <div class="dropdown-content menu p-2 shadow bg-black rounded w-52">
                    <Button outline size="sm" class="my-1 border-primary text-secondary" tabindex="-1" @click="outgoingCall">+ Call</Button>
                    <Button outline size="sm" class="my-1 border-primary text-secondary" tabindex="-1" @click="openEmailModal">+ Email</Button>
                </div> -->
                <daisy-modal ref="outgoingCallModalRef">
                    <outgoing-call-modal @callNow="showInCallModal" @close="closeOutgoingCall"></outgoing-call-modal>
                </daisy-modal>
                <daisy-modal ref="emailModalRef">
                    <EmailModal @close="closeEmailModal"/>
                </daisy-modal>
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
    /* .table-action-menu  {
        position: absolute;
        top: -50%;
    } */
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import OutgoingCallModal from '../../call-user/components/outgoing-call-modal.vue';
import EmailModal from '../../check-in/engage/email.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
const props = defineProps({
    data: Object
})

const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);

const outgoingCall = ()=>{
    outgoingCallModalRef.value.open();
}
const closeOutgoingCall = ()=>{
    outgoingCallModalRef.value.close();
}

const openEmailModal = ()=>{
    emailModalRef.value.open();
}
const closeEmailModal = ()=>{
    emailModalRef.value.close();
}

const showInCallModal = () => {
    outgoingCallModalRef.value.close();
};
</script>
