<template>
	<fitness-card :title-icon="ReportingIcon" title="Reporting and KPIs">
		<div class="grid grid-cols-3 gap-5 p-6">
			<IncomeChart class="col-span-1"/>
			<PercentageRadar class="col-span-1"/>
			<UnitsSoldChart class="col-span-1"/>
			<DraftReportingChart class="col-span-3"/>
			<SessionReportingList class="col-span-3" />
		</div> 
	</fitness-card>
</template>
<style scoped>
</style>
<script setup>
import { ReportingIcon } from '~~/components/icons';
import FitnessCard from '../fitness-card.vue';
import IncomeChart from './income-chart.vue';
import PercentageRadar from './percentage-radar.vue';
import UnitsSoldChart from './units-sold-chart.vue';
import DraftReportingChart from './draft-reporting-chart.vue';
import SessionReportingList from './session-reporting.vue';
</script>