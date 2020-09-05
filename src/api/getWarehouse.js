import { CommRequest } from '../comm/commRequest'

export  function GetWarehouse(data) {
    return CommRequest.doRequest({
        url:"/warehouse/seed_warehouse",
        data,
        method:"get",
    })
}
