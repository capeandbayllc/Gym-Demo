<template>
  <div class="dropdown">
    <div class="dropdown-container">
      <div class="dropdown-header">
        <div class="flex">
          <div class="w-[25px] mr-2"></div>
          <span>Name</span>
        </div>
        <button class="text-secondary">+ Add New</button>
      </div>
      <div class="dropdown-body">
        <div class="dropdown-item" v-for="(member, i) in members" :key="i">
          <div class="w-[45%] flex">
            <img
              class="rounded-full w-[25px] mr-2"
              :src="member.profile_photo_path"
              alt=""
            />
            <span>{{ member.first_name }} {{ member.last_name }}</span>
          </div>
          <div class="w-[35%]">
            <span>Club Location</span>
          </div>
          <div class="w-[20%] flex items-center gap-3">
            <button
              size="sm"
              class="bg-secondary-content rounded px-[10px] py-[3px]"
            >
              <vertical-ellipsis
                class="h-5 transform rotate-90 fill-neutral-content"
              />
            </button>
            <button>
              <check-mark class="h-[26px] w-[26px]" />
            </button>
          </div>
        </div>
      </div>
      <button @click.stop="emit('close')" class="close-button-dropdown">
        <cross-icon class="cross-icon" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.dropdown {
  @apply bottom-[115px] left-[120px] !h-0 z-10;
  .dropdown-container {
    @apply bg-base-content/95 rounded-xl text-secondary-focus p-3 w-[410px];
    .dropdown-header {
      @apply flex justify-between;
    }
    .dropdown-body {
      @apply border-t mt-3 border-white overflow-auto max-h-[240px];
      .dropdown-item {
        @apply border-b border-base-content py-3 flex;
      }
    }
    .close-button-dropdown {
      @apply rounded-lg !h-[22px] !w-[22px] bg-error absolute top-[-20px] right-[-20px] flex items-center justify-center;
      .cross-icon {
        @apply w-[12px] mt-[2px] ml-[0.5px] text-base-content;
      }
    }
  }
}
</style>
<script setup>
import { CrossIcon, VerticalEllipsis, CheckMark } from "~~/components/icons";
import member from "~/api/queries/member";
import { useQuery } from "@vue/apollo-composable";

const emit = defineEmits(["close"]);

const { result } = useQuery(member.query.browse);

const members = ref([]);

watch(result, (nv, ov) => {
  if (result) {
    members.value = result.value.members.data;
  }
});
</script>
