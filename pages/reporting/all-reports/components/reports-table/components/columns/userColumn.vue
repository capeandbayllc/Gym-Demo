<template>
  <div class="flex items-center">
    <img
      :src="member.profile_photo_path"
      class="w-7 rounded-[5px] border border-secondary mr-2"
    />
    {{ member.first_name }} {{ member.last_name }}
  </div>
</template>

<style scoped lang="postcss"></style>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import memberQuery from "~/api/queries/member";
const props = defineProps({
  item: {
    type: Array,
    default: {},
  },
  column: {
    type: Array,
    default: {},
  },
});

const member = ref({});
const { result } = useQuery(memberQuery.query.browse, { first: 1 });
watchEffect(() => {
  if (!result.value) return;
  member.value = result.value.members.data[0];
});
</script>
