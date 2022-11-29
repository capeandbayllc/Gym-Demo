<template>
	<div class="header-actions">
		<Button outline size="sm" class="hover:text-secondary"><pos-icon />POS</Button>
		<Button outline size="sm" class="hover:text-secondary"
			@click="$emit('show-people-search')"
		>
			<people-icon />People
		</Button>
		<div class="alert-container">
			<alarm-btn />
			<alert-list class="alert-list"/>
		</div>
		<div class="relative">
			<person-add-icon @click="showUserMenu"/>
			<user-add-menu ref="userMenu"/>
		</div>
		<setting-icon class="setting-icon" />
		<question-round-icon
			@click="$emit('show-help')"
		/>
		<account-btn
			@click="$emit('show-profile-menu')"
		/>
	</div>
</template>
<style>
	.alert-container:hover svg{
		@apply rotate-12;
	}
	.alert-container:hover .notification{
		@apply -right-2 left-auto z-10 ease-linear; 
	}
	.person-add-icon:hover path{
		@apply opacity-100;
	}
	.setting-icon:hover{
		animation: spin 1s linear 0.5; opacity: 0.5;
	}
	
</style>
<style scoped>
.header-actions {
	@apply flex items-center justify-end space-x-9 mr-8;
	> button svg {
		@apply mr-1;
	}
	svg {
		@apply cursor-pointer;
	}
}
.alert-container:hover .alert-list {
	@apply block;
}
.alert-container {
	@apply relative;
	.alert-list {
		@apply absolute z-20 hidden;
		right: -8rem;
	}
}
</style>
<script setup>
import {ref} from "vue"
import { PosIcon, PeopleIcon, PersonAddIcon, SettingIcon, QuestionRoundIcon } from "@/components/icons"
import AlarmBtn from "./alarm-btn.vue"
import AccountBtn from "./account-btn.vue"
import AlertList from "./alert-list.vue"
import HelpBot from "../help-bot/index.vue"
import UserAddMenu from "./user-add-menu.vue"

const userMenu = ref(null)

const showUserMenu = () => userMenu.value.open()
</script>