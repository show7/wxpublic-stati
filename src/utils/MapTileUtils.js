const MapTileUtils = {
  // 可移动砖块类型
  moveableTypes: [10, 11, 12, 13, 14, 15, 16, 17, 21, 77],
  // 判断下个点是否可移动
  couldMove: (mapData, xPosition, yPosition) => {
    // tips：xPosition 和 yPosition 因为数组排布原因，此处进行反转
    // 任何会导致越界的情况，都不允许移动
    console.log(xPosition, yPosition)
    console.log(mapData[yPosition][xPosition])
    if (xPosition < 0 || yPosition < 0 || yPosition > mapData.length - 1 || xPosition > mapData[0].length - 1) {
      return false
    }
    let pointType = mapData[yPosition][xPosition]
    return MapTileUtils.moveableTypes.includes(pointType)
  }
}

export default MapTileUtils