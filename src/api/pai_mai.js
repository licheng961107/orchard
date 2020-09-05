import { CommRequest } from '../comm/commRequest'

//拍卖植物
export function pai_mai(data) {
    return CommRequest.doRequest({
        url:"/warehouse/pai_mai",
        data,
        method:"POST"
    })
}
