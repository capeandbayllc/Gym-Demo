<template>
    <div class="save-campaign-container">
        <div class="campaign-day-block">
            <p class="text-xs w-full">Build your drip campaign by day</p>
            <div class="campaign-day-list">
                <div class="campaign-day-item" v-for="item in campaign_items">
                    <div 
                        class="flex flex-col items-center"
                        :class="{
                            'opacity-50': item.status == 'inactive'
                        }"
                    >
                        <div class="outline-block">Day {{ item.day }}</div>
                        <div class="line"></div>
                        <div class="type-block">
                            <div class="type-icon">
                                <font-awesome-icon :icon="['far', 'envelope']" size="xl" />
                                <p>email</p>
                            </div>
                            <div class="type-icon">
                                <font-awesome-icon :icon="['far', 'message']" size="xl" />
                                <p>sms</p>
                            </div>
                            <div class="type-icon">
                                <font-awesome-icon :icon="['far', 'phone']" size="xl" />
                                <p>call</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="outline-block">Performance</div>
                        <div class="outline-block">Conversions</div>
                    </div>
                    <div class="flex flex-col justify-center items-center px-3 max-w-[100px]" @click.stop="addDayItem">
                        <add-line-icon />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex mt-6 justify-center">
            <Button outline size="xs" class="rounded-full" @click.stop="$emit('next-page')">
                Save The Campaign
            </Button>
        </div>
    </div>    
</template>

<style scoped>
.save-campaign-container {
    @apply p-2;
    .campaign-day-block {
        @apply flex flex-col border border-white rounded-lg h-[18vw] px-4 pt-4 w-full text-xs;
    }
    .campaign-day-list {
        @apply flex flex-row mt-3 max-w-[36.5rem] overflow-y-auto;
    }
    .campaign-day-item {
        @apply flex flex-row;
        .outline-block {
            @apply inline-flex border border-secondary rounded-lg p-1 mt-1 w-max text-[10px];
        }
        .type-block {
            @apply flex flex-row text-[7px] gap-1
        }
        .type-icon {
            @apply p-1 border hover:bg-green-700/50 text-center cursor-pointer
        }
    }
    .line {
        @apply h-[20px] border border-white my-1;
    }
}
</style>

<script setup>
import { onMounted } from 'vue';
import AddLineIcon from "~/pages/mass-com/builder/components/add-line-icon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faMessage, faPhone);

const campaign_items = ref([
    {
        day: 0,
        types: {
            email: 1,
            sms: 1,
            call: 1
        },
        status: 'active'
    },
    {
        day: 1,
        types: {
            email: 0,
            sms: 0,
            call: 0
        },
        status: 'inactive'
    }
]);

const addDayItem = () => {
    const item = campaign_items.value.slice(-1)[0];
    item.status = 'active';

    campaign_items.value.push(item);
};
</script>
