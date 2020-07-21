<template>
    <view class="PersonalCenter_box">
        <view class="PersonalCenter_TitleBox">
            <view class="PersonalCenter_TitleBox_right">
                <view class="PersonalCenter_TitleBox_right_border">
                    <view class="PersonalCenter_TitleBox_right_imgbox">
                        <view class="PersonalCenter_TitleBox_right_img">

                        </view>
                    </view>
                    <view class="PersonalCenter_TitleBox_right_fontBox">
                        <view class="PersonalCenter_TitleBox_right_font">
                            <view>无敌李大成</view>
                            <view class="PersonalCenter_TitleBox_right_font_age">25岁</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="PersonalCenter_TitleBox_left">
                <view class="PersonalCenter_TitleBox_leftButtonBox">
                    <button @click="chickPoput()">合伙人必看</button>
                    <view class="PersonalCenter_TitlePopup" v-if="show">
                        <view class="PersonalCenter_TitlePopup_font" >
                            数据清零能手动将钻石数量、金蛋数量、银蛋数量全部清零，不清零元宝数量、金币数量、可提金额。
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="PersonalCenter_ContentDataBox">
            <view class="PersonalCenter_ContentDataBox_TopBox">
                <view class="PersonalCenter_ContentDataBox_TopBoxData" v-for="(item ,index) in DataList" :key="index">
                    <view class="PersonalCenter_ContentDataBox_TopBoxData_number" :style="{'color': ColorList[index]}">{{item.number}}</view>
                    <view class="PersonalCenter_ContentDataBox_TopBoxData_font">{{item.name}}</view>
                </view>
                <view class="PersonalCenter_ContentDataBox_TopBoxData_img">
                    <img src="../assets/img/icon-Clearing@2x.png" alt="">
                </view>
                <view class="PersonalCenter_ContentDataBox_TopBoxData_img1">
                    <img src="../assets/img/icon-Withdrawal@2x.png" alt="">
                </view>
            </view>
            <view class="PersonalCenter_ContentDataBox_DownBox">
                <view class="PersonalCenter_ContentDataBox_DownBox_ImgBox">
                    <view class="PersonalCenter_ContentDataBox_DownBox_Img">
                        <img src="../assets/img/backgroundImg34@2x.png" alt="">
                        <img class="button" src="../assets/img/button2@2x.png" alt="">
                    </view>
                    <view class="PersonalCenter_ContentDataBox_DownBox_Img">
                        <img src="../assets/img/backgroundimg666@2x.png" alt="">
                        <img class="button1" src="../assets/img/button@2x.png" alt="">
                        <view class="PersonalCenter_ContentDataBox_DownBox_Img_font">
                            <view>果果实兑换一张</view><view>联通15G</view><view>流量卡</view>
                        </view>
                        <view class="PersonalCenter_ContentDataBox_TopBoxData_downFont">
                            有联通卡和移动卡20-60g流量免费送
                        </view>
                    </view>
                </view>
                <view class="PersonalCenter_ContentDataBox_DownBox_Button">
                    <img src="../assets/img/button4@2x.png" alt="">
                </view>
            </view>
        </view>
        <view class="PersonalCenter_DownImgBox">
            <view class="PersonalCenter_DownImgborder">
                <view class="PersonalCenter_DownImg">

                </view>
                <view class="PersonalCenter_DownImg">

                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "PersonalCenter",
        data(){
            return{
                DataList:[
                    {name:'元宝数量',number:1520},
                    {name:'金币数量',number:1520},
                    {name:'砖石数量',number:1520},
                    {name:'银蛋数量',number:1520},
                    {name:'能提数量',number:1520},
                    {name:'提现入口',number:"",},
                    {name:'数据清零',number:"",},
                    {name:'金蛋数量',number:1520},
                ],
                ColorList:[
                    'rgba(255,163,13,1)',
                    'rgba(255,163,13,1)',
                    'rgba(255,163,13,1)',
                    'rgba(255,163,13,1)',
                    'rgba(51,51,51,1)',
                    'rgba(51,51,51,1)',
                    'rgba(51,51,51,1)',
                    'rgba(51,51,51,1)',
                ],
                show:""

            }
        },
        methods:{
            chickPoput(){
                this.show = !this.show
                console.log("11")
            }
        }
    }
</script>

<style scoped>
    .PersonalCenter_box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:rgba(255,255,255,1);
        box-shadow:0 0 18upx 0 rgba(143, 143, 143, 0.35);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: start;
        overflow-y: auto;
    }
    .PersonalCenter_TitleBox{
        width: 750upx;
        height: 192upx;
        display: flex;
    }
    .PersonalCenter_TitleBox_right{
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: start;
        padding: 25upx 25upx 0 25upx;
    }
    .PersonalCenter_TitleBox_right_border{
        width: 100%;
        height: 120upx;
        display: flex;
        align-items: center;
    }

    .PersonalCenter_TitleBox_right_imgbox{
        width: 110upx;
        height: 110upx;
    }
    .PersonalCenter_TitleBox_right_img{
        width: 110upx;
        height: 110upx;
        background:rgba(255,255,255,1);
        border:1upx solid rgba(255,205,103,1);
        border-radius:50%;
    }
    .PersonalCenter_TitleBox_right_fontBox{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .PersonalCenter_TitleBox_right_font{
        width: auto;
        height:90upx;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height: 50upx;
        margin-left: 25upx;
        white-space:nowrap;
        overflow:hidden;

    }
    .PersonalCenter_TitleBox_right_font_age{
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(102,102,102,1);
    }
    .PersonalCenter_TitleBox_left{
        width: 50%;
        height: 100%;
    }
    .PersonalCenter_TitleBox_leftButtonBox{
        width: 100%;
        height: auto;
        position: relative;
    }
    .PersonalCenter_TitleBox_leftButtonBox>button{
        width: 94upx;
        height: 30upx;
        float: right;
        border-radius:20upx 0 0 20upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border: none;
        outline: none;
    }
    .PersonalCenter_TitlePopup{
        background:rgba(255,255,255,1);
        box-shadow:0 0 18upx 0 rgba(143, 143, 143, 0.35);
        position: absolute;
        top: 30upx;
        padding: 18upx;
    }
    .PersonalCenter_TitlePopup_font{
        width:285upx;
        height:110upx;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:30upx;
        text-align: justify;
    }
    .PersonalCenter_ContentDataBox{
        width: 725upx;
        height: 682upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .PersonalCenter_ContentDataBox_TopBox{
        width: 725upx;
        height: 269upx;
        border-radius: 20upx;
        display: flex;
        align-content: center;
        justify-content: space-around;
        flex-wrap: wrap;
        box-shadow: 2upx 2upx 2upx 2upx rgb(244,244,244);
        margin-top: 20upx;
    }
    .PersonalCenter_ContentDataBox_TopBoxData{
        width: 24%;
        height: 50%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
    }
    .PersonalCenter_ContentDataBox_TopBoxData_number{
        width: 100%;
        font-size:34upx;
        font-family:Arial;
        font-weight:bold;
        color:rgba(255,163,13,1);
        text-align: center;
        height: 40upx;
    }
    .PersonalCenter_ContentDataBox_TopBoxData_font{
        width: 100%;
        text-align: center;
        font-size:22upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .PersonalCenter_ContentDataBox_TopBoxData_img>img{
        width: 32upx;
        height: 34upx;
        position: absolute;
        top: 359upx;
        left: 383upx;
    }
    .PersonalCenter_ContentDataBox_TopBoxData_img1>img{
        width: 32upx;
        height: 34upx;
        position: absolute;
        top: 359upx;
        right: 383upx;
    }
    .PersonalCenter_ContentDataBox_DownBox{
        width: 725upx;
        height: 330upx;
        border: 1upx steelblue solid;
        border-radius: 20upx;
        display: flex;
        align-content: start;
        justify-content: space-around;
        flex-wrap: wrap;
        box-shadow: 2upx 2upx 2upx 2upx rgb(244,244,244);
        padding: 15upx;
    }
    .PersonalCenter_ContentDataBox_DownBox_ImgBox{
        width: 670upx;
        height: 250upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .PersonalCenter_ContentDataBox_DownBox_Img{
        position: relative;
        width: auto;
        height: 100%;
    }
    .button{
        position: absolute;
        z-index: 99999;
        right: 100upx;
        bottom:35upx ;

    }
    .button1{
        position: absolute;
        z-index: 99999;
        right: 100upx;
        bottom:35upx ;
    }
    .PersonalCenter_ContentDataBox_DownBox_Img_font{
        position: absolute;
        top: 25upx;
        right: 25upx;
        width:270upx;
        height:96upx;
        font-size:37upx;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:61upx;
        text-shadow:0 4upx 0 rgba(30,31,172,0.57);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-style: italic
    }
    .PersonalCenter_ContentDataBox_DownBox_Img_font>view:nth-child(2){
        font-size:37upx;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color: rgba(255, 255, 83, 1);
    }
    .PersonalCenter_ContentDataBox_TopBoxData_downFont{
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        text-align: center;
    }
    .PersonalCenter_ContentDataBox_DownBox_Button{
        margin-top: 20upx;
    }
    .PersonalCenter_DownImgBox{
        width: 690upx;
        height: 420upx;
        margin-top: 40upx;
    }
    .PersonalCenter_DownImgborder{
        width: 690upx;
        height: 376upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .PersonalCenter_DownImg{
        border-radius: 20upx;
        width: 690upx;
        height: 180upx;
        border: 1upx solid black;
    }
</style>
