<template>
    <div
        class="card-container"
        :class="{
            'collapsed': isCollapsed
        }"
    >
        <div class="card-title-container" v-if="!titleComponent">
            <div class="card-title">
                {{title}}
            </div>
            <div class="card-actions">
                <favorite-btn
                    v-if="options.favorite"
                    v-model="isFavorite"
                />
                <collapse-btn
                    v-if="options.collapse"
                    v-model="isCollapsed"
                />
            </div>
        </div>
        <component :is="titleComponent" v-else/>
        <div class="card-summary-container" v-if="isCollapsed">
            <slot name="summary"/>
        </div>
        <div class="card-content-container" v-else>
            <slot name="content"/>
        </div>
    </div>
</template>
<style scoped>
.card-container {
    @apply border border-secondary rounded px-4 py-3 relative;
    .card-title-container {
        @apply flex flex-row justify-between;
        .card-title {
            @apply text-lg font-bold;
        }
        .card-actions {
            @apply flex flex-row space-x-2 cursor-pointer items-center;
        }
    }
}
.card-container.collapsed {
    @apply h-fit;
}
</style>
<script setup>
import { ref } from "vue";
import FavoriteBtn from "~~/components/buttons/favorite-btn.vue";
import CollapseBtn from "~~/components/buttons/collapse-btn.vue";

const props = defineProps({
    title: {
        type: String
    },
    options: {
        type: Object,
        default: {
            collapse: true,
            favorite: true,
        },
    },
    titleComponent: Object
});

const isFavorite = ref(false);
const isCollapsed = ref(false);
</script>