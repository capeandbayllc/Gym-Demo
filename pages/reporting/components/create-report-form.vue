<template>
    <div>
        <div class="create-reporting-form-container p-3">
            <div class="grid grid-cols-2 gap-5">
                <div class="col-span-1 mx-auto w-full">
                    <div class="mb-2">Start Date</div>
                    <select-box
                        :items="startDateFilter"
                        value="1"
                        :label="'Start Date'"
                        class="w-auto bg-base-content rounded-md text-neutral-focus"
                    > 
                    </select-box>
                </div>
                <div class="col-span-1 mx-auto w-full">
                    <div class="mb-2">End Date</div>
                    <select-box
                        :items="endDateFilter"
                        value="1"
                        :label="'Asset'"
                        class="w-auto bg-base-content rounded-md text-neutral-focus"
                    > 
                    </select-box>
                </div>
                <div class="col-span-1 mx-auto w-full">
                    <div class="mb-2">Post Rate</div>
                    <select-box
                        :items="postRateFilter"
                        value="1"
                        :label="'Post Rate'"
                        class="w-auto bg-base-content rounded-md text-neutral-focus"
                    > 
                    </select-box>
                </div>
                <div class="col-span-1 mx-auto w-full">
                    <div class="mb-2">Recurring Report</div>
                    <select-box
                        :items="recurringReportFilter"
                        value="1"
                        :label="'Asset'"
                        class="w-auto bg-base-content rounded-md text-neutral-focus"
                    > 
                    </select-box>
                </div>
                <div class="col-span-1 mx-auto w-full">
                    <div class="mb-2">Report Title</div>
                    <input class="w-full p-1 rounded-sm text-neutral-focus" value="" />
                </div>
                <div class="col-span-1 mx-auto w-full">
                    <div class="mb-2">Schedule</div>
                    <select-box
                        :items="scheduleFilter"
                        value="1"
                        :label="'Asset'"
                        class="w-auto bg-base-content rounded-md text-neutral-focus"
                    > 
                    </select-box>
                </div>
            </div>
            <div class="grid justify-end mt-6">
                <div>
                    <button
                        type="button"
                        class="btn w-max rounded btn-sm font-medium ml-32 mr-3"
                        error
                        outline
                        @click="$emit('close-reporting-form')"
                    >
                        Cancel
                    </button>
                    <button
                        class="btn bg-secondary border-secondary rounded text-base-content btn-sm font-medium"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const startDateFilter = [
    {
        value: "1",
        label: "Start Date"
    }, 
    {
        value: "2",
        label: "Start Date"
    }, 
    {
        value: "3",
        label: "Start Date"
    },
];
const endDateFilter = [
    {
        value: "1",
        label: "End Date"
    }, 
    {
        value: "2",
        label: "End Date"
    }, 
    {
        value: "3",
        label: "End Date"
    },
];
const postRateFilter = [
    {
        value: "1",
        label: "Daily"
    }, 
    {
        value: "2",
        label: "Daily"
    }, 
    {
        value: "3",
        label: "Daily"
    },
];
const recurringReportFilter = [
    {
        value: "1",
        label: "Does Not Repeat"
    }, 
    {
        value: "2",
        label: "Daily"
    }, 
    {
        value: "3",
        label: "Does Not Repeat"
    },
];
const scheduleFilter = [
    {
        value: "1",
        label: "Daily"
    }, 
    {
        value: "2",
        label: "Daily"
    }, 
    {
        value: "3",
        label: "Daily"
    },
];

</script>