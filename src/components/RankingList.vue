<template>
    <view class="Ranking_ListBox">
        <view class="Ranking_ListBox_Title">
            <view class="Ranking_ListBox_Title_switchBox">
                <view @click="Switch_ranking(1)" :class="click_Ranking==1?'Ranking_ListBox_Title_switchBox_button':'Ranking_ListBox_Title_switchBox_button1'">日活跃排行榜</view>
                <view @click="Switch_ranking(2)" :class="click_Ranking==2?'Ranking_ListBox_Title_switchBox_button':'Ranking_ListBox_Title_switchBox_button1'">体现排行榜</view>
            </view>
        </view>
        <!--    日活跃排行榜-->
        <view v-if="click_Ranking==1"   :class="Show == 1?'Ranking_List_MemberBox':'Ranking_List_MemberBox1'" >
            <view class="Ranking_List_Member" v-if="Show == 1? index < 3: index < 8"  v-for="(item,index) in MemberList" :key="index">
                <view class="Ranking_List_Member_Right">
<!--                    第一名图标-->
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix"  v-if="index == 0" src="https://www.shuimukeji.cn/static/image/img/icon-one@2x.png" alt="">
<!--                    第二名图标-->
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix"  v-if="index == 1" src="https://www.shuimukeji.cn/static/image/img/icon-tow@2x.png" alt="">
<!--                    第三名图标-->
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix"  v-if="index == 2" src="https://www.shuimukeji.cn/static/image/img/icon-Three@2x.png" alt="">
<!--                    其余排名-->
                    <view v-if="index>=3">{{index+1}}</view>

                    <view class="Ranking_List_Member_ImgName">
                        <view class="Ranking_List_Member_Img">
                            <img class="Ranking_List_Member_head" mode="widthFix" :src=item.headpic alt="">
                        </view>
                        <view class="Ranking_List_Member_name">{{item.nickname}}</view>
                    </view>
                </view>
                <view class="Ranking_List_Member_Left">
                    <view class="Ranking_List_Member_Left_day">{{item.day}} 天</view>
                    <view class="Ranking_List_Member_Left_Up">
                        <img class="Ranking_List_Member_Left_UpImg" mode="widthFix"src="https://www.shuimukeji.cn/static/image/img/icon-Up@2x.png" alt="">
                        <view class="Ranking_List_Member_Left_ranking">+{{item.num}}</view>
                    </view>
                </view>
            </view>


            <view :class="Show==Ranking?'Ranking_ListButtonBox':'Ranking_ListButtonBox1'">
                <button class="Ranking_ListButton" @click="RankingListShow()" >{{Show==Ranking?"查看更多排行榜":"收起更多排行榜"}}</button>
            </view>
        </view>

        <!--    体现排行榜-->
        <view v-if="click_Ranking==2"  :class="Show== 1?'Ranking_List_MemberBox':'Ranking_List_MemberBox1'" >
            <view class="Ranking_List_Member" v-if="Show == 1?index < 3:index < 8" v-for="(item,index) in WithdrawalMemberList" :key="index">
                <view class="Ranking_List_Member_Right">
                    <!--                    第一名图标-->
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix"  v-if="index == 0" src="https://www.shuimukeji.cn/static/image/img/icon-one@2x.png" alt="">
                    <!--                    第二名图标-->
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix"  v-if="index == 1" src="https://www.shuimukeji.cn/static/image/img/icon-tow@2x.png" alt="">
                    <!--                    第三名图标-->
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix"  v-if="index == 2" src="https://www.shuimukeji.cn/static/image/img/icon-Three@2x.png" alt="">
                    <!--                    其余排名-->
                    <view v-if="index>=3">{{index+1}}</view>
                    <view class="Ranking_List_Member_ImgName">
                        <view class="Ranking_List_Member_Img">
                            <img class="Ranking_List_Member_head" mode="widthFix" :src=item.headpic alt="">
                        </view>
                        <view class="Ranking_List_Member_name">{{item.nickname}}</view>
                    </view>
                </view>
                <view class="Ranking_List_WithdrawalMember_Left">
                    <view class="Ranking_List_WithdrawalMember_money" >总共提现{{item.money}}元</view>
                    <view class="Ranking_List_Member_Left_Up">
                        <img class="Ranking_List_Member_Left_UpImg" mode="widthFix" src="https://www.shuimukeji.cn/static/image/img/icon-Up@2x.png" alt="">
                        <view class="Ranking_List_Member_Left_ranking">+{{item.num}}</view>
                    </view>
                </view>
            </view>

            <view :class="Show==Ranking?'Ranking_ListButtonBox':'Ranking_ListButtonBox1'">
            <button class="Ranking_ListButton" @click="RankingListShow" >{{show==Ranking?"查看更多排行榜":"收起更多排行榜"}}</button>
            </view>
        </view>
        <view class="">
            <Task/>
        </view>
        <view :class="Show != Ranking?'Mantle':''"></view>
    </view>
</template>

<script>
    import Task from "./Task";
    import { query_Day_activity } from "../api/day_pai_hang_list"
    import { query_money_activity } from "../api/day_pai_hang_list";
    import { date } from "../api/complete_task";

    export default {
        name: "RankingList",
        onShow(){
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        },
        mounted() {
            //日活跃度查询
            this.Day_activity();
            //提现活跃度查询
            this.money_activity();
            //时间
            this.dateList();
        },
        components:{
            Task
        },
        data(){
            return{
                MemberList:[
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                    {headpic:"",nickname:"米能那个能",},
                ],
                WithdrawalMemberList:[
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                    {nickname:"随心自在",money:" 80 ",num:""},
                ],
                Show:1,
                Ranking:1,
                click_Ranking:1,
                day:[],
            }
        },
        methods:{
            RankingListShow(){
                this.Show = !this.Show
            },
            //排行榜查询
            Switch_ranking(index){
                this.click_Ranking=index

                if (index == 1){
                    this.money_activity()
                    for (let i =0;i<=4;i++){
                        this.$set(this.MemberList[i],'num',"0")
                        console.log("日活跃排行榜",this.MemberList[i].num)
                    }
                }
                if( index == 2) {
                    this.Day_activity()
                }
            },

            //日活跃用户查询
            Day_activity(){
                query_Day_activity().then(res =>{
                    this.MemberList = res
                    for (let i=0;i<this.MemberList.length;i++){
                        let _num =  Math.ceil(Math.round(Math.random()*1+1))
                        this.$set(this.MemberList[i],'num',_num)

                    }
                })
            },
            //提现排行榜
            money_activity(){
                query_money_activity().then(res =>{
                    this.WithdrawalMemberList = res
                        for (let i=0;i<this.WithdrawalMemberList.length;i++){
                        this.$set(this.WithdrawalMemberList[i],'num','0')
                        }
                        console.log("提现排行榜")

                })
                this.dateList();
            },
            dateList(){
                date().then(res=>{
                    console.log("时间",res)
                    for (let i =0;i<this.MemberList.length;i++){
                        this.$set(this.MemberList[i],'day',res[i])
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .Ranking_ListBox{
        width: 100%;
        height: 100%;

    }
    .Mantle{
        position: absolute;
        width: 100%;
        height: 106%;
        top: 165upx;
        background-color:gray;
        opacity: 0.5;
        z-index: 0;
        filter: alpha(opacity=50);
    }
    .Ranking_ListBox_Title{
        width: 100%;
        height:164upx;
        background:rgba(110, 206, 255, 1);
        border-radius:0x 0 30upx 30upx;
        display: flex;
        align-content: space-around;
        justify-content: center;
        position: relative;
    }
    .Ranking_ListBox_Title_switchBox{
        width: 100%;
        height: 45upx;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .Ranking_ListBox_Title_switchBox_button{
        width:208upx;
        height: 45upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:20upx;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        display: flex;
        justify-content: center;
    }
    .Ranking_ListBox_Title_switchBox_button1{
        width:208upx;
        height: 45upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius:20upx;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(102, 102, 102, 1);
        display: flex;
        justify-content: center;
    }
    .Ranking_List_MemberBox{
        width:690upx;
        height:333upx;
        background:rgba(255,255,255,1);
        box-shadow:0 5upx 16upx 0 rgba(123,155,171,0.23);
        border-radius:30upx;
        position: relative;
        left: 35upx;
        top: -95upx;
    }
    .Ranking_List_MemberBox1{
        width:690upx;
        height:auto;
        background:rgba(255,255,255,1);
        box-shadow:0 5upx 16upx 0 rgba(123,155,171,0.23);
        border-radius:30upx;
        position: relative;
        left: 35upx;
        top: -95upx;
        z-index: 99999;
    }
    .Ranking_List_Member{
        height: 91upx;
        border-bottom: 1upx solid rgb(243,241,244);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 29upx 0 26upx;
    }
    .Ranking_List_Member_Right{
        width: 300upx;
        height:53upx ;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .Ranking_List_Member_Right_icon{
        width: 35upx;
        height: 41upx;
    }
    .Ranking_List_Member_ImgName{
        width: 220upx;
        height: 53upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .Ranking_List_Member_Img{
        width: 53upx;
        height: 53upx;
        border-radius: 50%;
    }
    .Ranking_List_Member_head{
        width: 53upx;
        height: 53upx;
        border-radius: 50%;
    }
    .Ranking_List_Member_name{
        width: 140upx;
        height: 25upx;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:500;
        white-space:nowrap;
        color:rgba(51,51,51,1);
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .Ranking_List_Member_Left{
        width: 180upx;
        height: auto;
        display: flex;
        white-space:nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .Ranking_List_WithdrawalMember_Left{
        width: 260upx;
        height: auto;
        display: flex;
        white-space:nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .Ranking_List_Member_Left_day{
        font-size:22upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        opacity:0.74;
    }
    .Ranking_List_WithdrawalMember_money{
        width:auto;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,149,32,1);
        opacity:0.74;
        white-space:nowrap;
        /*overflow:hidden;*/
        /*text-overflow:ellipsis;*/
    }
    .Ranking_List_Member_Left_Up{
        width: 75upx;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1upx solid b;
    }
    .Ranking_List_Member_Left_UpImg{
        width: 21upx;
        height: 33upx;
    }
    .Ranking_List_Member_Left_ranking{
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(244,34,34,1);
    }
    .Ranking_ListButtonBox{
        width: 100%;
        height: 60upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Ranking_ListButtonBox1{
        width: 100%;
        height: 81upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Ranking_ListButton{
        height: 45upx;
        background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
        border-radius: 20upx;
        border: none;
        outline: none;
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
