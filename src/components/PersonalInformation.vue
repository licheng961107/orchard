<template>
    <view class="PersonalInformation_box">
        <view class="PersonalInformation_Content">
            <view class="PersonalInformation_Content_inputBox">
                <view class="PersonalInformation_Content_inputborderbox">
                    <view class="PersonalInformation_Content_inputborder">
                        <view class="PersonalInformation_Content_fill">姓名:</view>
                        <view class="PersonalInformation_Content_input">
                            <input v-model="name" :disabled="name_state" type="text" >
                            <view v-if="nameBoolean"  class="PersonalInformation_Content_inputFont">(不可修改)</view>
                        </view>
                    </view>
                </view>
                <view class="PersonalInformation_Content_inputborderbox">
                    <view class="PersonalInformation_Content_inputborder">
                        <view class="PersonalInformation_Content_fill">手机号:</view>
                        <view class="PersonalInformation_Content_input">
                            <input v-model="phone" type="number">
                        </view>
                    </view>
                </view>
                <view class="PersonalInformation_Content_inputborderbox">
                    <view class="PersonalInformation_Content_inputborder">
                        <view class="PersonalInformation_Content_fill">微信号:</view>
                        <view class="PersonalInformation_Content_input">
                            <input  v-model="wxnumber"  :disabled="wxnumber_state"  type="text" >
                            <view v-if="wxBoolean" class="PersonalInformation_Content_inputFont">(不可修改)</view>
                        </view>
                    </view>
                </view>
                <view class="PersonalInformation_Content_inputborderbox">
                    <view class="PersonalInformation_Content_inputborder">
                        <view class="PersonalInformation_Content_fill">收货地址:</view>
                        <view class="PersonalInformation_Content_input">
                            <input v-model="ShippingAddress" type="text">
                        </view>
                    </view>
                </view>

            </view>
            <view class="PersonalInformation_Content_Button">
                <button @click="getUser()">保存信息</button>
            </view>
        </view>
        <img mode="widthFix" @click="close" class="close" src="https://www.shuimukeji.cn/static/image/img/close@2x.png" alt="">

    </view>
</template>

<script>
    import {CommRequest} from "../comm/commRequest";
    import {modif} from "../api/modify";
    import {query_user} from "../api/query_user"
    import { add_user } from "../api/add_user"

    export default {

        data(){
            return{
                id:0,
                user_id:0,
                name:"",
                phone:"",
                wxnumber:"",
                ShippingAddress:"",
                nameBoolean:true,
                wxBoolean:true,
                name_state:'',
                wxnumber_state:''
            }
        },
        watch:{
            name(newData, oldData){
                if(newData){
                    this.nameBoolean = false
                }else{
                    this.nameBoolean = true
                }
            },
            wxnumber(newData, oldData){
                if(newData){
                    this.wxBoolean = false
                }else{
                    this.wxBoolean = true
                }
            },

        },
        mounted(){
            this.getData()
        },
        methods:{
            //查询用户
            getData(){
                query_user().then(res=>{
                    this.id = res.id;
                    this.user_id = res.user_id;
                    this.name = res.real_person_name;
                    this.phone = res.phone_number;
                    this.wxnumber = res.wx_account;
                    this.ShippingAddress = res.delivery_address;

                    if(this.id != 0){
                        this.name_state = 'disabled'
                        this.wxnumber_state = 'disabled'
                    }else {
                        this.name_state = ''
                        this.wxnumber_state = ''
                    }

                })
            },
            getUser(){
                let edit_data = {
                    phone_number :this.phone,
                    delivery_address :this.ShippingAddress,
                    real_person_name  : this.name,
                    wx_account  : this.wxnumber
                };

                if(this.user_id){
                    edit_data.id = this.user_id
                }
                if (this.name == ""){
                    uni.showToast({
                        title:"请输入姓名"
                    })
                }else if(this.phone == ""){
                    uni.showToast({
                        title:"请输入电话号"
                    })
                } else if(this.wxnumber == ""){
                    debugger
                    uni.showToast({
                        title:"请输入微信号"
                    })
                }else if(this.ShippingAddress == ""){
                    uni.showToast({
                        title:"请输入地址"
                    })
                }else{
                    modif(edit_data).then(res=>{

                    })
                }





            },

            close(){
                this.$emit("onclose")
                this.name_state=true
            }

        }
    }
</script>

<style scoped>
    .PersonalInformation_box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .PersonalInformation_Content{
        width:650upx;
        height:500upx;
        background:rgba(255,236,190,1);
        box-shadow:0 0 18upx 0 rgba(60, NaN, 173, 0.35);
        border-radius:20upx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .PersonalInformation_Content_inputBox{
        width: 543upx;
        height: 320upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .PersonalInformation_Content_inputborderbox{
        width:543upx;
        height:70upx;
        background:rgba(255,203,99,1);
        border-radius:10upx;

    }
    .PersonalInformation_Content_inputborder{
        width: 509upx;
        height: 70upx;
        display: flex;
        align-items: center;
        justify-content: center;
        float: right;
    }
    .PersonalInformation_Content_input{
        width: 440upx;
        position: relative;
        display: flex;
    }
    .PersonalInformation_Content_input>input{
        width:100%;
        height:100%;
        background:rgba(255,203,99,1);
        border: none;
        outline: none;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .PersonalInformation_Content_inputFont{
        width: 150upx;
        color:rgba(255,255,255,1);
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        position: absolute;
        z-index: 111111;
        right: 25upx;
    }
    .PersonalInformation_Content_fill{
        width:auto;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:48upx;
        text-align: left;
        white-space:nowrap;
        letter-spacing: 5upx;
    }
    .PersonalInformation_Content_Button{
        width: 100%;
        height: 77upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .PersonalInformation_Content_Button>button{
        width: 317upx;
        height: 77upx;
        border-radius: 20upx;
        border: none;
        background:rgba(255,203,99,1);
        border: none;
        outline: none;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .close{
        width: 50upx;
        height: 50upx;
        position: absolute;
        bottom: 270upx;
    }
</style>
