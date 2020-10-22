<template>
	<view class="content">
		<OrchardPage  @onGetUser="getUser"/>
	</view>
</template>

<script>


	import OrchardPage from "../../components/orchardPage";
	import {CommRequest} from "../../comm/commRequest";



	export default {

		components: {
			OrchardPage,
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
			getUser(e){
				// commLogin(e, function () {
				// 	all_asset();
				// })
			}
		}
	}
</script>

<style>
	.content {
		/*display: flex;*/
		/*flex-direction: column;*/
		/*align-items: center;*/
		/*justify-content: center;*/
	}

</style>
