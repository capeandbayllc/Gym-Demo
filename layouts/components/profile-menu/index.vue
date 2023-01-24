<template>
    <context-menu ref="profileMenu" class="profile-menu-container">
        <ul>
            <li v-for="(item, ndx) in menu" :key="ndx">
                {{item.label}}
                <ul v-if="item.children">
                    <li v-for="(child, sub_ndx) in item.children" :key="sub_ndx">
                        {{child.label}}
                    </li>
                </ul>
            </li>
        </ul>
        <div class="pt-3 self-end cursor-pointer">Logout</div>
    </context-menu>
</template>
<style scoped>
.profile-menu-container {
    @apply flex flex-col bg-[#001B5D] absolute top-20 right-4 p-3 text-sm rounded;
    li {
        @apply py-1.5 px-2 cursor-pointer;
    }
    li:last-child {
        @apply pb-2;
    }
    > ul {
        > li {
            @apply border-b;
        }
        > ul {
            @apply py-2;
        }
    }
}
</style>
<script setup>
import {ref} from 'vue'

const profileMenu = ref(null)

const open = () => {
    profileMenu.value.open()
}
const close = () => {
    profileMenu.value.close()
}
defineExpose({ open, close })

const menu = [{
    label: "Manage Account",
    children: [{
        label: "Profile"
    }, {
        label: "Settings"
    }, {
        label: "User Management"
    }, {
        label: "Invoices"
    }, {
        label: "Impersonation"
    }]
}, {
    label: "Manage Team Account"
}, {
    label: "Extras",
    children: [{
        label: "Workout Generator"
    }, {
        label: "Sales Slideshow"
    }]
}]
</script>
