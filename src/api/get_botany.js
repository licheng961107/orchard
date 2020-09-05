import { CommRequest } from '../comm/commRequest'
//获取主页植物数据
export function botany() {
    return CommRequest.doRequest({
        url:"/draw_article/get_botany",
        methods: "GET",
        data:null
    })
}
