import { FC } from 'react'
import { View } from 'react-native'

import { Heading, Layout } from '@/components/ui'

const AddOrder: FC = () => {
	return (
		<Layout isHasPadding>
			<View className='flex-row justify-between'>
				<Heading title={'Добавить заказ'} />
			</View>
		</Layout>
	)
}

export default AddOrder
