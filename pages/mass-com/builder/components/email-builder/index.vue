<template>
    <div class="email-builder-container">
        Script for Email

        <div class="flex flex-row gap-2">
            <div class="email-form min-w-[30vw]">
                <input type="text" placeholder="Message Title" class="email-form-input  max-h-8" />

                <textarea type="text" placeholder="Type here" class="email-form-input min-h-[12vw]" rows="20">
Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida mauris eu quam fermentum gravida. 
Curabitur vel lorem cursus, egestas arcu eu, ultricies augue. Sed in lorem faucibus, feugiat lectus ac, ultrices 
nisl. Suspendisse tempor justo mi. Pellentesque rhoncus non risus at ultricies. Fusce at sem sit amet velit 
tincidunt dictum. Ut a consequat enim, vel tincidunt arcu.
                </textarea>
            </div>
            <div class="email-status">
                <div>
                    Notification 
                </div>
                <div class="email-time-block">
                    <p>Starts:</p>
                    <div class="flex flex-row mt-2 text-[10px]">
                        <calendar-icon /> 2023-01-01 
                        <clock-icon /> 10:20 pm
                    </div>
                    <p class="mt-3">Ends:</p>
                    <div class="flex flex-row mt-2">
                        <calendar-icon /> 2023-01-01
                        <clock-icon /> 10:20 pm
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end mt-4">
            <Button ghost size="xs">Cancel</Button>
            <Button ghost size="xs">Edit</Button>
            <Button secondary="" size="xs" @click.stop="$emit('next-page', 'save-campaign-form')">Save</Button>
        </div>
    </div>
</template>

<style scoped>
.email-builder-container {
    @apply flex flex-col border border-white rounded-lg h-[23vw] p-4 w-full text-xs;
    .email-form-input {
        @apply input input-bordered w-full max-w-sm bg-black border-white border mt-3 placeholder:text-xs text-xs p-2;
    }
    .email-time-block {
        @apply border border-secondary w-full p-2 rounded-md text-secondary text-xs flex flex-col w-full
    }
}

</style>

<script setup>
import CalendarIcon from "~/components/icons/calendar.vue";
import ClockIcon from "~/components/icons/clock.vue";
</script>
