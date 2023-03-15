<template>
    <div class="recent-campaign-wrapper">
        <div class="recent-campaign-title">Campaign Name - {{data.title}}</div>
        <div class="recent-campaign-content">
            <div>
                <div class="recent-campaign-item">
                    <div>Start Date</div>
                    <div>2022-07-01</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Open Rate</div>
                    <div>12.3%</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Clicks per unique open</div>
                    <div>0.8%</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Successful deliveries</div>
                    <div>167780</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Total opens</div>
                    <div>3278</div>
                </div>
            </div>
            <div>
                <div class="recent-campaign-item">
                    <div>End Date</div>
                    <div>2023-07-31</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Total clicks</div>
                    <div>2156</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Orders</div>
                    <div>0</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Average order revenue</div>
                    <div>$0.00</div>
                </div>
                <div class="recent-campaign-item">
                    <div>Total revenue</div>
                    <div>$0.00</div>
                </div>
            </div>
            <div class="items-center">
                <div>Requests blocked</div>
                <div class="blocked-requests">267</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.recent-campaign-wrapper {
    @apply flex flex-col border border-secondary rounded p-4 mt-4 bg-black rounded-2xl;
}
.recent-campaign-title {
    @apply text-lg font-bold mb-4;
}
.recent-campaign-content {
    @apply flex flex-row flex-wrap;
}
.recent-campaign-content > div {
    @apply flex flex-col justify-between w-full md:w-1/3 md:px-10 px-2;
}
.recent-campaign-item {
    @apply flex flex-row flex-wrap justify-between;
}
.blocked-requests {
    @apply text-6xl text-base-content font-bold bg-error w-fit rounded-2xl py-2 px-4 mt-4;
}
</style>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        default: {},
    },
});
</script>
