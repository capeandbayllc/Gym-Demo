<template>
   <div class="p-1">
        <font-awesome-icon class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3 " :icon="['fas', 'fa-message-bot']" />
        <div class="text-xl text-center">
            {{title}}
        </div>
        <div class="text-extra-small">
            {{description}}
        </div>
   </div>
</template>
<script setup>
import {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome'
import {far} from '@fortawesome/pro-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/pro-solid-svg-icons'
import {ref} from 'vue'
library.add(far,fas)
const props = defineProps(
        {   id:Number,
            title: String,
            description: String,
        }
    )
</script>
<style scoped>
.text-extra-small{
    @apply h-20 px-10;
    font-size: 0.438rem;

}
</style>
