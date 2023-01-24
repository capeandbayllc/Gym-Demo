<template>
	<div class="pulse-check-history">
		<div class="checkin-header">
			<div class="checkin-date">
				Thursday
				<br />
				<b>September 29</b>
			</div>
			<select-box
				label="Location"
				:items="locations"
				:secondary="true"
			/>
		</div>
		<div class="checkin-value">08</div>
		<div class="checkin-history-list-container">
			<div class="checkin-history-list-header">
				<div class="w-3/4">Name</div>
				<div class="w-1/4">Sign-Ins</div>
			</div>
			<div class="checkin-history-list no-scrollbar">
				<div
					v-for="item in history"
					:key="item.id"
					class="checkin-history-list-item"
				>
					<div class="history-user-name">
						<div class="history-user-avatar">
							<img :src="item.avatar"/>
							<div class="history-user-unread" v-if="item.unread">{{item.unread}}</div>

						</div>
						<div class="">{{item.name}}</div>
					</div>
					<div class="history-user-count">{{item.count}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.pulse-check-history {
	@apply h-full border border-secondary rounded flex flex-col justify-between px-7 py-4 items-center bg-base-300;
	.checkin-header {
		@apply flex flex-row justify-between w-full;
		.checkin-date {
			@apply text-lg;
		}
	}
	.checkin-value {
		@apply flex w-fit p-2 rounded text-5xl font-bold border border-secondary bg-secondary/40;
	}
	.checkin-history-list-container {
		@apply flex flex-col space-y-2;
		.checkin-history-list-header {
			@apply flex flex-row font-semibold;
		}
		.checkin-history-list {
			max-height: 10.5rem;
			@apply flex flex-col w-fit space-y-2 overflow-auto;
			.checkin-history-list-item {
				@apply flex flex-row border rounded space-x-2 w-80 pl-4 pr-6 py-2 items-center justify-between bg-neutral;
				.history-user-name {
					@apply flex flex-row space-x-2 items-center;
					.history-user-avatar {
						@apply relative;
						img {
							@apply w-8 h-8;
						}
						.history-user-unread {
							@apply absolute bg-error w-4 h-4 rounded-full text-xs text-center;
							left: -0.5rem;
							top: -0.25rem;
						}
					}
				}
				.history-user-count {
					@apply place-self-end text-2xl font-bold;
				}
			}
		}
	}
}
</style>
<script setup>
import SelectBox from "@/components/select-box/index.vue"

const locations =  [{
	id: 1,
	label: "This Location",
	value: 1
}, {
	id: 2,
	label: "Club One",
	value: 2
}, {
	id: 3,
	label: "Club Two",
	value: 3
}]

const history = [{
	id: 1,
	count: 14,
	name: "Sherry Champagne",
	unread: 0,
	avatar: "/pulse-modal/sherry-champagne.svg"
}, {
	id: 2,
	count: 1,
	name: "Chet James",
	unread: 3,
	avatar: "/pulse-modal/chet-james.svg"
}, {
	id: 3,
	count: 2,
	name: "Bruce Phillus",
	unread: 0,
	avatar: "/pulse-modal/bruce-phillus.svg"
},{
	id: 4,
	count: 76,
	name: "Jackie O’Leary",
	unread: 0,
	avatar: "/pulse-modal/jackie.svg"
}]
</script>