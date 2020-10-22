<template>
    <view class="video_rewardBox">
        <img mode="WidthFix" class="img_background" src="../assets/img/video_background@2x.png" alt="">
        <view class="title_imgBox">
            <img class="icon_sun" :src="Icon_img()" alt="">
        </view>
        <view class="content_box">
            <view class="content_top">
                <img mode="widthFix" class="content_topImg" :src="Icon_img()" alt="">
                <view class="content_top_number">{{receive_number}}</view>
            </view>
            <view class="content_down">
                <view class="content_down_content">
                    <view class="content_down_left" @click="checkVideo(img)">
                        <img mode="widthFix" class="icon_video" src="../assets/img/video@2x.png" alt="">
                        <view class="content_down_left_fonr">看视频领取{{img | word}}</view>
                    </view>
                </view>
            </view>
            <view class="content_time" v-if="h !=''|| m !='' || s !=''">
                <view v-if="h != '' ">{{h}}时</view>
                <view v-if="m != '' ">{{m}}分</view>
                <view>{{s}}秒</view>

            </view>
        </view>
        <view class="down_box">
            <view class="down_font">不了,谢谢！</view>
            <img mode="WidthFix"  @click="close" class="down_close" src="../assets/img/icon_close.png" alt="">
        </view>
    </view>
</template>

<script>
    import {checkAdvertisement} from "../comm/commVideo";
    import {receive_assets} from "../api/receive_assets";
    import {sun_shine} from "../api/sun_shine";
    import {all_asset} from "../api/all_asset";
    import {get_Bubble} from "../api/get_qipao";
    export default {
        name: "video_reward",
        props:["img",'receive_number' ,"video_time"],
        data(){
            return{
                imgList:[
                    {id:1,img:'https://www.shuimukeji.cn/static/image/img/icon-sunlightImg@2x.png'},
                    {id:2,img:require('../assets/img/icon_Goldcoin.png')},
                    {id:3,img:require('../assets/img/icon_water.png')},
                    {id:4,img:require('../assets/img/icon_nutrient.png')},
                ],
                word_type:{
                    1:"光合",
                    2:"金币",
                    3:"水份",
                    4:"养份",
                },
                h:"",
                m:"",
                s:"",
            }
        },
        filters:{
            word:function (type) {
                let word_type = {
                    "1":"光合",
                    "2":"金币",
                    "3":"水份",
                    "4":"养份",
                }
                return word_type[type]
            }
        },

        methods:{
            //获取用户资产
            close(){
                this.$emit("close")
            },
            Icon_img(){
                for (let item of this.imgList){
                    if(item.id == this.img){
                        return  item.img
                    }
                }
            },
            checkVideo(id){
                // checkAdvertisement()//视频
                if(this.h,this.m,this.s == ''){
                    console.log("没时间了")
                }else{
                    this.$emit("get_reward",id)
                    console.log("还有时间")
                }

            },
            //获取当前时间
            getTime(){
                //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var str= this.video_time * 1000;
                var endDate = new Date(str);
                var end = endDate.getTime();
                //时间差
                var leftTime = end-now;
                //定义变量 d,h,m,s保存倒计时的时间
                var h,m,s;
                if (leftTime>=0) {
                    h = Math.floor(leftTime/1000/60/60%24);
                    m = Math.floor(leftTime/1000/60%60);
                    s = Math.floor(leftTime/1000%60);
                }
                this.h = h
                this.m = m
                this.s = s
                setTimeout(this.getTime,1000);
            },
        },
        created() {
            this.Icon_img();
            this.getTime()

        },
        mounted() {
        }
    }
</script>

<style scoped>
    .video_rewardBox{
        width: 100%;
        height: 750upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
    }
    .img_background{
        width: 700upx;
        height: 640upx;
    }
    .title_imgBox{
        width: 100%;
        height: 210upx;
        position: absolute;
        top: 100upx;
        display: flex;
        justify-content: center;
    }
    .icon_sun{
        width: 185upx;
        height: 185upx;
    }
    .content_box{
        width: 100%;
        height: 140upx;
        position: absolute;
        top: 310upx;
        display: flex;
        align-content: space-between;
        justify-content:center;
        flex-wrap: wrap;
    }
    .content_top{
        width: 166upx;
        height: 49upx;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content_topImg{
        width: 46upx;
        height: 49upx;
    }
    .content_top_number{
        width: 94upx;
        height: 38upx;
        font-size: 30upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #F73143;
        line-height: 36upx;
    }
    .content_down{
        width: 100%;
        height: 66upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content_down_content{
        width: 431upx;
        height: 66upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content_down_right{
        width: 62upx;
        height: 62upx;
        border: 1px solid black;
    }
    .content_down_left{
        width: 347upx;
        height: 66upx;
        background: #FF3245;
        box-shadow: 0 16upx 20upx 0 rgba(255, 49, 69, 0.4);
        border-radius: 10upx;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: nowrap;
    }
    .icon_video{
        width:46upx;
        height: 46upx;
    }
    .content_down_left_fonr{
        width: 212upx;
        height: 29upx;
        font-size: 30upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 30upx;
    }
    .down_box{
        width: 100%;
        height: 180upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .down_font{
        width: 100%;
        height: 30upx;
        font-size: u30px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
    .down_close{
        width: 78upx;
        height: 78upx;
    }
    .content_time{
        margin-top: 40upx;
        width: 333upx;
        height: 40px;
        color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
