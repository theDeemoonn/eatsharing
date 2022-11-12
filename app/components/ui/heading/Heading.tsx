import cn from 'clsx'
import { FC } from 'react'
import { Text } from 'react-native'

import { IHeading } from '@/components/ui/heading/heading.interface'

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<Text
			className={cn(
				'text-gray-500 text-opacity-80 font-semibold text-3xl',
				className
			)}
			numberOfLines={1}
		>
			{title}
		</Text>
	)
}

export default Heading
