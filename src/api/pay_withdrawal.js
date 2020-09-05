import { CommRequest } from '../comm/commRequest'
//提现
export function plant_warehouse(data) {
    return CommRequest.doRequest({
        url:"/pay/withdrawal",
        data,
        method:"POST"
    })
}
