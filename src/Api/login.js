import axios from '../views/Utils/axios.config'
import Url from '@/Constant/api.js'
export function LoginByUser (data) {
  return axios({
    url: Url.APP_LOGIN,
    method: 'post',
    data
  })
}
