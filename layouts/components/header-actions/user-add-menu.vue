<template>
    <context-menu ref="userMenu" class="user-menu">
        <Button outline size="sm">+ Member</Button>
        <Button outline size="sm">+ Lead</Button>
        <Button outline size="sm">+ Guest Pass</Button>
    </context-menu>
</template>
<style scoped>
.user-menu {
    @apply bg-secondary p-4 flex flex-col space-y-3 top-12 rounded;
    left: -4rem;
}
</style>
<script setup>
import {ref} from 'vue'

const userMenu = ref(null)

const open = () => {
    userMenu.value.open()
}
const close = () => {
    userMenu.value.close()
}
defineExpose({ open, close })

</script>