import { CommRequest } from '../comm/commRequest'
//收获种子
export function harvest(data) {
    return CommRequest.doRequest({
        url:"/warehouse/shou_huo",
        method:"POST",
        data:data
    })
}
