<template>
    <view class="balance_box">
        <view class="balance_Title">
            <view class="balance_TitleFont">52元宝</view>
        </view>
        <view class="balance_Withdrawalamount">
            <view class="balance_Withdrawalamount_title">提现余额</view>
            <view class="balance_Withdrawalamount_moneyBxo">
                <view class="balance_Withdrawalamount_money" v-for="(item,index ) in moneyList" :key="index">
<!--                    <img :src="item.moneyImg" alt="">-->
                    <view @click="abc(index)" class="balance_Withdrawalamount_moneyfont">￥{{item.money}}.00</view>
                </view>
            </view>
        </view>
        <view class="balance_downBox">
            <view class="balance_downBox_content">
                <view class="balance_BannerimgBox">
                    <view class="balance_Bannerimg">
                        <img mode="widthFix" src="../assets/img/Banner4@2x.png" alt="">
                    </view>
                    <view class="balance_Bannerimg">
                        <img mode="widthFix" src="../assets/img/Banner4@2x.png" alt="">
                    </view>
                </view>
                <view class="balance_downTips">
                    <view class="balance_downTipsborder">
                        <view class="balance_downTips_titlefont">提现规则</view>
                        <view class="balance_downTips_font">
                            <view>1. 微信官方为保证资金安全，提现需要实名制。</view>
                            <view>2. 每20元宝兑换一元，用户每天仅限提现一次。</view>
                            <view>3. 如有作弊行为，提现金额不予发放。</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
    import { withdrawal } from "../api/pay_withdrawal"
    export default {
        name: "balance",
        onShow(){
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        },
        data(){
            return{
                moneyList:[
                    { id:0, money:5},
                    { id:1, money:7},
                    { id:2, money:10},
                    { id:3, money:30},
                    { id:4, money:80},
                    { id:5, money:120},
                ]
            }
        },
        methods:{
            abc(index){
                console.log()
                let data = {
                    money:this.moneyList[index].money
                }
                withdrawal(data)
            }
        }
    }
</script>

<style scoped>
    .balance_box{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: start;
    }
    .balance_Title{
        width: 100%;
        height: 240upx;
        background:rgba(110,206,255,1);
        display: flex;
        justify-content: center;
    }
    .balance_TitleFont{
        font-size:32upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .balance_Withdrawalamount{
        width:690upx;
        height:330upx;
        background:rgba(255,255,255,1);
        box-shadow:0 0 30upx 0 rgba(32,123,170,0.3);
        border-radius:20upx;
        position: absolute;
        top: 97upx;
        z-index: 1;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .balance_Withdrawalamount_title{
        width: 100%;
        height: 80upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(248,75,80,1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .balance_Withdrawalamount_moneyBxo{
        width: 567upx;
        height: 173upx;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        flex-wrap: wrap;

    }
    .balance_Withdrawalamount_money{
        width: 157upx;
        height: 65upx;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/img/icon-money.png");
        background-repeat: no-repeat;
        background-size:100% 100%;
        -moz-background-size: 100% 100%;
    }
    .balance_Withdrawalamount_moneyfont{
        width: 157upx;
        height: 65upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:41upx;
        overflow:hidden;
        text-overflow:ellipsis;
        text-align: center;
        line-height: 65upx;
    }
    .balance_downBox{
        width:100%;
        height:1039upx;
        background:rgba(255,255,255,1);
        border-radius:30upx 30upx 0 0;
        margin-top: -30upx;
        display: flex;
        align-content: flex-end;
        justify-content: center;
        flex-wrap: wrap;
    }
    .balance_downBox_content{
        width: 100%;
        height: 788upx;
        display: flex;
        justify-content: center;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .balance_BannerimgBox{
        width: 690upx;
        height: 377upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .balance_Bannerimg{
        width: 690upx;
        height: 180upx;
        border-radius:20upx;
    }
    .balance_Bannerimg>img{
        object-fit: cover;
        width: 690upx;
        height: 180upx;
    }
    .balance_downTips{
        width:700upx;
        height: 243upx;
        background-image: url("../assets/img/background2@2x.png");
        background-repeat: no-repeat;
        background-size:100% 100%;
        -moz-background-size: 100% 100%;
    }
    .balance_downTipsborder{
        height: 163upx;
        padding: 36upx 0 39upx 40upx;
    }
    .balance_downTips_titlefont{
        width: 118upx;
        height: 50upx;
        border-bottom: 4upx solid rgba(255,255,255,1);
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:800;
        color:rgba(255,255,255,1);
        line-height:41upx;
        white-space:nowrap;
    }
    .balance_downTips_font{
        width:540upx;
        height:99upx;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:36upx;
        text-align: justify;
        white-space:nowrap;
        margin-top: 14upx;
    }
</style>
