<template>
  <div class="w-full px-5 py-4 bg-base-content rounded-xl text-base-300/60">
    <div class="flex item-center justify-between">
      <h5 class="text-xl font-semibold">
        <input class="focus:outline-none" type="text" value="New Note Name" />
      </h5>
      <p class="font-semibold">March 1, 2023</p>
    </div>
    <div class="p-5">
      <h5 class="text-xl font-semibold">Paragraph Notes</h5>
      <textarea
        v-model="activeNote.title"
        class="w-full h-80 rounded my-3 focus:outline-none text-base-300/60 resize-none"
        placeholder="Paragraph Notes"
      >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem laudantium tenetur, nihil, quae quia enim rem excepturi quisquam iure suscipit illo voluptatem error animi sequi molestias dicta atque maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sunt officia? Minima fugiat iusto, illum, exercitationem minus fugit nostrum omnis suscipit numquam recusandae ducimus? Magni fuga maxime quaerat qui eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In fugiat beatae aspernatur voluptates ipsam et praesentium eveniet labore debitis consequatur autem nulla, tempore ipsum impedit dolorum tenetur dolore eum. Esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas nesciunt quam dolorem nisi fuga perspiciatis asperiores. Minima distinctio velit cum sint vitae neque iure! Dolorem asperiores hic necessitatibus esse.
              </textarea
      >
    </div>
  </div>
  <div class="flex justify-between mt-4">
    <div class="flex items-center gap-4">
      <AlertButton
        :alert-outline="true"
        alert-created-label="Alert Created"
        v-model="activeNote.alert"
        class="w-[250px] mr-4"
      />
      <div class="flex items-center gap-1">
        <p class="text-sm">Mark complete</p>
        <custom-toggle class="!mb-0" v-model="noteComplete" />
      </div>
    </div>
    <div>
      <Button size="sm" class="normal-case mr-4" ghost>Delete</Button>
      <Button size="sm" class="normal-case" secondary>Save</Button>
    </div>
  </div>
</template>

<script setup>
import AlertButton from "../alert-button.vue";
import CustomToggle from "~/components/toggle/custom-toggle.vue";
const props = defineProps({
  // noteComplete: Boolean,
  // activeNote: Object
});
const activeNote = ref(false);
const noteComplete = ref(false);
</script>
