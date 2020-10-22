import { CommRequest } from '../comm/commRequest'
//获取页面气泡
export function get_Bubble(data) {
    return CommRequest.doRequest({
        url:'/draw_article/get_qi_pao',
        method:'GET',
        data:data,
    })
}
