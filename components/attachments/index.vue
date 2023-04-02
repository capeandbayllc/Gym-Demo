<template>
  <GradedBorderCard>
    <template #content>
      <div class="px-16">
        <ul
          class="grid grid-rows-1 grid-flow-col gap-8 max-w-4xl overflow-x-scroll px-8"
        >
          <AttachmentItem
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :img="item.img"
          />
        </ul>
      </div>
    </template>
  </GradedBorderCard>
</template>

<script setup>
/** Attachments list */
import GradedBorderCard from "~~/components/graded-border-card.vue";
import AttachmentItem from "./attachment-item.vue";

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
    ],
  },
});
</script>
