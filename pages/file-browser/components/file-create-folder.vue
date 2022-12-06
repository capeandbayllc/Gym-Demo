<template>
    <div class="card-content">
        <div class="border border-secondary my-8 mx-auto p-4 rounded grid w-2/4">
            <div class="folder-name-input">
                <div class="flex mt-4">
                    <label>Folder Name:</label>
                    <input class="outline-input w-2/4" placeholder=""  value=""/>
                </div>
                <div class="flex mt-6 w-2/4">
                    <select-box
                        class="w-full"
                        :items="fileType"
                        value=""
                        :label="'File Type'"
                    />
                </div>
                <div class="flex justify-between mt-11">
                    <button
                        class="btn float-left w-max rounded btn-secondary text-base-content btn-sm font-medium"
                    >
                        Upload File
                    </button>
                    <div class="">
                        <button
                            type="button"
                            class="btn w-max rounded btn-outline btn-sm font-medium mr-3"
                            error
                            outline
                        >
                            Cancel
                        </button>
                        <button
                            class="btn w-max rounded btn-secondary text-base-content btn-sm font-medium"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const fileType = [
    {
        value: "1",
        label: "Type 1"
    }, 
    {
        value: "2",
        label: "Type 2"
    }, 
    {
        value: "3",
        label: "Type 3"
    }
];
</script>
<style scoped>
.folder-name-input{        
    label {
        @apply mr-2 
    }
    .outline-input {
        @apply bg-transparent border border-secondary rounded-md px-3 py-1 w-36;
    }
}
</style>