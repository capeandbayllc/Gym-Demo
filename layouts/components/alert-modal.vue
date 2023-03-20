<template>
  <card
      :showTitleContainer="false"
      class="global-search-popup-card gradient-bg"
      :options="{
          collapse: false,
          favorite: false,
      }"
  >

      
      
      <template #content>
          <div class="global-search-popup-container">
              <div class="md:flex items-center justify-between gap-4 px-6 pb-2">
                  <div class="mb-[12px]">
                      <div class="search-icon" :class="{
                          'text-secondary': openSearchInput,
                          'text-white': !openSearchInput,
                      }">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15.026" height="14.967" viewBox="0 0 15.026 14.967">
                              <path fill="currentColor" id="search_icon" data-name="search icon" d="M415.835,566.937l-2.582-2.515h0l-.061-.092a.61.61,0,0,0-.854,0h0a6.115,6.115,0,0,1-7.9.254,5.729,5.729,0,0,1-1.282-7.6,6.081,6.081,0,0,1,7.571-2.22,5.784,5.784,0,0,1,3.241,7.021.581.581,0,0,0,.137.578.619.619,0,0,0,.581.174.6.6,0,0,0,.446-.4h0a6.974,6.974,0,0,0-3.757-8.417,7.347,7.347,0,0,0-9.111,2.352,6.9,6.9,0,0,0,1.022,9.124,7.379,7.379,0,0,0,9.418.385l2.287,2.227a.617.617,0,0,0,.854,0,.585.585,0,0,0,.009-.83l-.009-.008h0Z" transform="translate(-400.993 -553.013)"/>
                          </svg>
                      </div>
                      <input
                          type="text"
                          placeholder="Search"
                          class="search-input"
                          @focusin="changeOpenSearchInput(true)"
                          @focusout="changeOpenSearchInput(false)"
                          v-model="searchInput"
                      />
                  </div>
                  <div @click="changeOpenFilters" class="filters-button" :class="{
                      'open-filters' : openFilters===true,
                      'close-filters' : openFilters===false,
                      'cursor-pointer' : !openFilters}"
                  >
                      <button class="text-secondary cursor-pointer" @click="closeOpenFilters">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10.59" height="17.795" viewBox="0 0 10.59 17.795">
                              <path fill="currentColor" id="arrow_dow_copy" data-name="arrow dow copy" d="M1076.446,558.4a1.457,1.457,0,0,1,1.918-.144l.165.144,6.384,6.548,6.384-6.548a1.458,1.458,0,0,1,1.918-.144l.165.144a1.509,1.509,0,0,1,.143,1.944l-.143.167-7.425,7.6a1.457,1.457,0,0,1-1.918.144l-.165-.144-7.425-7.6A1.509,1.509,0,0,1,1076.446,558.4Z" transform="translate(568.554 -1076.015) rotate(90)"/>
                          </svg>
                      </button>
                      <span v-if="!openFilters" class="px-[30px]">
                          Filters
                      </span>
                      <people-search-action v-else
                          @peopleSearchActionSelected="filterSelected"
                      ></people-search-action>
                  </div>
              </div>
              <div class="px-6 flex">
                <div class="call-type">
                  Call type
                  <arrow-icon direction="up" />
                </div>
              </div>
              <search-list
                  :filter="tblFilter"
                  @row-clicked="clickRow"
              ></search-list>
          </div>
      </template>
  </card>
</template>
<script setup>
import PeopleSearchAction from "~~/pages/people-search/components/people-search-action.vue";
import SearchList from "~~/pages/people-search/components/search-list.vue";
import { ArrowIcon } from "~~/components/icons";


const props = defineProps({
  currentPage: {
      type: String,
      default: "",
  },
});
const emit = defineEmits(["row-clicked"]);

const clickRow = (data) => {
  emit("row-clicked", data);
};

const openSearchInput = ref(false);
const changeOpenSearchInput = (value) => {
  openSearchInput.value = value;
};

const openFilters = ref('');
const closeOpenFilters = (value) => {
  if(openFilters.value==true){
      setTimeout(()=>{
          openFilters.value = false;
      },1)
  }
};

const changeOpenFilters = (value) => {
  if(!openFilters.value){
      openFilters.value = true;
  }
};
const searchInput = ref("");    
const tblFilter = ref(null);

const filterSelected = (value) => {
  tblFilter.value = value;
};

</script>
<style scoped>

.call-type{
  @apply bg-secondary text-white flex items-center px-3 h-[37px] w-[165px] rounded-[14px] justify-between;
}
.global-search-popup-card {
@apply rounded-2xl bg-neutral;
.global-search-popup-container {
  @apply pl-2 pr-2 pt-6 pb-6;
  .modal_scroll {
    @apply overflow-y-auto;
    height: 60vh;
  }
}
}

.search-input::placeholder{
  @apply text-white font-light;
}
.search-input{
  @apply pl-[45px] text-white input w-full bg-primary rounded-[19px] w-full md:w-[427px] h-[50px];
}

.search-input:focus{
  @apply outline-none border-[2px] border-secondary bg-white text-secondary;
}
.search-icon {
  @apply relative top-[31px] left-[18px] w-0;
}


.filters-button{
  @apply flex items-center justify-start px-[10px] py-[9px] border-[2px] border-secondary text-white rounded-[19px] w-[135px] min-h-[50px] ml-auto;
  background-color: #415b6e;
}

@keyframes open-filters-animation {
  from {
      @apply w-[135px];
  }
  to {
      @apply w-full;
  }
}

.open-filters {
  @apply bg-white text-black;
  animation-name: open-filters-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes svg-open-filters-animation {
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(180deg);
  }
}

.open-filters svg {
animation-name: svg-open-filters-animation;
animation-duration: 0.5s;
animation-fill-mode: forwards;
}

@keyframes close-filters-animation {
  from {
      @apply w-full;
  }
  to {
      @apply w-[135px];
  }
}

.close-filters {
animation-name: close-filters-animation;
animation-duration: 0.5s;
animation-fill-mode: forwards;
}

@keyframes svg-close-filters-animation {
  from {
      transform: rotate(180deg);
  }
  to {
      transform: rotate(0deg);
  }
}
.close-filters svg{
  animation-name: svg-close-filters-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes toggle-animation {
  from {
      @apply text-secondary;
  }
  to {
      @apply text-gray-400;
  }
}
</style>
