import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'

import { PLAYER_COLLECTION } from '@storage/storageConfig'

import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playerGetByGroup } from './playerGetByGroup'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await playerGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    )

    if (playerAlreadyExists.length > 0) {
      throw new AppError(`o jogador ${newPlayer.name} já está neste time`)
    }

    const playerToStore = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, playerToStore)
  } catch (error) {
    throw error
  }
}
