<template>
    <div class="lead-sources-container">
        <div class="action-block">
            <div class="flex mt-2">
                <span @click.stop="$emit('back', 'select-templates')" class="text-secondary cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'angle-left']" size="sm" />
                    <a class="text-xs ml-1" @click.stop="$emit('next-page', 'map-contacts')">Back</a>
                </span>
            </div>
        </div>
        <div class="lead-sources-block">
            <div class="lead-source-form">
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

            <div class="flex justify-center">
                <Button hoverSecondary hoverIcon size="xs" class="rounded-full normal-case pl-3" @click.stop="$emit('next-page', 'save-campaign')">
                    Schedule The Campaign
                    <right-arrow-icon class="ml-2" />
                </Button>
            </div>
        </div>
        <div class="view-member-block">
            <div class="text-center">
                <span class="text-xs text-secondary">Add or View Members</span>
                <add-line-icon />
            </div>
        </div>        
    </div>
</template>

<style scoped>
.lead-sources-container {
    @apply flex flex-row flex-grow gap-3;
    .action-block {
        @apply flex flex-[33.3%] flex-col-reverse;
    }
    .lead-sources-block {
        @apply flex flex-[33.3%] flex-col justify-between;
        .lead-source-form {
            @apply flex flex-col border border-white rounded-lg mt-5 p-4 text-xs;
        }
        .lead-sources-list {
            @apply mt-4 h-[22vw] overflow-y-auto;
        }
    }
    .sources-item {
        @apply rounded mt-2 w-full text-left px-3 py-1 min-h-6 bg-gray-700/60 font-light;
    }
    .view-member-block {
        @apply flex flex-[33.3%] flex-col justify-center items-center w-[15vw]
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
import RightArrowIcon from "~/components/icons/arrow.vue";

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
