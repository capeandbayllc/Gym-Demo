<template>
  <form>
    <p class="text-secondary text-xl font-bold">Contact Information</p>

    <div class="py-2 grid grid-cols-3 gap-6">
      <div class="input-group">
        <label class="gr-base-label" for="first-name">first name</label>
        <input type="text" name="first name" id="first-name" />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="middle-name">middle name</label>
        <input type="text" name="middle name" id="middle-name" />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="last-name">last name</label>
        <input type="text" name="last name" id="last-name" />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="dob">date of birth</label>
        <input type="text" name="date of birth" id="dob" class="" />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="gender">gender</label>
        <input type="text" name="gender" id="gender" />
      </div>
      <div class="input-group">
        <label class="gr-base-label" for="email">email</label>
        <input type="email" name="email" id="email" pattern="email" />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="p-email">personal email</label>
        <input
          type="email"
          name="personal email"
          id="p-email"
          pattern="email"
        />
      </div>

      <div class="input-group">
        <label class="gr-base-label" for="mobile">mobile</label>
        <input type="mobile" name="mobile" id="mobile" pattern="mobile" />
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
interface IAssessmentFormData {
  first_name: string;
  middle_name?: string;
  last_name?: string;
  date_of_birth?: string | number | date;
  gender?: any;
  email?: string;
  personal_email?: string;
  mobile?: string | number;
}
</script>
