/*
ajax请求函数模块
返回值： promise对象（异步返回的数据是：response.data）
*/
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    //异步执行ajax请求
    let promise
    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      //成功了调用resolve()
      // console.log(response.data)
      resolve(response.data)

    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}
