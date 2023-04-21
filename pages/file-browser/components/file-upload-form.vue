<template>
    <li>
        <form @submit="handleSubmit">
            <div
                class="block focus:outline-none transition duration-150 ease-in-out relative bg-base-200 hover:bg-base-100 rounded-xl"
            >
                <progress
                    v-if="isUploading"
                    :value="uploadProgress"
                    max="100"
                    class="absolute inset-0 w-full h-full opacity-50"
                >
                    {{ uploadProgress }}%
                </progress>
                <div class="px-4 py-4 sm:px-6 relative z-1">
                    <div class="flex items-center justify-between">
                        <div
                            class="flex w-full items-center text-sm leading-5 font-medium text-secondary p-2 gap-4"
                        >
                            <file-extension-icon
                                :extension="file.type.split('/')[1]"
                                :size="file.size"
                            />

                            <input
                                type="text"
                                class="input-ghost input-sm w-full"
                                :value="form.filename"
                                @input="form.filename = $event.target.value"
                            />
                        </div>
                        <div class="hidden md:flex items-center gap-2">
                            <button
                                v-if="uploadProgress === -1"
                                class="badge badge-error"
                                @click="handleClickFailed"
                            >
                                Failed
                            </button>
                            <div
                                v-else
                                class="badge"
                                :class="{
                                    'badge-success': uploadProgress === 100,
                                    'badge-warning': uploadProgress < 100,
                                }"
                            >
                                {{
                                    uploadProgress < 100
                                        ? `${uploadProgress}%`
                                        : "Uploaded"
                                }}
                            </div>
                            <button
                                class="btn btn-ghost btn-error btn-circle"
                                @click.prevent="emit('remove', file)"
                            >
                                <font-awesome-icon icon="times" size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </li>
</template>

<style scoped lang="postcss">
progress[value]::-webkit-progress-bar {
    @apply bg-transparent;
}
progress::-webkit-progress-value {
    @apply bg-primary;
}
</style>
<script setup>
import { ref, computed, onMounted } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);

const props = defineProps({
    clientId: { type: String, required: true },
    entity_id: { type: String, required: false },
    userId: { type: String },
    file: { type: Object, required: true },
});

const emit = defineEmits(["remove"]);

const uploadProgress = ref(null);

const form = {
    id: null,
    key: null,
    extension: null,
    bucket: null,
    filename: props.file.name,
    original_filename: props.file.name,
    client_id: props.clientId,
    user_id: props.userId,
    size: props.file.size,
    entity_id: props.entity_id,
    // is_public: true,
};


const handleSubmit = async () => {
    uploadProgress.value = 100;
};

const isUploading = computed(() => {
    return uploadProgress.value !== null && uploadProgress.value < 100;
});

const handleClickFailed = () => {
    if (uploadProgress.value === -1) {
        handleSubmit();
    }
};

onMounted(handleSubmit);

defineExpose({ form });
</script>
