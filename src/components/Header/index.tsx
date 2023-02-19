import { useNavigation } from '@react-navigation/native'

import { Container, Logo, BackButton, BackIcon } from './styles'

import logo from '@assets/logo.png'
import logo_teams from '@assets/logo-teams.png'

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logo_teams} />
    </Container>
  )
}
