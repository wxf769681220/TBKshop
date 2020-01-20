import axios from 'axios'
const CODE_OK = 200

/**
 * axios请求封装
 * @param {*} url
 */
//get
export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { status, data } = res
      if (status === CODE_OK) {
        return data
      } else {
        console.log('通过get方式从服务端获取数据时失败!')
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}

//post
export function post(url) {
  return function(params) {
    return axios.post(url, params).then((res) => {
      const { status, data } = res
      if (status === CODE_OK) {
        return data
      } else {
        console.log('通过post方式从服务端获取数据时失败!')
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}