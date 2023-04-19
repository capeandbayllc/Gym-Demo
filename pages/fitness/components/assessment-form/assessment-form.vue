<template>
  <form>
    <div class="input-group">
      <label for="first-name">first name</label>
      <input type="text" name="first name" id="first-name" />
    </div>

    <div>
      <label for="middle-name">middle name</label>
      <input type="text" name="middle name" id="middle-name" />
    </div>

    <div>
      <label for="last-name">last name</label>
      <input type="text" name="last name" id="last-name" />
    </div>

    <div>
      <label for="dob">date of birth</label>
      <input type="text" name="date of birth" id="dob" />
    </div>

    <div>
      <label for="gender">gender</label>
      <input type="text" name="gender" id="gender" />
    </div>
    <div>
      <label for="email">email</label>
      <input type="email" name="email" id="email" pattern="email" />
    </div>

    <div>
      <label for="p-email">personal email</label>
      <input type="email" name="personal email" id="p-email" pattern="email" />
    </div>
  </form>
</template>

<script setup lang="ts"></script>
