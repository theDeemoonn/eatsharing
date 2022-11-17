import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'

import {
	IMenuItem,
	TypeNavigation
} from '@/components/ui/layout/bottomMenu/menu.interface'
import { style } from '@/components/ui/style'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigation
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='w-[40%]' onPress={() => nav(item.path)}>
			<MaterialCommunityIcons
				name={item.iconName}
				size={30}
				color={isActive ? style.primary : style.gray}
			/>
		</Pressable>
	)
}

export default MenuItem
