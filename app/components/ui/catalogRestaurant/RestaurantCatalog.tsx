import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { Description, RestaurantItem } from '@/components/ui'
import { IRestaurantCatalog } from '@/components/ui/catalogRestaurant/restaurantCatalog.interface'
import Heading from '@/components/ui/heading/Heading'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const RestaurantCatalog: FC<IRestaurantCatalog> = ({
	description,
	isBackButton,
	restaurants = [],
	title
}) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
			</View>

			{description && <Description text={description} />}

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
					{restaurants?.length ? (
						restaurants.map((restaurant, index) => (
							<View className='mb-6' key={restaurant._id}>
								<RestaurantItem
									index={index}
									restaurant={restaurant}
									style={{ width: 160 }}
								/>
							</View>
						))
					) : (
						<Text className='text-white text-lg'>Elements not found</Text>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

export default RestaurantCatalog
