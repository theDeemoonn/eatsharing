import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

import { color } from '@/components/ui/color'

const Loader: FC = () => {
	return <ActivityIndicator size='large' color={color.primary} />
}

export default Loader
