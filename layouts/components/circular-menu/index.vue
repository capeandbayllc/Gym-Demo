<template>
    <div class="circular-menu">
        <menu class="items-wrapper">
			<menu-item
                v-for="({key, icon}, ndx) in items"
				:key="key"
				:rotation="getDegree(ndx)"
				:icon="icon"
				:scale="activeKey !== key ? .75: 1.4"
				url="#"
				@mouseover="setActiveKey(key)"
				@mouseleave="setActiveKey(null)"
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
    @apply fixed z-20;
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
    CalendarIcon,
    CheckInIcon,
    ClubIcon,
    DashboardIcon,
    DocumentIcon,
    EngageIcon,
    FitnessIcon,
    MassComIcon,
    ReportingIcon,
    ScheduleIcon,
    SettingIcon
} from './menu-icons'
import MenuBg from './menu-bg.vue';
import MenuItem from './menu-item.vue';

const items = [{
    key: 'check-in',
    icon: CheckInIcon
}, {
    key: 'report',
    icon: ReportingIcon
}, {
    key: 'mass-com',
    icon: MassComIcon
}, {
    key: 'engage',
    icon: EngageIcon
}, {
    key: 'document',
    icon: DocumentIcon
}, {
    key: 'fitness',
    icon: FitnessIcon
}, {
    key: 'dashboard',
    icon: DashboardIcon
}, {
    key: 'calendar',
    icon: CalendarIcon
}, {
    key: 'club',
    icon: ClubIcon
}, {
    key: 'setting',
    icon: SettingIcon
}, {
    key: 'schedule',
    icon: ScheduleIcon
}];

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