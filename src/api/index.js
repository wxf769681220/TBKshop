import { get } from 'common/js/axios'
import { baseURL } from './config'

// 淘宝客物料下行
const TbkDgOptimusMaterialRequest = get(baseURL + '/TbkDgOptimusMaterialRequest.php')

export {
  TbkDgOptimusMaterialRequest
}