<template>
  <view class="orchard1_box">
    <view class="orchard1_popup">
      <view class="orchard1_popup_border">
        <view class="orchard1_popup_titleBox">
          <button class="orchard1_popup_Button" @click="bcheck(1)" :class="show==1?'orchard1_popup_Button1':'orchard1_popup_Button'">商城</button>
          <button>
            <view>金币:1515</view>
            <view>元宝:9852</view>
          </button>
          <button @click="bcheck(2)" :class="show==2?'orchard1_popup_Button1':'orchard1_popup_Button'">拍卖</button>
        </view>
        <view class="orchard1_popup_contentBox">
          <view class="orchard1_popup_content" v-for="(item , index) in imgList" :key="index">
            <view class="orchard1_popup_content_top">
              <view class="orchard1_popup_content_top_border">
                <view class="orchard1_popup_content_top_img">
                  <img :src=item.img alt="">
              </view>
                <view class="orchard1_popup_content_top_number">×{{item.number}}</view>
              </view>
              <view class="orchard1_popup_content_top_fontBox">{{item.money}}</view>
            </view>
            <view class="orchard1_popup_content_down">
              {{item.varieties}}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
    export default {
        name: "orchard1",
        data(){
          return{
            imgList:[
              {img:require("../assets/img/Wheat@2x.png"),money:"价值80元",number:10,varieties:"金稻穗拍卖1600元宝+1金稻穗种子"},
              {img:require("../assets/img/Walnut@2x.png"),money:"价值10元",number:10,varieties:"果核果实拍卖280元宝 +1银色果核"},
              {img:require("../assets/img/SilverApple@2x.png"),money:"价值30元",number:10,varieties:"银苹果拍卖680元宝 +1银色果核"},
              {img:require("../assets/img/GoldenApple@2x.png"),money:"价值120元",number:10,varieties:"金苹果拍卖2480元宝 +1银色果核"},
            ],
            show:0,
          }
        },
        methods:{
          bcheck(index){
            this.show=index
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
  .orchard1_popup{
    width:690upx;
    height:704upx;
    background:rgba(255,236,190,1);
    box-shadow:0 0 18upx 0 rgba(60, 100, 173, 0.35);
    border-radius:20upx;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
  }
  .orchard1_popup_titleBox{
    width: 100%;
    height: 78upx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 32upx;
  }
  .orchard1_popup_Button{
    width: 162upx;
    height: 64upx;
    background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
    border-radius:30upx;
    border: none;
    outline: none;
    line-height: 60upx;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .orchard1_popup_Button1{
    width: 162upx;
    height: 64upx;
    color:rgba(255,221,129,1);
    border-radius:30upx;
    border: none;
    outline: none;
    line-height: 60upx;
    font-family:PingFang SC;
    font-weight:bold;
    background:white;
  }
  .orchard1_popup_titleBox>button:nth-child(2){
    width: 206upx;
    height:78upx;
    line-height: 40upx;
    background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
    border-radius:40upx;
    font-size: 24upx;
    outline: none;
    border: none;
    font-size:30upx;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);

  }
  .orchard1_popup_contentBox{
    width: 600upx;
    height: 480upx;
    margin-top: 52upx;
    display: flex;
    align-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .orchard1_popup_content{
    width: 260upx;
    height: 210upx;
  }
  .orchard1_popup_content_top{
    width:260upx;
    height:154upx;
    background:rgba(255,255,255,1);
    border:2upx solid rgba(255, 203, 99, 1);
    box-shadow:0 0 14upx 0 rgba(183, 83, 150, 0.35);
    border-radius:10upx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .orchard1_popup_content_top_border{
    width: 80%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .orchard1_popup_content_top_img{
    width: 138upx;
    height: 92upx;
  }
  .orchard1_popup_content_top_img>img{
    width: 138upx;
    height: 92upx;
  }
  .orchard1_popup_content_top_number{
    font-size:24upx;
    font-family:PingFang SC;
    font-weight:800;
    color:rgba(255,32,32,1);
    line-height:60upx;
  }
  .orchard1_popup_content_top_fontBox{
    width:90upx;
    height:22upx;
    background:rgba(255,205,103,1);
    font-size:18upx;
    line-height: 22upx;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(254,254,254,1);
    text-align: center;
    white-space:nowrap;
  }
  .orchard1_popup_content_down{
    width:100%;
    height: auto;
    font-size:26upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: center;
    margin-top: 36upx;
  }
</style>
