import { CommRequest } from '../comm/commRequest'
//购买天气
export function purchase_weather(data) {
    return CommRequest.doRequest({
        url:"/shop/buy_weather",
        data,
        method:"POST"
    })
}
