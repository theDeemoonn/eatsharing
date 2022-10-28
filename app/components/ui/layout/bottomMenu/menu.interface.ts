import { MaterialCommunityIcons as IconName } from '@expo/vector-icons'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface IMenuItem {
	iconName: keyof typeof IconName.glyphMap
	path: keyof TypeRootStackParamList
}

export type TypeNavigation = (name: keyof TypeRootStackParamList) => void
