<template>
   <div class="inline">
        <div class="flex m-auto w-full pt-4 items-center justify-center">
            <font-awesome-icon class=" action-icon  " :icon="icon" />
        </div>
        <div class="text-sm text-center py-2">
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

        {   
            icon:[String],
            id:Number,
            title: String,
            description: String,
        }
    )
</script>
<style scoped>
.text-extra-small{
    @apply h-20 px-6 text-center;
    font-size: 0.438rem;

}
.action-icon{
    @apply w-6 h-6 -lg:w-5 -lg:h-5 border rounded-full p-3 bg-white;
    color: #0075C9;
}
</style>
