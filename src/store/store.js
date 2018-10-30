import ProfileStore from './ProfileStore'
import WorldMapStore from './WorldMapStore'

const store = {
  profileStore: new ProfileStore(),
  worldMapStore: new WorldMapStore()
}

export default store