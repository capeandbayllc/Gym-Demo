<template>
  <section class="max-w-7xl px-8 bg-black py-8 rounded-b-3xl">
    <div class="grid grid-cols-3 gap-8">
      <TextField id="first-name" :required="true" label="first name" />
      <TextField id="middle-name" label="middle name" />
      <TextField id="last-name" label="last name" />
      <TextField id="dob" label="date of birth" />
      <TextField id="gender" label="gender" />
      <div class="group">
        <label for="username" class="capitalize">Username</label>

        <input
          id="username"
          type="text"
          class="gr-base-textfield gr-neutral-shroud group-hover:bg-secondary focus-within:border-secondary"
          placeholder="test@gmail.com"
        />
      </div>
      <TextField id="email" label="email" />
      <TextField id="email-personal" label="personal email" />
      <TextField id="mobile" label="Mobile" />
    </div>

    <div class="mt-24">
      <div class="grid grid-cols-12 gap-4 py-2 mt-4">
        <div
          class="col-start-3 col-span-8 border-2 border-secondary rounded-2xl"
        >
          <div
            class="mt-4 mr-5 float-right w-12 p-2.5 pl-2 rounded-2xl bg-blue-500"
          >
            <MembersIcon />
          </div>

          <div class="grid grid-cols-12 p-2 -my-3 mt-3 mb-3">
            <div class="col-start-2 col-span-10">
              <h6 class="pt-5 font-medium text-lg pl-2">Add Connection</h6>
            </div>
          </div>

          <div class="grid grid-cols-12 p-2 mb-5 -mt-3">
            <div class="col-start-2 col-span-10">
              <div
                class="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 lg:mb-0 md:mb-5"
              >
                <div class="mb-5">
                  <div class="mb-2">Lead Member to Connect</div>

                  <input
                    class="gr-base-textfield gr-neutral-textfield"
                    v-model="form['lead-member']"
                    placeholder="Search by last name or email"
                  />
                </div>

                <div class="mb-5">
                  <div class="mb-2">Relationship:</div>
                  <select
                    id="relationship"
                    class="gr-base-textfield gr-neutral-selection"
                    v-model="form['relationship']"
                  >
                    <option selected value="0" key="0">Relationship</option>
                    <option
                      v-for="item in relationships"
                      :key="item.id"
                      value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextField from "./textfield.vue";
import { MembersIcon, LockIcon, BlueClockIcon } from "@/components/icons";

let form = {};
const initBasicForm = () => {
  form.value = {
    ...form.value,
    username: "kevinbuchanan@email.com",
    relationship: 0,
    address: {
      address: "",
      city: "",
      state: "",
      zipcode: "",
    },
    social: {
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
      snapchat: "",
      facebook: "",
    },
    homeLocations: [],
    roles: [],
    departments: [],
    teams: [],
    calendarDepartments: [],
    notes: "",
  };
  console.log("form.value: ", form.value);
  return form.value;
};

form = ref(initBasicForm());

let relationships = [
  {
    id: 1,
    name: "Relationship 1",
  },
  {
    id: 2,
    name: "Relationship 2",
  },
  {
    id: 3,
    name: "Relationship 3",
  },
  {
    id: 4,
    name: "Relationship 4",
  },
];
</script>
