import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerStorageDTO } from './PlayerStorageDTO'

import { PLAYER_COLLECTION } from '@storage/storageConfig'

export async function playerGetByGroup(group: string) {
  try {
    const dataStored = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${group}`,
    )

    const playersByGroup: PlayerStorageDTO[] = dataStored
      ? JSON.parse(dataStored)
      : []

    return playersByGroup
  } catch (error) {
    throw error
  }
}
