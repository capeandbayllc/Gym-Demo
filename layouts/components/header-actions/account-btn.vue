<template>
	<div class="bg-no-repeat relative h-16 w-44 flex items-center justify-center bg-contain self-end bg-[center_5px]" :class="{'bg-image':profileMenuIsOpen}">
		<div class="account-btn w-10 ml-[20px]">
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