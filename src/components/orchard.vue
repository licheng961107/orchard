<template>
  <view class="orchard_box">
    <view class="orchard_popup">
      <view class="orchard_popup_titleBox">
        <view class="orchard_popup_title">
          <span class="orchard_popup_title_font">种子库</span>
        </view>
      </view>
      <view class="orchard_popup_contentBox">
        <view class="orchard_popup_content"  v-for="(item,index) in dataList" :key="index">
          <view class="orchard_popup_content_top">
            <view class="orchard_popup_content_top_img">
              <img mode="WidthFix" :src=item.img alt="">
            </view>
            <view class="orchard_popup_content_top_font">
              {{item.font+item.number}}
            </view>
          </view>
          <view class="orchard_popup_content_down">
            <view class="orchard_popup_content_down_button" @click="plant(item.id)">
              种植
            </view>
          </view>
        </view>
      </view>
      <view class="orchard_popup_content_button">
        <img src="https://www.shuimukeji.cn/static/image/img/button3@2x.png" alt="">
        <view class="orchard_popup_content_button_font" @click="eliminate_seed">
          推翻当前植物重新种植
        </view>
      </view>
    </view>
    <img  mode="widthFix" @click="close" class="orchard_close" src="https://www.shuimukeji.cn/static/image/img/close@2x.png" alt="">
  </view>
</template>

<script>
  import {CommRequest} from "../comm/commRequest";
  import {GetWarehouse} from "../api/getWarehouse";
  import { chan_chu } from "../api/chan_chu";

  export default {
    name: "orchard",
    data(){
      return{
        dataList:[
          {id:1,img:"https://www.shuimukeji.cn/static/image/img/SilverApple@2x.png",content:"",font:"银色种子数量*",number:0},
          {id:2,img:"https://www.shuimukeji.cn/static/image/img/Walnut@2x.png",content:"",font:"果核种子数量*",number:0},
          {id:3,img:"https://www.shuimukeji.cn/static/image/img/GoldenApple@2x.png",content:"",font:"金苹果种子数量*",number:0},
          {id:4,img:"https://www.shuimukeji.cn/static/image/img/Wheat@2x.png",content:"",font:"稻田种子数量*",number:0},
        ],

      }
    },
    mounted() {
      this.getWarehouse()
    },
    methods:{

      close(){
        this.$emit("onchickSeedBank")
      },
      getWarehouse(){
        GetWarehouse().then( res => {
          console.log(res)
          this.dataList[0].number = res.sliver_kernel;
          this.dataList[1].number = res.kernel;
          this.dataList[2].number = res.gold_kernel;
          this.dataList[3].number = res.spike_price;
        })
      },
      plant(index){
        this.$emit("plant_seed",index)
      },
      eliminate_seed(data){
        this.$emit("eliminate_seed")
      }
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
    flex-wrap: wrap;
  }
  .orchard_popup{
    width:690upx;
    height:703upx;
    background:rgba(255,236,190,1);
    box-shadow:0 0 9px 0 rgba(60,100, 173, 0.35);
    border-radius:10upx;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }
  .orchard_popup_titleBox{
    width: 100%;
    height: 100upx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20upx;
  }
  .orchard_popup_title{
    width:206upx;
    height:64upx;
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
    width: 594upx;
    height: 494upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .orchard_popup_content{
    width:216upx;
    height:170upx;
    display: flex;
    align-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
  }
  .orchard_popup_content_top{
    width:390upx;
    height:164upx;
    background:rgba(255,255,255,1);
    border:2upx solid rgba(255, 203, 99, 1);
    box-shadow:0 0 7px 0 rgba(183, 83, 150, 0.35);
    border-radius:5upx;
    display: flex;
    align-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
  }
  .orchard_popup_content_top_img{
    width: 140upx;
    height: 90upx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orchard_popup_content_top_img>img{
    width: 137upx;
    height: 92upx;
  }
  .orchard_popup_content_top_font{
    width:100%;
    font-size:24upx;
    font-family:PingFang SC;
    color:rgba(51,51,51,1);
    word-break:keep-all;
    font-weight:bold;
    transform: scale(0.7);
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .orchard_popup_content_down_button{
    width:94upx;
    height:40upx;
    background:linear-gradient(0deg,rgba(255,180,61,1),rgba(255,221,129,1));
    border-radius:15upx;
    border: none;
    outline: none;
    margin-top: 6upx;
    font-size:22upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 230upx;
    height: 60upx;
  }
  .orchard_popup_content_button_font{
    position: absolute;
    font-size:21upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    white-space:nowrap;
    top: 16upx;
    transform:scale(0.9);
  }
  .orchard_close{
    position: absolute;
    width: 50upx;
    height: 50upx;
    bottom: 180upx;
  }

</style>
