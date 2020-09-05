<template>
    <view class="CollectRecords_box">
        <view class="CollectRecords_Title">领取记录</view>
        <view class="CollectRecords_Content">
            <view class="CollectRecords_Content_Record" v-for="(item,index) in RecordList" :key="index">
                <view class="CollectRecords_Content_Record_font">{{item.Record}}</view>
            </view>
        </view>
        <view class="CollectRecords_button">
            <button>查看更多</button>
        </view>
        <img @click="close"  mode="widthFix" class="CollectRecords_close" src="../assets/img/close@2x.png" alt="">
    </view>
</template>

<script>
    export default {
        name: "CollectRecords",
        data(){
            return{
                RecordList:[
                    {Record:"2020.6.10领取：288皮肤"},
                    {Record:"2020.7.20领取：488皮肤"},
                    {Record:"2020.8.30领取：588皮肤"},
                    {Record:"2020.9.15领取：688皮肤"},
                    {Record:"2020.1.14领取：188皮肤"},
                    {Record:"2020.2.11领取：288皮肤"},
                    {Record:"2020.3.09领取：388皮肤"},
                    {Record:"2020.4.08领取：788皮肤"},
                    {Record:"2020.5.02领取：188皮肤"},
                    {Record:"2020.6.20领取：188皮肤"},
                ]
            }
        },
        methods:{
            close(){
                this.$emit("onclose")
            }
        }
    }
</script>

<style scoped>
    .CollectRecords_box{
        width: 600upx;
        height: auto;
        background:rgba(255,236,190,1);
        box-shadow:0 0 9upx 0 rgba(60,  173, 0, 0.35);
        border-radius:20upx;
        border-radius: 20upx;
        padding-top: 16upx;
        display: flex;
        align-content: start;
        justify-content: center;
        flex-wrap: wrap;
    }
    .CollectRecords_Title{
        width:100%;
        height:auto;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:48upx;
        text-align: center;
        margin-bottom: 19upx;
    }
    .CollectRecords_Content{
        width: 533upx;
        height: 760upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .CollectRecords_Content_Record{
        width: 533upx;
        height: 70upx;
        background: rgb(255,203,98);
        border-radius: 10upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .CollectRecords_Content_Record_font{
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:48upx;
    }

    .CollectRecords_button>button{
        width: 200upx;
        height: 54upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:48upx;
        border-radius: 30upx;
        border: none;
        outline: none;
        background: rgb(255,203,98);
        margin:13upx 0 12upx 0;
    }
    .CollectRecords_close{
        position: absolute;
        bottom: -80upx;
        width: 50upx;
        height: 50upx;
    }
</style>
