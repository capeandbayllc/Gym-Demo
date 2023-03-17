<!-- TODO: Remains:-->
<!-- TODO: 1. i) VVI: TOP IMAGE: MAY BE POSITIONING (from left side): need more specific image-->
<!-- TODO: ii) toggle image-->
<!-- TODO: iii) if possible upload-->

<!-- TODO: 2. basic info-->
<!-- TODO: i) responsive checking for ipad screen -->
<!-- TODO: ii) Search manager (have some questions here????) (how will it work):-->
<!-- TODO: ix) Cancel / Save hover???-->
<!-- TODO: UPTO HERE: NOW ALL RESPONSIVE CHECK & Save Success -->

<!-- TODO: 3. Update password-->
<!-- TODO: 4. Login related-->
<!-- TODO: 5. Attachment-->
<!-- TODO: 6. Salary-->
<!-- TODO: 7. Hierchy-->
<template>
  <div class="page-setting-container">
    <!--    PROFILE IMAGE SECTION-->
    <div class="col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-span-1 relative flex justify-center">
      <img
          src="/user_profile_page_icon.png"
          class="w-60 cursor-pointer"
          @click="uploadPopUp = true"
      />
<!--      <div
          v-if="uploadPopUp"
          class="bg-white absolute p-4 w-[300px] text-right rounded border border-secondary"
      >
        <label class="mb-4 block">
          <UploadIcon
              class="bg-secondary rounded-full text-center relative z-10 text-secondary block mx-auto cursor-pointer"
          />
          <input
              type="file"
              class="absolute z-0 top-0 left-0 hidden"
          />
        </label>
        <Button
            ghost
            size="sm"
            class="text-black"
            @click="uploadPopUp = false"
        >Cancel
        </Button>
        <Button
            secondary
            size="sm"
            @click="uploadPopUp = false"
        >Save
        </Button
        >
      </div>-->
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
              <input :class="item.class" class="mt-3"
                     v-model="form[item.key]"
                     :placeholder="item.placeholder"/>
            </div>
          </div>
        </div>

        <!--    ADD CONNECTION SECTION-->
        <div class="grid grid-cols-12 gap-4 py-2 mt-4">
          <div class="col-start-3 col-span-8 border-2 border-secondary rounded-2xl">

            <div class="mt-4 mr-5 float-right w-12 p-2.5 pl-2 rounded-2xl bg-blue-500">
              <MembersIcon  />
            </div>

            <div class="grid grid-cols-12 p-2 -my-3 mt-3 mb-3">
              <div class="col-start-2 col-span-10">
                <h6 class="pt-5 font-medium text-lg pl-2">Add Connection</h6>
              </div>
            </div>

            <div class="grid grid-cols-12 p-2 mb-5 -mt-3">
              <div class="col-start-2 col-span-10">
                <div class="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 lg:mb-0 md:mb-5">
                  <div class="mb-5">
                    <div class="mb-2">Lead Member to Connect</div>
                    <!-- TODO:  Search key -->
                    <input class="neutral-input rounded-xl"
                           v-model="form['lead-member']"
                           placeholder="Search by last name or email"/>
                  </div>

                  <div class="mb-5">
                    <div class="mb-2">Relationship:</div>
                    <select id="relationship" class="neutral-input rounded-xl"
                            v-model="form['relationship']">
                      <option selected value="0" key="0">Relationship</option>
                      <option
                          v-for="item in relationships"
                          :key="item.id"
                          value="item.id">
                        {{ item.name }}
                      </option>
                    </select>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        <divider />

        <!--   Address SECTION-->
        <div class="grid grid-cols-1 py-2">
          <div class="grid grid-cols-12">
            <div class="col-start-2 col-span-10">
              <div class="py-2"> Address </div>
              <input class="neutral-input rounded-xl " v-model="form.address.address"/>
            </div>
          </div>
        </div>
<!--        <profile-address-setting :formAddress="form.address" @update-form-address="updateAddress" />-->

        <!--   City, State, Zip code SECTION-->
        <div class="grid grid-cols-1 py-2">
          <div class="w-5/6 ml-auto mr-auto mt-2 mb-4">
            <div class="grid grid-cols-12 py-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
              <div class="mb-5 col-span-4 multi-select-input w-full">
                <div class="mb-1.5"> City </div>
                <input class="neutral-input rounded-xl" v-model="form.address.city"/>
              </div>

              <div class="mb-5 col-span-4 multi-select-input w-full">
                <div class="mb-1.5"> State </div>
                <input class="neutral-input rounded-xl" v-model="form.address.state"/>
              </div>

              <div class="mb-5 col-span-4 multi-select-input w-full">
                <div class="mb-1.5"> Zip code </div>
                <input class="neutral-input rounded-xl" v-model="form.address.zipcode"/>
              </div>
            </div>
          </div>
        </div>

        <divider />

        <!--    SOCIAL MEDIA SECTION-->
        <div class="grid grid-cols-12 gap-4 py-2 mt-4">
          <div class="col-start-3 col-span-8 border-2 border-secondary rounded-2xl">

            <div class="grid grid-cols-12 p-2 -my-3 mt-3 mb-3">
              <div class="col-start-2 col-span-10">
                <h6 class="pt-5 font-normal text-lg">Social Media Handles</h6>
              </div>
            </div>

            <div class="grid grid-cols-12 p-2 mb-5 -mt-3">
              <div class="col-start-2 col-span-10">
                <div class="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 lg:mb-0 md:mb-5">
                  <div class="mb-5 rounded-lg overflow-hidden">
                    <input class="neutral-input ml-8" v-model="form.social.instagram"/>
                    <div class="w-9 h-9 mr-3 -mt-9">
                      <img src="/social-icon/instagram.png" class="w-60 cursor-pointer" alt="instagram">
                    </div>
                  </div>

                  <div class="mb-5 rounded-lg overflow-hidden">
                    <input class="neutral-input ml-8" v-model="form.social.twitter"/>
                    <div class="w-9 h-9 mr-3 -mt-9">
                      <img src="/social-icon/twitter.png" class="w-60 cursor-pointer" alt="twitter">
                    </div>
                  </div>

                </div>

                <div class="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 lg:mb-0 md:mb-5">
                  <div class="mb-5 rounded-lg overflow-hidden">
                    <input class="neutral-input ml-8" v-model="form.social.tiktok"/>
                    <div class="w-9 h-9 mr-3 bg-blue-500 -mt-9">
                      <img src="/social-icon/tiktok.png" class="w-60 cursor-pointer" alt="tiktok">
                    </div>
                  </div>

                  <div class="mb-5 rounded-lg overflow-hidden">
                    <input class="neutral-input ml-8" v-model="form.social.youtube"/>
                    <div class="w-9 h-9 mr-3 bg-blue-500 -mt-9">
                      <img src="/social-icon/youtube.png" class="w-60 cursor-pointer" alt="youtube">
                    </div>
                  </div>

                </div>

                <div class="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 lg:mb-0 md:mb-5">
                  <div class="mb-5 rounded-lg overflow-hidden">
                    <input class="neutral-input ml-8" v-model="form.social.snapchat"/>
                    <div class="w-9 h-9 mr-3 bg-blue-500 -mt-9">
                      <img src="/social-icon/snapchat.png" class="w-60 cursor-pointer" alt="snapchat">
                    </div>
                  </div>

                  <div class="mb-5 rounded-lg overflow-hidden">
                    <input class="neutral-input ml-8" v-model="form.social.facebook"/>
                    <div class="w-9 h-9 mr-3 bg-blue-500 -mt-9">
                      <img src="/social-icon/facebook.png" class="w-60 cursor-pointer" alt="Icon">
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        <divider />

        <!-- HOME ROLE DEPT TEAM SECTION -->
        <div class="grid grid-cols-1 pb-2">
          <div class="w-5/6 ml-auto mr-auto mt-2 mb-4">
            <div class="grid grid-cols-12 py-2 -ml-2 gap-4">
              <div class="mb-5 col-span-4 multi-select-input w-full">
                <multi-select-dropdown
                    label="Home Location(s)"
                    v-model="form.homeLocations"
                    mode="multiple"
                    track-by="value"
                    :caret="true"
                    :options="homeLocation"
                ></multi-select-dropdown>
              </div>

              <div class="mb-5 col-span-4 multi-select-input w-full">
                <multi-select-dropdown
                    label="Role(s)"
                    v-model="form.roles"
                    mode="multiple"
                    track-by="value"
                    :caret="true"
                    :options="roles"
                ></multi-select-dropdown>
              </div>

              <div class="mb-5 col-span-4 multi-select-input w-full">
                <multi-select-dropdown
                    label="Department(s)"
                    v-model="form.departments"
                    mode="multiple"
                    track-by="value"
                    :caret="true"
                    :options="departments"
                ></multi-select-dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 ml-0 -mt-12">
          <div class="w-5/6 ml-auto mr-auto mb-4">
            <div class="grid grid-cols-12 pb-2 gap-4">
              <div class="col-span-4  w-full">
                <div class="multi-select-tags">
                  <div class="float-left h-9 bg-secondary rounded-xl px-1.5 mr-2 mt-2 cursor-pointer pt-2 w-max"
                       v-for="value in form.homeLocations" :key="value" @click="removeOption(form.homeLocations, value, 'homeLocations')">
                    {{ getLabel(value, homeLocation) }}
                  </div>
                </div>
              </div>

              <div class="col-span-4 w-full ml-0.5">
                <div class="multi-select-tags">
                  <div class="float-left h-9 bg-secondary rounded-xl px-1.5 mr-2 mt-2 cursor-pointer pt-2 w-max"
                       v-for="value in form.roles" :key="value" @click="removeOption(form.roles, value, 'roles')">
                    {{ getLabel(value, roles) }}
                  </div>
                </div>
              </div>

              <div class="col-span-4 w-full ml-1.5">
                <div class="multi-select-tags">
                  <div class="float-left h-9 bg-secondary rounded-xl px-1.5 mr-2 mt-2 cursor-pointer pt-2 w-max"
                       v-for="value in form.departments" :key="value" @click="removeOption(form.departments, value, 'departments')">
                    {{ getLabel(value, departments) }}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <!-- TEAM SECTION -->
        <div class="grid grid-cols-1 py-2">
          <div class="w-5/6 ml-auto mr-auto mt-10 mb-10">
            <div class="grid grid-cols-12 py-2 -ml-2 gap-4">
              <div class="mb-5 col-span-4 w-full multi-select-input">
                <multi-select-dropdown
                    label="Team(s)"
                    v-model="form.teams"
                    mode="multiple"
                    track-by="value"
                    :caret="true"
                    :options="teams"
                ></multi-select-dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 ml-0 -mt-16">
          <div class="grid grid-cols-12 pb-2">
            <div class="col-span-4 col-start-2 w-8/12">
              <div class="multi-select-tags">
                <div class="float-left h-9 bg-secondary rounded-xl px-1.5 mr-2 mt-2 cursor-pointer pt-2 w-max"
                     v-for="value in form.teams" :key="value" @click="removeOption(form.teams, value, 'teams')">
                  {{ getLabel(value, teams) }}
                </div>
              </div>
            </div>
          </div>

        </div>

        <divider/>


        <!-- CALENDAR ACCESS & AVAILABILITY SECTION -->
        <div class="grid grid-cols-1 py-2">
          <div class="grid grid-cols-12 py-2">
            <div class="col-start-2 col-span-3">

              <div class="grid grid-cols-1 ml-0">
                <h4 class="mb-4 inline-block">
                  Calendar Access <LockIcon class="inline-block ml-3" />
                </h4>
                <multi-select-dropdown
                    :options="calendarDepartments"
                    label="Department(s)"
                    v-model="form.calendarDepartments"
                />
              </div>
              <div class="grid grid-cols-1 ml-0">
                <div class="col-span-12">
                  <div class="float-left h-9 bg-secondary rounded-xl px-1.5 mr-2 mt-2 cursor-pointer pt-2 w-max"
                       v-for="value in form.calendarDepartments" :key="value"
                       @click="removeOption(form.calendarDepartments, value, 'calendarDepartments')">
                    {{ getLabel(value, calendarDepartments) }}
                  </div>
                </div>
              </div>
            </div>
<!--            col-span-2 3xl:col-span-3 -lg:col-span-1 -md:col-auto-->
            <div class="col-start-6 col-span-6">
              <div class="border-2 border-secondary rounded-2xl p-12 pr-8 w-full mb-4 bg-transparent">

                <div class="grid grid-rows-2">
                  <div>
                    <h4 class="mb-1 inline-block font-bold w-full"> Availability </h4>
                  </div>

                  <div>
                    <div class="grid grid-cols-12">
                      <div class="col-span-3 lg:col-span-3 md:col-span-4">
                        <label class="mr-3">Daily Times Set:</label>
                      </div>
                      <div class="col-span-9 lg:col-span-9 md:col-span-8">
                        <span class="availability-time-span">
                          <BlueClockIcon class="inline-block mr-1"/> 10:20 am
                        </span>
                        <span class="availability-time-span">
                          <BlueClockIcon class="inline-block mr-1"/> 1:00 pm
                        </span>
                        <span class="availability-time-span">
                          <BlueClockIcon class="inline-block mr-1"/> 3:00 pm
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Button secondary
                      size="sm"
                      class="float-right capitalize rounded-xl font-light text-base">
                + New
              </Button>
              <Button ghost
                      size="sm"
                      class="float-right mr-2 capitalize rounded-xl font-light">
                <span class="text-base text-gray-500 hover:text-blue-400">Cancel</span>
              </Button>
            </div>

          </div>

        </div>

        <divider />

        <!-- NOTES SECTION -->
        <div class="grid grid-cols-1 py-2">
          <div class="grid grid-cols-12 py-2">
            <div class="col-start-2 col-span-10">
              <h4 class="mb-4 inline-block w-full">Notes</h4>
              <textarea
                  name="notes"
                  rows="6"
                  class="neutral-input rounded-2xl w-full mb-4">
              </textarea>
            </div>

          </div>
        </div>

        <!-- Save section -->
        <div class="grid grid-cols-1 pt-2 pb-8">
          <div class="grid grid-cols-1 justify-items-center">
            <div class="text-center">
              <Button
                  ghost
                  size="sm"
                  class="mr-2 capitalize ">
                <span class="text-light text-gray-500 hover:text-blue-400">Cancel</span>
              </Button>
              <Button
                  secondary
                  size="sm"
                  class="capitalize rounded-xl font-light">
                Save
              </Button>
            </div>
          </div>
        </div>

      </div>

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

input, select, option {
  @apply h-9 w-full pl-2 min-w-min;
}

.multi-select-input {
  @apply h-9 rounded pl-2;
}
#relationship option {
  background-color: #333;
}

#relationship option:hover {
  background-color: #333
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

input:hover {
  background-color: #0075C9;
}

.availability-time-span {
  @apply mx-2 inline-block mb-2;
}

</style>

<script setup>
import {ref} from 'vue';
import '@vueform/multiselect/themes/default.css'
import {MembersIcon, LockIcon, BlueClockIcon} from "@/components/icons";
import Divider from "./components/divider";
import MultiSelectDropdown from "./components/multi-select-dropdown";

const form = ref({
  username: 'kevinbuchanan@email.com',
  relationship: 0,
  address: {
    address: '',
    city: '',
    state: '',
    zipcode: '',
  },
  social: {
    instagram: '',
    twitter: '',
    tiktok: '',
    youtube: '',
    snapchat: '',
    facebook: ''
  },
  homeLocations:  [],
  roles: [],
  departments: [],
  teams: [],
  calendarDepartments: [],
  notes: "",
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

const relationships = [
  {
    id: 1,
    name: 'Relationship 1',
  },
  {
    id: 2,
    name: 'Relationship 2',
  },
  {
    id: 3,
    name: 'Relationship 3',
  },
  {
    id: 4,
    name: 'Relationship 4',
  },
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

const homeLocation = [
  {
    value: 1,
    label: 'Club 1'
  },
  {
    value: 2,
    label: 'Club 2'
  },
  {
    value: 3,
    label: 'Club 3'
  },
  {
    value: 4,
    label: 'Club 4'
  },
];

const roles = [
  {
    value: 1,
    label: "Front Source"
  },
  {
    value: 2,
    label: "Lead Source"
  },
  {
    value: 3,
    label: "Trash"
  },
  {
    value: 4,
    label: "Sales"
  }
];

const teams = [
  {
    value: 1,
    label: "Team 1"
  },
  {
    value: 2,
    label: "Team 2"
  },
  {
    value: 3,
    label: "Team 3"
  },
  {
    value: 4,
    label: "Team 4"
  },
  {
    value: 5,
    label: "Front Source"
  },
  {
    value: 6,
    label: "Lead Source"
  },
  {
    value: 7,
    label: "Trash"
  },
  {
    value: 8,
    label: "Sales"
  }
];

const calendarDepartments = [
  {
    value: 1,
    label: 'Operations',
  },
  {
    value: 2,
    label: 'Personal Trainings',
  },
  {
    value: 3,
    label: 'Group Fitness',
  },
  {
    value: 4,
    label: 'Lead Sources',
  },
];

const uploadPopUp = ref(false);

const updateAddress = formData => {
  form.value.address = formData;
  console.log('details form: ', form);
};

const getLabel = (value, options) => {
  return options.filter(item => item.value === value)[0].label;
};

const removeOption = (formValue, value, key) => {
  formValue = formValue.filter(item => item != value);
  form.value[key] = formValue;
};

</script>

