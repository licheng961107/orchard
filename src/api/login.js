import { CommRequest } from '../comm/commRequest'
//登录
export function login(data) {
    console.log(data)
    return CommRequest.doRequest({
        url:"/wx_login/wx_login",
        data,
        method:"post",
    })
}
//登录
// export function login(data) {
//     console.log(data)
//     return CommRequest.doRequest({
//         url:"/wx_login/wx_login",
//         data,
//         method:"post",
//
//     })
// }

export function commLogin(e) {
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
                uni.setStorageSync("token",res.wx_login_data.MemberToken)
                console.log(res)
                console.log(res.wx_login_data)
                console.log(res.wx_login_data.MemberToken)
            })
        }),


    })
}
