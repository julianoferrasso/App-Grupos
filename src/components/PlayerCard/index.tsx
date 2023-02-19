import { ButtonIcon } from '@components/ButtonIcon'
import { Container, PlayerIcon, Player } from './styles'

type PlayerCardProps = {
  player: string
  onRemove: () => void
}

export function PlayerCard({ player, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <PlayerIcon name="person" />
      <Player>{player}</Player>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  )
}
