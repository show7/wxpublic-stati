const WorldTiles = {
  // 可移动砖块类型
  moveableTypes: [10, 11, 12, 13, 14, 15, 16, 17, 21],
  // 判断下个点是否可移动
  couldMove: (mapData, xPosition, yPosition) => {
    // tips：xPosition 和 yPosition 因为数组排布原因，此处要反转下
    // console.log(mapData)
    // 任何会导致越界的情况，都不允许移动
    if (xPosition < 0 || yPosition < 0 || yPosition > mapData.length - 1 || xPosition > mapData[0].length - 1) {
      return false
    }
    let pointType = mapData[yPosition][xPosition]
    // console.log(`next position is: ${xPosition}, ${yPosition} and next Type is: ${pointType}`)
    // console.log(WorldTiles.moveableTypes.includes(pointType) ? 'true' : 'false')
    return WorldTiles.moveableTypes.includes(pointType)
  }
}

export default WorldTiles