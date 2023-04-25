<template>
  <div
    id="Timesheet"
    class="border border-[#0075c9] p-8 overflow-auto max-h-[388px] rounded-[19px]"
  >
    <div class="flex items-center space-x-12 mt-4">
      <div>
        <label for="period">Period:</label>
        <div class="flex items-center space-x-5 mt-3">
          <FormTimeInput />
          <span>To</span>
          <FormTimeInput />
        </div>
      </div>
    </div>
    <div class="py-8">
      <div class="grid grid-cols-2 items-center gap-6">
        <div class="flex flex-col space-y-2">
          <label for="name">Name</label>
          <FormAppInput height="h-[38px.3]" />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="name">Department</label>
          <FormAppInput height="h-[38px.3]" />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="name">Manager</label>
          <FormAppInput height="h-[38px.3]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
