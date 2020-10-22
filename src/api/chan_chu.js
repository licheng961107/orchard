import { CommRequest } from '../comm/commRequest'

export function chan_chu(data) {
   return  CommRequest.doRequest({
        url:"/warehouse/chan_chu",
        method:"POST",
        data:data
    })
}
