<template>
    <div class="overflow-y-auto max-w-[90vw] mx-auto">
        <table class="border-separate">
            <table-header :columns="columns"/>
            <table-body v-if="!rowComponent"/>
            <tbody>
                <component
                    v-for="item in data"
                    :key="item.id"
                    :is="rowComponent"
                    @handle="eventHandle"
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

const emit = defineEmits(['handle']);

const eventHandle = (event)=>{
    emit('handle', event)
};
</script>
