//点击太阳给植物增加光合
import { CommRequest } from '../comm/commRequest'

export function sun_shine(data) {
    return CommRequest.doRequest({
        url:"/draw_article/sun_shine",
        method:"POST",
        data
    })
}
