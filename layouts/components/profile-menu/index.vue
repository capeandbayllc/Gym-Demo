<template>
    <context-menu ref="profileMenu" class="gradient-bg profile-menu-container z-21 top-[3.50rem]" @isProfileMenuOpen="isProfileMenuOpenFn">
        <div class="flex flex-col">
            <ul class="menu-list">
                <li class="menu-items" v-for="(item, ndx) in menu" :key="ndx">
                    <span class="font-semibold">{{item.label}}</span>
                    <ul v-if="item.children" class="submenu-list">
                        <li class="submenu-items" v-for="(child, sub_ndx) in item.children" :key="sub_ndx">
                            {{child.label}}
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="self-end cursor-pointer mr-4 mb-4">Logout</div>
        </div>
    </context-menu>
</template>
<style scoped>
.profile-menu-container {
    @apply absolute right-4 p-3 text-sm border-8 rounded-xl border-secondary;
    > div {
        @apply border-4 rounded-lg -m-4;
    }
    .menu-list {
        @apply m-6
    }
    .menu-items {
        @apply py-2 px-0
    }
    li {
        @apply py-1.5 px-2 cursor-pointer;
    }
    li:last-child {
        @apply pb-2;
    }
    .menu-items {
        @apply border-b;
    }
    .submenu-items {
        @apply rounded-md bg-[#2F72C4] my-2 font-normal w-fit;
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
const emit = defineEmits(['isProfileMenuOpen']);
const isProfileMenuOpenFn = (data) =>{
    emit('isProfileMenuOpen',data)
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
