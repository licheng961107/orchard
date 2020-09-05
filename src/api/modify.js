import { CommRequest } from '../comm/commRequest'
//修改兑换用户的信息
export function modif(data) {
    return CommRequest.doRequest({
        url:"/convert_user_info/edit_convert_user_info",
        data,
        method:"post",
    })
}
