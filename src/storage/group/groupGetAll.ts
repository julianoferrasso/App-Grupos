import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/storageConfig'

export async function groupsGetAll() {
  try {
    const groupsFromStorage = await AsyncStorage.getItem(GROUP_COLLECTION)
    const groups: string[] = groupsFromStorage
      ? JSON.parse(groupsFromStorage)
      : []

    return groups
  } catch (error) {
    throw error
  }
}
