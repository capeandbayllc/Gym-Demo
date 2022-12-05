<template>
    <div>
        <div>
            <section class="col-span-6 overflow-hidden">
                <div
                    class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8"
                >
                    <div class="max-w-3xl mx-auto lg:max-w-none">
                        <div
                            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start"
                        >
                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                <div
                                    v-cloak
                                    @dragover.prevent="
                                        onUploadDragoverEvent($event)
                                    "
                                    @drop.prevent="onUploadDropEvent($event)"
                                    class="w-full flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md h-128 transition-colors"
                                    :class="{
                                        'bg-base-100': uploadDragoverTracking,
                                    }"
                                >
                                    <div class="relative z-20 text-center">
                                        <upload-icon
                                            :active="uploadDragoverTracking"
                                        />
                                        <p class="mt-4">
                                            Drag and Drop your Files here
                                        </p>
                                        <p class="py-2 text-gray-500">OR</p>
                                        <p class="mt-2 text-sm text-gray-600">
                                            <label class="btn btn-primary"
                                                ><span>Browse Files</span
                                                ><input
                                                    @input="
                                                        form.files = [
                                                            ...form.files,
                                                            ...$event.target
                                                                .files,
                                                        ]
                                                    "
                                                    type="file"
                                                    multiple
                                                    hidden
                                                    class="hidden"
                                            /></label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul
                        class="shadow overflow-hidden sm:rounded-md mt-5 flex flex-col gap-2 mb-3"
                    >
                        <file-upload-form
                            v-for="(file, i) in form.files"
                            :file="file"
                            :key="file"
                            :user-id="user?.id"
                            @remove="removeFile"
                            @input="fileUploadUpdated"
                            :ref="
                                (el) => {
                                    if (el) fileRefs[i] = el;
                                }
                            "
                        />
                    </ul>
                </div>
                <jet-input-error :message="''" class="mt-2" />

                <div class="flex justify-between px-4 sm:px-6 lg:px-8 mb-3">
                    <div
                        class="col-span-6 sm:col-span-4 form-control flex-row items-center gap-4"
                    >
                        <input
                            id="visibility"
                            value="visibility"
                            type="checkbox"
                            class="checkbox checkbox-primary border-2"
                            v-model="form.visibility"
                        />
                        <jet-label
                            for="visibility"
                            value="Make this upload public?"
                        />
                    </div>
                    <div class="flex">
                        <button
                            type="button"
                            @click="resolvedHandleCancel"
                            class="btn w-max rounded btn-outline btn-sm font-medium mr-3"
                            error
                            outline
                            :disabled="form.processing"
                        >
                            Cancel
                        </button>
                        <div class="flex-grow" />
                        <button
                            class="btn w-max rounded btn-secondary text-base-content btn-sm font-medium"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onBeforeUpdate, defineEmits } from "vue";
import JetInputError from "./jetstream/input-error.vue";
import JetLabel from "./jetstream/label.vue";
import FileUploadForm from "./file-upload-form.vue";
import UploadIcon from "./upload-icon.vue";


const props = defineProps({
    user: { type: Object },
    formSubmitOptions: { type: Object },
    handleCancel: { type: Function },
});

const defaultHandleCancel = () => {
    
};
const resolvedHandleCancel = props.handleCancel || defaultHandleCancel;

const emit = defineEmits(["submitted"]);

const uploadDragoverTracking = ref(false);
const uploadDragoverEvent = ref(false);
const uploadProgress = ref(null);

const form = ref({files: []});

const onUploadDragoverEvent = (e) => {
    uploadDragoverEvent.value = true;
    uploadDragoverTracking.value = true;
};
const onUploadDropEvent = (e) => {
    uploadDragoverEvent.value = false;
    uploadDragoverTracking.value = false;
    handleDroppedFiles(e);
};
const handleDroppedFiles = (e) => {
    let droppedFiles = e.dataTransfer.files;

    if (!droppedFiles) return;

    [...droppedFiles].forEach((f) => {
        form.value.files.push(f);
    });
};
const droppedFileValidator = (file) => {
    return false;
};
const removeFile = (file) => {
    console.log("removeFile", file);
    form.value.files = form.value.files.filter((f, i) => {
        const shouldKeep = f !== file;
        if (!shouldKeep) {
            console.log("about to splice fileRefs", fileRefs.value, i);
            fileRefs.value.splice(i, 1);
            fileRefs.value = [...fileRefs.value];
        }
        return shouldKeep;
    });
};

const fileRefs = ref([]);

onBeforeUpdate(() => {
    console.log("onBeforeUpdate");
    fileRefs.value = [];
});
const uploadedFiles = computed(() =>
    fileRefs.value.filter((ref) => {
        console.log({ form: ref.form, id: ref.form.id });
        return ref.form.id !== null && ref.form.id !== undefined;
    })
);
const numUploadedFiles = computed(() => uploadedFiles.value.length);
const numFiles = computed(() => fileRefs.value.length);
const formInvalid = computed(() => {
    if (numUploadedFiles.value !== numFiles.value) {
        return true;
    }
    return form.value.files.length === 0;
});

// const handleSubmit = () => form.post(`/files`);

const allFiles = computed(() =>
    fileRefs.value.map((fileRef) => fileRef.form.data())
);

const formSubmitOptions = props?.formSubmitOptions || {};

const handleSubmit = () => {
    
};



</script>
