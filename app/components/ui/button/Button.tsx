import { MaterialCommunityIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { IButton } from '@/components/ui/button/button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,

	...rest
}) => {
	return (
		<Pressable className={cn('self-center mt-3.5', className)} {...rest}>
			<LinearGradient
				className={cn('w-full py-3 px-8 rounded-2xl items-center', {
					'flex-row': !!icon
				})}
				colors={['#5f80c5', '#60a5fa']}
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
			>
				{icon && <MaterialCommunityIcons name={icon} size={24} color='white' />}
				<Text
					className={cn('text-white text-center text-lg font-medium', {
						'mr-2': !!icon
					})}
				>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default Button
