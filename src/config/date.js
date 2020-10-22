//时间过滤器
import Vue from 'vue'
Vue.filter('timeFormat', function(str) {
    if (str) {
        let date = new Date(parseInt(str) * 1000) // 时间戳为10位需乘1000，为13位则不用
        let Y = date.getFullYear() // 年
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) // 月
        let D = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate() + '' // 日
        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 时
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m  // yyyy-mm-dd hh:mm:ss
    } else {
        return '--'
    }

    // 一个函数只能有一个return，以下仅做示例
    // return Y + '-' + M + '-' + D // yyyy-mm-dd

    // return Y + '/' + M + '/' + D // yyyy/mm/dd
    // return Y + '/' + M + '/' + D + ' ' + h + ':' + m + ':' + 's' // yyyy/mm/dd hh:mm:ss
})


