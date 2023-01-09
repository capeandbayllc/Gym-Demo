<template>
	<div class="nav-bar-container">
		<div class="nav-bar-toggler" @click="toggleCollapse"></div>
		<div class="nav-bar-items" v-if="!collapsed || windowWidth >= 1920">
			<!-- <nav-item
				:icon="UpperArrowIcon"
				@click.prevent="toggleCollapse"
			/> -->
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
	@apply w-16 z-20 top-0 left-0 -xl:absolute;
}
.nav-bar-toggler {
	@apply bg-secondary h-8 cursor-pointer;
}
.nav-bar-items {
	@apply border border-secondary border-b-[16px] border-secondary bg-base-300;
}
</style>
<script setup>
import {ref, onMounted} from 'vue'
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
	UpperArrowIcon,
	ContractEditIcon,
	ContractIcon,
	TrainingIcon,
	PersonAddIcon,
	MembersIcon,
	EmployeeIcon,
}
from '@/components/icons'
import NavItem from './nav-item.vue';

const collapsed = ref(true)

const toggleCollapse = () => {
	collapsed.value = !collapsed.value
}

let navItems = ref([]); 

const navList = [
	{
		type: 'default',
		navigation: [
			{
				label: 'Financial Reporting',
				icon: ReportIcon,
				url: "/#"
			},
			{
				label: "Communications",
				url: "/#",
				icon: MassComIcon
			},
			{
				label: "Favorites",
				url: "/#",
				icon: FavoriteCircleIcon
			},
			{
				label: "Point Of Sale",
				url: "/#",
				icon: PosIcon
			},
			{
				label: "Fitness",
				url: "/#",
				icon: FitnessIcon
			},
			{
				label: "KPIS",
				url: "/#",
				icon: SpeedMeterIcon
			},
			{
				label: "Employee Tracking",
				url: "/#",
				icon: LocationIcon
			},
			{
				label: "Company Inbox",
				url: "/#",
				icon: DownloadIcon
			},
			{
				label: "Marketing",
				url: "/#",
				icon: MarketingIcon
			}
		]
	},
	{
		type: 'document',
		navigation: [
			{
				label: 'Contracts',
				icon: ContractEditIcon,
				url: "/#"
			},
			{
				label: "Forms",
				url: "/#",
				icon: ContractIcon
			},
			{
				label: "Training & Development",
				url: "/#",
				icon: TrainingIcon
			},
		]
	},
	{
		type: 'people-search',
		navigation: [
			{
				label: 'Leads',
				icon: PersonAddIcon,
				url: "/leads"
			},
			{
				label: 'Members',
				icon: MembersIcon,
				url: "/members"
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
		]
	}
];

const route = useRoute()

watch(route, () => {
	getNavList()
})

const getNavList = () => {
	const result = navList.find(data => {
		return data.type === route.name;
	});
	if(result) {
		navItems.value =  result.navigation;
	}else {
		navItems.value = navList[0].navigation;
	}
}

const windowWidth = ref(null);

onMounted(async () => {
	windowWidth.value = window.innerWidth
	await nextTick();
	window.addEventListener('resize', onResize);
	getNavList();
});

const onResize = ()=> {
    windowWidth.value = window.innerWidth
}
</script>