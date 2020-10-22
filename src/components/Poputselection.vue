<template>
    <view class="Poputselection_box">
        <view class="Poputselection_contentBox">
<!--            弹窗标题-->
            <view class="Poputselection_contentBox_title">
                <view class="Poputselection_contentBox_title_font">免费赠送三枚种子</view>
                <view class="Poputselection_contentBox_font1">种植后可提现大量金币，每个果实成长期不同，请慎重选择</view>
            </view>
<!--            选择种子-->
            <view class="Poputselection_contentBox_Selectseeds">
                <view class="Poputselection_contentBox_Selectseeds_borderBox" >
                    <view class="Poputselection_contentBox_Selectseeds_border" v-for="(item,index) in imgList" :key="index">
<!--                        白色背景-->
<!--                        <view  @click="switchCheckBox(item.id,item.seed_money)" :class="state == item.id && item.id != 2?'Poputselection_contentBox_Selectseeds_background1':'Poputselection_contentBox_Selectseeds_background'">-->
                        <view  @click="switchCheckBox(item.id,item.seed_money)" :class="state == item.id?'Poputselection_contentBox_Selectseeds_background1':'Poputselection_contentBox_Selectseeds_background'">
                        <img  class="Poputselection_contentBox_Selectseeds_img" :src=item.img alt="">
                            <view class="Poputselection_contentBox_Selectseeds_font">{{item.font}}</view>
                        </view>
                        <view class="item"  >
                            <icons class="Poput_icon" type="checkbox-filled" color="#FFC248"  size="18" v-if="state == item.id"/>
                            <view class="circular"  v-if="state != item.id"></view>
                            <text>{{item.name}}</text>
                        </view>
                    </view>
                </view>
            </view>
<!--            底部按钮-->
            <view class="Poputselection_downButtonBox">
                <view class="Poputselection_downButtonfont">成熟后可得
                    <view class="money_style" >{{money}}元</view>
                </view>
<!--                <img  @click="plantseed(state)" class="Poputselection_downButton" src="https://www.shuimukeji.cn/static/image/img/icon-button.png" alt="">-->
                <button class="Poputselection_downButton" open-type="getUserInfo"  @getuserinfo="get_user" >种植</button>
            </view>
        </view>
    </view>
</template>

<script>
    import icons from "./../components/uni-icon/uni-icons"
    import { plant_seed } from "../api/plant_warehouse";
    import {commLogin} from "../api/login";
    import  { all_asset } from "../api/all_asset";
    import { botany } from "../api/get_botany"

    export default {
        name: "Poputselection",
        components:{ icons },
        mounted() {

        },
        data() {
            return {
                imgList:[
                    {id:2,color:'red',key:'GoldenApple',img:"https://www.shuimukeji.cn/static/image/img/Walnut@2x.png",name:"果核",font:'赠送果核果子一枚，种植一个月左右长成，拍卖可提现元',seed_money:'30'},
                    {id:1,color:'none',key:'SilverApple',img:"https://www.shuimukeji.cn/static/image/img/SilverApple@2x.png",name:"银苹果",font:'赠送银苹果种子一枚，种植三个月左右长成，拍卖可提现元',seed_money:'30'},
                    {id:3,color:'none',key:'Stone',img:"https://www.shuimukeji.cn/static/image/img/GoldenApple@2x.png",name:"金苹果",font: '赠送金稻穗一枚，根据任务种植长成，拍卖可提现元',seed_money:'120'},
                    {id:4,color:'none',key:'rice',img:"https://www.shuimukeji.cn/static/image/img/Wheat@2x.png" ,name:"稻穗",font: '赠送金稻穗一枚，根据任务种植长成，拍卖可提现元',seed_money:'80'},
                ],
                switchcheckbox:{
                    GoldenApple: false,
                    SilverApple: false,
                    Stone: false,
                    rice: false
                },
                state:0,
                money:0,
            }
        },
        methods:{
            get_user(e){
                let usertoken = uni.getStorageSync("token")
                let that = this
                if (!usertoken){
                    commLogin(e,function () {
                        that.plantseed(that.state)
                        that.$emit("onInit")
                    })
                }else{
                    that.plantseed(that.state)

                }

            },
            switchCheckBox(index,seed_money){
                if (index == 3){
                 return
                }else {
                    this.state = index
                    this.money = seed_money
                }
            },
            plantseed(index){
                let plant_type = {
                    plant_type: index
                }
                plant_seed(plant_type).then(res =>{
                    console.log("plant_seed", res)
                    botany();

                })
                this.$emit("onInit")
            }

        }
    }
</script>

<style scoped>
    .Poputselection_box{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .Poputselection_contentBox{
        width:690upx;
        height:758upx;
        background:rgba(255,236,190,1);
        box-shadow:0 0 18upx 0 rgba(60, NaN, 173, 0.35);
        border-radius:20upx;
        position: absolute;
        top: 290upx;
        left: 29upx;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Poputselection_contentBox_title{
        width: 100%;
        height: 60upx;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: center;
        text-align: center;
    }
    .Poputselection_contentBox_title_font{
        width:100%;
        height:23upx;
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }
    .Poputselection_contentBox_font1{
        width:100%;
        height:18upx;
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .Poputselection_contentBox_Selectseeds{
        width: 100%;
        height: 480upx;
        padding: 0 65upx 0 65upx;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Poputselection_contentBox_Selectseeds_borderBox{
        height:90%;
        display: flex;
        align-content: space-around;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .Poputselection_contentBox_Selectseeds_border{
        width:237upx;
        height:226upx;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Poputselection_contentBox_Selectseeds_borderBox .Poputselection_contentBox_Selectseeds_border:nth-child(1) .Poputselection_contentBox_Selectseeds_background{
        height:181upx;
        border-radius:10upx;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
        border: 2px solid red;
        background-image: url("https://www.shuimukeji.cn/static/image/img/icon-top.png");

        background-repeat: no-repeat;
    }
    .Poputselection_contentBox_Selectseeds_background{
        width:237upx;
        height:181upx;
        background:rgba(255,255,255,1);
        border:2upx solid rgba(255,194,72,1);
        border-radius:10upx;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Poputselection_contentBox_Selectseeds_background1{
        width:237upx;
        height:181upx;
        background:rgba(255,255,255,1);
        border:2upx solid rgba(255,194,72,1);
        border-radius:10upx;
        display: flex;
        align-content: space-around;
        justify-content: center;
        flex-wrap: wrap;
        border: 2px solid blue;
    }

    .img_box>img{
        width:auto;
        height: 86upx;
        position: relative;
        z-index:0;
    }
    .Poputselection_contentBox_Selectseeds_img{
        width:100upx;
        height: 86upx;
        margin-top: 25upx;
    }
    .Poputselection_contentBox_Selectseeds_font{
        width:254upx;
        height:35upx;
        font-size:16upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        text-align: justify;
    }
    .circular{
        width:33upx;
        height:33upx;
        background:rgba(255,194,72,1);
        border:1upx solid rgba(255,255,255,1);
        border-radius:50%;
        position: relative;
        z-index: 1;
        left: 5upx;
    }
    .item{
        width: 130upx;
        height: 20upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 20upx;
    }
    .Poput_icon{
        width:65upx;
        height:21upx;
        line-height: 21upx;
    }
    text{
        width:65upx;
        height:21upx;
        font-size:22upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        white-space: nowrap;
    }
    .Poputselection_downButtonBox{
        width: 100%;
        height: 140upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Poputselection_downButtonfont{
        width:100%;
        height:19upx;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(101,101,101,1);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
    }
    .Poputselection_downButton{
        width: 350upx;
        height: 45upx;
        font-size: 22px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        background: linear-gradient(0deg, #FFB33D, #FFDC81);
        border-radius: 30px;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: 35upx;
    }
    .money_style{
        color: red;
    }
</style>
