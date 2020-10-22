import { CommRequest } from '../comm/commRequest'
//兑换奖励
export function exchange_reward(data) {
    return CommRequest.doRequest({
        url:"/convert_user_info/convert_gift_add",
        method:"POST",
        data:data,
    })
}
