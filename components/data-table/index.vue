<template>
    <div class="overflow-y-auto max-w-[90vw]">
        <table class="border-separate">
            <table-header :columns="columns"/>
            <table-body v-if="!rowComponent"/>
            <tbody>
                <component
                    v-for="item in data"
                    :key="item.id"
                    :is="rowComponent"
                    :data="item"
                />
            </tbody>
        </table>
    </div>
</template>
<style scoped>
table {
    border-spacing: 0 10px;
    width: 99.5%;
}
</style>
<script setup>
import TableHeader from "./table-header.vue";
import TableBody from "./table-body.vue";
const props = defineProps({
    data: {
        type: Array,
        default: [],
    },
    columns: {
        type: Array,
        default: [],
    },
    rowComponent: Object
});
</script>
