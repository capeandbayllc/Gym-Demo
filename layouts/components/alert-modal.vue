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
