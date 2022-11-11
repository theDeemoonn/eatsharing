import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from '@/components/ui/layout/bottomMenu/MenuItem'
import { menuData } from '@/components/ui/layout/bottomMenu/menu.data'
import { TypeNavigation } from '@/components/ui/layout/bottomMenu/menu.interface'

interface IBottomTabNavigatorProps {
	nav: TypeNavigation
	currentRoute?: string
}

const BottomTabNavigator: FC<IBottomTabNavigatorProps> = props => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-5 px-5 mb-2 flex-row justify-between items-center justify-center mx-10 w-full border-t border-t-solid border-gray-200 bg-white'
			style={{
				paddingBottom: bottom + 5
			}}
		>
			{menuData.map(item => (
				<MenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomTabNavigator
