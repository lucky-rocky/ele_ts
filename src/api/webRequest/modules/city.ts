/**
 * 城市相关
 */
// interface
import Axios from '@/utils/request'
import webApi from '@/api/api'
import { ICity, IShop, IRequestShop } from '@/api/interface/city'

const getCity = function(type: 'guess' | 'hot' | 'group') {
  return Axios.requestGet<ICity>(webApi.getCities, { type })
}

const postE = (data: IRequestShop) => {
  return Axios.requestPost<IShop>(webApi.addShop, data)
}
export default {
  getCity,
  postE
}
