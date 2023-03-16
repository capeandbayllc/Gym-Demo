<template>
    <div class="lead-sources-container">
        <div class="flex flex-row justify-end gap-3">
            <div class="lead-sources-block">
                <p>Lead Sources</p>
                <div class="lead-sources-list">
                    <div class="sources-item" v-for="source in sources">{{ source.title }}</div>
                </div>
                <div class="text-secondary flex flex-col items-center">
                    <p class="text-center">Add Sources</p>
                    <button class="btn btn-sm plus-icon" @click.stop="addSource">
                        <font-awesome-icon :icon="['fas', 'plus']" size="md" />
                    </button>
                </div>
            </div>
            <div class="view-member-block">
                <div class="text-center">
                    <span class="text-[8px] text-secondary">Add or View Members</span>
                    <add-line-icon />
                </div>
            </div>
        </div>

        <div class="flex mt-6 justify-center">
            <Button outline size="xs" class="rounded-full" @click.stop="$emit('next-page', 'save-campaign')">
                Schedule The Campaign
            </Button>
        </div>
    </div>
</template>

<style scoped>
.lead-sources-container {
    .lead-sources-block {
        @apply border border-white rounded-lg h-[20vw] mt-5 p-4 w-[15vw] text-xs;
        .lead-sources-list {
            @apply mt-4 h-[12vw] overflow-y-auto;
        }
    }
    .sources-item {
        @apply rounded mt-2 w-full text-left px-3 py-1 min-h-6 bg-gray-700/60 font-light;
    }
    .view-member-block {
        @apply flex flex-col justify-center items-center w-[15vw]
    }
    .plus-icon {
        @apply w-[2rem] rounded-full bg-secondary mt-2
    }
}
</style>

<script setup>
import AddLineIcon from "~/pages/mass-com/builder/components/add-line-icon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);

let sources = ref([{
    title: 'Walk In'
}, {
    title: 'Guest Pass'
}]);

const addSource = () => {
    sources.value.push({
        title: 'Guest Pass'
    });
};
</script>
