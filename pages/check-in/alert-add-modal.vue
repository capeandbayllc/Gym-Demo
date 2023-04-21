<template>
    <div class="alert-add-container">
        <div class="alert-content">
            <h2 class="py-3">Kevin Buchanan</h2>
            <p>Talk update membership upgrade and features.</p>
            <div class="py-4">Guests: 1</div>
            <div>Created on: September 21, 2022</div>
            <div class="pb-8">End alert on: September 28, 2022</div>
            <div
                class="resolve-btn"
                @click="resolved=!resolved"
                >
                <check-circle-icon v-if="resolved" class="mr-2"/>
                {{resolved ? "Resolved" :"Resolve Alert"}}
            </div>
        </div>
        <div class="alert-add-actions">
            <Button
                size="md"
                @click="$emit('close')"
            >Cancel</Button>
            <Button secondary size="md" class="border border-base-content">Save</Button>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.alert-add-container {
    @apply flex flex-col border border-secondary p-3 bg-base-300 rounded;
    .alert-content {
        @apply flex flex-col text-center px-9 pb-2 pt-5 bg-neutral border border-secondary rounded font-semibold;
        h2 {
            @apply text-xl;
        }
        .resolve-btn {
            @apply flex w-fit self-end cursor-pointer rounded-full bg-accent-focus/80 px-3 py-1;
        }
    }
    .alert-add-actions {
        @apply flex flex-row self-end space-x-4 pt-4 pb-1;
        .btn {
            @apply text-base-content w-24;
        }
    }
}
</style>
<script setup>
import {ref} from 'vue'
import { CheckCircleIcon } from "~~/components/icons"

const resolved = ref(false)
</script>
