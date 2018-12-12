import base_api from './base_api'
import business_api from './business_api'

const Api =
  Object.assign(
    {},
    business_api,
    base_api,
  )

export default Api