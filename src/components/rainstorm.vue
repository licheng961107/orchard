<template>
    <view class="rainstorm_box">
        <view class="rainstorm_Mask"></view>
        <img class="rainstorm_img" src="../assets/img/icon-sunlightImg@2x.png" alt="">
        <view class="rainstorm_font">暴雨</view>
        <img  class="rainstorm_img2" src="../assets/img/background-rainstorm.png" alt="">
    </view>
</template>

<script>
    export default {
        name: "rainstorm"
    }
</script>

<style scoped>
    .rainstorm_box{
        display: flex;
        width: 200upx;
        height: 147upx;
        align-items: center;
        justify-content: space-between;
    }
    .rainstorm_Mask{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color:black;
        left:0;
        opacity: 0.7;
        top: 0;
        z-index: -1;
        filter: alpha(opacity=50);
    }
    .rainstorm_img{
        width:140upx;
        height: 147upx;
    }
    .rainstorm_font{
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:41upx;
        position: relative;
        z-index: 1;
    }
    .rainstorm_img2{
        position: absolute;
        top: 20upx;
        width: 100%;
        height: 390upx;
        left: 0;
        z-index: -1;
    }
</style>