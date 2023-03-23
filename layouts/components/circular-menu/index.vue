<template>
    <div class="circular-menu" id="menu-wheel">
        <menu class="items-wrapper">
            <menu-item
                v-for="({ key, icon, path }, ndx) in items"
                :key="key"
                :rotation="getDegree(ndx)"
                :icon="icon"
                :scale="activeKey !== key ? 0.75 : 1.2"
                :url="path"
                @mouseover="setActiveKey(key)"
                @mouseleave="setActiveKey(null)"
                @toggleMenu="$emit('close')"
            />
        </menu>
        <close-btn @click="$emit('close')" class="menu-close" />
        <menu-bg :active-key="activeKey" />
    </div>
</template>
<style scoped>
.circular-menu {
    @apply fixed z-30;
    top: -10vw;
    left: -10vw;
}
.circular-menu:after {
    @apply block bg-secondary rounded-full z-0;
    content: " ";
    width: 40vw;
    height: 40vw;
}
.menu-close {
    @apply absolute text-base-content scale-75 cursor-pointer;
    right: -1.5rem;
    top: 10vw;
}
</style>
<style>
.menu-close svg g {
    fill: #0074c8;
}
</style>
<script setup>
import { ref } from "vue";
import {
    ClubIcon,
    DashboardIcon,
    DocumentIcon,
    EngageIcon,
    FitnessIcon,
    ReportingIcon,
    ScheduleIcon,
    SettingIcon,
} from "./menu-icons";
import {
    CalendarIcon,
    ComTowerIcon,
    CheckInIcon,
    PeopleIcon,
    PosIcon,
} from "~~/components/icons";
import MenuBg from "./menu-bg.vue";
import MenuItem from "./menu-item.vue";
const emit = defineEmits(["close"]);
onMounted(() => {
    document.addEventListener("click", onMenuOutsideClickHandler);
});

onUnmounted(() => {
    document.removeEventListener("click", onMenuOutsideClickHandler);
});

const onMenuOutsideClickHandler = (event) => {
    const specifiedElement = document.getElementById("menu-wheel");
    const appLogoElement = document.getElementsByClassName("app-logo");
    const isClickInside =
        specifiedElement.contains(event.target) ||
        appLogoElement[0].contains(event.target);

    if (!isClickInside) {
        // The click was outside the specifiedElement, do something
        emit("close");
    }
};

const items = [
    {
        key: "check-in",
        path: "/check-in",
        icon: CheckInIcon,
    },
    {
        key: "people-search",
        path: "/people-search",
        icon: PeopleIcon,
    },
    {
        key: "report",
        path: "/reporting",
        icon: ReportingIcon,
    },
    {
        key: "mass-com",
        path: "/mass-com/scheduled",
        icon: ComTowerIcon,
    },
    {
        key: "engage",
        path: "/engage",
        icon: EngageIcon,
    },
    {
        key: "document",
        path: "/document",
        icon: DocumentIcon,
    },
    {
        key: "fitness",
        path: "/fitness",
        icon: FitnessIcon,
    },
    {
        key: "dashboard",
        path: "/dashboard",
        icon: DashboardIcon,
    },
    {
        key: "calendar",
        path: "/calendar",
        icon: CalendarIcon,
    },
    {
        key: "club",
        path: "/club",
        icon: ClubIcon,
    },
    {
        key: "setting",
        path: "/setting",
        icon: SettingIcon,
    },
    /*{
        key: "schedule",
        path: "/schedule",
        icon: ScheduleIcon,
    },*/
    {
        key: "pos",
        path: "/pos",
        icon: PosIcon,
    },
];

const activeKey = ref("main-bg");
const getDegree = (ndx) => {
    const start = -25;
    const end = 100;
    return start + ((end - start) * ndx) / 10;
};
const setActiveKey = (key) => {
    activeKey.value = key;
};
</script>
