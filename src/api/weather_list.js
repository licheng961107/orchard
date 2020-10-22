import { CommRequest } from '../comm/commRequest'
//获取当前天气
export function weather() {
    return CommRequest.doRequest({
        url:"/draw_article/weather_list",
        method:"get",
        data:null
    })
}
