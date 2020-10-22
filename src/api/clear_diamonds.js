import { CommRequest } from '../comm/commRequest'
//我的 数据清零 清除砖石
export function eliminate() {
    return CommRequest.doRequest({
        url:'/assets/clear_diamonds',
        method:'Post',
        data:null
    })
}
