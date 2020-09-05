<template>
    <view class="orchard1_box">
<!--        蒙层-->
        <view class="orchardPage_box_Mantle"  v-if="hintMask"></view>

        <view class="orchard1_popup">
            <view class="orchard1_popup_border">
                <view class="orchard1_popup_titleBox">
                    <view :class="checkTitle==1?'orchard1_popup_Button1':'orchard1_popup_Button'" @click="bcheck(1)">商城</view>
                    <view>
<!--                        <view>金币:{{number_Goldcoin}}</view>-->
                        <view >金币:{{number_Goldcoin}}</view>
                        <view>元宝:{{number_Yuanbao}}</view>
                    </view>
                    <view :class="checkTitle==2?'orchard1_popup_Button1':'orchard1_popup_Button'" @click="bcheck(2)">拍卖</view>
                </view>


                <!--      拍卖-->
                <view class="orchard1_popup_contentBox" v-if="checkTitle==2">
                    <view class="orchard1_popup_content" v-for="(item , index) in imgList" :key="index">
                        <view @click="auction_seed(item.id, index)" class="orchard1_popup_content_top">
                            <view class="orchard1_popup_content_top_border">
                                <view class="orchard1_popup_content_top_img">
                                    <img mode="widthFix" :src=item.img alt="">
                                </view>
                                <view class="orchard1_popup_content_top_number">×{{item.number}}</view>
                            </view>
                            <view class="orchard1_popup_content_top_fontBox">
                                <view>价值{{item.money}}元</view>
                            </view>
                        </view>
                        <view class="orchard1_popup_content_down">
                            {{item.varieties}}
                        </view>
                    </view>
                </view>

                <!--      商城-->
                <view class="orchard1_popup_ShoppingMallBox" v-if="checkTitle==1">
                    <view class="orchard1_popup_ShoppingMallContentBox">
                        <view class="orchard1_popup_ShoppingMall_Content">
                            <view class="orchard1_popup_ShoppingMall_ContentBorder">
                                <view class="orchard1_popup_ShoppingMall_ContentBorderImg">
                                    <img mode="widthFix"src="../assets/img/icon-img44@2x.png" alt="">
                                </view>
                                <view class="orchard1_popup_ShoppingMall_ContentBorderShow" @click="purchase_seed(2)">
                                    <view class="orchard1_popup_ShoppingMall_ContentBorderShow_font">银苹果种子</view>
                                    <view >80元宝</view>
                                </view>
                            </view>
                            <view class="orchard1_popup_ShoppingMall_ContentBorder">
                                <view class="orchard1_popup_ShoppingMall_ContentBorderImg">
                                    <img mode="widthFix"src="../assets/img/icon-img44@2x.png" alt="">
                                </view>
                                <view class="orchard1_popup_ShoppingMall_ContentBorderShow" @click="purchase_seed(1)">
                                    <view class="orchard1_popup_ShoppingMall_ContentBorderShow_font">金苹果种子</view>
                                    <view>4个银色果核</view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="orchard1_popup_ShoppingMall_ContentDown">
                        <view class="orchard1_popup_ShoppingMall_ContentDownShow" >
                            <view class="orchard1_popup_ShoppingMall_ContentBorderShowData" v-for="(item,index) in iconList" :key="index" @click="close">
                                <img mode="widthFix"  @click="purchase_attribute(item.id)" :src=item.img alt="">
                            </view>
                        </view>
                    </view>

                </view>

            </view>
        </view>
            <img class="close" mode="widthFix" @click="close" src="../assets/img/close@2x.png" alt="" >
    </view>
</template>

<script>
    import { pai_mai} from "../api/pai_mai";
    import { buying_seeds } from "../api/buy_weather"
    import { all_asset } from "../api/all_asset"


    export default {
        name: "orchard1",
        data(){
            return{
                imgList:[
                    {id:"4",img:require("../assets/img/Wheat@2x.png"),money:80,number:10,varieties:"金稻穗拍卖1600元宝+1金稻穗种子"},
                    {id:"2",img:require("../assets/img/Walnut@2x.png"),money:80,number:10,varieties:"果核果实拍卖280元宝 +1银色果核"},
                    {id:"1",img:require("../assets/img/SilverApple@2x.png"),money:30,number:10,varieties:"银苹果拍卖680元宝 +1银色果核"},
                    {id:"3",img:require("../assets/img/GoldenApple@2x.png"),money:120,number:10,varieties:"金苹果拍卖2480元宝 +1银色果核"},
                ],
                iconList:[
                    {id:"1",img:require("../assets/img/icon-water@2x.png")},
                    {id:"2",img:require("../assets/img/icon-chemicalfertilizer@2x.png")},
                    {id:"3",img:require("../assets/img/icon-light@2x.png")},
                    {id:"4",img:require("../assets/img/icon-rainstorm.png")},
                    {id:"5",img:require("../assets/img/icon-cloudy@2x.png")},
                    {id:"6",img:require("../assets/img/icon-sunshine@2x.png")},
                ],
                show:"",
                checkTitle:1,
                hintMask:0,
                number_Goldcoin:0,//金币数量
                number_Yuanbao:0,//元宝数量
            }
        },
        created() {
            all_asset().then(res =>{
                this.number_Yuanbao = res.gold_ingot
                this.number_Goldcoin = res.gold_num
            })
        },

        methods:{
            bcheck(index){
                this.checkTitle=index
                console.log(index)
            },
            close(){
                this.$emit('oncloseShoppingMall')
            },
            auction_seed(id,index){
                let data = {
                    plant_type:id,
                    price:this.imgList[index].money,
                    number:1
                }
                    pai_mai(data).then( res => {
                    })
            },
            purchase_seed(plant_type){
                if(this.number_Goldcoin >=0  && this.number_Yuanbao >= 0){
                    uni.showToast({
                        title:'够买失败',
                        success:2000,
                    })
                    let  data = {
                        plant_type:plant_type,
                        number : 1
                    }
                    buying_seeds( data).then(res=>{
                        all_asset().then(res =>{
                            this.number_Yuanbao = res.gold_ingot
                            this.number_Goldcoin = res.gold_num
                        })
                    })
                }else{
                    uni.showToast({
                        title:'够买失败',
                        success:2000,
                    })
                }

            },
            //够买属性
            purchase_attribute(plant_type){
                if( this.number_Yuanbao >= 0 && this.number_Goldcoin > 0){
                    uni.showToast({
                        title:'购买成功',
                        success:2000,
                    })
                    this.$emit("onBuy", plant_type)
                }else{
                    uni.showToast({
                        title:'购买失败',
                        success:2000,
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .orchard1_box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
        z-index: 1;
        filter: alpha(opacity=50);
        width: 100%;
        height: 100%;
        border: 10px solid black;
    }
    .orchard1_popup{
        width:690upx;
        height:703upx;
        background:rgba(255,236,190,1);
        box-shadow:0 0 9upx 0 rgba(60,  173, 0, 0.35);
        border-radius:10upx;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
    }
    .orchard1_popup_border{
        width: 100%;
        height: 95%;
        padding: 20upx 30upx;
    }
    .orchard1_popup_titleBox{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16upx;
    }
    .orchard1_popup_Button{
        width: 162upx;
        height: 64upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:30upx;
        border: none;
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:21upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .orchard1_popup_Button1{
        width: 162upx;
        height: 64upx;
        background:rgba(255, 255, 255, 1);
        border-radius:30upx;
        border: none;
        outline: none;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,153,0,1);
        line-height:21upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .orchard1_popup_titleBox>view:nth-child(2){
        width: 206upx;
        height:78upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:30upx;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .orchard1_popup_contentBox{
        width: 100%;
        height: 499upx;
        margin-top: 65upx;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .orchard1_popup_content{
        width: 45%;
        height: 222upx;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .orchard1_popup_content_top{
        width:269upx;
        height:154upx;
        background:rgba(255,255,255,1);
        border:2upx solid rgba(255, 203, 99, 1);
        box-shadow:0 0 7upx 0 rgba(183, 83, 150, 0.35);
        border-radius:5upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .orchard1_popup_content_top_border{
        width: 100%;
        height: auto;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .orchard1_popup_content_top_img>img{
        width: 137upx;
        height:92upx;
    }
    .orchard1_popup_content_top_number{
        font-size:22upx;
        font-family:PingFang SC;
        font-weight:800;
        color:rgba(255,32,32,1);
        line-height:30upx;
    }
    .orchard1_popup_content_top_fontBox{
        width:90upx;
        height:22upx;
        background:rgba(255,205,103,1);
        font-size:22upx;
        line-height: 21upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(254,254,254,1);
        margin-top: 10upx;
        white-space:nowrap;
    }
    .orchard1_popup_content_top_fontBox>view{
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(254,254,254,1);
        transform: scale(0.8,0.8);
    }
    .orchard1_popup_content_down{
        width:100%;
        height: auto;
        font-size:19upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        transform: scale(0.7);
        text-align: center;
        white-space:nowrap;

    }
    .orchard1_popup_ShoppingMallBox{
        width: 100%;
        height: 555upx;
    }
    .orchard1_popup_ShoppingMallContentBox{
        width: 100%;
        height: 30%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .orchard1_popup_ShoppingMall_Content{
        width: 100%;
        height: 140upx;
        display: flex;
        justify-content: space-between;
        align-content: space-between;
    }
    .orchard1_popup_ShoppingMall_ContentBorder{
        height: 100%;
        width: 131upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
    }
    .orchard1_popup_ShoppingMall_ContentBorderImg>img{
        width: 66upx;
        height: 64upx;
    }
    .orchard1_popup_ShoppingMall_ContentBorderShow{
        width: 131upx;
        height: 69upx;
        background: rgb(255,193,71);
        border-radius: 10upx;
        font-size:16upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:24upx;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;
    }
    .orchard1_popup_ShoppingMall_ContentBorderShow_font{
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:24upx;
    }
    .orchard1_popup_ShoppingMall_ContentDown{
        width: 100%;
        height: 299upx;
        background: rgb(255,202,102);
        border-radius: 10upx;
        margin-top: 25upx;
    }
    .orchard1_popup_ShoppingMall_ContentDownShow{
        width: 100%;
        height: 70%;
        display: flex;
        align-content: space-around;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10upx;
    }
    .orchard1_popup_ShoppingMall_ContentBorderShowData{
        width: 32.7%;
        height: 40%;
        display: flex;
        align-content: space-around;
        justify-content: center;
    }
    .orchard1_popup_ShoppingMall_ContentBorderShowData>img{
        width: 77upx;
        height: 85upx;
    }
    .close{
        position: absolute;
        top: 1080upx;
        z-index: 1;
        width: 50upx;
        height: 50upx;
        right: 380rpx;
    }
</style>
