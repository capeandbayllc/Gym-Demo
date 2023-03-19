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
                <add-btn
                    v-if="options.add"
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
    @apply border-2 border-secondary rounded-[18px] relative;
    .card-title-container {
        @apply flex flex-row justify-between items-center h-12 text-xl rounded-tl-[15px] rounded-tr-[15px] font-semibold px-6 text-base-content bg-gradient-to-b from-secondary to-base-300/30 bg-secondary bg-blend-darken;;
        .card-title {
            @apply text-lg font-bold;
        }
        .card-actions {
            @apply flex flex-row space-x-2 cursor-pointer items-center;
        }
    }
}
.build-campaign-card .card-content-container {
    @apply flex-1;
}
.card-container.collapsed {
    @apply h-fit;
}
</style>
<script setup>
import { ref } from "vue";
import FavoriteBtn from "~~/components/buttons/favorite-btn.vue";
import addBtn from "~~/components/buttons/add-btn.vue";
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