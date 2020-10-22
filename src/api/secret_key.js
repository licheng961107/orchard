import { CommRequest } from '../comm/commRequest'
//输入密匙,成为合伙人

export function secret_key(data) {
    return CommRequest.doRequest({
        url:'/wx_login/to_be_he_huo_ren',
        data:data,
        method:'post'
    })
}
