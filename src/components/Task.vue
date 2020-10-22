<template>
    <view class="Task_box">
        <view class="Task_content">
            <view class="Task_content_title">任务</view>
            <view class="Task_content_border" >
<!--                领取2次水份-->
                <view class="Task_content_MissionDetails" >
                    <view class="Task_content_MissionDetails_right">
                        <view class="Task_content_MissionDetails_right_imgBox" style="background:rgba(190, 255, 254, 1)">
                            <img  class="Task_content_MissionDetails_right_img" src="https://www.shuimukeji.cn/static/image/img/icon-c.png" alt="">
                        </view>
                        <view class="Task_content_MissionDetails_right_fontBox">
                            <view class="Task_content_MissionDetails_right_font"> 领取2次水份</view>
                            <view>奖励50金币</view>
                        </view>
                    </view>
                    <view class="Task_content_MissionDetails_left">
                        <view class="Task_content_MissionDetails_left_number">
                            <view class="Task_content_MissionDetails_left_number_one">{{water_status==1?'1':'0'}}</view>
                            <view>/1</view>
                        </view>
                        <view class="Task_content_MissionDetails_left_receive">
                            <button  v-if="water_status==0"  class=" no_complete">去完成</button>
                            <button  v-if="water_status!=0" @click="receive_task(3)"  :class="water_status == 2? 'receive':'no_complete'">领取</button>
                        </view>
                    </view>
                </view>
<!--                领取2次养分-->
                <view class="Task_content_MissionDetails" >
                    <view class="Task_content_MissionDetails_right">
                        <view class="Task_content_MissionDetails_right_imgBox" style="background:rgba(255, 204, 204, 1)">
                            <img  class="Task_content_MissionDetails_right_img" src="https://www.shuimukeji.cn/static/image/img/icon-b.png" alt="">
                        </view>
                        <view class="Task_content_MissionDetails_right_fontBox">
                            <view class="Task_content_MissionDetails_right_font"> 领取2次养分</view>
                            <view>奖励50金币</view>
                        </view>
                    </view>
                    <view class="Task_content_MissionDetails_left">
                        <view class="Task_content_MissionDetails_left_number">
                            <view class="Task_content_MissionDetails_left_number_one">{{nutrient_status==1?'1':'0'}}</view>
                            <view>/1</view>
                        </view>
                        <view class="Task_content_MissionDetails_left_receive">
                            <button  v-if="nutrient_status==0"  class=" no_complete">去完成</button>
                            <button  v-if="nutrient_status!=0" @click="receive_task(4)"  :class=" nutrient_status== 2? 'receive':'no_complete'">领取</button>
                        </view>
                    </view>
                </view>
<!--                领取2次金币-->
                <view class="Task_content_MissionDetails" >
                    <view class="Task_content_MissionDetails_right">
                        <view class="Task_content_MissionDetails_right_imgBox" style="background:rgba(190, 255, 254, 1) ">
                            <img  class="Task_content_MissionDetails_right_img" src="https://www.shuimukeji.cn/static/image/img/icon-c.png" alt="">
                        </view>
                        <view class="Task_content_MissionDetails_right_fontBox">
                            <view class="Task_content_MissionDetails_right_font"> 领取2次金币</view>
                            <view>奖励10水分10阳光</view>
                        </view>
                    </view>
                    <view class="Task_content_MissionDetails_left">
                        <view class="Task_content_MissionDetails_left_number">
                            <view class="Task_content_MissionDetails_left_number_one">{{gold_coin_status==1?'1':'0'}}</view>
                            <view>/1</view>
                        </view>
                        <view class="Task_content_MissionDetails_left_receive">
                            <button v-if="gold_coin_status==0"  class=" no_complete">去完成</button>
                            <button  v-if="gold_coin_status!=0" @click="receive_task(1)"  :class=" gold_coin_status== 2? 'receive':'no_complete'">领取</button>
                        </view>
                    </view>
                </view>
<!--                领取5次阳光-->
                <view class="Task_content_MissionDetails" >
                    <view class="Task_content_MissionDetails_right">
                        <view class="Task_content_MissionDetails_right_imgBox" style="background:rgba(255, 242, 188, 1) ">
                            <img  class="Task_content_MissionDetails_right_img" src="https://www.shuimukeji.cn/static/image/img/icon-c.png" alt="">
                        </view>
                        <view class="Task_content_MissionDetails_right_fontBox">
                            <view class="Task_content_MissionDetails_right_font"> 领取5次阳光</view>
                            <view>奖励75金币</view>
                        </view>
                    </view>
                    <view class="Task_content_MissionDetails_left">
                        <view class="Task_content_MissionDetails_left_number">
                            <view class="Task_content_MissionDetails_left_number_one">{{sun_shine_status==1?'1':'0'}}</view>
                            <view>/1</view>
                        </view>
                        <view class="Task_content_MissionDetails_left_receive">
                            <button v-if="sun_shine_status==0"  class=" no_complete">去完成</button>
                            <button  v-if="sun_shine_status!=0" @click="receive_task(2)"  :class=" sun_shine_status== 2? 'receive':'no_complete'">领取</button>
                        </view>
                    </view>
                </view>
<!--                观看5次广告-->
                <view class="Task_content_MissionDetails" >
                    <view class="Task_content_MissionDetails_right">
                        <view class="Task_content_MissionDetails_right_imgBox" style="background:rgba(255, 242, 188, 1)">
                            <img  class="Task_content_MissionDetails_right_img" src="https://www.shuimukeji.cn/static/image/img/icon-c.png" alt="">
                        </view>
                        <view class="Task_content_MissionDetails_right_fontBox">
                            <view class="Task_content_MissionDetails_right_font">观看5次广告</view>
                            <view>领取2元红包</view>
                        </view>
                    </view>
                    <view class="Task_content_MissionDetails_left">
                        <view class="Task_content_MissionDetails_left_number">
                            <view class="Task_content_MissionDetails_left_number_one">{{ad_status==1?'1':'0'}}</view>
                            <view>/1</view>
                        </view>
                        <view class="Task_content_MissionDetails_left_receive">
                            <button v-if="ad_status==0"  class=" no_complete">去完成</button>
                            <button  v-if="ad_status!=0" @click="receive_task(5)"  :class=" ad_status== 2? 'receive':'no_complete'">领取</button>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="Task_Banner">
            <img mode="widthFix"  src="https://www.shuimukeji.cn/static/image/img/Banner@2x.png" alt="">
        </view>
    </view>
</template>

<script>
    import { user_task } from "../api/user_task";
    import { Finish_task } from "../api/complete_task";

    export default {
        name: "Task",
        mounted() {
            this.task();
        },
        data(){
            return{
                today:0,//时间年月日
                gold_coin_status:0,//领取金币任务完成
                gold_coin:0,//金币任务:2次金币
                nutrient:0,//领取两次养分完成任务
                nutrient_status:0,//领养分任务:1完成
                ad:0,//广告任务次数
                ad_status:0,//广告任务状态:1完成
                sun_shine:0,//阳光任务5次阳光
                sun_shine_status:0,//领阳光任务:1完成
                water_status:0,//领水任务:1完成
                water:0,//领水任务:领两次水完成任务
            }
        },
        methods:{
            task(){
                user_task().then(res=>{
                    this.today = res.today;
                    this.ad_status = res.ad_status;
                    // this.ad = res.ad
                    this.gold_coin_status = res.gold_coin_status;
                    // this.gold_coin = res.gold_coin;
                    // this.nutrient = res.nutrient;
                    this.nutrient_status = res.nutrient_status;
                    // this.sun_shine = res.sun_shine;
                    this.sun_shine_status = res.sun_shine_status;
                    // this.water = res.water;
                    this.water_status = res.water_status;
                    console.log('任务',res)
                })
            },
            receive_task(index){
                let data = {
                    task_type : index
                }
                console.log('领取',index)
                Finish_task(data).then(res=>{
                    console.log("任务任务",res)
                    this.task();
                })
            }

        }
    }
</script>

<style scoped>
    .Task_box{
        width: 100%;
        height: 1017upx;
        position: absolute;
        top: 422upx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

    }
    .Task_box1{
        width: 100%;
        height: 1017upx;
        position: absolute;
        top: 422upx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Task_content{
        width:690upx;
        height:820upx;
        background:rgba(182,223,93,1);
        box-shadow:0 0 18px 0 rgba(107, 170, 149, 0.35);
        border-radius:20upx;
        display: flex;
        align-content: start;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Task_content_title{
        width: 100%;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        text-align: center;
        margin: 30upx 0 19upx 0;
    }
    .Task_content_border{
        width: 632upx;
        height: 694upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Task_content_MissionDetails{
        width: 94%;
        height:106upx;
        background:rgba(255,255,255,1);
        box-shadow:0 0 18upx 0 rgba(107, 170, 149, 0.35);
        border-radius:20upx;
        padding: 12upx 12upx 11upx 24upx;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
    }
    .Task_content_MissionDetails_right{
        width: 265upx;
        height: 107upx;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .Task_content_MissionDetails_right_imgBox{
        width:111upx;
        height:107upx;
        background:rgba(190,255,254,1);
        border-radius:10upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Task_content_MissionDetails_right_img{
        width: 111upx;
        height: 107upx;
    }
    .Task_content_MissionDetails_right_fontBox{
        width: 133upx;
        height: 76upx;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(102,102,102,1);
        white-space:nowrap;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .Task_content_MissionDetails_right_font{
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }
    .Task_content_MissionDetails_left{
        width: 122upx;
        height: 80upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Task_content_MissionDetails_left_number{
        width: 100%;
        height: 40%;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51, 51, 51, 1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Task_content_MissionDetails_left_number_one{
        color:rgba(246,38,38,1);
    }
    .Task_content_MissionDetails_left_receive{
        width: 122upx;
        height: 50upx;
        display: flex;
        align-items: flex-end;
    }
    .no_complete{
        width: 122upx;
        height: 40upx;
        /*background:linear-gradient(0deg,rgba(237, 237, 237, 1),rgba(234, 234, 234, 1));*/

        background: #EDEDED;
        border-radius:25upx;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        white-space: nowrap;
        line-height: 40upx;
    }
    .receive{
        width: 122upx;
        height: 40upx;
        background: linear-gradient(0deg, #FFB33D, #FFDC81);
        border-radius: 25px;
        border: none;
        outline: none;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        white-space: nowrap;
        line-height: 40upx;
    }
    .Task_Banner{
        width:690upx;
        height:180upx;
        border-radius:20upx;
        margin-top: 15upx;
    }
    .Task_Banner>img{
        width: 100%;
        height: 100%;
    }
</style>
