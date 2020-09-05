<template>
    <view class="Ranking_ListBox">
        <view class="Ranking_ListBox_Title">
            <view class="Ranking_ListBox_Title_switchBox">
                <view @click="Switch_ranking(1)" :class="click_Ranking==1?'Ranking_ListBox_Title_switchBox_button':'Ranking_ListBox_Title_switchBox_button1'">日活跃排行榜</view>
                <view @click="Switch_ranking(2)" :class="click_Ranking==2?'Ranking_ListBox_Title_switchBox_button':'Ranking_ListBox_Title_switchBox_button1'">体现排行榜</view>
            </view>
        </view>
        <!--    日活跃排行榜-->
        <view v-if="click_Ranking==1"  :class="Show==Ranking?'Ranking_List_MemberBox':'Ranking_List_MemberBox1'" >
            <view class="Ranking_List_Member" v-if="Show==0" v-for="(item,index) in MemberList" :key="index">
                <view class="Ranking_List_Member_Right">
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix":src=item.icon alt="">
                    <view class="Ranking_List_Member_ImgName">
                        <view class="Ranking_List_Member_Img">

                        </view>
                        <view class="Ranking_List_Member_name">{{item.name}}</view>
                    </view>
                </view>
                <view class="Ranking_List_Member_Left">
                    <view class="Ranking_List_Member_Left_day">{{item.Day}}</view>
                    <view class="Ranking_List_Member_Left_Up">
                        <img class="Ranking_List_Member_Left_UpImg" mode="widthFix":src=item.Upimg alt="">
                        <view class="Ranking_List_Member_Left_ranking">+{{item.number}}</view>
                    </view>
                </view>
            </view>
            <view class="Ranking_List_Member" v-if="Show==1" v-for="(item,index) in MemberList1" :key="index">
                <view class="Ranking_List_Member_Right">
                    <!--          <img mode="widthFix":src=item.icon alt="">-->
                    <view>{{index+1}}</view>
                    <view class="Ranking_List_Member_ImgName">
                        <view class="Ranking_List_Member_Img">

                        </view>
                        <view class="Ranking_List_Member_name">{{item.name}}</view>
                    </view>
                </view>
                <view class="Ranking_List_Member_Left">
                    <view class="Ranking_List_Member_Left_day">{{item.Day}}</view>
                    <view class="Ranking_List_Member_Left_Up">
                        <img class="Ranking_List_Member_Left_UpImg" mode="widthFix":src=item.Upimg alt="">
                        <view class="Ranking_List_Member_Left_ranking">+{{item.number}}</view>
                    </view>
                </view>
            </view>
            <view :class="Show==Ranking?'Ranking_ListButtonBox':'Ranking_ListButtonBox1'">
                <button class="Ranking_ListButton" @click="RankingListShow(1)" >{{Show==Ranking?RankingButton:RankingButton1}}</button>
            </view>
        </view>



        <!--    体现排行榜-->
        <view v-if="click_Ranking==2"  :class="Show==Ranking?'Ranking_List_MemberBox':'Ranking_List_MemberBox1'" >
            <view class="Ranking_List_Member" v-if="Show==0" v-for="(item,index) in WithdrawalMemberList" :key="index">
                <view class="Ranking_List_Member_Right">
                    <img class="Ranking_List_Member_Right_icon" mode="widthFix":src=item.icon alt="">
                    <view class="Ranking_List_Member_ImgName">
                        <view class="Ranking_List_Member_Img">

                        </view>
                        <view class="Ranking_List_Member_name">{{item.name}}</view>
                    </view>
                </view>
                <view class="Ranking_List_WithdrawalMember_Left">
                    <view class="Ranking_List_WithdrawalMember_money" >总共提现{{item.WithdrawalMoney}}元</view>
                    <view class="Ranking_List_Member_Left_Up">
                        <img class="Ranking_List_Member_Left_UpImg" mode="widthFix":src=item.Upimg alt="">
                        <view class="Ranking_List_Member_Left_ranking">+{{item.number}}</view>
                    </view>
                </view>
            </view>



            <view class="Ranking_List_Member" v-if="Show==1" v-for="(item,index) in WithdrawalMemberList1" :key="index">
                <view class="Ranking_List_Member_Right">
                    <!--          <img mode="widthFix":src=item.icon alt="">-->
                    <view>{{index+1}}</view>
                    <view class="Ranking_List_Member_ImgName">
                        <view class="Ranking_List_Member_Img">

                        </view>
                        <view class="Ranking_List_Member_name">{{item.name}}</view>
                    </view>
                </view>
                <view class="Ranking_List_WithdrawalMember_Left">
                    <view class="Ranking_List_Member_Left_day"> 总共提现{{item.WithdrawalMoney}}元</view>
                    <view class="Ranking_List_Member_Left_Up">
                        <img class="Ranking_List_Member_Left_UpImg" mode="widthFix":src=item.Upimg alt="">
                        <view class="Ranking_List_Member_Left_ranking">+{{item.number}}</view>
                    </view>
                </view>
            </view>
            <view :class="Show==Ranking?'Ranking_ListButtonBox':'Ranking_ListButtonBox1'">
                <button class="Ranking_ListButton" @click="RankingListShow(1)" >{{Show==Ranking?RankingButton:RankingButton1}}</button>
            </view>
        </view>
        <view class="">
            <Task/>
        </view>
        <view :class="Show==Ranking?'':'Mantle'"></view>
    </view>
</template>

<script>
    import Task from "./Task";

    export default {
        name: "RankingList",
        onShow(){
            wx.setNavigationBarColor({
                frontColor:"#ffffff",
                backgroundColor:"#6eceff"
            })
        },
        components:{
            Task
        },
        data(){
            return{
                MemberList:[
                    {icon:require("../assets/img/icon-one@2x.png"),img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-tow@2x.png"),img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-Three@2x.png"),img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    // {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                ],
                MemberList1:[
                    {icon:require("../assets/img/icon-one@2x.png"),img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-tow@2x.png"),img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-Three@2x.png"),img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                ],
                WithdrawalMemberList:[
                    {icon:require("../assets/img/icon-one@2x.png"),img:"",name:"随心自在",WithdrawalMoney:" 800000 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-tow@2x.png"),img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-Three@2x.png"),img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    // {img:"",name:"米能那个能",Day:"562  天",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                ],
                WithdrawalMemberList1:[
                    {icon:require("../assets/img/icon-one@2x.png"),img:"",name:"随心自在",WithdrawalMoney:" 8000 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-tow@2x.png"),img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {icon:require("../assets/img/icon-Three@2x.png"),img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                    {img:"",name:"随心自在",WithdrawalMoney:" 80 ",Upimg:require("../assets/img/icon-Up@2x.png"),number:"1"},
                ],
                Show:'',
                Ranking:0,
                click_Ranking:2,
                RankingButton:'查看更多排行榜',
                RankingButton1:'收起更多排行榜',
            }
        },
        methods:{
            RankingListShow(index){
                this.Show = !this.Show
            },
            Switch_ranking(index){
                this.click_Ranking=index
            }
        }
    }
</script>

<style scoped>
    .Ranking_ListBox{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
    .Mantle{
        width: 100%;
        height: 100%;
        position: relative;
        background-color:gray;
        opacity: 0.5;
        z-index: 1;
        top: -100upx;
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
        width: 240upx;
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
        width:145upx;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,149,32,1);
        opacity:0.74;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
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
