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
			className='pt-5 px-3 flex-row justify-between items-center w-full '
			style={{
				paddingBottom: bottom
			}}
		>
			{menuData.map(item => (
				<MenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomTabNavigator
