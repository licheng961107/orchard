import { CommRequest } from '../comm/commRequest'
//领取奖励
export function receive_assets(data) {
    return CommRequest.doRequest({
        url:"/draw_article/receive_assets",
        method:"POST",
        data
    })

}

