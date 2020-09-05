import { CommRequest } from '../comm/commRequest'
//添加用户
export function add_user(data) {
    return CommRequest.doRequest({
        url:"/convert_user_info/add_convert_user_info",
        method:"POST",
        data
    })
}
