import { CommRequest } from '../comm/commRequest'
//获取用户信息
export function query_user() {
    return CommRequest.doRequest({
        url:"/convert_user_info/get_convert_user_info",
        method:"GET",
        data:null
    })
}
