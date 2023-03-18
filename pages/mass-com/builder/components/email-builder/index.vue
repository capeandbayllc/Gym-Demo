<template>
    <div class="flex justify-center">
        <div class="items-center align-middle card-gradient-bg p-2 rounded-lg">
            <div class="email-builder-container bg-black">
                <p>Script for Email</p>

                <div class="flex flex-row gap-3 justify-center">
                    <div class="email-form">
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
                            <div class="flex flex-row mt-2">
                                <div class="email-time-block-item">
                                    <calendar-icon /> <span>2023-01-01</span>
                                </div>
                                <div class="email-time-block-item ml-3">
                                    <clock-icon /> <span>10:20 pm</span>
                                </div>
                            </div>
                            <p class="mt-3">Ends:</p>
                            <div class="flex flex-row mt-2">
                                <div class="email-time-block-item">
                                    <calendar-icon /> <span>2023-01-01</span>
                                </div>
                                <div class="email-time-block-item ml-3">
                                    <clock-icon /> <span>10:20 pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <Button ghost size="xs" class="normal-case">Cancel</Button>
                    <Button ghost size="xs" class="normal-case">Edit</Button>
                    <Button secondary="" size="xs" class="normal-case" @click.stop="$emit('next-page')">Save</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.email-builder-container {
    @apply flex flex-col border bg-black border-white rounded-lg p-4 w-full text-xs;
    .email-form {
        @apply flex flex-col min-w-[40vw];
    }
    .email-form-input {
        @apply input input-bordered w-full max-w-sm bg-black border-white border mt-3 placeholder:text-xs text-xs p-2;
    }
    .email-status {
        @apply flex flex-col;
    }
    .email-time-block {
        @apply border border-secondary p-2 rounded-md text-secondary text-xs flex flex-col w-fit
    }
    .email-time-block-item {
        @apply flex gap-2 items-center
    }
}

</style>

<script setup>
import CalendarIcon from "~/components/icons/calendar.vue";
import ClockIcon from "~/components/icons/clock.vue";
</script>
