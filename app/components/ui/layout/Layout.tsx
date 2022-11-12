import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Platform, SafeAreaView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ILayout } from '@/components/ui/layout/layout.interface'

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	isHasPadding,
	style,
	className
}) => {
	const { top } = useSafeAreaInsets()
	return (
		<SafeAreaView className='flex-1'>
			<View
				className={cn('flex-1', className, {
					'px-6': isHasPadding
				})}
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 6 : top * 1.7,
					...style
				}}
			>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
