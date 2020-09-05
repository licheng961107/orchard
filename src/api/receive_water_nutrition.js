import { CommRequest } from '../comm/commRequest'
//领取水份养分
export function receive(data) {
    return  CommRequest.doRequest({
        url:"/draw_article/click_small_gift",
        data,
        method:"POST"
    })
}
