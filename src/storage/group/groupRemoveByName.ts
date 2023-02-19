import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'
import { groupsGetAll } from './groupGetAll'

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const groupsStored = await groupsGetAll()

    const groupsFiltred = groupsStored.filter((group) => group !== groupDeleted)

    AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groupsFiltred))
    AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}
