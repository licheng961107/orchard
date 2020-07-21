<template>
	<view class="content">
		<orchard @onGetUser="getUser"/>

	</view>
</template>

<script>
	import Orchard from "../../components/orchard";
	export default {
		components: {Orchard},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			getUser(e){
				let { nickName, avatarUrl } = e.detail.userInfo
				uni.login({
					provider: 'weixin',
					success:(res=>{
						let { code } = res;

						let request_data = {
							code,
							nick_name: nickName,
							avatar_url: avatarUrl
						}

						uni.request({
							url: "http://172.16.1.43:8080/api/wx_login/wx_login",
							method:"POST",
							header:{'content-type':'application/x-www-form-urlencoded'},
							data:request_data,

							success:(res)=>{
								uni.setStorageSync("token",res.data.data.member_token)
							}
						})


					}),

				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
