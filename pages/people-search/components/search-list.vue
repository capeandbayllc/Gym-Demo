<template>
    <div class="mt-5 club-search-tbl-content">
        <simple-card
            title="Members"
            class="mb-5"
            v-if="!filter || filter === 'members'"
        >
            <people-search-table
                :columns="columns"
                :items="membersData"
                filter="id"
                class="p-6"
                @row-clicked="clickRow"
            />
        </simple-card>
    </div>
</template>
<script setup>
import PeopleSearchTable from "./people-search-table.vue";
import { request } from "~/api/utils/request";
import member from "~/api/queries/member";
import { getRandomInt } from "~/api/utils/number";
const props = defineProps({
    filter: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(["row-clicked"]);

const clickRow = (data) => {
    emit("row-clicked", data);
};

const columns = [
    {
        label: "Segment",
        class: "text-secondary text-left",
    },
    {
        label: "First Name",
        class: "text-secondary text-left",
    },
    {
        label: "Last Name",
        class: "text-secondary text-left",
    },
    {
        label: "Mobile",
        class: "text-secondary text-left",
    },
    {
        label: "Email",
        class: "text-secondary text-left",
    },
    {
        label: "Location",
        class: "text-secondary text-left",
    },
    {
        label: "Type",
        class: "text-secondary text-left",
    },
    {
        label: "Created",
        class: "text-secondary text-left",
    },
];

const membersData = ref([]);
const types = ["platinum", "gold", "silver", "bronze"];
request(member.query.browse).then(({ data }) => {
    data.data.members.data.forEach((member) => {
        membersData.value.push(
            Object.assign(
                {},
                {
                    segment: "New Member",
                    type: types[getRandomInt(types.length - 1)],
                },
                member
            )
        );
    });
});

const employeeData = ref([]);
watch(
    () => props.filter,
    (newValue) => {
        if (newValue === "employees") {
            employeeData.value = [...membersData];
        } else {
            employeeData.value = [];
        }
    }
);
</script>
