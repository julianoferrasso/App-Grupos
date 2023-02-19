import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AdminScreen } from '@screens/AdminScreen'
import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

const { Navigator, Screen } = createNativeStackNavigator()

export function AdminRoutes() {
  return (
    <Navigator initialRouteName="admin" screenOptions={{ headerShown: false }}>
      <Screen name="admin" component={AdminScreen} />
      <Screen name="groups" component={Groups} />
      <Screen name="newGroup" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  )
}
