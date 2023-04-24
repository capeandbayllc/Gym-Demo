<template>
  <simple-card class="w-[350px] p-4">
    <div class="mt-2 mb-4">
      <Button
        outline
        size="xs"
        class="text-secondary hover:text-base-content hover:bg-secondary hover:border-secondary text-xs mr-2"
        >Leads</Button
      >
      <Button
        outline
        size="xs"
        class="text-secondary hover:text-base-content hover:bg-secondary hover:border-secondary text-xs"
        >Members</Button
      >
      <Button
        outline
        size="xs"
        class="text-secondary hover:text-base-content hover:bg-secondary hover:border-secondary text-xs float-right"
        >+ Add new</Button
      >
    </div>
    <div class="flex flex-wrap">
      <p class="border-b text-sm w-full">Name</p>
      <ul class="h-[300px] overflow-auto w-full mb-4">
        <li
          class="border-b flex items-center py-2 mr-4"
          v-for="i in new Array(10)"
          :key="i"
        >
          <img class="w-8 pr-2" src="/account.png" />
          <span class="text-xs mr-4">Chand Hodges</span>
          <span class="text-xs mr-4">Club Location</span>
          <button class="btn w-max rounded btn-primary btn-xs mr-4">...</button>
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-success"
          />
        </li>
      </ul>
      <Button size="sm" class="ml-auto" ghost>Cancel</Button>
      <Button size="sm" secondary>Save</Button>
    </div>
  </simple-card>
</template>
<script setup></script>
