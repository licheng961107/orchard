<template>
  <view class="orchard_box">
    <view class="orchard_popup">
      <view class="orchard_popup_titleBox">
        <view class="orchard_popup_title">
          <text class="orchard_popup_title_font">种子库</text>
        </view>
      </view>
      <view class="orchard_popup_contentBox">
        <view class="orchard_popup_content" v-for="(item,index) in dataList" :key="index">
          <view class="orchard_popup_content_top">
            <view class="orchard_popup_content_top_img">

            </view>
            <view class="orchard_popup_content_top_font">
              {{item.font}}
            </view>
          </view>
          <view class="orchard_popup_content_down">
            <button class="orchard_popup_content_down_button">
              种植
            </button>
          </view>
        </view>
      </view>
      <view class="orchard_popup_content_button" >
        <img src="../assets/img/button3@2x.png" alt="">
        <button class="orchard_popup_content_button_font" open-type="getUserInfo" @getuserinfo="getUser">
          推翻当前植物重新种植
        </button>
      </view>
    </view>
  </view>
</template>

<script>
    export default {
        name: "orchard",
        data(){
          return{
            dataList:[
              {img:require("../assets/img/border513@2x.png"),content:"",font:"银色种子数量*1"},
              {img:require("../assets/img/border513@2x.png"),content:"",font:"金苹果种子数量*1"},
              {img:require("../assets/img/border513@2x.png"),content:"",font:"果核种子数量*1"},
              {img:require("../assets/img/border513@2x.png"),content:"",font:"稻田种子数量*1"},
            ]
          }
        },
        methods:{
          jup(){

          },
          getUser(e){
            this.$emit("onGetUser" ,e),
            wx.navigateTo({
              url:"./index2",
            })
          },
        }
    }
</script>

<style scoped>
  .orchard_box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orchard_popup{
    width:690upx;
    height:704upx;
    background:rgba(255,236,190,1);
    box-shadow:0 0 18upx 0 rgba(60,100, 173, 0.35);
    border-radius:20upx;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .orchard_popup_titleBox{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orchard_popup_title{
    width:206upx;
    height:60upx;
    background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
    border-radius:32upx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orchard_popup_title_font{
    font-size:30upx;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .orchard_popup_contentBox{
    width: 668upx;
    height: 460upx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .orchard_popup_content{
    width:284upx;
    height:214upx;
    display: flex;
    align-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
  }
  .orchard_popup_content_top{
    width:200upx;
    height:154upx;
    background:rgba(255,255,255,1);
    border:2upx solid rgba(255, 203, 99, 1);
    box-shadow:0 0 14upx 0 rgba(183, 83, 150, 0.35);
    border-radius:10upx;
    display: flex;
    align-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
  }
  .orchard_popup_content_top_img{
    width: 138upx;
    height: 92upx;
    border: 2upx steelblue solid;
  }
  .orchard_popup_content_top_font{
    width:100%;
    font-size:16upx;
    font-family:PingFang SC;
    color:rgba(51,51,51,1);
    word-break:keep-all;
    font-weight:bold;
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .orchard_popup_content_down_button{
    width:94upx;
    height:40upx;
    background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
    border-radius:20upx;
    border: none;
    outline: none;
    margin-top: 12upx;
    font-size:22upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    white-space:nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orchard_popup_content_down_button>text{
    width:44upx;
    height:22upx;

  }
  .orchard_popup_content_button{
    width: 100%;
    height: 60upx;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
  }
  .orchard_popup_content_button>img{
    width: 260upx;
    height: 60upx;
  }
  .orchard_popup_content_button_font{
    position: absolute;
    font-size:22upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    white-space:nowrap;
  }
</style>
