<template>
    <view>
        <h1>姓名:{{name}}</h1>
        <h1>手机号:{{phone}}</h1>
        <h1>微信号:{{wx_number}}</h1>
        <h1>收货地址:{{delicert}}</h1>
    </view>
</template>

<script>
    import {record} from "../api/get_convert_list";
    import { Gm_user } from "../api/Gm_delete_convert_log"
    export default {
        name: "user",
        data(){
            return{
                user_id:'',//用户id
                name:'',//姓名
                phone:'',//电话
                wx_number:'',//微信号
                delicert:''//收货地址
            }
        },
        mounted() {
            this.look_user()
        },
        onLoad:function(option){
            this.user_id = option.user_id
        },
        methods:{
            look_user(){
                let  data = {
                    id:this.user_id
                }
                Gm_user(data).then(res=>{
                    console.log("user_信息",res)
                    this.name = res.real_person_name;
                    this.phone = res.phone_number;
                    this.wx_number = res.wx_account;
                    this.delicert = res.delivery_address;
                })
            }
        }
    }

</script>

<style scoped>

</style>
