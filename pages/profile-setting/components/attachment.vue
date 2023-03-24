<template>
    <div class="mx-auto mt-20 md:w-3/4 lg:w-4/5">
      <div class="mb-5 ml-1">
        <h5 class="text-lg font-medium">
          Attachment <LockIcon class="inline-block ml-2 -mt-1"/>
        </h5>
      </div>
      <div class="gradient-bg p-4 page-border ">
        <div class="bg-black page-border">
          <left-arrow-circle-icon direction="left" class="h-fit cursor-pointer left-icon"
                                  @click="LeftArrowClick"/>

          <div class="slide-docs flex">

            <div class="docs-list flex justify-items-center">
              <div v-for="item in attachmentData" :key="item.id" class="member-doc w-3/5 h-3/5">
                <div class="title-text">
                  <h5>{{item.title}}</h5>
                </div>
                <img :src="item.imageUrl" alt="item.name" class="mb-2" />
                <div class="grid grid-cols-1 pt-2 pb-8">
                  <div class="grid grid-cols-1 justify-items-center">
                    <div class="text-center">
                      <Button ghost size="sm"
                              class="mr-2 capitalize hover:bg-transparent">
                        <span class="text-light text-gray-500 hover:text-blue-400">Edit</span>
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
          <right-arrow-circle-icon direction="right" class="h-fit right-icon" @click="RightArrowClick"/>

        </div>
      </div>

    </div>

</template>

<script>
export default {
  name: "attachment",
  methods: {
    LeftArrowClick(event){
      var scroll_doc = event.srcElement;
      while( !scroll_doc.classList.contains('slide-docs') ){
        scroll_doc = scroll_doc.parentNode;
      }
      var doc_list = scroll_doc.querySelector('.docs-list');
      doc_list.scrollLeft -= 50;
    },
    RightArrowClick(event){
      var scroll_doc = event.srcElement;
      while( !scroll_doc.classList.contains('slide-docs') ){
        scroll_doc = scroll_doc.parentNode;
      }
      var doc_list = scroll_doc.querySelector('.docs-list');
      doc_list.scrollLeft += 50;
    }

  }
}
</script>

<style scoped>

.page-border {
  @apply border border-secondary rounded-2xl;
}

.right-icon {
  position: absolute; left: 86%; top: 70%;
  cursor: pointer;
}

.left-icon {
  position: absolute;
  top: 70%;
  left: 12%;
  cursor: pointer;
}

.slide-docs{
  border-radius: 8px;
  padding: 2rem 0rem 2rem 4rem;
  margin-top: 15px;
}
.member-doc{
  width: 360px;
  height: 360px;
}

.docs-list{
  width : 100%;
  overflow-x: scroll;
  transition : all 0.3s;
  margin : 0 10px;
  gap: 6rem;
  height: 60vh;
}

.docs-list::-webkit-scrollbar{
  display: none;
}

.docs-list img {
  @apply h-max w-max;
}

.title-text {
  @apply text-white text-lg font-medium text-center;
}

@media (max-width: 1366px) {
  .docs-list{
    height: 45vh;
  }

  .slide-docs{
    padding-left: 0;
  }
}

@media (max-width: 1200px) {

  .right-icon {left: 85%; top: 72%;}

  .left-icon { left: 13%; top: 72%; }

  .docs-list{
    height: 51vh;
  }

}

@media (max-width: 1100px) {

  .right-icon, .left-icon { top: 70%; }

  .docs-list{
    height: 22rem;
  }

  .title-text {
    font-size: 14px;
  }

}

@media (max-width: 900px) {

  .right-icon { top: 74%; left: 80%}

  .left-icon { top: 74%; left: 16%}

  .docs-list{
    height: 24vh;
  }

  .title-text {
    font-size: 14px;
    min-height: 4rem;
  }

}

@media (max-width: 780px) {
  .docs-list{
    height: 30vh;
  }
}

</style>

<script setup>

import {LeftArrowCircleIcon, RightArrowCircleIcon, LockIcon} from "~~/components/icons";

const attachmentData = [
  {
    id: 1,
    name: "certifications",
    title: "Certifications",
    imageUrl: "/certifications.png",
  }, {
    id: 2,
    name: "offerLetter",
    title: "Offer Letter for Employment",
    imageUrl: "/offer_letter.png",
  }, {
    id: 3,
    name: "promotion",
    title: "Promotion Documentation",
    imageUrl: "/promotional.png",
  }
]

</script>
