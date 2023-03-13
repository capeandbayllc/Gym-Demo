<template>
  <div class="page-setting-container">
    <!--    PROFILE IMAGE SECTION-->
    <div class="col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-span-1 relative flex justify-center">
      <img
          src="/user_profile_page_icon.png"
          class="w-60 cursor-pointer"
          @click="uploadPopUp = true"
      />
<!--      <div-->
<!--          v-if="uploadPopUp"-->
<!--          class="bg-white absolute p-4 w-[300px] text-right rounded border border-secondary"-->
<!--      >-->
<!--        <label class="mb-4 block">-->
<!--          <UploadIcon-->
<!--              class="bg-secondary rounded-full text-center relative z-10 text-secondary block mx-auto cursor-pointer"-->
<!--          />-->
<!--          <input-->
<!--              type="file"-->
<!--              class="absolute z-0 top-0 left-0 hidden"-->
<!--          />-->
<!--        </label>-->
<!--        <Button-->
<!--            ghost-->
<!--            size="sm"-->
<!--            class="text-black"-->
<!--            @click="uploadPopUp = false"-->
<!--        >Cancel-->
<!--        </Button>-->
<!--        <Button-->
<!--            secondary-->
<!--            size="sm"-->
<!--            @click="uploadPopUp = false"-->
<!--        >Save-->
<!--        </Button-->
<!--        >-->
<!--      </div>-->
    </div>

    <!--    FIRST SECTION -->
    <div class="mx-auto mt-10 gradient-bg p-4 page-border w-5/6 ">
      <div class="bg-black page-border">
        <!--    BASIC INFO SECTION-->
        <div class="grid grid-cols-1 py-2">
          <div class="grid grid-cols-3 justify-items-center py-2">
            <div v-for="item in profileBasic" :key="item.key" class="mb-5">
              <div class="-mb-1.5">
                <span>{{ item.label }} </span>
                <span v-if="item.required" class="text-blue-400">* </span>
              </div>
              <input :class="item.class" class="focus-within:hover:bg-blue-600"
                     v-model="form[item.key]"
                     :placeholder="item.placeholder"/>
            </div>
          </div>
        </div>

        <!--    ADD CONNECTION SECTION-->
<!--        // grid-cols-8 gap-3 py-2 mt-4 :style="{width: '80%', marginLeft: '4rem'}"-->
        <div class="grid grid-cols-6 gap-4 py-2 mt-4">
<!--        // <div class="col-start-2 col-span-5 border-2 border-secondary rounded-2xl">-->
          <div class="col-start-2 col-span-4 border-2 border-secondary rounded-2xl">

            <div class="mt-4 mr-5 float-right w-12 p-2.5 pl-2 rounded-2xl bg-blue-600">
              <MembersIcon  />
            </div>
            <div class="">
              <div class="grid grid-cols-9 justify-items-center py-2">
                <div class="mb-5 col-span-4">
                  <!--  // todo: font size-->
                  <h6 class="pt-5 mb-3 font-bold text-lg">Add Connection</h6>
                  <div class="-mb-1.5 mt-4">
                    Lead Member to Connect
                  </div>
                  <!-- TODO:  Search key -->
                  <input class="neutral-input rounded-xl"
                         v-model="form['lead-member']"
                         placeholder="Search by last name or email"/>
                </div>

                <div class="mb-5 col-span-3 mt-16">
                  <div class="-mb-1.5">
                    Relationship:
                  </div>
                  <!-- TODO:  Dropdown -->
                  <input class="neutral-input rounded-xl"
                         v-model="form['relationship']"
                         placeholder="Relationship"/>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="divider w-5/6 ml-auto mr-auto mt-10"></div>

      </div>

<!--          <profile-relation/>-->
<!--          <div>-->
<!--            <h4 class="mb-4 inline-block">-->
<!--              Calendar Access-->
<!--              <LockIcon class="inline-block"/>-->
<!--            </h4>-->
<!--            <multi-select-->
<!--                :options="departments"-->
<!--                label="Department(s)"-->
<!--                v-model="form.departments"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="col-span-2 3xl:col-span-3 -lg:col-span-1 -md:col-auto">-->
<!--            <div-->
<!--                class="border border-secondary rounded p-4 w-full mb-4 bg-transparent"-->
<!--            >-->
<!--              <h4 class="mb-1 inline-block font-bold w-full">-->
<!--                Availability-->
<!--              </h4>-->
<!--              <label class="mr-3">Daily Times Set:</label>-->
<!--              <span class="mx-2 inline-block">-->
<!--                        <ClockIcon class="inline-block mr-1"/> 10:20 am-->
<!--                    </span>-->
<!--              <span class="mx-2 inline-block">-->
<!--                        <ClockIcon class="inline-block mr-1"/> 1:00 pm-->
<!--                    </span>-->
<!--              <span class="mx-2 inline-block">-->
<!--                        <ClockIcon class="inline-block mr-1"/> 3:00 pm-->
<!--                    </span>-->
<!--            </div>-->
<!--            <Button-->
<!--                secondary-->
<!--                size="sm"-->
<!--                class="float-right capitalize"-->
<!--            >+ New-->
<!--            </Button-->
<!--            >-->
<!--            <Button-->
<!--                ghost-->
<!--                size="sm"-->
<!--                class="float-right mr-2 capitalize"-->
<!--            >Edit-->
<!--            </Button-->
<!--            >-->
<!--          </div>-->
<!--          <div class="divider"></div>-->
<!--          <div-->
<!--              class="col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-span-1"-->
<!--          >-->
<!--            <h4 class="mb-4 inline-block w-full">Notes</h4>-->
<!--            <textarea-->
<!--                name="notes"-->
<!--                rows="6"-->
<!--                class="neutral-input rounded w-full mb-4"-->
<!--            ></textarea>-->
<!--            <div class="text-center">-->
<!--              <Button-->
<!--                  ghost-->
<!--                  size="sm"-->
<!--                  class="mr-2 capitalize"-->
<!--              >Cancel-->
<!--              </Button-->
<!--              >-->
<!--              <Button-->
<!--                  secondary-->
<!--                  size="sm"-->
<!--                  class="capitalize"-->
<!--              >Save-->
<!--              </Button-->
<!--              >-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->

    </div>
  </div>
</template>


<script>
export default {
  name: "index"
}
</script>

<style scoped>
.page-setting-container {
  @apply py-4 w-full h-fit;
}

.page-border {
  @apply border border-secondary rounded-2xl;
}

input {
  @apply h-9 rounded mt-3 w-full pl-2;
  min-width: 16rem;
}

input:focus {
  @apply outline-none;
}

.secondary-input {
  @apply bg-secondary;
}

.neutral-input {
  @apply bg-base-content/20;
}

.readonly-input {
  @apply bg-transparent text-base-content/50;
}

.outline-input {
  @apply bg-transparent border border-secondary;
}

.divider {
  @apply border-b-2 h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
}

/*}*/
</style>

<script setup>
import {ref} from 'vue';
import {MembersIcon} from "@/components/icons";

const form = ref({
  username: 'kevinbuchanan@email.com',
});
const profileBasic = [
  {
    key: 'first_name',
    label: 'First Name',
    class: 'neutral-input rounded-xl',
    required: true
  },
  {
    key: 'middle_name',
    label: 'Middle Name',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'last_name',
    label: 'Last Name',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'birthday',
    label: 'Date of Birth',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'gender',
    label: 'Gender',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'username',
    label: 'Username',
    class: 'readonly-input rounded-xl',
    required: false,
  },
  {
    key: 'email',
    label: 'Email',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'altenrate_email',
    label: 'Personal Email',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'phone',
    label: 'Mobile',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'employee_id',
    label: 'Employee I.D. Number',
    class: 'neutral-input rounded-xl',
    required: false,
  },
  {
    key: 'manager',
    label: 'Manager',
    class: 'neutral-input rounded-xl',
    placeholder: 'Search Manager',
    required: false,
  },
];

const location = [
  {
    key: 'address',
    label: 'Address',
    class: 'neutral-input',
    span: 3,
  },
  {
    key: 'city',
    label: 'City',
    class: 'neutral-input',
  },
  {
    key: 'state',
    label: 'State',
    class: 'neutral-input',
  },
  {
    key: 'zip',
    label: 'Zip',
    class: 'neutral-input',
  },
];

const sections = [
  {
    key: 'profileBasic',
    data: profileBasic,
  },
  // {
  //   key: 'location',
  //   data: location,
  // },
];
const departments = [
  {
    value: 1,
    label: 'Operations',
  },
  {
    value: 2,
    label: 'Memberships',
  },
  {
    value: 3,
    label: 'Group Fitness',
  },
];
const uploadPopUp = ref(false);
</script>

