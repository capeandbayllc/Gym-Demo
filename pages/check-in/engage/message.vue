<template>
    <simple-card title="Send an SMS Text">
        <div class="email-modal-container flex flex-col">
            <div class="content col-span-3">
                <div class="email-inner-content m-5 p-4 col-span-3 mb-8">
                    <div class="flex items-center mb-4">
                        <img src="/user-caller.png" class="w-12 border border-secondary rounded-full mr-4"/>
                        <div>
                            <p class="text-xl">Mona Parksdale</p>
                            <p class="text-sm text-slate-500">Outgoing SMS Text</p>
                        </div>
                        <div class="ml-auto border border-secondary rounded-full p-3 h-[60px] w-[60px]">
                            <MessageIcon class="h-full w-full"/>
                        </div>
                    </div>
                    <textarea class="bg-transparent border border-gray-400 rounded w-full p-2 mb-2" placeholder="Body"></textarea>
                    <div class="flex justify-end">
                        <Button size="xs" class="notes h-7 min-h-0 normal-case" @click="(showNotes = !showNotes)">Notes</Button>
                    </div>
                    <textarea v-if="showNotes" class="neutral-input" placeholder="Email Notes" rows="5"></textarea>
                </div>
                <div class="flex justify-between m-5">
                    <select-box
                        :items="smsType"
                        value=""
                        :label="'SMS type'" 
                        class="w-40">
                    </select-box>
                    <div class="float-right">
                        <button
                            type="button"
                            class="btn w-max rounded btn-sm font-medium ml-32 mr-3"
                            error
                            outline
                            @click="$emit('close')"
                        >
                            Cancel
                        </button>
                        <button
                            class="btn w-max rounded text-base-content btn-sm font-medium mr-3"
                        >
                            Save
                        </button>
                        <button
                            class="btn w-max bg-success border-success rounded text-base-content btn-sm font-medium"
                            @click="$emit('sms-now')"
                        >
                            Send Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import { MessageIcon } from '~~/components/icons';

const showNotes = ref(false);

const smsType = [
    {
        value: "1",
        label: "Introduction"
    }, 
    {
        value: "2",
        label: "New Membership"
    }, 
    {
        value: "3",
        label: "Follow Up"
    },
    {
        value: "4",
        label: "Returning Call"
    },
];
</script>

<style scoped>
.email-modal-container {
	@apply pl-8 pr-8 pt-8 pb-8 bg-neutral;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    .content {
        @apply border border-secondary bg-black;
        .email-inner-content {
            @apply border border-secondary rounded;
        }
        .btn.bg-success:hover {
            @apply border-success;
        }
    }
    .notes{
        @apply border-white px-4 bg-transparent;
    }
    .neutral-input {
        @apply bg-base-content/20 block w-full mt-3 rounded-md p-3;
    }
}
</style>