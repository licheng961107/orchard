import { CommRequest } from '../comm/commRequest'

//日活跃排行榜
export function query_Day_activity() {
    return CommRequest.doRequest({
        url:"/user_task/day_pai_hang_list",
        method:"GET",
        data:null
    })
}
//提现活跃度查询
export  function query_money_activity() {
    return CommRequest.doRequest({
        url:"/user_task/ti_xian_pai_hang_list",
        method: "GET",
        data:null
    })
}
