<template>
  <tr class="people-member-tbl-row">
    <td>{{ data.created_at }}</td>
    <td>{{ data.first_name }}</td>
    <td>{{ data.last_name }}</td>
    <td class="px-4">{{ data.primary_phone }}</td>
    <td class="px-4">{{ data.email }}</td>
    <td>{{ data.location }}</td>
    <td>
      <membership-btn :membership="data.type" />
    </td>
    <td>
      <addon-btn :value="data.addOns" class="!rounded-full" />
    </td>
    <td>
      <div class="dropdown dropdown-end">
        <div
          class="btn btn-ghost btn-sm text-base-content"
          tabindex="0"
          @click.prevent.stop
        >
          <font-awesome-icon icon="ellipsis-h" size="lg" />
        </div>
        <!-- <div class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start">
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1"  @click.stop="openEmailModal">+ Email</div>
                    <div class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary" tabindex="-1" @click.stop="outgoingCall">+ Call</div>
                </div> -->
        <div
          class="dropdown-content menu p-2 shadow bg-black rounded w-52 items-start"
        >
          <div class="dropdown-item" tabindex="-1">Preview</div>
          <div class="dropdown-item" tabindex="-1">
            <NuxtLink :to="{ path: '/check-in/' +  data.id }" >Edit</NuxtLink>
          </div>
          <div class="dropdown-item" tabindex="-1">Trash</div>
          <div class="" tabindex="-1">
            <div class="dropdown dropdown-left dropdown-end dropdown-hover contact-menu">
              <div class="dropdown-item" tabindex="0" @click.prevent.stop>
                Contact Member
              </div>
              <div class="dropdown-content menu p-2 shadow bg-black rounded w-40 items-start hidden">
                <Button outline size="sm" class="my-1 border-primary" @click.stop="contactOption = 'text'">Text</Button>
                <Button outline size="sm" class="my-1 border-primary" @click.stop="contactOption = 'email'">Email</Button>
                <Button outline size="sm" class="my-1 border-primary" @click.stop="contactOption = 'call'">Call</Button>
              </div>
            </div>
          </div>
          <div class="dropdown-item" tabindex="-1">Add a Note</div>
        </div>
      </div>

      <Options :show="contactOption" @on:close="contactOption = null" />
    </td>
  </tr>
</template>
<style scoped>
.dropdown-item {
  @apply hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block my-1 border-primary px-2 py-1 cursor-pointer text-secondary
}
.contact-menu:hover .dropdown-content {
  display: inline-grid !important;
}
.people-member-tbl-row {
  @apply bg-base-100 h-14;

  td {
    @apply border-y-2 border-secondary text-center px-4;
  }
  td:first-child {
    @apply border-l-2 rounded-l;
  }
  td:last-child {
    @apply border-r-2 rounded-r;
  }
  .type-bronze {
    @apply border border-white;
  }
  .type-silver {
    @apply bg-orange-400;
  }
  .type-gold {
    @apply bg-yellow-400;
  }
  .type-platinum {
    @apply bg-orange-400;
  }
}
</style>
<script setup>
import MembershipBtn from "~~/components/buttons/membership-btn.vue";
import AddonBtn from "~~/components/buttons/addon-btn.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Options from "~/pages/components/contact/Options.vue";

library.add(faEllipsisH);
const props = defineProps({
  data: Object,
});
const contactOption = ref(null);
</script>
