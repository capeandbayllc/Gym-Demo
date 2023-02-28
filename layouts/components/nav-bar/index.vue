<template>
	<div class="nav-bar-container" :class="{'mt-11' :  windowWidth > 1250}">
		<div class="nav-bar-toggler" @click="toggleCollapse" v-if="windowWidth <= 1250 && navItems.length > 0"></div>
		<div class="nav-bar-items" v-if="collapsed">
			<nav-item
				v-if="windowWidth <= 1250"
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
	@apply w-16 z-20 top-0 left-0 -xl:absolute;
}
.nav-bar-toggler {
	@apply bg-secondary h-8 cursor-pointer;
}
.nav-bar-items {
	@apply border border-secondary bg-base-300;
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
	WidgetIcon,
	VendorIcon,
	CorporationIcon,
	RecruitingIcon,
	EventTypeIcon,
	MakeCopyeIcon,
	DraftIcon,
}
from '@/components/icons'
import NavItem from './nav-item.vue';

const collapsed = ref(false)

const toggleCollapse = () => {
	collapsed.value = !collapsed.value
}

let navItems = shallowRef([]); 

const navList = [
	{
		type: 'reporting',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/#"
			},
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
	},
	{
		type: 'engage',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'leads',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'members',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'fitness',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'leaderboard',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'vendors',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'corporation',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'recruitment',
		navigation: [
			{
				icon: WidgetIcon,
				url: "/engage"
			},
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
				label: "Fitness",
				url: "/fitness",
				icon: FitnessIcon
			},
			{
				label: 'Employees',
				icon: EmployeeIcon,
				url: "/leaderboard"
			},
			{
				label: 'Vendors',
				icon: VendorIcon,
				url: "/vendors"
			},
			{
				label: 'Corporation',
				icon: CorporationIcon,
				url: "/corporation"
			},
			{
				label: 'Recruiting',
				icon: RecruitingIcon,
				url: "/recruitment"
			},
		]
	},
	{
		type: 'mass-com',
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
		type: 'calendar',
		navigation: [
			{
				label: 'Event Type',
				icon: EventTypeIcon,
				url: "/#"
			},
		]
	},
	{
		type: 'agreement-builder',
		navigation: [
			{
				label: 'New Template',
				icon: ContractEditIcon,
				url: "/#"
			},
			{
				label: 'Make a Copy',
				icon: MakeCopyeIcon,
				url: "/#"
			},
			{
				label: 'Draft in Progress',
				icon: DraftIcon,
				url: "/#"
			},
		]
	}
];

const route = useRoute()

watch(route, () => {
	getNavList();
})

const getNavList = () => {
	const result = navList.find(data => {
		return data.type === route.name;
	});
	if(result) {
		navItems.value =  result.navigation;
		collapsed.value = true;
	}else {
		navItems.value = [];
		collapsed.value = false;
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