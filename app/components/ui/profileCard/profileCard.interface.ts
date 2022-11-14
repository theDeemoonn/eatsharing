import { MaterialCommunityIcons as IconName } from '@expo/vector-icons'
import { ImageSourcePropType } from 'react-native'

export interface IProfileCard {
	className?: string
	image?: ImageSourcePropType
	icon?: keyof typeof IconName.glyphMap
	iconColor?: string
}
