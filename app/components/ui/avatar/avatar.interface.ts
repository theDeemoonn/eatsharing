import { ImageSourcePropType, ImageStyle } from 'react-native'

export interface IAvatar {
	size?: number
	openEdit?: () => void
	rounded?: boolean
	source?: ImageSourcePropType
	isShowEdit?: boolean
	avatarStyle?: ImageStyle
	onPress?: () => void
}
