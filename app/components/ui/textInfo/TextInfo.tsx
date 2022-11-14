import cn from 'clsx'
import React from 'react'
import { Text, View } from 'react-native'

export interface TextInfoProps {
	text: string | React.ReactNode
	label?: string
	marginBottom?: string
	className?: string
}

export const TextInfo: React.FC<TextInfoProps> = ({
	label,
	text,
	marginBottom,
	...props
}) => (
	<View {...props}>
		{label && <Text className={cn('font-medium', marginBottom)}>{label}</Text>}
		<Text className='text-gray-500 font-bold'>{text}</Text>
	</View>
)
