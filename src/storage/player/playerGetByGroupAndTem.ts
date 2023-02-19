import { playerGetByGroup } from './playerGetByGroup'

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const playersStored = await playerGetByGroup(group)

    const players = playersStored.filter((player) => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}
