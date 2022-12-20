import { FC } from 'react'
import { View } from 'react-native'

import { Heading, Layout } from '@/components/ui'
import Search from '@/components/ui/search/Search'

/*
0. Поиск по ресторанам с анимацией (поиск по названию) иконка (лупа) разворачивается в поле ввода
1. Карусель с карточкой ресторана
2. Карусель список ресторанов с пагинацией
*/

const onSubmit = (data: any) => {
	console.log(data)
}

const AddOrder: FC = () => {
	return (
		<Layout isHasPadding>
			<View className='flex-row justify-between'>
				<Heading
					className='flex-auto transform translate-x-1 transform -translate-y-1'
					title={'Добавить заказ'}
				/>
				<Search placeholder='Поиск' onSearch={onSubmit} />
			</View>
		</Layout>
	)
}

export default AddOrder
