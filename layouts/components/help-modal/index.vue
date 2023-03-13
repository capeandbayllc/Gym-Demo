<template>
	<div class="helpbot-container gradient-bg ">
		<div class="flex flex-col">
            <div class="m-auto">
				<font-awesome-icon  class="hover-icon w-4 h-4 -lg:w-4 -lg:h-4 border rounded-full p-3  " :icon="['fas', 'fa-message-bot']" />
				
			</div>
			<div class="text-center">
				HelpBot
			</div>
			<input type="text" placeholder="search" class="help-search ">
        </div>
		<div class="action-block">
			<div class="action-part" v-for="(item,index) in actionFirstRowData" :key="index">
				<div :class="[item.id==2?'border-r-2 border-l-2 px-2 action-border border-b-2':'border-b-2 action-border',item.id==1?'ml-2':'',item.id==3?'mr-2':'']">
					<help-actions :id="item.id" :title="item.title" :description="item.description"/>
				</div>
			</div>
		</div>
		<div class="action-block">
			<div class="action-part" v-for="(item,index) in actionSecondRowData" :key="index">
				<div :class="[index==1?'border-r-2 border-l-2 px-2 action-border':'',index==0?'ml-2':'',index==2?'mr-2':'']">
					<help-actions :id="item.id" :title="item.title" :description="item.description"/>
				</div>
			</div>
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
import HelpActions from './help-actions.vue'

const actionFirstRowData=[       //first row data
	{
		id:1,
		title:"Getting Started",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon:['fas', 'fa-message-bot']
	},
	{	id:2,
		title:"Profile Preferences",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon:['fas', 'fa-message-bot']
	},
	{	id:3,
		title:"Username & Password",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon:['fas', 'fa-message-bot']
	},
];
const actionSecondRowData=[        //second row data
	{	id:1,
		title:"Getting Started",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon:['fas', 'fa-message-bot']
	},
	{	id:2,
		title:"Profile Preferences",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon:['fas', 'fa-message-bot']
	},
	{	id:3,
		title:"Username & Password",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		icon:['fas', 'fa-message-bot']
	},
]

library.add(far,fas)

</script>
<style scoped>
.helpbot-container{
	@apply fixed z-20 rounded-xl border-sky-700 border-2;
        position: relative; 
        padding: 6px;
}
.action-block{
	@apply flex flex-row;
	width: 40rem;
	border-color:#0075C9;
}
.action-part{
	@apply inline justify-center items-center m-auto;
}
.help-search{
	@apply rounded-md w-1/2 m-auto hover:text-sm hover:h-5 pl-3 hover:placeholder-opacity-0;
	background-color: #0075C9;
}
.action-border{
	border-color: #0075C9;
}
.help-search:hover{
	placeholder-opacity: 0;
}
</style>