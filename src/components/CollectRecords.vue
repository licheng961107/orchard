<template>
    <view>
        <view :class="see_more==1?'CollectRecords_box1':'CollectRecords_box'">
            <view class="CollectRecords_Title">领取记录</view>
            <view :class="see_more==1?'CollectRecords_Content1':'CollectRecords_Content'">
                <view @click="see_logId(item.id,item.user_id,item,index)"   :class="item.ldc?'CollectRecords_Content_Record1':'CollectRecords_Content_Record'"  v-for="(item,index) in RecordList" :key="index">
                    <view class="CollectRecords_Content_Record_font">{{item.create_time | timeFormat}}  领取：{{item.gift_type | reward_name }}</view>
                </view>
            </view>
            <view class="CollectRecords_button">
                <button @click="click_see">查看更多</button>
            </view>
        </view>
             <view class="down_button" v-if="gm_show == true">
                <button @click="close" class="btn1">退出</button>
<!--                <img @click="close"  mode="widthFix" class="CollectRecords_close" src="https://www.shuimukeji.cn/static/image/img/close@2x.png" alt="">-->
                <button @click="grant_reward" class="btn2">发放</button>
            </view>
        <img @click="close" v-if="gm_show==false" mode="widthFix" class="CollectRecords_close1" src="https://www.shuimukeji.cn/static/image/img/close@2x.png" alt="">

    </view>
</template>

<script>
    import { record } from "../api/get_convert_list";
    import { Gm } from "../api/Gm_delete_convert_log";
    import {chan_chu} from "../api/chan_chu";
    import { openid } from "../config/config";

    export default {
        name: "CollectRecords",
        data(){
            return{
                RecordList:[
                    {index:"",id:'',create_time:'',gift_type:'',user_id:'',},
                ],
                user_openid:'',//gm——openid
                see_more:0,
                record_id:"",
                gift_type:{
                    1:'联通卡',
                    2:'移动卡',
                    3:'488皮肤',
                    4:'888皮肤',
                    5:'288皮肤',
                },
                gm_show:"",
            }
        },
        mounted() {
            this.query_record()
            this.user_openid = openid
            this.local_openid();
        },
        filters:{
            reward_name:function (type) {
              let gift_type = {
                  "1":'联通卡',
                  "2":'移动卡',
                  "3":'488皮肤',
                  "4":'888皮肤',
                  "5":'288皮肤',
              }
              return gift_type[type]
          },
        },
        methods:{

            //兑换信息查询
            query_record(){
                record().then(res=>{
                    this.RecordList = res
                    console.log("兑换记录查询 ",res)
                    for (let item in this.RecordList){
                        this.$set(this.RecordList[item],"ldc",false)
                    }
                });
            },
            see_logId(id,user_id,item,index){

                let local_openid = uni.getStorageSync('openid')
                let that = this
                this.record_id = id
                for (let item in this.RecordList){
                    if(index == item){
                        this.RecordList[item].ldc = true
                    }else {
                        this.RecordList[item].ldc = false

                    }
                }
                uni.showModal({
                    title:'查看奖励详情',
                    content:'查看用户信息',
                    success(res){
                        if (res.confirm) {
                            if(that.user_openid == local_openid){
                                uni.navigateTo({
                                    url:'/components/user?user_id='+user_id
                                })
                            }
                        }else if (res.cancel){
                        }
                    }
                })
            },
            click_see(){
                this.see_more = !this.see_more
            },
            //Gm发放奖励
            grant_reward(){
                let data = {
                    log_id :this.record_id
                }
                uni.showModal({
                    title:'发放奖励',
                    content:'是否发放当前奖励',
                    success(res){
                        if (res.confirm) {
                            Gm(data).then(res=>{
                                uni.showToast({
                                    title:"发放成功 ",
                                    icon:"success",
                                    duration:2000
                                })
                            })
                        }
                    }
                })
            },
            local_openid(){
                let option =  uni.getStorageSync("openid")
                if (option == this.user_openid){
                    this.gm_show = true
                }else {
                    this.gm_show = false
                }
            },
            close(){
                this.$emit("onclose")
            },
        }
    }
</script>

<style scoped>
    .CollectRecords_box{
        width: 600upx;
        height: 625upx;
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
    .CollectRecords_box1{
        width: 600upx;
        height: 790upx;
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
        height: 470upx;
        display: flex;
        align-content: start;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto;
    }
    .CollectRecords_Content1{
        width: 533upx;
        height: 645upx;
        display: flex;
        align-content: start;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto;
    }
    .CollectRecords_Content_Record{
        width: 533upx;
        height: 70upx;
        background: rgb(255,203,98);
        border-radius: 10upx;
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: 10upx;
    }
    .CollectRecords_Content_Record1{
        width: 533upx;
        height: 70upx;
        background: rgb(255,203,98);
        border-radius: 10upx;
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: 10upx;
        border: 1px solid black;
    }
    .CollectRecords_Content_Record_font{
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:48upx;
        margin-left: 25upx;
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
    .down_button{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: start;
        justify-content: space-between;
    }
    .btn1{
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
        margin-top: 20upx;
    }
    .btn2{
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
        margin-top: 20upx;
    }
    .CollectRecords_close{
        width: 50upx;
        height: 50upx;
    }
    .CollectRecords_close1{
        position: absolute;
        bottom: -80upx;
        width: 50upx;
        height: 50upx;
        right: 280upx;
    }
</style>
