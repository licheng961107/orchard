import {domain} from "../config/config";

class CommRequest {




    /***
     * 请求方法主题
     * @param Data      请求参数
     * @param Url       请求地址路由
     * @param Method    请求方法
     * @returns {Promise<unknown>}
     */
    static doRequest(requestParams){
        let requestUri = `${domain}${requestParams.url}`
        requestParams.url = requestUri

        requestParams["header"] = {}
        requestParams["header"]["content-type"] = "application/x-www-form-urlencoded";
        requestParams["header"]["MemberToken"] = uni.getStorageSync("token")


        return new Promise((resolve, reject) => {
            requestParams["success"] = (res) =>{

                if(res.data.code != 200){
                    if (res.data.code == 10020){
                        resolve(res.data.code)
                    }else{
                        uni.showToast({
                            title:res.data.msg
                        })
                    }
                }

                else{
                    resolve(res.data.data)
                }
            }
            requestParams["fail"] = (res) =>{
                reject(res.data.data)
            }


            uni.request(requestParams)

        })
    }


    /**
     * 添加请求Config
     * @param key   Config中的key
     * @param data  Config中的值
     */



}


module.exports = { CommRequest }
