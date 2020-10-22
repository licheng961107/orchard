import { CommRequest } from '../comm/commRequest'
//获取用户兑换记录
export function record() {
    return  CommRequest.doRequest({
        url:"/convert_user_info/get_convert_list",
        method:'GET',
        data:null
    })
}
