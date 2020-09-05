<template>
    <view class="Brightandbeautiful_box">
        <img class="Brightandbeautiful_img" src="../assets/img/icon-sunlightImg@2x.png" alt="">
        <view class="Brightandbeautiful_font">明媚</view>
        <img class="Bright_and_beautiful" src="../assets/img/background-Bright_and_beautiful.png" alt="">
    </view>
</template>

<script>
    export default {
        name: "Brightandbeautiful"
    }
</script>

<style scoped>
    .Brightandbeautiful_box{
        display: flex;
        width: 200upx;
        height: 147upx;
        align-items: center;
        justify-content: space-between;
    }
    .Brightandbeautiful_img{
        width:140upx;
        height: 147upx;
    }
    .Brightandbeautiful_font{
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:41upx;
    }
    .Bright_and_beautiful{
        position: absolute;
        width: 490upx;
        height: 290upx;
        top: 60upx;
        left: -30upx;
        z-index: -1;
    }
</style>