<template>
    <div class="dropdown" @click.stop>
      <div class="dropdown-container">
        <cross-icon
          @click.stop="hideDropdownInfo"
          class="flex absolute text-white h-[15px] w-[15px] top-[15px] left-[150px] cursor-pointer"
        ></cross-icon>
        <div @click="emitEditAccount" class="dropdown-item">
          Edit account
        </div>
        <div @click="emitViewAlerts" class="dropdown-item">
          View alerts
        </div>
        <div @click="emitAddGuestPass" class="dropdown-item">
          Add Guest Pass
        </div>
        <div @click="emitPOS">POS</div>
      </div>
    </div>
</template>
<style scoped lang="postcss">
.dropdown {
  @apply text-white absolute right-0;

  .dropdown-container {
    @apply bg-secondary p-3 w-48 border-2 rounded-3xl;
  }
}
.dropdown-item {
  @apply mb-2 cursor-pointer;
}
</style>  
<script setup>
const emit = defineEmits(['edit-account', 'view-alerts', 'add-guest-pass', 'pos']);

function emitEditAccount() {
    emit('edit-account');
}

function emitViewAlerts() {
    emit('view-alerts');
}

function emitAddGuestPass() {
    emit('add-guest-pass');
}

function emitPOS() {
    emit('pos');
}
</script>