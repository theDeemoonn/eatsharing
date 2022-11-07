import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='bg-red-500 mt-16 justify-center items-center'>
			<Pressable onPress={() => navigate('Settings')}>
				<Text>Home</Text>
			</Pressable>
		</View>
	)
}

export default Home
