<template>
    <view class="Task_box">
        <view class="Task_content">
            <view class="Task_content_title">任务</view>
            <view class="Task_content_border" >
                <view class="Task_content_MissionDetails" v-for="(item,index) in MissionDetailsList" :key="index">
                    <view class="Task_content_MissionDetails_right">
                        <view class="Task_content_MissionDetails_right_imgBox" :style="{'background': ColorList[index]}">
                            <img  class="Task_content_MissionDetails_right_img" :src=item.img alt="">
                        </view>
                        <view class="Task_content_MissionDetails_right_fontBox">
                            <view class="Task_content_MissionDetails_right_font"> {{item.name}}</view>
                            <view>{{item.reward}}</view>
                        </view>
                    </view>
                    <view class="Task_content_MissionDetails_left">
                        <view class="Task_content_MissionDetails_left_number">
                            <view class="Task_content_MissionDetails_left_number_one">{{item.complete}}</view>
                            <view>{{item.frequency}}</view>
                        </view>
                        <view class="Task_content_MissionDetails_left_receive">
                            <button>领取</button>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="Task_Banner">
            <img mode="widthFix"  src="../assets/img/Banner@2x.png" alt="">
        </view>
    </view>
</template>

<script>
    export default {
        name: "Task",
        data(){
            return{
                MissionDetailsList:[
                    {img:require('../assets/img/icon-c.png'),name:'领取2次水份',reward:'奖励50金币',complete:'1',frequency:'/1'},
                    {img:require('../assets/img/icon-c.png'),name:"领取2次水份",reward:'奖励50金币',complete:'1',frequency:'/1'},
                    {img:require('../assets/img/icon-c.png'),name:"领取2次水份",reward:'奖励10水分10阳光',complete:'1',frequency:'/1'},
                    {img:require('../assets/img/icon-b.png'),name:"领取2次水份",reward:'领取75金币',complete:'1',frequency:'/1'},
                    {img:require('../assets/img/icon-a.png'),name:"领取2次水份",reward:'领取2元密匙',complete:'1',frequency:'/1'},
                ],
                ColorList:[
                    'rgba(190, 255, 254, 1)',
                    'rgba(255, 204, 204, 1)',
                    'rgba(190, 255, 254, 1)',
                    'rgba(255, 242, 188, 1)',
                    'rgba(255, 242, 188, 1)',
                ],

            }
        },
        methods:{
            closeMantle(){
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
    .Task_content_MissionDetails_left_receive>button{
        width: 122upx;
        height: 40upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:25upx;
        border: none;
        outline: none;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        display: flex;
        align-items: center;
        justify-content: center;
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
