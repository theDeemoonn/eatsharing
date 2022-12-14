import { BlurView } from 'expo-blur'
import { FC } from 'react'
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	ViewStyle
} from 'react-native'
import Animated from 'react-native-reanimated'

import { IRestaurants } from '@/types/restaurant.interface'

import Rating from './Rating'
import { useRestaurantItemAnimation } from './useRestaurantItemAnimation'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { getSource } from '@/utils/getSource'

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

interface IRestaurantItem {
	index: number
	className?: string
	style?: ViewStyle
	restaurant: IRestaurants
}

const RestaurantItem: FC<IRestaurantItem> = ({ index, restaurant, style }) => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	// const isFavoritePage = name === 'Favorites'

	const { styleAnimation } = useRestaurantItemAnimation(index, style)

	return (
		<ReanimatedPressable
			style={styleAnimation}
			// onPress={() =>
			// 	navigate('Movie', {
			// 		slug: restaurant.slug
			// 	})
			// }
			className={'rounded-xl overflow-hidden h-56'}
		>
			{/*{isFavoritePage && (*/}
			{/*	<View className='absolute z-1 right-1.5 top-1.5'>*/}
			{/*		<FavoriteButton movieId={restaurant._id} isSmall />*/}
			{/*	</View>*/}
			{/*)}*/}

			<Image
				style={{
					resizeMode: 'cover',
					...StyleSheet.absoluteFillObject
				}}
				source={getSource(restaurant.poster)}
			/>

			<BlurView
				intensity={25}
				className={
					'absolute w-full bottom-0 left-0 right-0 items-center pt-0.5 px-2'
				}
			>
				<View className='-ml-2 -mb-0.5'>
					<Rating rating={restaurant.rating} size={16} />
				</View>

				<Text
					className='text-white text-lg font-semibold mb-1'
					numberOfLines={1}
				>
					{restaurant.title}
				</Text>
			</BlurView>
		</ReanimatedPressable>
	)
}

export default RestaurantItem
