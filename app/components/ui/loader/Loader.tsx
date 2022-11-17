import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

import { style } from '@/components/ui/style'

const Loader: FC = () => {
	return <ActivityIndicator size='large' color={style.primary} />
}

export default Loader
