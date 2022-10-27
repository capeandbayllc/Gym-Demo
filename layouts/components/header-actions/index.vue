<template>
	<div class="header-actions">
		<Button outline size="sm"><pos-icon />POS</Button>
		<Button outline size="sm"><people-icon />People</Button>
		<alarm-btn />
		<person-add-icon />
		<setting-icon />
		<question-round-icon />
		<account-btn />
	</div>
</template>
<style>
.header-actions {
	@apply flex items-center justify-end space-x-9 mr-8;
	> button svg {
		@apply mr-1;
	}
	svg {
		@apply cursor-pointer;
	}
}
</style>
<script setup>
import { PosIcon, PeopleIcon, PersonAddIcon, SettingIcon, QuestionRoundIcon } from "@/components/icons"
import AlarmBtn from "./alarm-btn.vue"
import AccountBtn from "./account-btn.vue"
</script>