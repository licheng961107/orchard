<template>
    <view class="PersonalCenter_box">
        <view v-if="hintMask" class="orchardPage_box_Mantle"></view>
        <view class="PersonalCenter_TitleBox">
            <view class="PersonalCenter_TitleBox_right">
                <view class="PersonalCenter_TitleBox_right_border">
                    <view class="PersonalCenter_TitleBox_right_imgbox">
                        <view class="PersonalCenter_TitleBox_right_img">
                            <img class="PersonalCenter_TitleBox_right_img" mode="WidthFix" :src=user_img alt="">
                        </view>
                    </view>
                    <view class="PersonalCenter_TitleBox_right_fontBox">
                        <view class="PersonalCenter_TitleBox_right_font">
                            <view>{{user_name}}</view>
                        </view>
                    </view>
                </view>
                <view class="Secret_key" @click="toSecret_key">
                    合伙人秘钥输入
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
                <view class="PersonalCenter_ContentDataBox_TopBoxData"  @click="operation(item.name)" v-for="(item ,index) in DataList" :key="index">

                    <view v-if="item.name != '提现入口' && item.name != '数据清零'">
                        <view class="PersonalCenter_ContentDataBox_TopBoxData_number" :style="{'color': ColorList[index]}">{{item.number}}</view>
                    </view>
                    <view v-else>

                        <view   class="PersonalCenter_ContentDataBox_TopBoxData_img" v-if="item.name == '提现入口'">
                            <img mode="widthFix"  src="https://www.shuimukeji.cn/static/image/img/icon-Withdrawal@2x.png" alt="">
                        </view>
                        <view  class="PersonalCenter_ContentDataBox_TopBoxData_img" v-if="item.name == '数据清零'">
                            <img mode="widthFix"  src="https://www.shuimukeji.cn/static/image/img/icon-Clearing@2x.png" alt="">

                        </view>
                    </view>
                    <view class="PersonalCenter_ContentDataBox_TopBoxData_font">{{item.name}}</view>
                </view>

            </view>


            <view class="PersonalCenter_ContentDataBox_DownBox"  @click="toreceive">
                <view class="PersonalCenter_ContentDataBox_DownBox_ImgBox">
                    <view class="PersonalCenter_ContentDataBox_DownBox_Img">
                        <img mode="widthFix "  src="https://www.shuimukeji.cn/static/image/img/backgroundImg34@2x.png" alt="">
                        <img mode="widthFix "  src="https://www.shuimukeji.cn/static/image/img/backgroundImg694@2x.png" alt="">
                    </view>
                    <view class="PersonalCenter_ContentDataBox_DownFontBox">
                        <view class="PersonalCenter_ContentDataBox_DownFont">40元兑换价值488任意皮肤</view>
                        <view class="PersonalCenter_ContentDataBox_DownFont">有联通卡和移动卡20-60g流量免费送</view>
                    </view>
                </view>
                <view class="PersonalCenter_ContentDataBox_DownBox_Button">
                    <img  mode="widthFix"  src="https://www.shuimukeji.cn/static/image/img/button4@2x.png" alt="">
                </view>
            </view>

        </view>
        <view class="PersonalCenter_DownImgBox">
            <view class="PersonalCenter_DownImgborder">
                <view class="PersonalCenter_DownImg">
                    <img mode="widthFix "  class="PersonalCenter_DownImg" src="https://www.shuimukeji.cn/static/image/img/Banner@2x.png" alt="">
                </view>
                <view class="PersonalCenter_DownImg">
                    <img mode="widthFix "   class="PersonalCenter_DownImg1" src="https://www.shuimukeji.cn/static/image/img/Banner4@2x.png" alt="">
                </view>
            </view>
        </view>
        <view class="Secret_keyBox" v-if="Secret_key">
            <view class="Secret_keyTitle">合伙人密钥匙</view>
            <view class="Secret_keyinputBox">
                <input class="Secret_keyinput" v-model="key" placeholder="输入合伙人密匙..." type="text">
            </view>
            <view class="Secret_downbtnbox">
                <button class="Secret_btn1" @click="Submit_key">确定</button>
                <button class="Secret_btn2" @click="close" >退出</button>
            </view>
            <img  mode="widthFix" @click="close" class="orchard_close" src="https://www.shuimukeji.cn/static/image/img/close@2x.png" alt="">

        </view>
    </view>
</template>

<script>
    import {all_asset } from "../api/all_asset";
    import { secret_key } from "../api/secret_key"
    import {eliminate} from "../api/clear_diamonds";

    export default {
        name: "PersonalCenter",
        onShow(){
            this.get_user();
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        },

        data(){
            return{
                DataList:[
                    {name:'元宝数量',number:1520},
                    {name:'金币数量',number:1520},
                    {name:'砖石数量',number:1520},
                    {name:'银蛋数量',number:1520},
                    {name:'能提金额',number:1520},
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
                show:"",
                user_name:'',
                user_img:'',
                hintMask:0,
                Secret_key:0,
                key:''
            }
        },
        mounted() {
            this.get_user();
        },
        methods:{
            //获取用户信息
            get_user(){
                all_asset().then(res =>{
                    this.user_name = res.wx_login_data.nick_name
                    this.user_img = res.wx_login_data.avatar_url
                    this.DataList[0].number = res["gold_ingot"];
                    this.DataList[1].number = res["gold_num"];
                    this.DataList[2].number = res["diamonds"];
                    this.DataList[3].number = res["silver_eggs"];
                    this.DataList[4].number = res["cash"];
                    this.DataList[7].number = res["golden_eggs"];
                })
            },
            chickPoput(){
                this.show = !this.show
            },
            toreceive(){
                uni.navigateTo({
                    url:'/components/ReceiveRewards'
                })
            },
            operation(data){
                let that = this
                if(data == '提现入口'){
                    uni.navigateTo({
                        url:'/components/balance'
                    })
                }
                if(data == '数据清零'){
                    uni.showModal({
                        title:'数据清零',
                        content:'是否清除数据',
                        success(res){
                            if(res.confirm){
                                eliminate();
                                that.get_user();
                            }else if(res.cancel){
                            }
                        },
                    })
                }
            },
            toSecret_key(){
                this.Secret_key = 1
                this.hintMask = 1

            },
            Submit_key(){
                let key = {
                    secret : "hehuoren2020"
                }
                if(this.key == ""){
                    uni.showToast({
                        title:'请填写密匙'
                    })
                    console.log("1")
                }else if(this.key != "hehuoren2020"){
                    uni.showToast({
                        title:'密匙错误'
                    })
                    console.log("2")
                } else {
                    secret_key(key).then(res=>{
                        uni.showToast({
                            title:'兑换成功'
                        })
                        this.Secret_key = 0
                        this.hintMask = 0
                    });
                }
            },
            close(){
                this.Secret_key = 0
                this.hintMask = 0
                this.key = ""
            }
        }
    }
</script>

<style scoped>
    .Secret_keyBox{
        width: 680upx;
        height: 534upx;
        background: #FFECBE;
        border-radius: 20upx;
        position: absolute;
        z-index: 4;
        top: 20%;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Secret_keyTitle{
        width: 206upx;
        height: 64upx;
        background: linear-gradient(0deg, #FFB33D, #FFDC81);
        border-radius: 32upx;
        font-size: 30upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Secret_keyinputBox{
        width: 100%;
        height: 83upx;
        display: flex;
        justify-content: center;
    }
    .Secret_keyinput{
        width: 470upx;
        height: 83upx;
        background: white;
        float: contour;
        border: 2px solid #FFB33D;
        border-radius: 10upx;
    }
    .Secret_downbtnbox{
        width: 555upx;
        height: 74upx;
        display: flex;
        justify-content: space-between;
    }
    .Secret_btn1{
        width: 172upx;
        height: 74upx;
        border-radius: 32upx;
        background:white;
        font-size: 30upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFA000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Secret_btn2{
        width: 172upx;
        height: 74upx;
        border-radius: 32upx;
        background:#FFA000;
        font-size: 30upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .orchardPage_box_Mantle{
        background-color:#000000;
        left:0;
        opacity: 0.5;
        position: fixed;
        top: 0;
        z-index: 3;
        filter: alpha(opacity=50);
        width: 100%;
        height: 100%;
    }
    .orchard_close{
        position: absolute;
        width: 50upx;
        height: 50upx;
        bottom: -77upx;
    }
    .PersonalCenter_box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:rgba(255,255,255,1);
        box-shadow:0 0 18px 0 rgba(143, 143, 143, 0.35);
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
        padding: 25upx 25upx 0 25upx;
    }
    .Secret_key{
        width:135upx;
        height: 40upx;
        background: #FFECBE;
        border-radius:10upx;
        font-size: 19upx;
        line-height: 40upx;
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
        height: 38upx;
        position: relative;
    }
    .PersonalCenter_TitleBox_leftButtonBox>button{
        float: right;
        border-radius:20upx 0 0 20upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border: none;
        outline: none;
        color: #ffffff;
        height: 38upx;
        font-size: 18upx;
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
        display: block;
        margin-bottom: 10upx;
    }

    .PersonalCenter_ContentDataBox_DownBox{
        width: 725upx;
        height: 330upx;
        border-radius: 20upx;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        box-shadow: 2upx 2upx 2upx 2upx rgb(244,244,244);
        padding: 15upx;
    }
    .PersonalCenter_ContentDataBox_DownBox_ImgBox{
        width: 670upx;
        height: 250upx;
    }
    .PersonalCenter_ContentDataBox_DownBox_Img{
        width: 670upx;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .PersonalCenter_ContentDataBox_DownBox_Img>img{
        width: 320upx;
        height: 240upx;
    }
    .PersonalCenter_ContentDataBox_DownBox_Img>img:nth-child(1){
        width: 320upx;
        height: 100%;
        object-fit: cover;
    }


    .PersonalCenter_ContentDataBox_DownFontBox{
        width: 100%;
        height: 30upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .PersonalCenter_ContentDataBox_DownFont{
        width: 320upx;
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        text-align: center;
    }
    .PersonalCenter_ContentDataBox_DownFontBox{
        width: 100%;
        height: 30upx;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .PersonalCenter_ContentDataBox_DownFont{
        width: 320upx;
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        text-align: center;
    }
    .PersonalCenter_ContentDataBox_DownBox_Button{
        width: 100%;
        height: 60upx;
        display: flex;
        justify-content: center;
        margin-top: 30upx;
    }
    .PersonalCenter_ContentDataBox_DownBox_Button>img{
        width: 215upx;
        height: 52upx;
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
    }
    .PersonalCenter_DownImg1{
        width: 690upx;
        height: 180upx;
        object-fit:none;
        margin-top: 10upx;
    }

</style>
