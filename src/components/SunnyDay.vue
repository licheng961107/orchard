<template>
    <view class="SunnyDay_box">
        <img @click="click_sun_shine" class="SunnyDay_img" src="../assets/img/icon-sunlightImg@2x.png" alt="">
        <view class="SunnyDay_font">晴天</view>
    </view>
</template>

<script>
    export default {
        name: "SunnyDay",
        methods:{
            click_sun_shine(){
                this.$emit("sun_shine")
            }
        }
    }
</script>

<style scoped>
    .SunnyDay_box{
        display: flex;
        width: 200upx;
        height: 147upx;
        align-items: center;
        justify-content: space-between;
    }
    .SunnyDay_img{
        width:140upx;
        height: 147upx;
    }
    .SunnyDay_font{
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:41upx;
    }
</style>
