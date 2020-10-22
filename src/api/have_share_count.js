import { CommRequest } from '../comm/commRequest'
//获取分享人数
export function share() {
    return  CommRequest.doRequest({
        url:'/assets/have_share_count',
        method:'GET',
        data:null

    })
}
