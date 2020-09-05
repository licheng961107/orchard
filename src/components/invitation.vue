<template>
    <view class="invitation_box">
        <!--    背景图-->
        <img class="invitation_backgroundImg" src="../assets/img/backgroundImg10@2x.png" alt="">
        <!--    底部数据-->
        <view class="invitation_ContentBox">
            <view class="invitation_Content">
                <!--        按钮-->
                <view class="invitation_Content_button">
                    <!--          弹窗文字-->
                    <view class="popupfont" v-if="Show">
                        邀请的人种植成功果树或者金稻穗，并且完成提现操作，奖励才会发放，如果邀请3个或7个有效人数（请注意：有效人数）才会发放皮肤奖励，皮肤请到“提现”界面的“提现入口”下方寻找客服微信领取皮肤奖励。
                    </view>
                    <view class="buttonBox">
                        <view @click="buttonPoput" class="buttonFont">邀请须知</view>
                    </view>
                </view>
                <!--        数据 1人阳光之类的-->
                <view class="invitation_Content_border">
                    <view class="invitation_Content_border_namebox">
                        <!--            左边数据-->
                        <view class="invitation_Content_border_name">
                            <view class="invitation_Content_border_nameIcon" v-for="(item,index) in LeftList" :key="index">
                                <img mode="widthFix" class="Redenvelopes" :src=item.iconImg alt="">
                                <view class="invitation_Content_border_nameIconfont">{{item.font}}</view>
                            </view>
                        </view>
                        <!--            右边数据-->
                        <view class="invitation_Content_border_name">
                            <view class="invitation_Content_border_nameIcon" v-for="(item,index) in RightList" :key="index">
                                <img mode="widthFix" class="Redenvelopes" :src=item.iconImg alt="">
                                <view class="invitation_Content_border_nameIconfont">{{item.font}}</view>
                            </view>
                        </view>
                        <!--            底部邀请人数-->
                        <view class="invitation_Content_border_downiconBox">
                            <view class="invitation_Content_border_downicon">
                                <view class="invitation_Content_border_downicon_show">
                                    <img mode="widthFix" class="invitation_Content_border_downicon_Right" src="../assets/img/icon-Redenvelopes2@2x.png" alt="">
                                    <view class="invitation_Content_border_downicon_Left">已邀请5人</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <!--      Banner图-->
                <view class="invitation_BannerImgBox">
                    <view class="invitation_BannerImg">
                        <img mode="widthFix" class="banner" src="../assets/img/Banner4@2x.png" alt="">
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "invitation",
        onShow(){
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#ff2742"
            })
        },
        data(){
            return{
                LeftList:[
                    {iconImg:require('../assets/img/icon-Redenvelopes1@2x.png'),font:'1人100阳光'},
                    {iconImg:require('../assets/img/icon-Redenvelopes1@2x.png'),font:'2人100养分'},
                    {iconImg:require('../assets/img/icon-Redenvelopes1@2x.png'),font:'奖励任意288皮肤'},
                    {iconImg:require('../assets/img/icon-Redenvelopes1@2x.png'),font:'4人200阳光'},
                    {iconImg:require('../assets/img/icon-Redenvelopes1@2x.png'),font:'5人银色果核'},
                ],
                RightList:[
                    {iconImg:require('../assets/img/icon-Redenvelopes3@2x.png'),font:'6人200阳光'},
                    {iconImg:require('../assets/img/icon-Redenvelopes3@2x.png'),font:'奖励任意288皮肤'},
                    {iconImg:require('../assets/img/icon-Redenvelopes3@2x.png'),font:'8人300养分'},
                    {iconImg:require('../assets/img/icon-Redenvelopes3@2x.png'),font:'9人金色苹果种子'},
                    {iconImg:require('../assets/img/icon-Redenvelopes3@2x.png'),font:'10人1000金币'},
                ],
                Show:false
            }
        },
        methods:{
            buttonPoput(){
                this.Show=!this.Show
            }
        }
    }
</script>

<style scoped>
    .invitation_box{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

    }
    .invitation_backgroundImg{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
    }
    .invitation_ContentBox{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .invitation_Content{
        width: 100%;
        height: 50%;
    }
    .invitation_Content_button{
        width: 100%;
        height: 80upx;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .popupfont{
        width: 492upx;
        height: 150upx;
        background:rgba(255,255,255,1);
        box-shadow:0 6upx 9upx 0 rgba(211,18,32,0.39);
        position: relative;
        top: -147upx;
        right: -170upx;
        padding: 17upx 14upx 33upx 15upx ;
        font-size:22upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:30upx;
        text-align: justify;
    }
    .buttonBox{
        width: 207upx;
        height: 80upx;
        float: right;
        background-image: url("../assets/img/button728@2x.png");
        text-align: center;
        line-height: 72upx;
        background-size: 100%,100%;
    }
    .buttonFont{
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        white-space: nowrap;
    }
    .invitation_Content_border{
        width: 100%;
        height: 410upx;
        background-image: url("../assets/img/background48@2x.png");
        background-size:100% 100%;
        background-repeat:no-repeat;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .invitation_Content_border_namebox{
        width:620upx;
        height: 282upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: 25upx;
    }
    .invitation_Content_border_name{
        width: 240upx;
        height: 211upx;
        margin-right: 50rpx;
    }
    .invitation_Content_border_nameIcon{
        width: 100%;
        height: 40upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .Redenvelopes{
        width: 23upx;
        height: 28upx;
    }
    .invitation_Content_border_nameIconfont{
        width: 196upx;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,127,22,1);
        line-height:48upx;
    }
    .invitation_Content_border_downiconBox{
        width: 100%;
        height: 60upx;
        display: flex;
        justify-content: center;
    }
    .invitation_Content_border_downicon{
        width: 194upx;
        height: 60upx;
        background-image: url("../assets/img/background1008@2x.png");
        display: flex;
        align-items: center;
        justify-content: center;
        background-size:100% 100%;
        background-repeat:no-repeat;
        margin-right: 140upx;
    }
    .invitation_Content_border_downicon_show{
        width:151upx;
        height: 47upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .invitation_Content_border_downicon_Right{
        width: 33upx;
        height: 47upx;
    }
    .invitation_Content_border_downicon_Left{
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,127,22,1);
        line-height:36upx;
    }
    .invitation_BannerImgBox{
        width: 100%;
        height: 180upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .invitation_BannerImg{
        width: 1228upx;
        height: 180upx;
    }
    .banner{
        width: 100%;
        height: 267upx;
    }
</style>
