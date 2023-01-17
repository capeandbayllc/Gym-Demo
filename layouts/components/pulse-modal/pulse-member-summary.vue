<template>
	<div class="pulse-member-summary">
		<div class="w-full">
			<div class="member-info-date">
				Thursday <br/>
				September 29
			</div>
			<div class="member-info-data">
				<div class="member-info-value">
					181
				</div>
				<div class="member-info-percent bg-accent-focus">
					<div class="inline-block">
						<svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24.78" height="13.414" viewBox="0 0 24.78 13.414">
							<path id="Path_5001" data-name="Path 5001" d="M0,0,10.884,11,21.953,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
						</svg>
					</div>
					<div class="inline-block align-top ml-2">
						<div class="member-info-percent-value">12%</div>
						<div class="text-sm font-semibold">Increase</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="member-info-date">
				Recap <br/>
				August
			</div>
			<div class="member-info-data">
				<div class="member-info-value">
					78
				</div>
				<div class="member-info-percent bg-warning">
					<div class="inline-block">
						<svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24.78" height="13.414" viewBox="0 0 24.78 13.414">
							<path id="Path_5001" data-name="Path 5001" d="M0,0,10.884,11,21.953,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
						</svg>
					</div>
					<div class="inline-block align-top ml-2">
						<div class="member-info-percent-value">12%</div>
						<div class="text-sm font-semibold">Increase</div>
					</div>
				</div>
			</div>
		</div>
		<span class="self-end">View Details</span>
	</div>
</template>
<style scoped>
.pulse-member-summary {
	@apply h-full flex flex-col space-y-9 border border-secondary rounded p-4 bg-base-300;
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
	@apply flex flex-row space-x-2 items-center text-neutral rounded px-2.5 py-0.5 font-semibold;
}
.member-info-percent-trend {
	@apply text-2xl scale-x-150 scale-y-75;
}
.member-info-percent-value {
	@apply font-extrabold text-lg;
	line-height: normal;
}
</style>