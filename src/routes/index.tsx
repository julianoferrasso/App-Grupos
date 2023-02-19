import { View } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { AdminRoutes } from './admin.routes'
import { useTheme } from 'styled-components'

export function Routes() {
  const [user, setUser] = useState('usuario')
  const { COLORS } = useTheme()

  return (
    // View para evitar o glitch (fundo branco na transição de telas)
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        {user === 'admin' ? <AdminRoutes /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  )
}
