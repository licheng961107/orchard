import { CommRequest } from '../comm/commRequest'

//会员任务完成状态
export function user_task() {
    return CommRequest.doRequest({
        url:"/user_task/user_task",
        method:"get",
        data:null
    })
}
