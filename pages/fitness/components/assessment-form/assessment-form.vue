<template>
  <form>
    <p class="text-secondary text-xl font-bold">Contact Information</p>

    <div class="py-2 grid grid-cols-3 gap-6">
      <div class="input-group">
        <label class="gr-base-label" for="first-name">first name</label>
        <input
          v-model="form.first_name"
          type="text"
          name="first name"
          id="first-name"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="middle-name">middle name</label>
        <input
          v-model="form.middle_name"
          type="text"
          name="middle name"
          id="middle-name"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="last-name">last name</label>
        <input
          v-model="form.last_name"
          type="text"
          name="last name"
          id="last-name"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="dob">date of birth</label>
        <input
          v-model="form.date_of_birth"
          type="text"
          name="date of birth"
          id="dob"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="gender">gender</label>
        <input v-model="form.gender" type="text" name="gender" id="gender" />
      </div>
      <div class="input-group">
        <label class="gr-base-label" for="email">email</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          id="email"
          pattern="email"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="p-email">personal email</label>
        <input
          v-model="form.personal_email"
          type="email"
          name="personal email"
          id="p-email"
          pattern="email"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="mobile">mobile</label>
        <input
          v-model="form.mobile"
          type="mobile"
          name="mobile"
          id="mobile"
          pattern="mobile"
        />
      </div>
    </div>
  </form>
</template>

<style scoped lang="postcss">
input[type="text"],
input[type="email"],
input[type="mobile"] {
  @apply gr-base-textfield gr-neutral-textfield min-w-[16rem];
}

.input-group {
  @apply flex flex-col whitespace-nowrap;
}
</style>

<script setup lang="ts">
import { type IAssessmentFormData, IAssessmentFormDefaults } from "./helpers";

interface Props {
  data: IAssessmentFormData;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => IAssessmentFormDefaults,
});

const form: Ref<IAssessmentFormData> = ref(props.data);
</script>
