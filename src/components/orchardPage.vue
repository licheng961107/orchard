<template>
    <view class="orchardPage_box">
<!--        蒙层-->
        <view v-if="hintMask" class="orchardPage_box_Mantle"></view>
<!--        提示-->
        <img  class="backgroundImg" src="../assets/img/bancgroundImg-1@2x.png"   alt=""/>
        <view class="orchardPage_content">
            <view class="orchardPage_Title">
                <view class="orchardPage_Title_img">
                    <!--        太阳-->
                    <img mode="widthFix"  v-if="hintArray.sunlightImg"  @click="sunlight" class="orchardPage_Title_sunlight" src="../assets/img/sunlight@2x.png" alt=""/>
<!--                    <img mode="widthFix"  v-if="hintArray.sunlightImg ==0" class="orchardPage_Title_Imgsunlight" src="../assets/img/icon-sunlightImg@2x.png" alt="">-->
<!--                    <img mode="widthFix"  v-if="twinkle_sunlight" src="../assets/img/icon-twinkle-sunlight@2x.png" class="icon-twinkle_sunlight" alt="">-->
                </view>

                <view class="orchardPage_Title_downBox">
                        <!--            养份-->
                    <view class="orchardPage_Title_downBox_right">
<!--                        晴天-->
                        <Sunny @sun_shine="chick_sun_shine(1)" v-if="Sunny"/>
<!--                        明媚-->
                        <Bright_and_beautiful v-if="Bright_and_beautiful"/>
<!--                        多云-->
                        <Cloudy v-if="Cloudy"/>
<!--                        暴雨-->
                        <rainstorm v-if="rainstorm"/>

                        <view class="orchardPage_Title_downBox_right_icon">
<!--                            养分值-->
                            <img src="../assets/img/icon-Nutrition@2x.png" alt="">
                            <view class="orchardPage_Title_downBox_right_number">{{number_nutrition}}</view>
<!--                            水分值-->
                            <img src="../assets/img/icon-Moisture@2x.png" alt="">
                            <view class="orchardPage_Title_downBox_right_number">{{number_water}}</view>
                        </view>
                    </view>
                        <!--            礼包-->
                    <view class="orchardPage_Title_downBox_GiftbagBox">
                        <view class="orchardPage_Title_downBox_Giftbag">
                            <img class="orchardPage_Title_downBox_Icon_Giftbag" src="../assets/img/icon-Giftbag.png" alt="">
                            <view class="orchardPage_Title_downBox_Giftbag_font">分享领取 超级大礼</view>
                        </view>
                        <view class="orchardPage_Title_downBox_font">
                            <view class="orchardPage_Title_downBox_top_font">点击太阳获取光合”“光合值{{1}}”</view>
                            <view class="orchardPage_Title_downBox_button">天气越好农作物成长越快</view>
                        </view>
                        <view class="orchardPage_Title_downBox_Giftbag">
                            <img class="orchardPage_Title_downBox_Icon_Giftbag" src="../assets/img/icon-Giftbag.png" alt="">
                            <view class="orchardPage_Title_downBox_Giftbag_font">分享领取 超级大礼</view>
                        </view>
                    </view>
                </view>

            </view>
            <!--      定位图片-->
            <view class="orchardPage_Img">
<!--                金币-->
                <img mode="widthFix"  @click="receive_reward(1)" class="orchardPage_Goldcoin" src="../assets/img/icon-Goldcoin@2x.png" alt=""/>
                <img mode="widthFix" @click="close" v-if="twinkle_Goldcoin"  class="icon-twinkle_Goldcoin" src="../assets/img/icon-twinkle-Goldcoin@2x.png" alt=""/>
<!--                红包-->
                <img mode="widthFix"  @click="chickred_envelopes" class="orchardPage_Redenvelopes" src="../assets/img/icon-Redenvelopes@2x.png" alt=""/>
<!--                蒙层红包-->
                <view class="Red_envelopes_box"  v-if="open_red_envelopes" >
                    <img mode="widthFix"  class="Red_envelopes" src="../assets/img/Red-envelopes@2x.png" alt=""/>
                    <view class="Red_envelopes_fontbox">
                        <view class="Red_envelopes_topfont">恭喜你获得</view>
                        <view class="Red_envelopes_font">现金红包</view>
                        <view class="Red_envelopes_downfont">2<view class="Red_envelopes_company">元</view></view>
                    </view>
                    <view class="Red_envelopes_buttonBox">
                        <img mode="widthFix"  class="Red_envelopes_button" src="../assets/img/Red-envelopes-button@2x.png" alt="">
                        <view class="Red_envelopes_buttonfont">立即领取</view>
                    </view>
                    <view>
<!--                        关闭按钮-->
                        <img mode="widthFix"  @click="close" class="Red_envelopes_button_close" src="../assets/img/icon-close@2x.png" alt="">
                    </view>
                </view>
                    <!--               水份-->
                <img mode="widthFix"   v-if="!hintArray.seedBankImg"  @click="receive_reward(3)" class="orchardPage_lefthandIcon" src="../assets/img/icon-MoistureImg@2x.png" alt=""/>
                <img mode="widthFix"   @click="close" v-if="twinkle_water"   class="icon-twinkle_water" src="../assets/img/icon-twinkle-water@2x.png" alt=""/>

                <!--                左手蒙层提示-->
                <img mode="widthFix"  @click="seedBankMethod" v-if="hintArray.seedBankImg"   class="orchardPage_lefthand" src="../assets/img/backgroundImglefthand@2x.png" alt=""/>
                <!--                养分-->
                <img mode="widthFix"    v-if="!hintArray.nutritionImg"  @click="receive_reward(4)" class="orchardPage_righthandIcon" src="../assets/img/icon-NutritionImg@2x.png" alt=""/>
                <img mode="widthFix"   @click="close"  v-if="twinkle_nutrition" class="icon-twinkle_nutrition" src="../assets/img/icon-twinkle-nutrient@2x.png" alt=""/>
                <!--                右手蒙层提示-->
                <img mode="widthFix"  @click="clicknutrition" v-if="hintArray.nutritionImg" class="orchardPage_righthand" src="../assets/img/backgroundImgrighthand@2x.png" alt=""/>
                <!--                枯萎的树-->
                <img mode="widthFix"  @click="Get_fruitTree(terrList[0].id, 0)"  :class="terrList[0].level == 1?'orchardPage_tree':'orchardPage_land'" :src=terrList[0].state?terrList[0].img1:terrList[0].img  alt="" :id="terrList[0].id"/>
            </view>
            <!--      左面操作-->
            <view class="orchardPage_leftImg">
<!--                有机物-->
                <img mode="widthFix" @click="click_small_gift(2)"  src="../assets/img/icon-organiccompound@2x.png" alt=""/>
<!--                白炽灯-->
                <img mode="widthFix" @click="chick_sun_shine(2)" src="../assets/img/icon-lamp@2x.png" alt=""/>
<!--                储水缸-->
                <img mode="widthFix" @click="click_small_gift(1)" src="../assets/img/icon-Storage@2x.png" alt="" id="3"/>
            </view>
            <!--      右面操作-->
            <view class="orchardPage_RightImg">
                <img mode="widthFix"  @click="seedyang(3)"  src="../assets/img/icon-applyfertilizer@2x.png" alt=""/>
<!--                施肥提示-->
<!--                <img mode="widthFix"   class="icon-applyfertilizertipeImg"  src="../assets/img/icon-applyfertilizertipe@2x.png" alt=""/>-->

                <img mode="widthFix"  @click="seedyang(2)" src="../assets/img/icon-watering@2x.png" alt=""/>
<!--                浇水提示-->
<!--                <img mode="widthFix"   class="icon-wateringTitsImg" src="../assets/img/icon-wateringTits.png" alt=""/>-->

            </view>
            <!--      中间数值样式-->
            <view class="orchardPage_operation">
                <view class="orchardPage_operation_numberbox" v-for="(item,index) in 3" :key="index">
                    <view class="orchardPage_operation_number">
                        <view class="orchardPage_operation_numberColor" :style="{'width':(experience*20)+'%'}"></view>
                        <view class="orchardPage_operation_numberFont">{{experience}}/5</view>
                    </view>
                    <view class="orchardPage_operation_Font">还需要24光和果树就能拍卖啦</view>
                </view>
            </view>
            <!--      底部图片-->
            <view class="orchardPage_DownImg" >

                <view class="orchardPage_Imgbox" >
                    <view class="orchardPage_Imgbox_b" v-for="(item , index) in terrList" :key="index" v-if="index != 0">
                            <img mode="widthFix"  @click="Get_fruitTree(item.id, index)" class="orchardPage_fruittree1" :src= item.state?item.img1:item.img />
                    </view>
                </view>


            </view>
            <!--      底部按钮-->
            <view class="orchardPage_DownButton">
                <!--        商城-->
                <button class="imgButton" open-type="getUserInfo" @click="chickShoppingMall">商城</button>
                <!--        任务-->
                <button class="imgButton" open-type="getUserInfo" @getuserinfo="chickRankingList">排行榜/任务</button>
                <!--        种子库-->
                <button class="imgButton" open-type="getUserInfo" @click="chickSeedBank">种子库</button>
                <!--        提现-->
                <button class="imgButton" open-type="getUserInfo" @getuserinfo="chickWithdrawal">提现</button>
            </view>

        </view>
        <!--      组件:种子库-->
        <view class="SeedBank_Popup" v-if="seedBank">
            <orchard @plant_seed="Clickplant_seed" @onchickSeedBank="chickSeedBank"/>
            <view class="SeedBank_Popup1">
            </view>
        </view>
        <!--    组件:商城-->
        <view  class="ShoppingMall" v-if="shoppingMall">
            <orchard1 @onBuy="buyShop" @oncloseShoppingMall="chickShoppingMall" :number_Goldcoin.sync="number_Goldcoin" />
            <view class="ShoppingMall1"/>
        </view>
<!--            组件:选择三种，种子-->
        <view class="Poputselection" v-if="hintArray.get_seed">
            <Poputselection @close="Poputselection"/>
        </view>

    </view>
</template>

<script>
    import orchard from "./orchard";
    import orchard1 from "./orchard1";
    import Sunny from "./SunnyDay";
    import Bright_and_beautiful from "./Brightandbeautiful"
    import Cloudy from "./cloudy";
    import rainstorm from "./rainstorm"
    import Poputselection from "./Poputselection";
    import {CommRequest} from "../comm/commRequest";
    import { commLogin } from "../api/login"
    import { botany} from "../api/get_botany"
    import { receive } from "../api/receive_water_nutrition"
    import { receive_assets } from"../api/receive_assets"
    import { Increase_nutrients } from "../api/plant_botany"
    import {sun_shine} from "../api/sun_shine";
    import { purchase_attribute } from "../api/buy_plant_attributes"
    import {purchase_weather} from "../api/buy_plant_weather";
    import {all_asset} from "../api/all_asset";
    import { plant_seed } from "../api/plant_warehouse";

    export default {
        name: "orchardPage",
        data(){
            return{
                seedBank:"",
                shoppingMall:"",
                hintMask: true,//
                hintArray:{
                    sunlightImg: 1,//第一个太阳提示
                    seedBankImg: 0,
                    nutritionImg: 0,
                    get_seed: 0,
                },
                terrList:[
                    {state:0,img1:require('../assets/img/backgroundImg-tree@2x.png'),img:require('../assets/img/img-tree_root@2x.png'),id:1},
                    {state:0,img1:require('../assets/img/icon-Fruittree1@2x.png'),img:require('../assets/img/img-land@2x.png'),id:2},
                    {state:0,img1:require('../assets/img/icon-Fruittree2@2x.png'),img:require('../assets/img/img-land@2x.png'),id:3},
                    {state:0,img1:require('../assets/img/icon-Fruittree3@2x.png'),img:require('../assets/img/img-land@2x.png'),id:4},
                ],
                open_red_envelopes:0,//打开红包
                twinkle_Goldcoin:0,//获取金币
                number_Goldcoin:0,//金币数量
                twinkle_sunlight:0,//获取阳光
                number_sunlight:0,//阳光数量
                twinkle_water:0,//获取水份
                number_water:0,//水份数量
                twinkle_nutrition:0,//获取养分
                number_nutrition:0,//养分数量
                number_Yuanbao:0,//元宝数量
                // get_water_tank:2,//储水缸
                // get_organic_compound:1,//有机物
                Sunny:1,//晴天
                Bright_and_beautiful:0,//明媚
                Cloudy:0,//多云
                rainstorm:0,//暴雨
                number:20,//经验条
                experience:1,//
                tree_id:0,

            }
        },
        mounted(){
         uni.getStorage({
              key:"sunlight_hint",
              success:(res)=>{
                  if (!res.data){
                      this.hintArray['sunlightImg'] = res.data
                  }
              }
          });
         uni.getStorage({
             key:"see_bank_hint",
             success:(res)=>{
                 if (!res.data){
                     this.hintArray['seedBankImg'] = res.data
                 }
             }
         });
         uni.getStorage({
             key:"nutrition_hint",
             success:(res)=>{
                 if (!res.data){
                     this.hintArray['nutritionImg'] = res.data
                     this.maskIsShow()
                 }
             }
         });
         uni.getStorage({
             key:"poputselection_hint",
             success:(res)=>{
                 if (!res.data){
                     this.hintArray['get_seed'] = res.data

                 }
             }
         })

            //中间数值样式
            this.experience = 2;
         //获取植物
         this.getBotany();
         //获取用户知产
         this.query_assets();
        },

        methods:{

            //种子库
            chickSeedBank(){
                this.seedBank=!this.seedBank
            },
            //查询用户资产
            query_assets(){
                all_asset().then(res=>{
                    this.number_nutrition = res.nutrient
                    this.number_water = res.exaggeration
                    this.number_Goldcoin = res.gold_num
                    this.tree_id = res.weather_id
                    this.number_sunlight = res.sun_num

                    this.number_Yuanbao = res.gold_ingot
                })
            },
            //点击商城
            chickShoppingMall(){
                for( let item in  this.terrList) {
                    if (this.terrList[item].state == 0) {
                        uni.showToast({
                            title: "请种植植物"
                        })
                        return
                    } else if (this.tree_id <= 0) {
                        uni.showToast({
                            title: "未选中树木"
                        })
                        return;
                    } else{
                         this.shoppingMall = !this.shoppingMall
                        all_asset()
                    }
                }
            },
            //排行榜
            chickRankingList(e){
                this.$emit('onGetUser',e)
                let usertoken = uni.getStorageSync("token")
                if (usertoken != ""){
                    uni.navigateTo({
                        url:'/components/RankingList'
                    })
                }
            },
            //提现
            chickWithdrawal(e){
                this.$emit('onGetUser',e)
                let usertoken = uni.getStorageSync("token")
                console.log(usertoken)
                if ( usertoken != ""){
                    uni.navigateTo({
                        url:'/components/PersonalCenter'
                    })
                }
            },
            //太阳提示
            sunlight(){
                uni.setStorageSync("sunlight_hint",0);
                if (this.hintMask == false){
                    this.hintArray.sunlightImg = 0;
                }else{
                    this.hintArray.sunlightImg = 0;
                    this.hintArray.seedBankImg = 1
                }
            },
            //点击水份提示
            seedBankMethod(){
                uni.setStorageSync("see_bank_hint",0);
                this.hintArray.seedBankImg = 0;
                this.hintArray.nutritionImg = 1
            },
            //右手提示
            clicknutrition(){
                uni.setStorageSync("nutrition_hint",0);
                this.hintArray.nutritionImg = 0;
                this.hintArray.get_seed = 1;
            },
            //选择种子提示
            Poputselection(){
                this.hintArray.get_seed = true
                uni.setStorageSync("poputselection_hint",0);
                this.hintArray.get_seed = 0;
                this.hintMask = false
            },
            //判断提示蒙城是否显示
            maskIsShow(){
                for(let i in this.hintArray){
                    if(!this.hintArray[i]){
                        this.hintMask = false
                        this.hintArray = false
                        return
                    }
                }
            },
            //点击红包
            chickred_envelopes(){
                this.hintMask = true
                this.open_red_envelopes = 1
            },
            //获取植物
            getBotany(){
                botany().then(res=>{
                    this.tree_list = res
                });
            },
            //领取气泡奖励 水份 金币 养分
            receive_reward(id){
                //金币
                if (id == 1){
                    this.hintMask = true;
                    this.twinkle_Goldcoin = 1
                    let receive_type = {
                        number :1,
                        assets_type: this.twinkle_Goldcoin,
                    }
                    receive_assets(receive_type).then(res =>{
                        uni.showToast({
                            title:"领取金币成功",
                            icon:"success",
                            duration:2000
                        })
                     this.query_assets()
                    })

                    this.number_Goldcoin++
                    console.log(this.number_Goldcoin)

                }
                //水份
                if(id == 3){
                    this.twinkle_water = 3
                    this.hintMask = true;
                    let receive_type = {
                        number :1,
                        assets_type: this.twinkle_water,
                    }
                    receive_assets(receive_type).then(res=>{
                        uni.showToast({
                            title:"领取水份成功",
                            icon:"success",
                            duration:2000
                        })

                        this.query_assets()

                        //水份值
                        this.number_water++
                        console.log(this.number_water)
                    })
                }
                //养分
                if(id == 4){
                    this.twinkle_nutrition = 4
                    this.hintMask = true;
                    let receive_type = {
                        number :1,
                        assets_type: this.twinkle_nutrition,
                    }
                    receive_assets(receive_type).then(res=>{
                        uni.showToast({
                            title:"领取养份成功",
                            icon:"success",
                            duration:2000
                        })
                        this.query_assets()
                        //养份值
                        this.number_nutrition++
                        console.log(this.number_nutrition)

                    })
                }
            },
            //获取有机物 获取储水缸
            click_small_gift(data){
                let click_type = {
                    click_type :data
                }
                receive(click_type).then(res=>{
                    uni.showToast({
                        title:"成功"
                    })
                })
            },
            //给植物增加养分水分
            Get_fruitTree(id,State){
                    if(this.terrList[State].state != 0){
                        this.tree_id = id
                        console.log(id)
                        console.log(this.terrList[id].state)


                }

            },
            //给植物浇水/施肥
            seedyang(asserts_type){
                let data = {
                    number: 1,
                    plant_id: this.tree_id,
                    asserts_type
                }
                Increase_nutrients(data).then(res=>{

                })
            },
            //点击太阳给植物增加光合
            chick_sun_shine(click_type ){
                for ( let item in this.terrList){
                    console.log(item)
                    debugger
                    if(this.tree_id <= 0 && this.terrList[item].state != 0){
                        debugger
                        uni.showToast({
                            title:"未选中树木"
                        })
                        return

                    }else{
                        uni.showToast({
                            title:"请先种植植物"
                        })
                        return
                    }
                    let data = {
                        number:1,
                        plant_id: this.tree_id,
                        click_type
                    }
                    sun_shine(data)
                }

            },
            //关闭按钮
            close(){
                this.hintMask = false
                this.open_red_envelopes = 0
                this.twinkle_water = 0
                this.twinkle_Goldcoin = 0
                this.twinkle_nutrition = 0
            },
            //购买属性
            buyShop(id){
                let data = {
                    plant_type: id,
                    weather_type: id,
                    plant_id: this.tree_id,

                }
                if (id <= 3 && id > 0){
                    debugger
                    purchase_attribute(data).then(res=>{
                        console.log(res)
                    })
                }
                //购买暴雨天气
                if(id == 4 ){
                    purchase_weather(data)
                    this.rainstorm = 1//暴雨
                    this.Sunny = 0
                }
                //购买多云天气
                if(id == 5){
                    purchase_weather(data)
                    this.rainstorm = 0//暴雨
                    this.Sunny = 0
                    this.Cloudy = 1//多云
                }
                if(id == 6){
                    purchase_weather(data)

                    this.rainstorm = 0//暴雨
                    this.Sunny = 0
                    this.Cloudy = 0//多云
                    this.Bright_and_beautiful = 1//明媚
                }

            },
            //种植种子
            Clickplant_seed(index){
                let plant_type = {
                    plant_type: index
                }
                plant_seed(plant_type).then(res =>{
                    console.log(res)
                })
                console.log(index)
                console.log("李大程")

            }

        },
        components:{
            orchard,
            orchard1,
            Sunny,
            Bright_and_beautiful,
            Cloudy,
            rainstorm,
            Poputselection
        },
    }
</script>

<style scoped>
    .ShoppingMall{
        position: absolute;
        border: 1upx solid black;
        width: 100%;
        z-index: 1;
    }
    .Poputselection{
        position: absolute;
        border: 1upx solid black;
        width: 100%;
        z-index: 1;
    }
    .ShoppingMall1{
        background-color:gray;
        left:0;
        opacity: 0.5;
        position: fixed;
        top: 0;
        z-index: -1;
        filter: alpha(opacity=50);
        width: 100%;
        height: 100%;
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
    }
    .SeedBank_Popup{
        position: absolute;
        width: 100%;
        z-index: 1;
    }
    .SeedBank_Popup1{
        background-color:gray;
        left:0;
        opacity: 0.5;
        position: fixed;
        top: 0;
        z-index: -1;
        filter: alpha(opacity=50);
        width: 100%;
        height: 100%;
    }
    .orchardPage_box{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .backgroundImg{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: 0;
        left: 0;
    }
    .orchardPage_content{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .orchardPage_Title{
        width: 100%;
        height: 300upx;
        display: flex;
        align-items: flex-end;
    }
    .orchardPage_Title_sunlight{
        position: absolute;
        top: 37upx;
        left: 280upx;
        width: 310upx;
        z-index: 1;
    }

    .icon-twinkle_water{
        width: 709upx;
        height: 615upx;
        position: absolute;
        z-index: 1;
    }
    .orchardPage_Title_downBox{
        width: 100%;
        height: 200upx;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: flex-end;
    }
    .orchardPage_Title_downBox_right{
        width: 460upx;
        height: 110upx;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-left: 29upx;
    }
    .orchardPage_Title_downBox_right_icon{
        width: 220upx;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
    }
    .orchardPage_Title_downBox_right_icon>img{
        width: 73upx;
        height: 76upx;
    }
    .orchardPage_Title_downBox_right_number{
        position: relative;
        right: 60upx;
        color: #f0f0f0;
        bottom: 5upx;
    }
    .orchardPage_Title_downBox_GiftbagBox{
        width: 100%;
        height: 70upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .orchardPage_Title_downBox_Icon_Giftbag{
        width: 49upx;
        height: 55upx;
    }
    .orchardPage_Title_downBox_Giftbag_font{
        width:95upx;
        height:65upx;
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:30upx;
    }
    .orchardPage_Title_downBox_Giftbag{
        width: 182upx;
        height: 90upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .orchardPage_Title_downBox_font{
        width: 260upx;
        height: 65upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
        white-space: nowrap;
    }
    .orchardPage_Title_downBox_top_font{
        width:259upx;
        height:18upx;
        font-size:18upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,1);
    }
    .orchardPage_Title_downBox_button{
        width:225upx;
        height:34upx;
        background:rgba(255,200,104,1);
        border-radius:17upx;
        font-size:18upx;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .orchardPage_Img{
        position: relative;
    }
    /*  定位图片*/
    .orchardPage_Goldcoin{
        position: absolute;
        top: 60upx;
        left: 370upx;
        width: 64upx;
        height: 66upx;
    }
    .icon-twinkle_Goldcoin{
        width: 709upx;
        height: 615upx;
        position: absolute;
        z-index: 1;

    }
    .orchardPage_Redenvelopes{
        position: absolute;
        top: 200upx;
        left: 370upx;
        width: 64upx;
        height: 66upx;
    }
    .Red_envelopes_box{
        width: 425upx;
        height: 564upx;
        position: absolute;
        z-index: 1;
        top: 240upx;
        left: 166upx;
    }

    .Red_envelopes{
        width: 425upx;
        height: 564upx;
    }
    .Red_envelopes_fontbox{
        position: absolute;
        width: 300upx;
        height: 200upx;
        top: 135upx;
        left: 60upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .Red_envelopes_topfont{
        width: 100%;
        height: 31upx;
        font-size:33upx;
        font-family:HiraginoSansGB;
        font-weight:normal;
        color:rgba(227,62,53,1);
        text-align: center;
    }
    .Red_envelopes_font{
        width: 100%;
        height:23upx;
        font-size:25upx;
        font-family:HiraginoSansGB;
        font-weight:normal;
        color:rgba(80,49,0,1);
        text-align: center;
    }
    .Red_envelopes_downfont{
        width:100%;
        height: 58upx;
        font-size:68upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(227,62,53,1);
        white-space: nowrap;
        text-align: center;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .Red_envelopes_company{
        font-size:36upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(227,62,53,1);
        margin-bottom: 10upx;
    }
    .Red_envelopes_buttonBox{
        width: 100%;
        height: 115upx;
        position: absolute;
        bottom: 20upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Red_envelopes_button{
        width: 312upx;
        height: 126upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Red_envelopes_buttonfont{
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(80,49,0,1);
        position: absolute;
        bottom: 50upx;
    }
    .Red_envelopes_button_close{
        position: relative;
        width: 40upx;
        height: 39upx;
        top: 50upx;
        left: 185upx;
    }
    .orchardPage_lefthand{
        position: absolute;
        top: 89upx;
        left: 145upx;
        width: 306upx;
        height: 273upx;
        z-index: 1;
    }
    .orchardPage_lefthandIcon{
        position: absolute;
        top: 140upx;
        left: 135upx;
        width: 70upx;
        height: 68upx;
        z-index: 0;
    }
    .orchardPage_righthand{
        position: absolute;
        top: 335upx;
        right: 99upx;
        width: 301upx;
        height: 269upx;
        z-index: 1;
    }
    .orchardPage_righthandIcon{
        position: absolute;
        top: 150upx;
        right: 129upx;
        width: 66upx;
        height: 64upx;
        z-index: 0;
    }
    .icon-twinkle_nutrition{
        width: 709upx;
        height: 615upx;
        position: absolute;
        z-index: 1;
    }
    .orchardPage_tree{
        position: absolute;
        top: 344upx;
        right: 230upx;
        width: 279upx;
        height: 286upx;
        z-index: 0;
    }
    .orchardPage_land{
        position: absolute;
        top: 570upx;
        right: 230upx;
        width: 279upx;
        height: 286upx;
        z-index: 0;
    }
    .orchardPage_leftImg{
        width: 76upx;
        height: 300upx;
        position: absolute;
        top: 833upx;
        top: 833upx;
        left: 40upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .orchardPage_RightImg{
        position: absolute;
        width: 105upx;
        height: 237upx;
        top: 922upx;
        right: 40upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .icon-applyfertilizertipeImg{
        position: absolute;
        top: -400upx;
        width: 639upx;
        height: 260px;
        right: -60upx;
        z-index: 1;
    }
    .icon-wateringTitsImg{
        position: absolute;
        top: -150upx;
        width: 639upx;
        height: 260px;
        right: -60upx;
        z-index: 1;
    }
    .orchardPage_operation{
        position: absolute;
        width: 409upx;
        height: 250upx;
        top: 950upx;
        right: 190upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
    }
    .orchardPage_operation_numberbox{
        width: 100%;
        height: 83upx;
        display: flex;
        align-content: space-around;
        flex-wrap: wrap;
    }
    .orchardPage_operation_number{
        width: 100%;
        height: 50%;
        border-radius: 20upx;
        position: relative;
        background-color: white;
    }
    .orchardPage_operation_numberColor{
        width: 20%;
        height: 100%;
        background-color: rgba(60, 173, 0, 1);
        border-radius: 20upx;
    }
    .orchardPage_operation_numberFont{
        font-size:40upx;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:24upx;
        position: absolute;
        right: 177upx;
        top: 10upx;
    }
    .orchardPage_operation_Font{
        font-size:25upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(60,173,0,1);
        line-height:24upx;
    }
    .orchardPage_DownImg{
        position: relative;
        top: 911upx;
        width: 100%;
        height: 144upx;
    }
    .orchardPage_Imgbox{
        width: 100%;
        height: 144upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .orchardPage_Imgbox_b{
        width: 244upx;
        height: 144upx;
    }
    .orchardPage_Imgbox .orchardPage_Imgbox_b:nth-child(1) >img{
        position: absolute;
        width: 203upx;
        height: 79upx;
        top: 0upx;
        left: 67upx;
    }
    .orchardPage_Imgbox .orchardPage_Imgbox_b:nth-child(2) >img{
        position: absolute;
        width: 243upx;
        height: 98upx;
        top: 20upx;
        left: 269upx;
    }
    .orchardPage_Imgbox .orchardPage_Imgbox_b:nth-child(3) >img{
        position: absolute;
        width: 163upx;
        height: 85upx;
        right: 74upx;
        top: -30upx;
    }
    .orchardPage_DownButton{
        position: absolute;
        width: 100%;
        height: 65upx;
        bottom: 60upx;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .orchardPage_DownButton>button:nth-child(2){
        width:255upx;
        height:64upx;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background:rgba(255, 255, 255, 1);
        border-radius:30upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,187,73,1);
        line-height:41upx;
        white-space: nowrap;
    }
    .imgButton{
        width: 140upx;
        height: 60upx;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background:rgba(255, 255, 255, 1);
        border-radius:30upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,187,73,1);
        line-height:41upx;
    }

</style>
