// interface
import Axios from '@/utils/request'
import { ICity } from '@/api/interface'

const getCity = function(type: 'guess' | 'hot' | 'group') {
  return Axios.requestGet<ICity>('/v1/cities', { type })
}
export default {
  getCity
}
