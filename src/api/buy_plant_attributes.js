import { CommRequest } from '../comm/commRequest'
//植物属性
export function purchase_attribute(data) {
    return CommRequest.doRequest({
        url:"/shop/buy_plant_attributes",
        data,
        method:"POST"
    })
}
