import { FC, PropsWithChildren } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'

const ScrollViewCustom: FC<PropsWithChildren> = ({ children }) => {
	const windowWidth = Dimensions.get('window').width
	const windowHeight = Dimensions.get('window').height

	console.log('windowWidth', windowWidth)
	console.log('windowHeight', windowHeight)

	if (windowWidth > 500) {
		return (
			<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
				{children}
			</ScrollView>
		)
	}

	return <View>{children}</View>
}

export default ScrollViewCustom
