<template>
	<div class="">
		<div class="columns-header">
			<label v-for="column in columns" class="column-item " :class=column.class>
			{{ column.label }}
			</label>
		</div>
		<ul class="member-list">
			<li v-for="item in items" :key="item.id" class="member-row">
				<div class="w-[7%]">
					<img :src=item.img_url alt="Image" class="img-avatar">
				</div>
				<div class="w-[18%] flex">
					<label>{{ item.name }}</label>
				</div>
				<div class="w-[15%] flex">
					<label>{{ item.location }}</label>
				</div>
				<div class="w-[15%] flex">
					<FitnessButton :btn_type=item.type :label=item.type></FitnessButton>
				</div>
				<div class="w-[15%] flex">
					<FitnessButton :btn_type=item.status :label=item.status></FitnessButton>
				</div>
				<div class="w-[15%] flex">
					<label>{{ item.date }}</label>
				</div>
				<div class="w-[15%] flex">
					<FitnessButton :btn_type='default' :label='View'></FitnessButton>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="postcss">
.columns-header{
	@apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
}
.column-item{
	@apply text-[12px];
}
.member-list{
	@apply mt-[5px] overflow-y-auto max-h-[180px];
}
.member-list::-webkit-scrollbar{
	@apply hidden;
}
.member-row{
	@apply text-neutral-content flex mt-[8px] bg-neutral border-[3px] border-secondary rounded-[10px] py-[8px] px-[15px] text-gray-300;
}
.member-row .img-avatar{
	@apply rounded-[15px] w-[40px] h-[40px] border-[2px] border-solid border-secondary shadow shadow-info-content shadow-lg;
}
.member-row label{
	margin : auto;
}
</style>
<script setup>
// import MemberSearchListRow from './member-search-list-row.vue';
import FitnessButton from '../fitness-button.vue';
const props = defineProps({
	columns: {
		type: Array,
		default: []
	},
	items: {
		type: Array,
		default: []
	}
});
</script>