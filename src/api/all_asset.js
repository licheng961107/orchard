import { CommRequest } from '../comm/commRequest'
//获取用户资产

export function all_asset() {
    return CommRequest.doRequest({
        url:"/assets/all_asset",
        data:null,
        method:"GET"

    })
}
