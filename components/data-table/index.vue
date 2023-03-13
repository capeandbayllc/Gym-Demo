<template>
    <div class="max-w-[90vw] mx-auto">
        <table class="border-separate">
          <div>
            <table-header :columns="columns" :stickyHeader="stickyHeader"/>
            <table-body v-if="!rowComponent"/>

            <tbody>
                <component
                    v-for="item in data"
                    :key="item.id"
                    :is="rowComponent"
                    :data="item"
                    @click="rowClicked(item)"
                />
            </tbody>
          </div>
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
    rowComponent: Object,
    stickyHeader:{
      type: Boolean,
      default: false
    }
});

const emit = defineEmits(["row-clicked"]);

const rowClicked = (data) => {
    emit("row-clicked", data);
};
</script>
