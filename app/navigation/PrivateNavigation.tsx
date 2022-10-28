import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import Auth from '@/components/screens/auth/Auth'
import { useAuth } from '@/hooks/useAuth'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { routes } from '@/navigation/routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation: FC = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator screenOptions={{}}>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
