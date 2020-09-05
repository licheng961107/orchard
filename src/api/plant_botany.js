import { CommRequest } from '../comm/commRequest'
//给植物增加养分
export function Increase_nutrients(data) {
    return CommRequest.doRequest({
        url:"/draw_article/plant_botany",
        data,
        method:"POST"
    })

}
