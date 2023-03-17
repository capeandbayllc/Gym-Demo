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

<style scoped>
.columns-header{
	color : #0077ac;
	border-bottom : 3px solid #0077ac;
	padding: 8px 15px;
	margin-top: 15px;
	display: flex;
}
.column-item{
	font-size: 12px;
}
.member-list{
	margin-top: 5px;
	overflow-y: auto;
	max-height : 180px;
}
.member-list::-webkit-scrollbar{
	display: none;
}
.member-row{
	display : flex;
	margin-top: 8px;
	background : #181916;
	border : 3px solid #0077cb;
	border-radius: 10px;
	padding: 8px 15px;
	color : lightgrey;
}
.member-row .img-avatar{
	border-radius : 15px;
	width: 40px;
	height: 40px;
	border : 2px solid #0077ac;
	box-shadow : 0px 3px 15px #0077ac; 
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