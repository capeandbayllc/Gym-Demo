<template>
  <section class="max-w-7xl px-8 bg-black py-8 rounded-b-3xl">
    <div class="grid grid-cols-3 gap-8">
      <TextField
        v-model="localValue['first_name']"
        id="first-name"
        :required="true"
        label="first name"
      />
      <TextField
        v-model="localValue['middle_name']"
        id="middle-name"
        label="middle name"
      />
      <TextField
        v-model="localValue['last_name']"
        id="last-name"
        label="last name"
      />
      <TextField
        v-model="localValue['date_of_birth']"
        id="dob"
        label="date of birth"
      />
      <TextField v-model="localValue['gender']" id="gender" label="gender" />
      <div class="group">
        <label for="username" class="capitalize">Username</label>

        <input
          id="username"
          type="text"
          class="gr-base-textfield gr-neutral-shroud group-hover:bg-secondary focus-within:border-secondary"
          placeholder="test@gmail.com"
        />
      </div>
      <TextField v-model="localValue['email']" id="email" label="email" />
      <TextField id="email-personal" label="personal email" />
      <TextField v-model="localValue['phone']" id="mobile" label="Mobile" />
    </div>

    <AddConnections />

    <hr class="my-12 border-secondary" />

    <AddressInfo v-model="localValue['address']" />

    <hr class="my-12 border-secondary" />

    <SocialHandles />
  </section>
</template>

<script setup>
import TextField from "./textfield.vue";
import AddConnections from "./add-connections.vue";
import AddressInfo from "./address-letter-fmt.vue";
import SocialHandles from "./social-handles.vue";

const emit = defineEmits(["update:modelValue", "update:model-value"]);

const props = defineProps({
  modelValue: {
    type: Object,
    default: {
      first_name: "Kevin",
      username: "kevinbuchanan@email.com",
      relationship: 0,
      address: {
        address1: "302 Liberty St.",
        city: "Boston",
        state: "MA",
        zipcode: "02108",
      },
      social: {
        instagram: "kbcanon",
        twitter: "@kbcanon",
        tiktok: "bkcanon",
        youtube: "kevbuch",
        snapchat: "kevin",
        facebook: "kevvy",
      },
      notes: [],
    },
  },
});

const localValue = ref(props.modelValue);

watch(localValue, () => emit("update:modelValue", localValue.value));

// let form = {};
// const initBasicForm = () => {
//   form.value = {
//     ...form.value,
//     username: "kevinbuchanan@email.com",
//     relationship: 0,
//     address: {
//       address: "",
//       city: "",
//       state: "",
//       zipcode: "",
//     },
//     social: {
//       instagram: "",
//       twitter: "",
//       tiktok: "",
//       youtube: "",
//       snapchat: "",
//       facebook: "",
//     },
//     homeLocations: [],
//     roles: [],
//     departments: [],
//     teams: [],
//     calendarDepartments: [],
//     notes: "",
//   };
//   console.log("form.value: ", form.value);
//   return form.value;
// };

// form = ref(initBasicForm());
</script>
