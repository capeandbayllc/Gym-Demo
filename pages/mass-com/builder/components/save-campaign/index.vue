<template>
  <div class="save-campaign-container">
    <div class="campaign-day-block">
      <p class="text-xs w-full">Build your drip campaign by day</p>
      <div class="campaign-day-list">
        <div class="flex flex-row max-w-full">
          <div class="campaign-day-item" v-for="item in campaign_items">
            <div
              class="flex flex-col items-center"
              :class="{
                'opacity-50': item.status == 'inactive',
              }"
            >
              <div class="outline-block">Day {{ item.day }}</div>
              <div class="line"></div>
              <div class="type-block">
                <div
                  class="type-icon"
                  :class="{ active: item.types.email }"
                  @click.stop="toggleDayType('email', item.day)"
                >
                  <font-awesome-icon :icon="['far', 'envelope']" size="xl" />
                  <p>email</p>
                </div>
                <div
                  class="type-icon"
                  :class="{ active: item.types.sms }"
                  @click.stop="toggleDayType('sms', item.day)"
                >
                  <font-awesome-icon :icon="['far', 'message']" size="xl" />
                  <p>sms</p>
                </div>
                <div
                  class="type-icon"
                  :class="{ active: item.types.call }"
                  @click.stop="toggleDayType('call', item.day)"
                >
                  <font-awesome-icon :icon="['far', 'phone']" size="xl" />
                  <p>call</p>
                </div>
              </div>
              <div class="line"></div>
              <div class="outline-block">Performance</div>
              <div class="outline-block">Conversions</div>
            </div>
            <div
              class="flex flex-col justify-center items-center px-3 max-w-[100px] mb-6"
              @click.stop="addDayItem(item.day)"
            >
              <add-line-icon />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-6 justify-center">
      <Button
        hover-secondary
        hoverIcon
        size="xs"
        class="rounded-full normal-case pl-3"
        @click.stop="openEmailbuilderModal"
      >
        Save The Campaign
        <right-arrow-icon class="ml-2" />
      </Button>
    </div>

    <div class="flex mt-2">
      <span
        @click.stop="$emit('back', 'select-templates')"
        class="text-secondary cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', 'angle-left']" size="sm" />
        <a class="text-xs ml-1" @click.stop="$emit('next-page', 'lead-sources')"
          >Back</a
        >
      </span>
    </div>

    <daisy-modal ref="emailBuiderModalRef">
      <email-builder-modal
        @close="closeEmailBuilderModal"
        @next-page="openSaveCampaignFormModal"
      />
    </daisy-modal>

    <daisy-modal ref="saveCampaignFormModalRef">
      <save-campaign-form-modal
        @close="closeSaveCampaignFormModal"
        @next-page="openSuccessMessageModal"
      />
    </daisy-modal>

    <daisy-modal ref="successMessageModalRef">
      <success-message-modal @close="closeSuccessMessageModal" />
    </daisy-modal>
  </div>
</template>

<style scoped>
.save-campaign-container {
  @apply flex flex-col flex-auto justify-center max-w-full;
  .campaign-day-block {
    @apply flex flex-col border border-white rounded-lg p-4 text-xs self-center w-full;
  }
  .campaign-day-list {
    @apply flex flex-row mt-3 overflow-y-auto;
  }
  .campaign-day-item {
    @apply flex flex-row;
    .outline-block {
      @apply inline-flex border border-secondary rounded-lg p-1 mt-1 w-max;
    }
    .type-block {
      @apply flex flex-row text-[8px];
    }
    .type-icon {
      @apply p-1 border hover:bg-green-700/50 text-center cursor-pointer ml-1 w-8;
    }
    .type-icon.active {
      @apply bg-green-700/50 border border-green-700;
    }
    .type-icon.active + .type-icon.active {
      @apply ml-0 border-l-0;
    }
  }
  .line {
    @apply h-[30px] border border-white my-1;
  }
}
</style>

<script setup>
import AddLineIcon from "~/pages/mass-com/builder/components/add-line-icon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import RightArrowIcon from "~/components/icons/arrow.vue";
import EmailBuilderModal from "../email-builder/index.vue";
import SaveCampaignFormModal from "../save-campaign-form/index.vue";
import SuccessMessageModal from "../success-message/index.vue";

library.add(faEnvelope, faMessage, faPhone);

const emailBuiderModalRef = ref(null);
const saveCampaignFormModalRef = ref(null);
const successMessageModalRef = ref(null);

const campaign_items = ref([
  {
    day: 0,
    types: {
      email: 1,
      sms: 1,
      call: 1,
    },
    status: "active",
  },
  {
    day: 1,
    types: {
      email: 0,
      sms: 0,
      call: 0,
    },
    status: "inactive",
  },
]);

const openEmailbuilderModal = () => {
  emailBuiderModalRef.value.open();
};
const closeEmailBuilderModal = () => {
  emailBuiderModalRef.value.close();
};

const openSaveCampaignFormModal = () => {
  closeEmailBuilderModal();
  saveCampaignFormModalRef.value.open();
};
const closeSaveCampaignFormModal = () => {
  saveCampaignFormModalRef.value.close();
};

const openSuccessMessageModal = () => {
  closeSaveCampaignFormModal();
  successMessageModalRef.value.open();
};
const closeSuccessMessageModal = () => {
  successMessageModalRef.value.close();
};

const addDayItem = (day) => {
  day = day + 1;
  let items = campaign_items.value;

  const hasItem = items.find((i) => i.day == day);

  if (hasItem) {
    items.map((i) => {
      if (i.day == day) {
        i.status = "active";
      }

      return i;
    });
  } else {
    const newItem = {
      day: day,
      types: {
        email: 0,
        sms: 0,
        call: 0,
      },
      status: "active",
    };

    items.push(newItem);
  }

  campaign_items.value = items;
};

const toggleDayType = (type, day) => {
  const day_obj = campaign_items.value.find((i) => i.day == day);

  if (day_obj.status == "inactive") return;

  campaign_items.value.map((item) => {
    if (item.day == day) {
      item.types[type] = !item.types[type];
    }

    return item;
  });
};
</script>
