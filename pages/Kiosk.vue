<template>
  111
  <UserAddMenu ref="userMenu" mode="page"/>
</template>

<script setup>
import UserAddMenu from "~/layouts/components/header-actions/user-add-menu.vue";
import {ref} from "vue";

const userMenu = ref(null);
onMounted(() => {
  // console.log(userMenu.value);
  // userMenu.value.open();
})
</script>

<style scoped>

</style>
