<template>
    <view class="Novicehelp_Box">
        <view class="Novicehelp_titleStyle"></view>
        <view class="Novicehelp_ContentBox">
            <view class="Novicehelp_Content" v-for="(item,index) in fontList" :key="index">
                <view class="Novicehelp_ContentTitle"  >
                    <view class="Novicehelp_ContentIcon"></view>
                    <view class="Novicehelp_ContentFont">{{item.title}}</view>
                </view>
                <view class="Novicehelp_ContentText">
                    <view>{{item.font1}}</view>
                    <view>{{item.font2}}</view>
                    <view>{{item.font3}}</view>
                    <view>{{item.font4}}</view>
                    <view>{{item.font5}}</view>
                </view>
            </view>


        </view>
        <view class="Novicehelp_down">没有更多了~</view>
    </view>
</template>

<script>
    export default {
        name: "Novicehelp",
        onShow(){
            // this.get_user();
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        },
        data(){
            return{
                fontList:[
                    {title:'成长值领取教程',
                        font1:'储水缸，24小时制不断储水，每天最多48水分，每小时储存2水分，最多储存24小时',
                        font2:'有机物化肥，24小时不断增加，每天最多48多化肥，每小时储存2点，最多储存24小时',
                        font3:'白炽灯，24小时不断增加，每天最多48阳光，每小时储存2光合，最多储存24小时'},
                    {title:'购买天气后的数值',
                        font1:'多云水缸水分和有机物化肥成长值增加50%（增加后五小时内为每小时3水分和1.5养分），',
                        font2:'明媚增加白炽灯150%（增加后五小时内每小时数值为5阳光），加有机物化肥20%（增加后五小时内每小时数值为1.2养分），',
                        font3:'暴雨增加水缸水分200%（增加后五小时内每小时数值为6水分），这些天气增加时长为五小时'},
                    {title:'果核果树成长教程',
                        font1:'储水缸，24小时制不断储水，每天最多48水分，每小时储存2水分，最多储存24小时',
                        font2:'有机物化肥，24小时不断增加，每天最多48多化肥，每小时储存2点，最多储存24小时',
                        font3:'白炽灯，24小时不断增加，每天最多48阳光，每小时储存2光合，最多储存24小时'},
                    {title:'银苹果果树成长教程',
                        font1:'阳光没有冷却时间，但是阳光每天只能领取6次，水分1小时更新一次，化肥2小时更新一次，金币3小时更新一次（金币每次领取为49个金币）',
                        font2:'成长周期大致为90天方案：每天建议领取2次水分，2次化肥，3次阳光，若干次金币',
                        font3:'成长期大致为180天方案，每天领取1次水分，1次化肥，1次阳光，若干次金币'},
                    {title:'稻田种子成长教程',
                        font1:'发芽期，每天需要2次水分，2次养分，3次阳光，每天进度增加10%',
                        font2:'展叶期，每天需要2次水分，2次养分，3次阳光，每天进度增加5%',
                        font3:'幼苗期，每天需要2水分，2次养分，3次阳光，每天进度增加3.34%',
                        font4:'开花期，每天需要2次水分，2次养分，3次阳光，每天进度增加2.5%',
                        font5:'结果期，每天需要2次水分，2次养分，3次阳光，每天进度增加2%',
                    },
                    {title:'拍卖详情',
                        font1:'金稻穗拍卖1600元宝+1金稻穗种子',
                        font2:'银苹果拍卖680元宝+1银色果核',
                        font3:'金苹果拍卖2480元宝+1银色果核',
                        font4:'果核果实拍卖280元宝+1银色果核',
                        font5:'（新人拍卖果核果实680元宝+1银色果核）',
                    },
                    {title:'合伙人必看',
                        font1:'银蛋数量：一个被邀请者试玩15天，合伙人能得到一个银蛋（试玩要求是在这一天中领取1次水分，1次阳光，1次光合，算一个有效天）',
                        font2:'用户拍卖一颗植物后领取一颗金蛋（金蛋银蛋没有购买力）。',
                        font3:'如果试玩15天后，达到30天提现了，由银蛋变成金蛋，（例如邀请了10个人，其中满足15天7人，满足提现3人，则银蛋4颗、金蛋3颗。银蛋公式为15天试玩人数-金蛋数=银蛋数）'},
                ]
            }
        },
        methods:{
        },
        mounted() {
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        }
    }
</script>

<style scoped>
    .Novicehelp_Box{
        width: 100%;
        height: auto;
    }
    .Novicehelp_titleStyle{
        width: 100%;
        height: 127upx;
        background: rgba(110, 206, 255, 1);
        border-radius: 0 0 30upx 30upx;
    }
    .Novicehelp_ContentBox{
        width: 620upx;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 4px 13px 0px rgba(122, 152, 168, 0.21);
        border-radius: 30px 30px 0px 0px;
        padding: 40upx 33upx 0 31upx;
        margin: 0 auto;
        margin-top: -70upx;
    }
    .Novicehelp_Content{
        width: 100%;
        height: auto;
    }
    .Novicehelp_ContentTitle{
        width: 100%;
        height: 30upx;
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .Novicehelp_ContentIcon{
        width: 8upx;
        height: 29upx;
        background: #FFA40E;
        margin-right: 12upx;
    }
    .Novicehelp_ContentFont{
        width: 100%;
        height: 30upx;
        font-size: 32upx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
        line-height: 30upx;
    }
    .Novicehelp_ContentText{
        width: 100%;
        height: auto;
        font-size: 26upx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
        line-height: 36upx;
        margin-top: 40upx;
    }
    .Novicehelp_ContentText>view{
        margin-bottom: 30upx;
    }
    .Novicehelp_down{
        width: 100%;
        height: 127upx;
        font-size: 24upx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #999999;
        line-height: 36upx;
        bottom: 70upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
