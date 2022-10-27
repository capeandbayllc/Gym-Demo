<template>
	<div class="nav-bar-container"
		:class="{
			'border-b-[16px] border-secondary': !collapsed
		}"
	>
		<div class="nav-bar-toggler" @click="toggleCollapse"></div>
		<div class="nav-bar-items" v-if="!collapsed">
			<nav-item
				:icon="UpperArrowIcon"
				@click.prevent="toggleCollapse"
			/>
			<nav-item
				v-for="(item, ndx) in navItems"
				:key="ndx"
				v-bind="{...item}"
			/>
		</div>
	</div>
</template>
<style scoped>
.nav-bar-container {
	@apply overflow-hidden w-16;
}
.nav-bar-toggler {
	@apply bg-secondary h-8 cursor-pointer;
}
.nav-bar-items {
	@apply border border-secondary;
}
</style>
<script setup>
import {ref} from 'vue'
import {
	DownloadIcon,
	FavoriteCircleIcon,
	FitnessIcon,
	LocationIcon,
	MarketingIcon,
	MassComIcon,
	PosIcon,
	ReportIcon,
	SpeedMeterIcon,
	UpperArrowIcon
}
from '@/components/icons'
import NavItem from './nav-item.vue';

const collapsed = ref(true)

const toggleCollapse = () => {
	collapsed.value = !collapsed.value
}

const navItems = [
	{
		label: 'Financial Reporting',
		icon: ReportIcon,
		url: "/#"
	}, {
		label: "Communications",
		url: "/#",
		icon: MassComIcon
	}, {
		label: "Favorites",
		url: "/#",
		icon: FavoriteCircleIcon
	}, {
		label: "Point Of Sale",
		url: "/#",
		icon: PosIcon
	}, {
		label: "Fitness",
		url: "/#",
		icon: FitnessIcon
	}, {
		label: "KPIS",
		url: "/#",
		icon: SpeedMeterIcon
	}, {
		label: "Employee Tracking",
		url: "/#",
		icon: LocationIcon
	}, {
		label: "Company Inbox",
		url: "/#",
		icon: DownloadIcon
	}, {
		label: "Marketing",
		url: "/#",
		icon: MarketingIcon
	}
]
</script>