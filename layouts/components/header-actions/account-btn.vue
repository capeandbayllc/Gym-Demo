<template>
	<div class="bg-no-repeat relative h-16 w-44" :class="{'bg-image':profileMenuIsOpen}">
		<div class="account-btn w-12 absolute top-1 left-[4.125rem]">
			<img src="~/assets/account.png"/>
		</div>
	</div>
</template>
<style scoped>
.account-btn {
	@apply cursor-pointer;
}
.bg-image{
	@apply bg-[url("/assets/profile-bg.svg")];
}
</style>
<script setup>
import { inject } from 'vue';

const profileMenuIsOpen = inject('profileMenu');

</script>