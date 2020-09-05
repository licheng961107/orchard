<template>

    <view class="ReceiveRewards_box">
        <view class="ReceiveRewards_content">
            <view class="ReceiveRewards_contentImg" v-for="(item,index) in imgList" :key="index">
                <img :src=item.img alt=""/>
<!--                <img src="../assets/img/backgroundimg40@2x.png" alt="">-->
                <view class="ReceiveRewards_contentFont">{{item.font}}</view>
            </view>
        </view>
        <view class="ReceiveRewards_DownButtonBox">
            <button>点击获取客服微信</button>
            <button @click="clickmessage">我的信息</button>
            <button @click="clickRecord">领取记录</button>
        </view>
            <view class="popup" v-if="Record"></view>
            <view class="popup" v-if="message"></view>
        <CollectRecords class="Record_box" v-if="Record" @onclose="clickRecord"/>
        <PersonalInformation class="Mymessage" v-if="message" @onclose="clickmessage" />
        </view>
    </view>
</template>

<script>
    import CollectRecords from "./CollectRecords";
    import PersonalInformation from "./PersonalInformation";

    export default {
        name: "ReceiveRewards",
        onShow(){
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        },
        data(){
            return{
                imgList:[
                    {img:'/assets/img/backgroundimg40@2x.png',font:"40元兑换加载488任意皮肤"},
                    {img:'/assets/img/backgroundimg694@2x.png', font:"果核果实兑换联通卡15g流量"},
                    {img:'/assets/img/backgroundimg719@2x.png', font:"70元兑换价值888任意皮肤"},
                    {img:'/assets/img/backgroundimg333@2x.png', font:"银苹果果实兑换移动卡50g流量"},
                    {img:'/assets/img/backgroundimg34@2x.png', font:"140元兑换价值288任意皮肤"},
                ],
                Record:false,
                message:false,
            }
        },
        methods:{
            clickRecord(){
                this.Record = !this.Record
            },
            clickmessage(){

                this.message = !this.message
            }
        },
        components:{
            CollectRecords,
            PersonalInformation
        },

    }
</script>

<style scoped>
    .ReceiveRewards_box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .popup{
        width: 100%;
        height: 100em;
        position: absolute;
        overflow-y: auto;
        background-color:gray;
        left:0;
        opacity: 0.5;
        top: 0;
        z-index: 1;
    }
    .Record_box{
        position: absolute;
        top: 302upx;
        left: 70upx;
        z-index: 1111;
    }
    .Mymessage{
        position: absolute;
        z-index: 1111;
    }
    .ReceiveRewards_content{
        width: 546upx;
        height: auto;
    }
    .ReceiveRewards_contentImg{
        width: 522upx;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background:rgba(255,255,255,1);
        box-shadow:0 0 13upx 0 rgba(130,140,193,0.3);
        margin-bottom: 13upx;
    }
    .ReceiveRewards_contentImg>img{
        margin-top: 11upx;
        width: 521upx;
        height: 262upx;
    }
    .ReceiveRewards_contentFont{
        font-size:15upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin: 12upx 0 15upx 0;
    }
    .ReceiveRewards_positionButton>img{
        position: absolute;
        top: 777upx;
        right: 433upx;
    }
    .ReceiveRewards_positionButton1>img{
        position: absolute;
        top: 1333upx;
        right: 433upx;
    }
    .ReceiveRewards_positionButton>button{
        position: absolute;
        width:116upx;
        height:43upx;
        background:rgba(232,186,2,1);
        border-radius:22upx;
        font-size:19upx;
        font-family:PingFang SC;
        font-weight:800;
        color:rgba(255,255,255,1);
        z-index: 9999;
        border: none;
        outline: none;
        top: 1055upx;
        right: 433upx;
    }
    .ReceiveRewards_DownButtonBox{
        width: 700upx;
        height: 150upx;
        margin-top: 14upx;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .ReceiveRewards_DownButtonBox>button{

        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:32upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        outline: none;
        border: none;
    }
    .ReceiveRewards_DownButtonBox>button:nth-child(1){
        width: 700upx;
        height: 67upx;
    }
    .ReceiveRewards_DownButtonBox>button:nth-child(2){
        width: 307upx;
        height: 67upx;
    }
    .ReceiveRewards_DownButtonBox>button:nth-child(3){
        width: 307upx;
        height: 67upx;
    }

</style>
