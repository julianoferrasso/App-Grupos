import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'

import { groupsGetAll } from './groupGetAll'
import { GROUP_COLLECTION } from '@storage/storageConfig'

export async function groupsCreate(groupName: string) {
  try {
    const groupsStored = await groupsGetAll()

    const groupAlreadyExists = groupsStored.includes(groupName)

    if (groupAlreadyExists) {
      throw new AppError(`Turma ${groupName} já está cadastrada`)
    }

    const groupsToStore = JSON.stringify([...groupsStored, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, groupsToStore)
  } catch (error) {
    throw error
  }
}
