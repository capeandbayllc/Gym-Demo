<template>
  <div>
    <p class="text-center mt-1">December 10, 2022</p>
    <input
      type="text"
      placeholder="New Note Name"
      class="w-full rounded-t-md px-3 text-base-300/80 font-medium text-lg py-3"
    />
    <textarea
      name=""
      id=""
      class="w-full rounded-b-md text-base-300 p-3"
      placeholder="Paragraph Notes"
      rows="12"
    ></textarea>
  </div>
  <div class="md:flex justify-between justify-items-center">
    <div class="flex justify-between md:flex text-sm space-x-3 items-center">
      <button class="border-2 border-primary-content p-1 px-2 rounded-md">
        Create an alert
      </button>
      <div>
        Mark as complete
        <input type="checkbox" class="toggle toggle-info align-middle mr-2" />
      </div>
    </div>
    <div class="flex justify-between md:flex space-x-3 py-2">
      <button
        type="button"
        class="btn w-max rounded btn-sm font-medium"
        error
        outline
        @click="$emit('deleteNote')"
      >
        Delete
      </button>

      <button
        class="btn w-max bg-secondary border-success rounded text-base-content btn-sm font-medium"
        @click="$emit('saveNote')"
      >
        Save
      </button>
    </div>
  </div>
</template>
