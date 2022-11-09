import { MaterialCommunityIcons as IconName } from '@expo/vector-icons'
import { PressableProps } from 'react-native'

export interface IButton extends PressableProps {
	className?: string
	icon?: keyof typeof IconName.glyphMap
}
