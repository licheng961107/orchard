import { CommRequest } from '../comm/commRequest'
//完成任务
export function Finish_task(data) {
    return CommRequest.doRequest({
        url:'/user_task/complete_task',
        method:'post',
        data:data,
    })
}
//排行榜时间
export function date() {
    return CommRequest.doRequest({
        url:'/user_task/time_list',
        method:'GET',
        data:null,
    })
}
