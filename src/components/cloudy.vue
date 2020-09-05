<template>
    <view class="cloudy_box">
        <img class="cloudy_img" src="../assets/img/icon-sunlightImg@2x.png" alt="">
        <view class="cloudy_font">多云</view>
        <img  class="cloudy_img2" src="../assets/img/background-cloudy.png" alt="">
    </view>
</template>

<script>
    export default {
        name: "cloudy"
    }
</script>

<style scoped>
    .cloudy_box{
        display: flex;
        width: 200upx;
        height: 147upx;
        align-items: center;
        justify-content: space-between;
    }
    .cloudy_img{
        width:140upx;
        height: 147upx;
    }
    .cloudy_font{
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:41upx;
        position: relative;
        z-index: 1;
    }
    .cloudy_img2{
        position: absolute;
        top: 20upx;
        width: 100%;
        height: 390upx;
        left: 0;
        z-index: 0;
    }
</style>