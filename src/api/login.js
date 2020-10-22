import { CommRequest } from '../comm/commRequest'
import {query_user} from "./query_user";


//登录
export function login(data) {
    console.log(data)
    return CommRequest.doRequest({
        url:"/wx_login/wx_login",
        data,
        method:"post",
    })
}

export function commLogin(e, callback) {

    query_user().then(res=>{
        if(res == 10020){
            let { nickName, avatarUrl } = e.detail.userInfo
            uni.login({
                provider: 'weixin',
                success:(res=>{

                    let { code } = res;
                    let request_data = {
                        code,
                        nick_name: nickName,
                        avatar_url: avatarUrl
                    }
                    login(request_data).then(res=>{

                        uni.setStorageSync("token",res.wx_login_data.member_token)
                        uni.setStorageSync("openid",res.wx_login_data.open_id)
                        callback()
                        botany();
                    })
                }),


            })
        }

    })


}
