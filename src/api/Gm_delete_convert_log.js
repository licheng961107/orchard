import { CommRequest } from '../comm/commRequest'

//Gm查看所有用户兑换信息
export function Gm(data) {
    return CommRequest.doRequest({
        url:'/convert_user_info/delete_convert_log',
        method:'POST',
        data:data,
    })

}
//通过传递信息查看记录
export function Gm_user(data) {
    return CommRequest.doRequest({
        url:'/convert_user_info/get_convert_user_info_by_id',
        method: 'GET',
        data:data,
    })
}
