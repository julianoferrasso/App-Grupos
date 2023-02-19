import { TouchableOpacityProps } from 'react-native'
import { Container, IconUsersThree, Title } from './styles'

type GroupCardProps = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <IconUsersThree />
      <Title>{title}</Title>
    </Container>
  )
}
