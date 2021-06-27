/**
 * 这里设置拦截器,包括base,请求逻辑
 * loading
 */
// TODO:后续补充
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { baseUrl } from './env'
import { Loading, Message } from 'element-ui'
import { ElLoadingComponent } from 'element-ui/types/loading'

const instance: AxiosInstance = axios.create()
let loadingService: ElLoadingComponent

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // loading
    loadingService = Loading.service({
      body: true,
      fullscreen: true,
      lock: true,
      text: 'Loading...',
      background: 'rgba(0,0,0,.6)'
    })

    config.baseURL = baseUrl
    config.timeout = 12000
    // config.headers.Authorization = getToken()
    return config
  },
  err => {
    loadingService.close()
    Message({ type: 'error', message: err.message })
    return Promise.reject(err)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // 关闭Loading
    loadingService.close()
    try {
      return res.data
    } catch (error) {
      return res
    }
  },
  err => {
    loadingService.close()
    Message({ type: 'error', message: err.message })
    return Promise.reject(err)
  }
)

// TODO: 封装请求GET, POST
function requestGet<T>(url: string, params?: object) {
  let urlStr: string
  if (params) {
    urlStr = `${url}?`
    const keys = Object.keys(params)
    keys.map(item => {
      urlStr = `${urlStr}${item}=${(params as any)[item]}&`
    })
    urlStr = urlStr.slice(0, urlStr.length - 1)
  } else {
    urlStr = url
  }
  // 这样通过请求时传入interface, 返回值直接就有提示了
  return instance.get<T, Promise<T>>(urlStr)
}

export default {
  requestGet
}
