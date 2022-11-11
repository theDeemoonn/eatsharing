import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'

const Profile: FC = () => {
	const { setUser } = useAuth()
	return (
		<View>
			<Text className='bg-red-500 mt-16 justify-center items-center'>
				Profile
			</Text>

			<Pressable
				className='opacity-40 items-center flex-row justify-end mt-16'
				onPress={() => AuthService.logout().then(() => setUser(null))}
			>
				<MaterialCommunityIcons name='logout' size={24} color='black' />
				<Text className='text-black text-center text-lg font-medium mr-2'>
					Выйти
				</Text>
			</Pressable>
		</View>
	)
}

export default Profile
