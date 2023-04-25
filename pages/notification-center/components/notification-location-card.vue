<template>
    <simple-card class="notification-location-card -md:text-xs" :closable="false" title="Location">
        <div class="notification-container">
			<div class="notification-title">
				<div class="notification-actions">
					<select-box
						class="max-w-[200px]"
						label="Call Type"
						:items="stateList"
						transparent
						:secondary="true"
					/>
					<select-box	
						class="max-w-[200px]"
						label="Call Type"
						:items="clubsList"
						:secondary="true"
						transparent
					/>
					<FormAppInput height="h-[25px] md:h-[32px]" width="w-full max-w-[300px]" placeholder="Search" />	
				</div>
			</div>
			<div class="overflow-auto max-h-[250px]" ref="containerTable">
				<data-table
					class="notification-location-table"
					:data="mockLeads"
					:row-component="NotificationTableRow"
					:columns="columns"
				/>
			</div>
		</div>
    </simple-card>
</template>
<style lang="postcss">
.notification-location-card {
	.notification-actions .select-box-btn{
		@apply rounded-xl;
	}
}
</style>
<style scoped lang="postcss">
.notification-location-card {
    @apply m-auto bg-base-300 mt-5;
	.notification-container {
		@apply p-4;
	}
	.notification-title {
		@apply flex flex-row justify-end items-center;
	}
    .notification-actions {
    	@apply w-full flex flex-wrap gap-3 flex-row justify-end items-center mb-2 mt-5;
    }
}
</style>
<script setup>
import NotificationTableRow from './notification-table-row.vue';
import notification from "~/api/queries/notification";
import { request } from "~/api/utils/request";

const currentPage = ref(1)
const notifications = ref([]);
const noMoreData = ref(false);
const userData = ref(null);
getNotifications(useState("auth"));
function getNotifications(user) {
	if (!user.value) return;
	userData.value = user.value;
	request(notification.query.browse, { user_id: user.value.id, page: currentPage.value }).then(({ data }) => {
		if (data?.data?.notifications?.data.length && !noMoreData.value) {
			notifications.value = [...notifications?.value, ...data.data.notifications.data];
		} else {
			noMoreData.value = true;
		}
	});
}

const containerTable = ref(null)

function handleScroll() {
	const container = containerTable.value
	const isScrollingDown = container.scrollTop > scrollPosition.value

	if (isScrollingDown && container.scrollTop + container.clientHeight >= container.scrollHeight) {
		currentPage.value++;
		getNotifications(useState("auth"));
	}

	scrollPosition.value = container.scrollTop
}

const scrollPosition = ref(0)

onMounted(() => {
	containerTable.value.addEventListener('scroll', handleScroll)
})

const mockLeads = computed(() => {
	if (notifications.value) {
		return notifications?.value.map((e, i) => {
			console.log(e)
			return {
				id: e.id,
				type: "Promo Response",
				date: "2022-09-23",
				time: "10:20 pm",
				tag: 'success',
				name: userData?.value.first_name + ' ' + userData?.value.last_name,

				text: e.text,
				entity_type: e.entity_type,
				entity_id: e.entity_id,
				entity: e.entity,
				misc: e.misc
			}
		});
	} else {
		return []
	}
});

const stateList = [{
	id: 1,
	label: "State 1",
	value: "State 1"
}, {
	id: 2,
	label: "State 2",
	value: "State 2",
}, {
	id: 3,
	label: "State 3",
	value: "State 3",
}]
const clubsList = [{
	id: 1,
	label: "Club 1",
	value: "Club 1",
}, {
	id: 2,
	label: "Club 2",
	value: "Club 2",
}, {
	id: 3,
	label: "Club 3",
	value: "Club 3",
}];
const columns = ["Type", "Date/ Time", "Tags", "Members", "", "", ""];
</script>