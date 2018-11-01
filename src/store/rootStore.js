import worldMapController from './controller/WorldMapController'
import dialogModel from './model/DialogModel'
import operatorModel from './model/OperatorModel'
import spiriteModel from './model/SpiriteModel'

const rootStore = {
  // 控制层，所有大范围逻辑走 controller
  worldMapController: worldMapController,

  // 数据层，提供页面展示的数据模型
  dialogModel: dialogModel,
  operatorModel: operatorModel,
  spiriteModel: spiriteModel
}

export default rootStore