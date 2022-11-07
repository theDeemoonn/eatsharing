import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='bg-red-500 mt-16 justify-center items-center'>
			<Text>Home</Text>
		</View>
	)
}

export default Home
