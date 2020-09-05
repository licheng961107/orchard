import { CommRequest } from '../comm/commRequest'
//种植植物
export function plant_seed(data) {

    return CommRequest.doRequest({
        url:"/warehouse/plant_warehouse",
        data,
        method:"POST"
    })

}
