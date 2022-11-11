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
			className='flex-row py-5 mb-2 items-center justify-between w-full border-t border-gray-200 bg-white'
			style={{
				paddingBottom: bottom + 5,
				paddingLeft: 40
			}}
		>
			{menuData.map(item => (
				<MenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomTabNavigator
