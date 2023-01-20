<template>
    <card title="Create a Report" class="bg-neutral"
        :options="{
            'collapse': false,
            'favorite': true,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="flex justify-center mt-2">
                    <div class="text-center cursor-pointer">
                        <div class="rounded-full w-14 h-14 m-auto text-center border border-secondary">
                            <img class="w-full p-3" src="/plus-icon.svg" alt="">
                        </div>
                        <p class="text-base font-semibold text-base-content pt-2">
                            Add Lead
                        </p>
                    </div>
                </div>
                <div class="flex justify-end gap-4">
                    <Button secondary size="sm" class="font-medium" :class="{'active' : activeBtn === item.type}"  v-for="(item, index) in actionsBtn" :key="index">
                        {{ item.name }}
                    </Button>
                </div>
                <div class="grid gap-5  mt-4 p-4 border border-secondary">
                    <div class="flex gap-5">
                        <select-box
                            :items="[]"
                            value=""
                            :label="'Asset'"
                            class="w-36"
                            :secondary="true" 
                        >
                        </select-box>
                        <div class="w-9 h-9 rounded-full text-center border border-base-content bg-secondary">
                            <span class="text-2xl">=</span>
                        </div>
                        <select-box
                            :items="[]"
                            value=""
                            :label="'abcd,def453,ghi789,jkl101112'"
                            class="w-96"
                            :secondary="true" 
                        >
                        </select-box>
                        <img class="h-7 w-7" src="/ellipsis-icon-vertical.svg" alt="">
                        <button
                            class="btn w-max border-error rounded text-base-content btn-sm font-medium capitalize"
                        >
                            Delete
                        </button>
                    </div>
                    <div class="flex gap-5">
                        <select-box
                            :items="[]"
                            value=""
                            :label="'Asset'"
                            class="w-36"
                            :secondary="true" 
                        >
                        </select-box>
                        <div class="w-9 h-9 rounded-full text-center border border-base-content bg-secondary">
                            <span class="text-2xl">=</span>
                        </div>
                        <select-box
                            :items="[]"
                            value=""
                            :label="'abcd,def453,ghi789,jkl101112'"
                            class="w-96"
                            :secondary="true" 
                        >
                        </select-box>
                        <img class="h-7 w-7" src="/ellipsis-icon-vertical.svg" alt="">
                        <button
                            class="btn w-max border-error rounded text-base-content btn-sm font-medium capitalize"
                        >
                            Delete
                        </button>
                    </div>
                    <div class="flex gap-5">
                        <select-box
                            :items="[]"
                            value=""
                            :label="'Asset'"
                            class="w-36"
                            :secondary="true" 
                        >
                        </select-box>
                        <div class="w-9 h-9 rounded-full text-center border border-base-content bg-secondary">
                            <span class="text-2xl">=</span>
                        </div>
                        <select-box
                            :items="[]"
                            value=""
                            :label="'abcd,def453,ghi789,jkl101112'"
                            class="w-96"
                            :secondary="true" 
                        >
                        </select-box>
                        <img class="h-7 w-7" src="/ellipsis-icon-vertical.svg" alt="">
                        <button
                            class="btn w-max border-error rounded text-base-content btn-sm font-medium capitalize"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>

<style scoped>
.active{
    @apply border-secondary bg-transparent;
}
</style>

<script setup>
const activeBtn = ref('view');
const actionsBtn = [
    {
        name: 'Build Report',
        type: 'build'
    },
    {
        name: 'View Report',
        type: 'view'
    },
];
const filterType = [
    {
        value: "1",
        label: "Filter "
    }, 
];
</script>