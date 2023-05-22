<template>
  <div class="border border-[#0075c9] bg-base-300 p-4 rounded-[18px] w-[600px]">
    <div
      class="flex flex-col gap-5 pb-9 pt-6 p-[18px] rounded-[18px] border-2 border-secondary bg-gradient-to-b from-secondary-focus to-base-300/30"
    >
      <h4 class="text-xl font-semibold">Create a Folder</h4>
      <div class="flex gap-5 items-center">
        <p class="w-[140px]">Folder Name</p>
        <input type="text" class="folder-input" />
      </div>

      <div class="flex gap-5 items-center">
        <p class="w-[140px]">Share folder to</p>
        <select-box
          :label="shareFolderTo"
          :items="[
            { value: 'Only me', label: 'Only me' },
            { value: 'My Team', label: 'My Team' },
            { value: 'Select Users', label: 'Select Users' },
          ]"
          @onChange="shareFolderTo = $event"
          secondary
          class="share-folder-select w-full"
          :show-clear-list="false"
          :show-search="false"
        >
        </select-box>
      </div>

      <div class="flex gap-2 ml-auto">
        <Button
          size="sm"
          ghost
          class="normal-case"
          @click="emit('closeCreateFolderModal')"
        >
          Cancel
        </Button>
        <Button
          size="sm"
          secondary
          class="normal-case"
          @click="emit('closeCreateFolderModal')"
        >
          Send And Move
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeCreateFolderModal"]);

const shareFolderTo = ref("Only me");
</script>

<style scoped lang="postcss">
.folder-input {
  @apply w-full rounded h-[32px] outline-none text-base-300 px-1;
}
</style>
<style lang="postcss">
.share-folder-select .select-box-btn {
  @apply !h-[32px];
}
</style>
