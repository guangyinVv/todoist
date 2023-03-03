import axios from 'axios'
const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})
const BaseURL = 'http://geek.itheima.net/v1_0'

// 添加请求拦截器（根据条件拦截部分请求）
request.interceptors.request.use((config) => {
  return config
})

// 添加相应拦截器
request.interceptors.response.use((response) => {
  return response
})
export { BaseURL }
export default request
