import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { playerGetByGroup } from './playerGetByGroup'

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storedPlayers = await playerGetByGroup(group)

    const plyaersFiltred = storedPlayers.filter(
      (player) => player.name !== playerName,
    )

    const players = JSON.stringify(plyaersFiltred)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}
