<template>
	<div class="relative  h-screen w-screen ">
		<div class="justify center item center m-auto">
                <font-awesome-icon  class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3  " :icon="['fas', 'fa-plus-circle']" />
        </div>
	</div>
</template>
<style scoped>

</style>
<script setup>

import {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome'
import {far} from '@fortawesome/pro-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/pro-solid-svg-icons'
import {ref} from 'vue'

library.add(far,fas)

//import PulseSummary from './help-actions.vue'
</script>