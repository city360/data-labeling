/*
    包含n个接口请求函数的模块
    函数的返回值： promise对象
*/
import ajax from './ajax.js'

const baseUrl = "http://localhost:5000/"

/**
 * 请求文件夹
 */
export function getFolders() {
  return ajax(baseUrl + 'folders')
}

/**
 * 请求文件夹下面的图片url
 */
// export function getPics(folderName) {
//   return(ajax(baseUrl + 'get_pics',{folder:folderName},'GET'))
// }


export function labelData(folderName,label) {
  return(ajax(baseUrl + 'label',{folder:folderName,label:label},'POST'))
}
