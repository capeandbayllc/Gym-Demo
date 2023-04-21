<template>
    <h3>Club Hub</h3>
    <div class="page-clubhub-container">
        <div class="page-content">
            <div class="grid grid-cols-6 gap-5">
                <inspection-card class="col-span-2 -lg:col-span-6"/>
                <warranty-card class="col-span-2 -lg:col-span-6"/>
                <subleased-area-card class="col-span-2 -lg:col-span-6"/>
                <address-book-card class="col-span-4 -lg:col-span-6"/>
                <ticketing-system-card class="col-span-2 -lg:col-span-6"/>
                <inventory-management-card class="col-span-2 -lg:col-span-6"/>
                <property-management-card class="col-span-2 -lg:col-span-6"/>
                <equipment-card class="col-span-2 -lg:col-span-6"/>
                <reporting-card class="col-span-2 -lg:col-span-6"/>
                <calendar-card class="col-span-4 -lg:col-span-6"/>
                <club-ref-sheet-card class="col-span-6"/>
            </div>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.page-clubhub-container {
    @apply py-4 pr-5 w-full h-fit -xl:pr-6;
    .page-content {
        @apply text-center text-secondary p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[85vw];
    }
}
</style>

<script setup>
import InspectionCard from './components/inspection-card/index.vue';
import WarrantyCard from './components/warranty-card/index.vue';
import SubleasedAreaCard from './components/subleased-area-card/index.vue';
import AddressBookCard from './components/address-book-card/index.vue';
import TicketingSystemCard from './components/ticketing-system-card/index.vue';
import InventoryManagementCard from './components/inventory-management-card/index.vue';
import PropertyManagementCard from './components/property-management-card/index.vue';
import EquipmentCard from './components/equipment-card/index.vue';
import ReportingCard from './components/reporting-card/index.vue';
import CalendarCard from './components/calendar-card/index.vue';
import ClubRefSheetCard from './components/club-ref-sheet-card/index.vue';
</script>
