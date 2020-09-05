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
                        <view class="Poputselection_contentBox_Selectseeds_background">
                            <view class="img_box">
                                <img  class="Poputselection_contentBox_Selectseeds_img" :src=item.img alt="">
                            </view>
                            <view class="Poputselection_contentBox_Selectseeds_font">{{item.font}}</view>
                        </view>

                        <view class="item" @click="switchCheckBox(item.key)" >
                            <icons class="Poput_icon" type="checkbox-filled" color="#FFC248"  size="19" v-if="switchcheckbox[item.key]"/>
                            <view class="circular"  v-if="!switchcheckbox[item.key]"></view>
                            <text>{{item.name}}</text>
                        </view>


                    </view>
                </view>
            </view>
<!--            底部按钮-->
            <view class="Poputselection_downButtonBox">
                <view class="Poputselection_downButtonfont">成熟后可得30元</view>
                <img @click="downBut" class="Poputselection_downButton" src="../assets/img/icon-button.png" alt="">
            </view>
        </view>
    </view>
</template>

<script>
    import icons from "./../components/uni-icon/uni-icons"
    export default {
        name: "Poputselection",
        components:{ icons },
        data() {
            return {
                imgList:[
                    {color:'red',key:'GoldenApple',img:require("../assets/img/Walnut@2x.png"),name:"果核",font:'赠送果核果子一枚，种植一个月左右长成，拍卖可提现10元'},
                    {color:'none',key:'SilverApple',img:require("../assets/img/SilverApple@2x.png"),name:"银苹果",font:'赠送银苹果种子一枚，种植三个月左右长成，拍卖可提现30元'},
                    {color:'none',key:'Stone',img:require("../assets/img/GoldenApple@2x.png"),name:"金苹果",font: '赠送金稻穗一枚，根据任务种植长成，拍卖可提现80元'},
                    {color:'none',key:'rice',img:require("../assets/img/Wheat@2x.png") ,name:"稻穗",font: '赠送金稻穗一枚，根据任务种植长成，拍卖可提现80元'},
                ],
                switchcheckbox:{
                    SilverApple: false,
                    GoldenApple: false,
                    Stone: false,
                    rice: false
                },
            }
        },
        methods:{
            switchCheckBox(index){
                let count = 0
                this.switchcheckbox[index] = !this.switchcheckbox[index]
                for (let item in this.switchcheckbox){
                    if(this.switchcheckbox[item]){
                        count = count+1
                        console.log(count)
                    }
                }
                if (count > 3){
                    alert("只能选择三个")
                    this.switchcheckbox[index] = false
                }
            },
            downBut(){
                this.$emit('close')
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
        background-image: url("../assets/img/icon-top.png");
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
        left: 15upx;
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
    }
    .Poputselection_downButton{
        width: 261upx;
        height: 90upx;
    }
</style>
