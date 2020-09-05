import { CommRequest } from '../comm/commRequest'

//购买苹果种子

export function buying_seeds(data) {
    return CommRequest.doRequest({
        url:"/shop/buy_apple",
        data,
        method:"POST"
    })

}
