<template>
    <view class="PersonalInformation_box">
        <view class="PersonalInformation_Content">
            <view class="PersonalInformation_Content_inputBox">
                <view class="PersonalInformation_Content_inputborderbox">
                    <view class="PersonalInformation_Content_inputborder">
                        <view class="PersonalInformation_Content_fill">姓名:</view>
                        <view class="PersonalInformation_Content_input">
                            <input v-model="name" type="text" >
                            <view v-if="nameBoolean" class="PersonalInformation_Content_inputFont">(不可修改)</view>
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
                            <input  v-model="wxnumber" type="text" >
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
    </view>
</template>

<script>
    export default {
        name: "PersonalInformation",
        data(){
            return{
                id:0,
                name:"",
                phone:"",
                wxnumber:"",
                ShippingAddress:"",
                nameBoolean:true,
                wxBoolean:true
            }
        },
        watch:{
            name(newData, oldData){
                if(newData){
                    this.nameBoolean = false
                }else{
                    this.nameBoolean =true
                }
            },
            wxnumber(newData, oldData){
                if(newData){
                    this.wxBoolean = false
                }else{
                    this.wxBoolean = true
                }
            }
        },
        mounted(){
            this.getData()
        },
        methods:{
            getData(){
                uni.request({
                    url:"http://172.16.1.43:8080/api/convert_user_info/get_convert_user_info",
                    method:"get",
                    header:{
                        'content-type':'application/x-www-form-urlencoded',
                        'MemberToken': uni.getStorageSync("token")
                    },
                    success(res){
                       this.id = res.data.data.id
                    }
                })
            },
            getUser(){
                let url = this.id ? 'edit_convert_user_info' : 'add_convert_user_info'

                this.operateUser(url)
            },
            operateUser(url, data){

                wx.request({
                    url:"http://172.16.1.43:8080/api/convert_user_info/" + url,
                    method:"post",
                    data,
                    header:{
                        'content-type':'application/x-www-form-urlencoded',
                        'MemberToken': uni.getStorageSync("token")
                    },
                    success(res){
                        console.log(res)
                    }
                })

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
</style>
