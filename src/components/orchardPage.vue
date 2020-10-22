<template>
    <view class="orchardPage_box">
<!--        蒙层-->
        <view v-if="hintMask" class="orchardPage_box_Mantle"></view>
<!--        提示-->
        <img  class="backgroundImg" :src="attribute_type==4?'../assets/img/background_img.png':'https://www.shuimukeji.cn/static/image/img/bancgroundImg-1@2x.png'"  alt=""/>
<!--        <img  class="backgroundImg" src="../assets/img/background_img.png" alt="">-->
<!--        内容-->
        <view class="orchardPage_content">
            <view class="orchardPage_Title">
                <view class="orchardPage_Title_img">
                    <!--        太阳-->
                        <img mode="widthFix"  v-if="hintArray.sunlightImg"  @click="sunlight" class="orchardPage_Title_sunlight" src="https://www.shuimukeji.cn/static/image/img/sunlight@2x.png" alt=""/>
                </view>
                <view class="orchardPage_Title_downBox">
<!--                    帮助提示-->
                    <view class="help">
                        <view @click="to_novicehelp" class="help_font">新手帮助</view>
                        <img  class="help_icon" src="../assets/img/icon-img.png" alt="">
                    </view>
                        <!--            养份-->
                    <view class="orchardPage_Title_downBox_right">
<!--                        晴天-->
                        <Sunny @sun_shine="chick_sun_shine(spike_rice,1)" v-if="Sunny"/>
<!--                        明媚-->
                        <Bright_and_beautiful @sun_shine="chick_sun_shine(spike_rice,1)" v-if="Bright_and_beautiful"/>
<!--                        多云-->
                        <Cloudy @sun_shine="chick_sun_shine(spike_rice,1)" v-if="Cloudy"/>
<!--                        暴雨-->
                        <rainstorm @sun_shine="chick_sun_shine(spike_rice,1)" v-if="rainstorm"/>

                        <view class="orchardPage_Title_downBox_right_icon">
<!--                            养分值-->
                            <img src="https://www.shuimukeji.cn/static/image/img/icon-Nutrition@2x.png" alt="">
                            <view class="orchardPage_Title_downBox_right_number">{{number_nutrition}}</view>
<!--                            水分值-->
                            <img src="https://www.shuimukeji.cn/static/image/img/icon-Moisture@2x.png" alt="">
                            <view class="orchardPage_Title_downBox_right_number">{{number_water}}</view>
                        </view>
                    </view>
                        <!--            礼包-->
                    <view class="orchardPage_Title_downBox_GiftbagBox">
                        <button @click="to_Giftbag"
                                class="orchardPage_Title_downBox_Giftbag">
                                <img class="orchardPage_Title_downBox_Icon_Giftbag" src="https://www.shuimukeji.cn/static/image/img/icon-Giftbag.png" alt="">
                                <view class="orchardPage_Title_downBox_Giftbag_font">分享领取 超级大礼</view>
                        </button>
                        <view class="orchardPage_Title_downBox_font">
                            <view class="orchardPage_Title_downBox_top_font">点击太阳获取光合值</view>
                            <view class="orchardPage_Title_downBox_button">天气越好农作物成长越快</view>
                        </view>
                        <button  @click="to_Giftbag" class="orchardPage_Title_downBox_Giftbag">
                            <img class="orchardPage_Title_downBox_Icon_Giftbag" src="https://www.shuimukeji.cn/static/image/img/icon-Giftbag.png" alt="">
                            <view class="orchardPage_Title_downBox_Giftbag_font">分享领取 超级大礼</view>
                        </button>
                    </view>
                </view>
            </view>
            <!--      定位图片-->
            <view class="orchardPage_Img">
<!--                金币-->
                <img mode="widthFix"  v-if="Bubble_Goldcoin"   @click="receive_reward(2)" class="orchardPage_Goldcoin" src="https://www.shuimukeji.cn/static/image/img/icon-Goldcoin@2x.png" alt=""/>
                <img mode="widthFix" @click="close" v-if="twinkle_Goldcoin"  class="icon-twinkle_Goldcoin" src="https://www.shuimukeji.cn/static/image/img/icon-twinkle-Goldcoin@2x.png" alt=""/>
<!--                红包-->
                <view class="orchardPage_Redenvelopes_box" v-if="Bubble_Redenvelopes">
                    <img mode="widthFix"    class="orchardPage_Redenvelopes" src="https://www.shuimukeji.cn/static/image/img/icon-Redenvelopes1@2x.png" alt=""/>
                    <view class="orchardPage_Redenvelopes_fontBox">
                        <view class="orchardPage_Redenvelopes_font">当前成长期已完成{{spike_rice.rice_sum}}%</view>
                        <view class="orchardPage_Redenvelopes_font">金稻穗目前价值{{rice_money}}元</view>
                    </view>
                </view>
<!--                <img mode="widthFix"  v-if="Bubble_Redenvelopes" @click="chickred_envelopes" class="orchardPage_Redenvelopes" src="https://www.shuimukeji.cn/static/image/img/icon-Redenvelopes@2x.png" alt=""/>-->
<!--                <img mode="widthFix"  v-if="Bubble_Redenvelopes" @click="chickred_envelopes" class="orchardPage_Redenvelopes" src="https://www.shuimukeji.cn/static/image/img/icon-Redenvelopes@2x.png" alt=""/>-->
<!--                蒙层红包-->
<!--                <view class="Red_envelopes_box"  v-if="open_red_envelopes" >-->
<!--                    <img mode="widthFix"  class="Red_envelopes" src="https://www.shuimukeji.cn/static/image/img/Red-envelopes@2x.png" alt=""/>-->
<!--                    <view class="Red_envelopes_fontbox">-->
<!--                        <view class="Red_envelopes_topfont">恭喜你获得</view>-->
<!--                        <view class="Red_envelopes_font">现金红包</view>-->
<!--                        <view class="Red_envelopes_downfont">2<view class="Red_envelopes_company">元</view></view>-->
<!--                    </view>-->
<!--                    <view class="Red_envelopes_buttonBox">-->
<!--                        <img mode="widthFix"  class="Red_envelopes_button" src="https://www.shuimukeji.cn/static/image/img/Red-envelopes-button@2x.png" alt="">-->
<!--                        <view class="Red_envelopes_buttonfont">立即领取</view>-->
<!--                    </view>-->
<!--                    <view>-->
<!--&lt;!&ndash;                        关闭按钮&ndash;&gt;-->
<!--                        <img mode="widthFix"  @click="close" class="Red_envelopes_button_close" src="https://www.shuimukeji.cn/static/image/img/icon-close@2x.png" alt="">-->
<!--                    </view>-->
<!--                </view>-->

                    <!--               水份-->
                <img mode="widthFix"   v-if="Bubble_water"  @click="receive_reward(3)" class="orchardPage_lefthandIcon" src="https://www.shuimukeji.cn/static/image/img/icon-MoistureImg@2x.png" alt=""/>
                <img mode="widthFix"   @click="close" v-if="twinkle_water"   class="icon-twinkle_water" src="https://www.shuimukeji.cn/static/image/img/icon-twinkle-water@2x.png" alt=""/>
                <!--                左手蒙层提示-->
                <img mode="widthFix"  @click="seedBankMethod" v-if="hintArray.seedBankImg"   class="orchardPage_lefthand" src="https://www.shuimukeji.cn/static/image/img/backgroundImglefthand@2x.png" alt=""/>
                <!--                养分-->
                <img mode="widthFix"    v-if="Bubble_nuterition"  @click="receive_reward(4)" class="orchardPage_righthandIcon" src="https://www.shuimukeji.cn/static/image/img/icon-NutritionImg@2x.png" alt=""/>
                <img mode="widthFix"   @click="close"  v-if="twinkle_nutrition" class="icon-twinkle_nutrition" src="https://www.shuimukeji.cn/static/image/img/icon-twinkle-nutrient@2x.png" alt=""/>
                <!--                右手蒙层提示-->
                <img mode="widthFix"  @click="clicknutrition" v-if="hintArray.nutritionImg" class="orchardPage_righthand" src="https://www.shuimukeji.cn/static/image/img/backgroundImgrighthand@2x.png" alt=""/>
                <!--                浇水施肥动画-->
                <img  v-if="on_img==1" class="on_img" src="../assets/img/施肥动画.gif"  alt="">
                <img  v-if="on_img==2" class="on_img" src="../assets/img/浇水动画.gif"  alt="">

            </view>
<!--            操作-->
            <view class="action_bar">
                <view class="action_bar_content">
                    <!--      左面操作-->
                    <view class="orchardPage_leftImg">
        <!--                有机物-->
                        <img mode="widthFix" @click="click_small_gift(2)"  src="https://www.shuimukeji.cn/static/image/img/icon-organiccompound@2x.png" alt=""/>
        <!--                白炽灯-->
                        <img mode="widthFix" @click="chick_sun_shine(spike_rice,2)" src="https://www.shuimukeji.cn/static/image/img/icon-lamp@2x.png" alt=""/>
        <!--                储水缸-->
                        <img mode="widthFix" @click="click_small_gift(1)" src="https://www.shuimukeji.cn/static/image/img/icon-Storage@2x.png" alt="" id="3"/>
                    </view>
                    <!--                土地-->
                    <view class="one_landBox">
                        <img mode="widthFix" class="one_land" src="https://www.shuimukeji.cn/static/image/img/img-tree_root@2x.png" alt="">
                        <img  mode="widthFix"  @click="Select_plants()" class="one_seed" :src="tree_image[terrList[0]['seed_type']][terrList[0]['level']]" alt=""/>
                    </view>
                    <!--      中间数值样式-->
                    <view v-if="seed_type != 'spike_rice' " class="orchardPage_operation">
<!--                        水份-->
                        <view class="orchardPage_operation_numberbox">
                            <view class="orchardPage_operation_number">
                                <view class="orchardPage_operation_numberColor" :style="{'width':(seed_water*100)+'%'}"></view>
                                <view class="orchardPage_operation_numberFont">{{seed_water|retain_number }}%</view>
                            </view>
                            <view class="orchardPage_operation_Font">还需要24光和果树就能拍卖啦</view>
                        </view>
<!--                        养分-->
                        <view class="orchardPage_operation_numberbox">
                            <view class="orchardPage_operation_number">
                                <view class="orchardPage_operation_numberColor" :style="{'width':(seed_nutrition*100)+'%'}"></view>
                                <view class="orchardPage_operation_numberFont">{{seed_nutrition | retain_number}}%</view>
                            </view>
                            <view class="orchardPage_operation_Font">还需要24光和果树就能拍卖啦</view>
                        </view>
<!--                        阳光值-->
                        <view class="orchardPage_operation_numberbox">
                            <view class="orchardPage_operation_number">
                                <view class="orchardPage_operation_numberColor" :style="{'width':(seed_number_sunlight*100)+'%'}"></view>
                                <view class="orchardPage_operation_numberFont">{{seed_number_sunlight| retain_number}}%</view>
                            </view>
                            <view class="orchardPage_operation_Font">还需要24光和果树就能拍卖啦</view>
                        </view>
                    </view>
                    <!--       金稻田中间数值样式-->
                    <view v-if="seed_type == 'spike_rice' " class="orchardPage_operation">
<!--                        水份-->
                        <view class="orchardPage_operation_numberbox">
                            <view class="orchardPage_operation_number">
                                <view class="orchardPage_operation_numberColor" :style="{'width':(spike_rice.rice_water*50)+'%'}"></view>
                                <view class="orchardPage_operation_numberFont">{{spike_rice.rice_water | rice_number }}/2</view>
                            </view>
                            <view class="orchardPage_operation_Font">今天还需要水份{{2-spike_rice.rice_water | rice_number}}次完成当前任务</view>
                        </view>
<!--                        养分-->
                        <view class="orchardPage_operation_numberbox">
                            <view class="orchardPage_operation_number">
                                <view class="orchardPage_operation_numberColor" :style="{'width':(spike_rice.rice_nutrient*50)+'%'}"></view>
                                <view class="orchardPage_operation_numberFont">{{spike_rice.rice_nutrient | rice_number}}/2</view>
                            </view>
                            <view class="orchardPage_operation_Font">今天还需要养份{{2-spike_rice.rice_nutrient | rice_number}}次完成当前任务</view>
                        </view>
<!--                        阳光值-->
                        <view class="orchardPage_operation_numberbox">
                            <view class="orchardPage_operation_number">
                                <view class="orchardPage_operation_numberColor" :style="{'width':(spike_rice.rice_photosynthesis*33.333)+'%'}"></view>
                                <view class="orchardPage_operation_numberFont">{{spike_rice.rice_photosynthesis | rice_number}}/3</view>
                            </view>
                            <view class="orchardPage_operation_Font">今天还需要光合{{3-spike_rice.rice_photosynthesis | rice_number}}次完成当前任务</view>
                        </view>
                    </view>
                    <!--      右面操作-->
                    <view class="orchardPage_RightImg">
<!--                        <img mode="widthFix"  @click="seedyang(3)"  src="https://www.shuimukeji.cn/static/image/img/icon-applyfertilizer@2x.png" alt=""/>-->
                            <img mode="widthFix" class="caozuoimg"  @click="seedyang(3)"  src="../assets/img/1.png" alt=""/>
        <!--                施肥提示-->
        <!--                <img mode="widthFix"   class="icon-applyfertilizertipeImg"  src="../assets/img/icon-applyfertilizertipe@2x.png" alt=""/>-->
<!--                        <img mode="widthFix"  @click="seedyang(2)" src="https://www.shuimukeji.cn/static/image/img/icon-watering@2x.png" alt=""/>-->
                        <img mode="widthFix"  class="caozuoimg" @click="seedyang(2)" src="../assets/img/2.png" alt=""/>
        <!--                浇水提示-->
        <!--                <img mode="widthFix"   class="icon-wateringTitsImg" src="../assets/img/icon-wateringTits.png" alt=""/>-->

                    </view>
                </view>
                <!--      底部图片-->
                <view class="orchardPage_DownImg" >
                    <img mode="WidthFix" class="_seed1" src="https://www.shuimukeji.cn/static/image/img/icon-Fruittree1@2x.png" alt="">
                    <img mode="WidthFix" class="_seed2" src="https://www.shuimukeji.cn/static/image/img/icon-Fruittree2@2x.png" alt="">
                    <img mode="WidthFix" class="_seed3" src="https://www.shuimukeji.cn/static/image/img/icon-Fruittree3@2x.png" alt="">
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
            <orchard @plant_seed="Clickplant_seed" @onchickSeedBank="chickSeedBank" @eliminate_seed="del_seed"/>
            <view class="SeedBank_Popup1">
            </view>
        </view>
        <!--    组件:商城-->
        <view  class="ShoppingMall" v-if="shoppingMall">
            <orchard1 @onBuy="buyShop" @oncloseShoppingMall="chickShoppingMall" :number_Goldcoin.sync="number_Goldcoin" />
            <view class="ShoppingMall1"/>
        </view>
<!--            组件:选择三种，种子-->
        <view class="Poputselection" v-if="hintArray.getseed">
            <Poputselection   @onInit="Poputselection"/>
        </view>

<!--        视频奖励-->
        <view v-if="video_Popup"  class="video_reward">
            <video_reward @close="close"
                          :receive_number='reward'
                          :img.sync='Bubble_Popup'
                          :video_time="video_time"
                          @get_reward="get_reward()"/>
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
    import video_reward from "./video_reward"
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
    import {fruitMap} from "../config/config";
    import { harvest } from "../api/harvest_seed";
    import {chan_chu} from "../api/chan_chu";
    import { weather } from "../api/weather_list"
    import { get_Bubble } from "../api/get_qipao";

    export default {
        name: "orchardPage",
        data(){
            return{
                seedBank:"",
                shoppingMall:"",
                hintMask: true,//
                hintArray:{
                    getseed: 0,//选择种子
                    sunlightImg: 0,//第一个太阳提示
                    seedBankImg: 0,//第二个提示
                    nutritionImg: 0,//第三个提示
                },
                tree_image:{},
                terrList:[
                    {state:0,img:'https://www.shuimukeji.cn/static/image/img/img-tree_root@2x.png',id:1},
                ],
                weatherList:[
                    {weather_type:''},
                ],
                seed_typeArr:{
                    0:'kernel',
                    1:'gold_kernel',
                    2:'silver_kernel',
                },
                video_Popup:0,//视频
                Bubble_Popup:0,//气泡
                open_red_envelopes:0,//打开红包
                twinkle_Goldcoin:0,//获取金币
                Bubble_Goldcoin:1,//气泡金币
                number_Goldcoin:0,//金币数量
                receive_number_Gold:0,//领取金币数量
                Goldcoin_time:0,//金币时间
                twinkle_sunlight:0,//获取阳光
                number_sunlight:0,//阳光数量
                receive_number_sun:0,//领取阳光数量
                seed_number_sunlight:0,//种子阳光
                twinkle_water:0,//获取水份
                Bubble_water:1,//气泡水份
                number_water:0,//水份数量
                seed_water:0,//种子水份值
                receive_number_water:0,//领取水份数量
                water_time:0,//水份时间
                twinkle_nutrition:0,//获取养分
                Bubble_nuterition:1,//气泡养分
                seed_nutrition:0,//种子营养数值
                receive_number_nutrition:0,//领取养分数量
                number_nutrition:0,//养分数量
                nutrition_time:0,//养份时间
                number_Yuanbao:0,//元宝数量
                Bubble_Redenvelopes:1,//气泡红包
                // get_water_tank:2,//储水缸
                // get_organic_compound:1,//有机物
                Sunny:1,//晴天
                Bright_and_beautiful:0,//明媚
                Cloudy:0,//多云
                rainstorm:0,//暴雨
                number:20,//经验条
                experience:1,//
                seed_id:0,
                // withered_tree:0
                rice_money:0,//水稻金钱
                reward:0,//气泡奖励领取数量
                seed_type:'',//当前植物类型
                spike_rice:{
                    rice_state:0,//金稻穗状态
                    rice_water:0,//金稻田水份
                    rice_nutrient: 0,//金稻田养份
                    rice_photosynthesis:0,//金稻田光合
                    rice_sum:0,//金稻穗总进度
                },
                attribute_type:0,//属性类型
                video_time:"",//视频时间
                str_time:"",//视频开始时间
                end_time:"",//视频结束时间
                on_img:0,//动态图
            }
        },
        filters:{
            retain_number:function (num) {
                return (parseFloat(num) * 100).toFixed(2)
            },
            rice_number:function (num) {
                return (parseFloat(num)).toFixed(0)
            }
        },
        mounted(){

        this.tree_image = fruitMap;
        uni.getStorage({
            key:"poputselection_hint",
            success:(res)=>{
                if (!res.data){
                    this.hintArray['getseed'] = res.data
                }
            },fail:(err)=>{
                this.hintArray['getseed'] = 1
            }
        });
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
         //获取植物
         this.getBotany();
         //获取用户知产
         this.query_assets();
        //获取当前天气
          this.query_weather();
        },
        methods:{
            chickSeedBank(){
                this.seedBank=!this.seedBank
            },
            //查询用户天气
            query_weather(){
                weather().then(res=>{
                    this.weatherList = res
                  if(this.weatherList[0] != undefined){
                    if(this.weatherList[0].weather_type == 1){
                        this.Cloudy = 1//多云
                        this.Sunny = 0 ,//晴天
                        this.Bright_and_beautiful = 0,//明媚
                        this.rainstorm = 0 //暴雨
                    }
                    if(this.weatherList[0].weather_type == 2){
                        this.Cloudy = //多云
                        this.Sunny = 0 ,//晴天
                        this.Bright_and_beautiful = 1//明媚
                        this.rainstorm = 0 //暴雨
                    }
                    if(this.weatherList[0].weather_type == 3){
                        this.Cloudy = 0//多云
                        this.Sunny = 0 ,//晴天
                        this.Bright_and_beautiful = 0,//明媚
                        this.rainstorm = 1 //暴雨
                    }
                  }
                });
            },
            //获取用户资产
            query_assets(){
                all_asset().then(res=>{
                    this.number_nutrition = res.nutrient
                    this.number_water = res.exaggeration
                    this.number_Goldcoin = res.gold_num
                    this.seed_id = res.weather_id
                    this.number_sunlight = res.sun_num
                    this.number_Yuanbao = res.gold_ingot
                })
            },
            //获取页面植物
            getBotany(){
                botany().then(res=>{
                    this.$set(this.terrList, 0, res[0])
                    if(this.terrList == ""){
                        this.Bubble_Goldcoin = 1;
                        this.Bubble_water = 1;
                        this.Bubble_nuterition = 1;
                        this.Bubble_Redenvelopes = 0
                        return
                    }
                    this.seed_water = res[0].current_water_percentage;
                    this.seed_nutrition = res[0].current_nutrient_percentage;
                    this.seed_number_sunlight = res[0].current_photosynthesis_percentage;
                    this.rice_money = res[0].price;
                    this.seed_type = res[0].seed_type
                    this.spike_rice.rice_water = res[0].rice_water
                    this.spike_rice.rice_nutrient = res[0].rice_nutrient
                    this.spike_rice.rice_photosynthesis = res[0].rice_photosynthesis
                    this.query_assets();
                    this.query_weather();
                    let seed_type = res[0].seed_type
                    for(let item in this.seed_typeArr){
                        if(seed_type == this.seed_typeArr[item]){
                            this.Bubble_Redenvelopes = 0
                        }
                    }
                    if(seed_type == "spike_rice"){
                        this.Bubble_Goldcoin = 0;
                        this.Bubble_Redenvelopes = 1;
                        this.spike_rice.rice_state = 1
                        this.spike_rice.rice_sum =
                            ((Number.parseFloat(res[0].current_water_percentage)+
                            Number.parseFloat(res[0].current_nutrient_percentage)+
                            Number.parseFloat(res[0].current_photosynthesis_percentage))*100/3).toFixed(2)
                        console.log("金稻穗总和",this.spike_rice.rice_sum)
                    }else {
                        this.spike_rice.rice_state = 0

                    }
                    this.obtain_qipao();
                });
            },
            // 获取页面气泡数值
            obtain_qipao(){
                let data = {
                    plant_id : this.terrList[0].id
                }
                if (this.terrList[0].id == ""){
                    return uni.showToast({
                        title:'请种植植物'
                    })
                }
                get_Bubble(data).then(res=>{
                    this.receive_number_Gold = res.goldOpen;
                    this.receive_number_water = res.water;
                    this.receive_number_nutrition = res.nutrient;
                    this.receive_number_sun = res.sun
                    this.Goldcoin_time = res.gold_time
                    this.water_time = res.water_time
                    this.nutrition_time = res.nutrient_time
                })
            },
            //点击商城
            chickShoppingMall(){
                this.shoppingMall = !this.shoppingMall
            },
            //排行榜
            chickRankingList(e){
                let usertoken = uni.getStorageSync("token")
                if (usertoken != ""){
                    uni.navigateTo({
                        url:'/components/RankingList'
                    })
                }else{
                    this.$emit('onGetUser',e)
                }
            },
            //提现
            chickWithdrawal(e){
                let usertoken = uni.getStorageSync("token")
                let that = this
                if ( usertoken != ""){
                    uni.navigateTo({
                        url:'/components/PersonalCenter'
                    })
                }else{
                    commLogin(e,function () {
                        that.query_assets()
                        that.getBotany()
                    })
                }
            },
            //分享
            to_Giftbag(){
                uni.navigateTo({
                    url:'/components/invitation'
                })
            },
            //选择种子提示
            Poputselection(){
                this.hintArray.getseed = true
                uni.setStorageSync("poputselection_hint",0);
                this.hintArray.getseed = 0;
                this.hintArray.sunlightImg = 1;
                this.hintMask = true;
                this.getBotany();
            },
            //太阳提示
            sunlight(){
                uni.setStorageSync("sunlight_hint",0);
                    this.hintArray.sunlightImg = 0;
                    this.hintArray.seedBankImg = 1;
                    this.hintMask = true
            },
            //点击水份提示
            seedBankMethod(){
                uni.setStorageSync("see_bank_hint",0);
                this.hintArray.seedBankImg = 0;
                this.hintArray.nutritionImg = 1;
                this.hintMask = true
            },
            //右手提示
            clicknutrition(){
                uni.setStorageSync("nutrition_hint",0);
                this.hintArray.nutritionImg = 0;
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
            //领取气泡奖励 水份 金币 养分
            receive_reward(id){
                if(!this.terrList[0]){
                    uni.showToast({
                        title:'请种植植物'
                    })
                    return
                }
                this.Bubble_Popup = id;
                this.video_Popup = 1
                this.hintMask = true
                console.log("id",id)
                if(id == 2){
                    this.reward = this.receive_number_Gold
                    this.video_time = this.Goldcoin_time
                    this.obtain_qipao();
                }
                if(id == 3){
                    this.reward = this.receive_number_water
                    this.video_time = this.water_time
                    this.obtain_qipao();

                }
                if(id == 4){
                    this.reward = this.receive_number_nutrition
                    this.video_time = this.nutrition_time
                    this.obtain_qipao();
                }
                // this.obtain_qipao();
            },
            get_reward(id){
                // 金币
                if (id == 2){
                    this.twinkle_Goldcoin = 1
                    console.log("jinbi")
                    let receive_type = {
                        number :this.receive_number_Gold,
                        assets_type: this.twinkle_Goldcoin,
                    }
                    receive_assets(receive_type).then(res=>{
                        // uni.showToast({
                        //     title:"领取水份成功",
                        //     icon:"success",
                        //     duration:2000
                        // })
                        this.query_assets();
                        this.obtain_qipao();
                    })
                }
                //水份
                if(id == 3){
                    this.twinkle_water = 3
                    this.video_time = this.water_time
                    let receive_type = {
                        number :this.receive_number_water,
                        assets_type: this.twinkle_water,
                    }
                    let data = {
                        number:this.receive_number_sun,
                        plant_id: this.terrList[0].id,
                        is_rice: this.spike_rice.rice_state,
                        click_type:id
                    }
                    if (this.seed_type=="spike_rice"){
                        sun_shine(data).then(res=>{
                            this.getBotany()
                        })
                    }else{
                        receive_assets(receive_type).then(res=>{
                            this.query_assets();
                            this.obtain_qipao();
                        })
                    }
                }
                //养分
                if(id == 4){
                    this.twinkle_nutrition = 4
                    let receive_type = {
                        number :this.receive_number_nutrition,
                        assets_type: this.twinkle_nutrition,
                    }
                    let data = {
                        number:this.receive_number_sun,
                        plant_id: this.terrList[0].id,
                        is_rice: this.spike_rice.rice_state,
                        click_type:id
                    }
                    if (this.seed_type=="spike_rice"){
                        sun_shine(data).then(res=>{
                            this.getBotany()
                        })
                    }else{
                        receive_assets(receive_type).then(res=>{
                            this.query_assets();
                            this.obtain_qipao();

                        })
                    }
                }
            },
            //获取有机物 获取储水缸
            click_small_gift(data){
                let click_type = {
                    click_type :data
                }
                if(this.terrList == ""){
                    return uni.showToast({
                        title:"请先种植植物"
                    })
                }
                if(this.seed_type == "spike_rice"){
                    uni.showToast({
                        title:'该植物无法获取'
                    })
                    return
                }
                receive(click_type).then(res=>{
                    uni.showToast({
                        title:"成功",
                        icon:"success",
                        duration:2000
                    })
                })
            },
            //给植物浇水/施肥
            seedyang(assets_type){
                if(this.terrList == ""){
                    return uni.showToast({
                        title:"请先种植植物"
                    })
                }
                if(this.seed_type == "spike_rice"){
                    uni.showToast({
                        title:'该植物无法获取'
                    })
                    return
                }
                let data = {
                    number : 10,
                    plant_id : this.terrList[0].id,
                    assets_type :assets_type,
                }
                if(this.terrList[0].level != 7){
                    Increase_nutrients(data).then(res=>{
                        if(assets_type == 2 && this.terrList[0] != ''){
                            uni.showToast({
                                title:"浇水成功",
                                icon:"success",
                                duration:2000
                            })
                            this.on_img = 2
                            setTimeout(()=>{
                                this.on_img = 0
                            },4000)

                        }else{
                            uni.showToast({
                                title:"施肥成功",
                                icon:"success",
                                duration:2000
                            })
                            this.on_img = 1
                            setTimeout(()=>{
                                this.on_img = 0
                            },4000)
                        }
                        this.getBotany();
                    })
                }else {
                    uni.showToast({
                        title:"请重新种植"
                    })
                }
            },
            //点击太阳给植物增加光合
            chick_sun_shine(rice_state,click_type){
                if(!this.terrList[0]){
                    uni.showToast({
                        title:'请先种植植物'
                    })
                    return
                }
                // if(this.seed_type == "spike_rice"){
                //     uni.showToast({
                //         title:'该植物无法获取'
                //     })
                //     return
                // }
                // }
                if(click_type == 2){
                    this.video_Popup = 0
                    this.hintMask = false;

                }else{
                    this.video_Popup = 1
                    this.Bubble_Popup = 1;
                    this.hintMask = true;
                }
                let data = {
                        number:this.receive_number_sun,
                        plant_id: this.terrList[0].id,
                        is_rice: rice_state.rice_state,
                        click_type:click_type
                    }
                sun_shine(data).then(res=>{
                    uni.showToast({
                        title:"增加光合值成功",
                        icon:"success",
                        duration:2000
                    })
                    this.getBotany()
                })
            },
            //关闭按钮
            close(){
                this.hintMask = 0
                this.open_red_envelopes = 0
                this.twinkle_water = 0
                this.twinkle_Goldcoin = 0
                this.twinkle_nutrition = 0
                this.video_Popup = 0
            },
            //购买属性
            buyShop(id){
                if(!this.terrList[0] ){
                    uni.showToast({
                        title:"请种植种子"
                    })
                    return
                }
                this.attribute_type = id
                let data = {
                    plant_type: id,
                    weather_type: id,
                    plant_id: this.terrList[0].id,

                }
                if (id <= 3 && id > 0){

                    purchase_attribute(data).then(res=>{
                        this.query_assets()
                        uni.showToast({
                            title:'够买成功',
                            success:2000,
                        })
                        this.getBotany();
                    })
                }
                //购买暴雨天气
                if(id == 4 ){
                    purchase_weather(data).then(res=>{
                        this.query_weather();
                        uni.showToast({
                            title:'够买成功',
                            success:2000,
                        })
                    })
                }
                //购买多云天气
                if(id == 5){
                    purchase_weather(data).then(res=>{
                        this.query_weather();
                        uni.showToast({
                            title:'够买成功',
                            success:2000,
                        })
                    })
                }
                //购买明媚天气
                if(id == 6){
                    purchase_weather(data).then(res=>{
                        this.query_weather();
                        uni.showToast({
                            title:'够买成功',
                            success:2000,
                        })
                    })
                }

            },
            //种植种子
            Clickplant_seed(index){
                let plant_type = {
                    plant_type: index
                }
                plant_seed(plant_type).then(res =>{
                    uni.showToast({
                        title:'种植种子成功'
                    })
                    this.seedBank = 0;
                    this.getBotany()
                })
            },
            //收获种子
            Select_plants(){
                if(!this.terrList[0]) {
                    return
                }
                let data = {
                    plant_id : this.terrList[0].id
                }

                if(this.terrList[0].level != 7){
                harvest(data).then(res=>{
                    uni.showToast({
                        title:'收获种子成功'
                    })
                    this.getBotany();
                })
                }
            },
            //清除树木
            del_seed(){
                if(!this.terrList[0]){
                    uni.showToast({
                        title:"请种植植物",
                        icon:"success",
                        duration:2000
                    })
                    return
                }
                    let seed_id = {
                        plant_id : this.terrList[0].id
                    }
                    let that = this

                uni.showModal({
                    title:'清除当前种子',
                    content:'是否清除当前种子',
                    success(res){
                        if (res.confirm) {
                            chan_chu(seed_id).then(res=>{
                                uni.showToast({
                                    title:"清除成功",
                                    icon:"success",
                                    duration:2000
                                })
                                that.getBotany();
                            })
                            that.seed_water = 0;
                            that.seed_nutrition = 0;
                            that.seed_number_sunlight = 0;
                            that.seedBank = 0;
                            that.spike_rice.rice_nutrient = 0
                            that.spike_rice.rice_water = 0
                            that.spike_rice.rice_photosynthesis = 0
                        }
                    }
                })


            },
            //分享
            to_novicehelp(){
                uni.navigateTo({
                    url:'/components/Novicehelp'
                })
            },

        },
        components:{
            orchard,
            orchard1,
            Sunny,
            Bright_and_beautiful,
            Cloudy,
            rainstorm,
            Poputselection,
            video_reward
        },
    }
</script>

<style scoped>
    .ShoppingMall{
        position: absolute;
        width: 100%;
        z-index: 1;
    }
    .Poputselection{
        position: absolute;
        border: 1upx solid black;
        width: 100%;
        z-index: 4;
    }
    .video_reward{
        position: absolute;
        z-index: 4;
        top: 165upx;
        right: 34upx;
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
        z-index: 3;
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
        z-index: 4;
    }
    .icon-twinkle_water{
        width: 709upx;
        height: 615upx;
        position: absolute;
        z-index: 4;
    }
    .orchardPage_Title_downBox{
        width: 100%;
        height: 200upx;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
    }
    .help{
        width: 151upx;
        height: 45upx;
        margin: 20upx 0 0 20upx;
        background-image: url("../assets/img/icon-help.png");
        background-size:100% 100%;
        background-repeat:no-repeat;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        z-index: 3;
    }
    .help_font{
        font-size: 24upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
    }
    .help_icon{
        width: 21upx;
        height: 21upx;
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
        width: 206upx;
        height: 82upx;
        object-fit: cover ;
    }
    .orchardPage_Title_downBox_right_number{
        position: relative;
        right: 60upx;
        color: #f0f0f0;
        bottom: 5upx;
        white-space: nowrap;
        overflow:hidden;
    }
    .orchardPage_Title_downBox_GiftbagBox{
        width: 100%;
        height: 70upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .orchardPage_Title_downBox_Giftbag{
        width: 182upx;
        height: 90upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-left:0 ;
        margin-right:0 ;
        padding-right: 0;
        padding-left: 0;
    }
    .orchardPage_Title_downBox_Icon_Giftbag{
        width: 49upx;
        height: 55upx;
    }
    .orchardPage_Title_downBox_Giftbag_font{
        width:95upx;
        height:65upx;
        font-size:22upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:30upx;
    }
    .orchardPage_Title_downBox_font{
        width: 260upx;
        height: 65upx;
        display: flex;
        align-content: space-between;
        text-align: center;
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

    .action_bar{
        height: 51%;
        width: 100%;
        display: flex;
        align-content: flex-end;
        flex-wrap: wrap;
    }
    .action_bar_content{
        width: 100%;
        height: 500rpx;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        position: relative;
    }
    .orchardPage_leftImg{
        width: 76upx;
        height: 300upx;
        left: 40upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        z-index: 0;
    }
    .orchardPage_RightImg{
        width: 105upx;
        height: 237upx;
        top: 922upx;
        right: 40upx;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .caozuoimg{
        width: 1920upx;
        height: 1080upx;
    }
    .on_img{
        width: 180upx;
        height: 180upx;
        position: absolute;
        top: 125upx;
        left: 345upx;
        z-index: 4;
    }
    .orchardPage_operation{
        position: relative;
        width: 269upx;
        height: 160upx;
        display: flex;
        align-content: space-between;
        justify-content: center;
        flex-wrap: wrap;
        top: 140upx;
    }
    .orchardPage_operation_numberbox{
        width: 100%;
        height: 45upx;
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
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:24upx;
        position: absolute;
        top: 0;
        left: 120upx;
    }
    .orchardPage_operation_Font{
        font-size:15upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(60,173,0,1);
        line-height:24upx;
    }
    /*  定位图片*/
    .orchardPage_Img{
        position: relative;
        width: 100%;
        height: 210upx;
    }
    .orchardPage_Goldcoin{
        position: absolute;
        top: 20upx;
        left: 340upx;
        width: 64upx;
        height: 66upx;
        z-index: 1;
    }
    .icon-twinkle_Goldcoin{
        width: 709upx;
        height: 615upx;
        position: absolute;
        z-index: 4;

    }
    .orchardPage_Redenvelopes_box{
        position: absolute;
        top: 140upx;
        left: 140upx;
        width: 600upx;
        height: 66upx;
        z-index: 1;
        display: flex;
    }
    .orchardPage_Redenvelopes{
        top: 140upx;
        left: 140upx;
        width: 64upx;
        height: 66upx;
        z-index: 1;
    }
    .orchardPage_Redenvelopes_fontBox{
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .orchardPage_Redenvelopes_font{
        color: red;
        margin-left: 30upx;
    }
    .Red_envelopes_box{
        width: 425upx;
        height: 564upx;
        position: absolute;
        z-index: 4;
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
        bottom: 40upx;

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
        z-index: 4;
    }
    .orchardPage_lefthandIcon{
        position: absolute;
        top: 70upx;
        left: 165upx;
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
        z-index: 4;
    }
    .orchardPage_righthandIcon{
        position: absolute;
        top: 75upx;
        right: 195upx;
        width: 66upx;
        height: 64upx;
        z-index: 1;
    }
    .icon-twinkle_nutrition{
        width: 709upx;
        height: 615upx;
        position: absolute;
        z-index: 4;
    }
    .one_landBox{
        position: absolute;
        width: 50%;
        height: 600upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .one_land{
        width: 279upx;
        height: 286upx;
        position: absolute;
        top: 310upx;
        right: 60upx;
    }
    .one_seed{
        width: 349upx;
        height: 333upx;
        position: absolute;
        bottom: 235upx;
        right: -8upx;
        z-index: 0;
    }
    .withered_tree{
        width: 354upx;
        height: 300upx;
        position: absolute;
        bottom: 235upx;
        right: 77upx;
        z-index: 0;
    }
    .orchardPage_DownImg{
        width: 100%;
        height: 100upx;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        bottom: 25upx;
    }
    ._seed1{
        position: absolute;
        width: 203upx;
        height: 79upx;
        left: 97upx;
        top: -15upx;
     }
    ._seed2{
        position: absolute;
        width: 243upx;
        height: 98upx;
        left: 263upx;
        bottom: -15upx;
    }
    ._seed3{
        position: absolute;
        width: 163upx;
        height: 85upx;
        right: 114upx;
        top: -30upx;
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


    .orchardPage_DownButton{
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
        white-space: nowrap;
    }

</style>
