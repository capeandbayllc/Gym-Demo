<template>
  <GradedBorderCard>
    <template #content>
      <div class="px-16 relative">
        <button @click="scroll('left')" class="scroll-btn left-2 rotate-180">
          <RightArrowCircleIcon />
        </button>
        <ul
          id="attachment-container"
          ref="container"
          class="grid grid-rows-1 grid-flow-col gap-8 max-w-4xl overflow-x-scroll px-8"
        >
          <AttachmentItem
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :img="item.img"
            @save="(v) => $emit('save', v)"
            @edit="(v) => $emit('edit', v)"
          />
        </ul>
        <button @click="scroll('right')" class="scroll-btn right-2">
          <RightArrowCircleIcon />
        </button>
      </div>
    </template>
  </GradedBorderCard>
</template>

<style scoped lang="postcss">
button.scroll-btn {
  @apply absolute top-1/2 -translate-y-1/2 opacity-75 transition-all duration-300;
  @apply hover:opacity-100;
}

::-webkit-scrollbar {
  @apply hidden;
}
</style>

<script setup>
/** Attachments list */
import GradedBorderCard from "~~/components/graded-border-card.vue";
import AttachmentItem from "./attachment-item.vue";
import { LockIcon, RightArrowCircleIcon } from "~~/components/icons";

const emit = defineEmits(["save", "edit"]);

const props = defineProps({
  items: {
    type: Array,
    default: [
      { id: 1, title: "Certifications", img: "/certifications.png" },
      { id: 2, title: "Offer Letter for Employment", img: "/offer_letter.png" },
      { id: 3, title: "Promotion Documentation", img: "/promotional.png" },
      { id: 4, title: "Certifications", img: "/certifications.png" },
      { id: 5, title: "Offer Letter for Employment", img: "/offer_letter.png" },
      { id: 6, title: "Promotion Documentation", img: "/promotional.png" },
      { id: 7, title: "Certifications", img: "/certifications.png" },
      { id: 8, title: "Offer Letter for Employment", img: "/offer_letter.png" },
      { id: 9, title: "Promotion Documentation", img: "/promotional.png" },
      { id: 10, title: "Certifications", img: "/certifications.png" },
      {
        id: 11,
        title: "Offer Letter for Employment",
        img: "/offer_letter.png",
      },
      { id: 12, title: "Promotion Documentation", img: "/promotional.png" },
    ],
  },
});

const container = ref();

const scroll = (dir = "left") => {
  let delta = container.value.clientWidth - 32;
  let amt = dir === "left" ? -Math.abs(delta) : Math.abs(delta);
  container.value.scrollBy({ behavior: "smooth", top: 0, left: amt });
};
</script>
