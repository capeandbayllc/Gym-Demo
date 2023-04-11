<template>
    <card title="" class="leads-content-card"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="flex flex-row gap-4">
                    <div class="left-lead">
                        <h5>Leads</h5>
                        <h6>327</h6>
                    </div>
                    <div class="right-percentage w-28 h-20 p-0 flex items-center justify-center" >43%</div> 
                </div>
                <div class="flex flex-row gap-4 py-2 justify-between" :class="{'mt-3' : index === 0}" v-for="(item, index) in actionsBtn" :key="index">
                    <div class="left-lead-text">
                        <h5>- {{ item.name }}:</h5>
                    </div>
                    <Button secondary size="xs" class="btn-width w-28" :class="{'active' : activeBtn === item.name}"
                        @click="setActiveTable(item.name)" 
                    >
                        110
                    </Button>
                </div>
            </div>
        </template>
    </card>
</template>
<script setup>
    const activeBtn = ref('Callbacks');
    const emit = defineEmits(['edit-sales-funnel-table-selected'])
    const setActiveTable = (name) => {
        emit('edit-sales-funnel-table-selected', name);
        activeBtn.value = name;
    }
    const actionsBtn = [
        {
            name: 'Callbacks'
        },
        {
            name: 'Missed Calls'
        },
        {
            name: 'No Response'
        },
    ];
</script>
<style scoped lang="postcss">
    .leads-content-card{
        @apply bg-base-300 border-base-content
    }
        .left-lead{
            h5{
                @apply text-base font-semibold text-xl
            }
            h6{
                @apply text-secondary text-5xl
            }
        }
        .right-percentage{        
            @apply bg-zinc-400 rounded w-full text-3xl font-bold border-base-content border-2 text-center;
        
        }
    .left-lead-text{
        h5{
            @apply text-base text-xs;
        }
    }
    .btn-width{
       @apply  py-1 px-8;
    }
    .active{
        @apply border-secondary bg-transparent;
    }
</style>