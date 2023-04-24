<template>
	<fitness-card :title-icon="ReportingIcon" title="Reporting and KPIs">
		<div class="grid grid-cols-3 gap-5 p-6">
			<IncomeChart :data="[31, 80, 68, 109, 92]" title="Income" :last-week="-0.07" class="col-span-1"/>
			<PercentageRadar class="col-span-1"/>
			<UnitsSoldChart :data="[12,68,25,48,11]" title="Units Sold" :last-week="0.10" :color-light-blue="true" class="col-span-1"/>
			<DraftReportingChart class="col-span-3"/>
			<SessionReportingList class="col-span-3" />
		</div> 
	</fitness-card>
</template>
<script setup>
import { ReportingIcon } from '~~/components/icons';
import IncomeChart from '~/components/charts/area/index.vue';
import FitnessCard from '../fitness-card.vue';
import PercentageRadar from './percentage-radar.vue';
import UnitsSoldChart from '~/components/charts/area/index.vue';
import DraftReportingChart from './draft-reporting-chart.vue';
import SessionReportingList from './session-reporting.vue';
</script>