<template>
    <div class="circular-menu" id="menu-wheel">
        <menu class="items-wrapper">
			<menu-item
                v-for="({key, icon, path}, ndx) in items"
				:key="key"
				:rotation="getDegree(ndx)"
				:icon="icon"
				:scale="activeKey !== key ? .75: 1.4"
				:url="path"
				@mouseover="setActiveKey(key)"
				@mouseleave="setActiveKey(null)"
                @toggleMenu="$emit('close')"
			/>
        </menu>
		<close-btn @click="$emit('close')"
			class="menu-close"
		/>
        <menu-bg :active-key="activeKey"/>
    </div>
</template>
<style scoped>
.circular-menu {
    @apply fixed z-30;
    top: -12vw;
    left: -12vw;
}
.circular-menu:after {
    @apply block bg-secondary rounded-full z-0;
    content: ' ';
    width: 40vw;
    height: 40vw;
}
.menu-close {
	@apply absolute text-base-content scale-75 cursor-pointer;
	right: -2.5rem;
	top: 12vw;
}
</style>
<script setup>
import {ref} from 'vue';
import {
    ClubIcon,
    DashboardIcon,
    DocumentIcon,
    EngageIcon,
    FitnessIcon,
    ReportingIcon,
    ScheduleIcon,
    SettingIcon
} from './menu-icons'
import { PeopleIcon } from "@/components/icons"
import { CalendarIcon, ComTowerIcon, CheckInIcon } from '~~/components/icons';
import MenuBg from './menu-bg.vue';
import MenuItem from './menu-item.vue';
const emit = defineEmits(['close']);
onMounted(() => {
    document.addEventListener('click', onMenuOutsideClickHandler);
});

onUnmounted(() => {
    document.removeEventListener('click', onMenuOutsideClickHandler);
})

const onMenuOutsideClickHandler = (event) => {
    const specifiedElement = document.getElementById('menu-wheel')
    const appLogoElement = document.getElementsByClassName('app-logo')
    const isClickInside = specifiedElement.contains(event.target) || appLogoElement[0].contains(event.target);

    if (!isClickInside) {
        // The click was outside the specifiedElement, do something
        emit('close')
    }
}

const items = [
    {
        key: 'check-in',
        path: '/check-in',
        icon: CheckInIcon,
    }, 
    {
        key: 'people-search',
        path: '/people-search',
        icon: PeopleIcon,
    }, 
    {
        key: 'report',
        path: '/reporting',
        icon: ReportingIcon
    }, 
    {
        key: 'mass-com',
        path: '/mass-com',
        icon: ComTowerIcon
    }, 
    {
        key: 'engage',
        path: '/engage',
        icon: EngageIcon
    }, 
    {
        key: 'document',
        path: '/document',
        icon: DocumentIcon
    }, 
    {
        key: 'fitness',
        path: '/fitness',
        icon: FitnessIcon
    }, 
    {
        key: 'dashboard',
        path: '/dashboard',
        icon: DashboardIcon
    }, 
    {
        key: 'calendar',
        path: '/calendar',
        icon: CalendarIcon
    }, 
    {
        key: 'club',
        path: '/club',
        icon: ClubIcon
    }, 
    {
        key: 'setting',
        path: '/setting',
        icon: SettingIcon
    }, 
    {
        key: 'schedule',
        path: '/schedule',
        icon: ScheduleIcon
    }
];

const activeKey = ref('main-bg');
const getDegree = (ndx) => {
    const start = -20;
    const end = 110;
    return start + (end - start) * ndx / 10
}
const setActiveKey = (key) => {
    activeKey.value = key
}


</script>