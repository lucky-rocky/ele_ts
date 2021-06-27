/**
 * example
 */
export interface ICity {
  abbr: string
  area_code: string
  id: number
  is_map: boolean
  latitude: number
  longitude: number
  name: string
  pinyin: string
  sort: number
}

export interface IShop {
  status: number
  sussess: string
}

// 请求参数类型
export type IRequestShop = {
  name: string
  description: string
  restaurant_id: number
}
