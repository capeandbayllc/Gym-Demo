<template>
    <li
        class="grid py-2 px-2 grid-cols-[5rem_1fr_5rem] items-center w-full bg-[#18203A] rounded-3xl border-2 border-[#073A76]"
    >
        <div class="p-4">
            <slot name="primary">
                <span
                    class="w-12 h-12 bg-white rounded-2xl border-2 border-secondary block"
                ></span>
            </slot>
        </div>

        <!-- name/email/phone -->
        <div class="flex flex-col text-sm gap-1">
            <slot name="secondary">
                <span class="font-normal capitalize">{{ attendee.name }}</span>
                <span class="flex gap-2 items-center text-[0.8rem]">
                    <span class="block w-4 fill-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                            />
                        </svg>
                    </span>

                    <span class="text-[0.7rem] font-light my-auto">{{
                        attendee.email
                    }}</span>
                </span>

                <span class="flex gap-2 items-center">
                    <span class="block w-4 fill-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zm73 166.7c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6l0 0c-6.1 0-12.2-.1-18.2-.4l-.1 0 0 0c-10-.4-19.8-1.1-29.6-2.2C175.2 485.6 0 295.2 0 64v0C0 45.1 13.2 28.8 31.6 24.9l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1L329 286.7zm133.8 78.1l-100.4-43L333 357.6c-14.9 18.2-40.8 22.9-61.2 11.1c-53.3-30.9-97.7-75.3-128.6-128.6c-11.8-20.4-7.1-46.3 11.1-61.2l35.9-29.4-43-100.4L48.1 70.5C51.5 286.2 225.8 460.5 441.5 464l21.3-99.2z"
                            />
                        </svg>
                    </span>
                    <span class="text-[0.7rem] font-light my-auto">{{
                        attendee.phone
                    }}</span>
                </span>
            </slot>
        </div>

        <div>
            <slot name="tertiary">
                <span>content</span>
            </slot>
        </div>
    </li>
</template>

<script setup>
/**
 * Attendee list item - since designs come in a variety each area of content is replacable
 * with slots simply by including them, otherwisee they'll use attendee prop.
 */

const props = defineProps({
    attendee: {
        type: Object,
        default: {
            name: "John Smith",
            email: "coolemail@email.com",
            phone: "(555)-123-4567",
        },
    },
});
</script>
