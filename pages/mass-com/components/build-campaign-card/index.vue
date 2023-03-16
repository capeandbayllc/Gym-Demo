<template>
    <card
        title="Build a Campaign" class="build-campaign-card"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="btn btn-outline btn-secondary btn-circle btn-lg my-6">
                    <add-campaign-icon @click.stop="$router.push('/mass-com/builder')" />
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped>
.build-campaign-card {
    @apply bg-black w-full;
    .card-content {
        @apply flex items-center border-t border-base-content/50 justify-center mt-2 h-full;
    }
    .add-btn {
        @apply btn btn-outline btn-secondary btn-circle btn-lg my-8;
    }
}
</style>
<script setup>
import AddCampaignIcon from './add-campaign-icon.vue';
</script>