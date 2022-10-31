<template>
	<div class="pulse-member-summary">
		<div class="w-max">
			<div class="member-info-date">
				Thursday <br/>
				September 29
			</div>
			<div class="member-info-data">
				<div class="member-info-value">
					181
				</div>
				<div class="member-info-percent bg-accent-focus">
					<div class="member-info-percent-trend">&#923;</div>
					<div>
						<span class="member-info-percent-value">12%</span>
						<br/>
						Increase
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="member-info-date">
				Recap <br/>
				Auguest
			</div>
			<div class="member-info-data">
				<div class="member-info-value">
					78
				</div>
				<div class="member-info-percent bg-warning">
					<div class="member-info-percent-trend">&#923;</div>
					<div>
						<span class="member-info-percent-value">12%</span>
						<br/>
						Increase
					</div>
				</div>
			</div>
		</div>
		<span class="self-end">View Details</span>
	</div>
</template>
<style scoped>
.pulse-member-summary {
	@apply flex flex-col space-y-5 border border-secondary rounded p-4;
}
.member-info-date {
	@apply text-xl font-semibold mb-3;
}
.member-info-data {
	@apply flex flex-row justify-between w-full space-x-2;
}
.member-info-value {
	@apply text-5xl font-bold;
}
.member-info-percent {
	@apply flex flex-row space-x-2 items-center text-neutral rounded px-2.5 py-1.5 font-semibold;
}
.member-info-percent-trend {
	@apply text-2xl scale-x-150 scale-y-75;
}
.member-info-percent-value {
	@apply font-extrabold text-lg;
}
</style>