import { Skeleton } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'
import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native'

import FavoriteButton from '../favoriteButton/FavoriteButton'

import basturma from './basturma.jpg'
import { IRestaurant } from '@/components/ui/restaurantView/restaurantView.interface'

const RestaurantView: FC<IRestaurant> = ({ loading, children, onPress }) => {
	//TODO: добавить логику для загрузки с сервера
	const images = { uri: require('./basturma.jpg') }

	return (
		<Pressable>
			{loading ? (
				<Skeleton
					LinearGradientComponent={LinearGradient}
					animation='wave'
					width={200}
					height={120}
					style={{ borderRadius: 12 }}
				/>
			) : (
				<View style={styles.container}>
					<ImageBackground source={basturma} style={styles.image}>
						<Pressable
							className='justify-start items-end px-2 py-2'
							onPress={onPress}
						>
							<FavoriteButton movieId={'1'} isSmall />
						</Pressable>
						<LinearGradient colors={['#00000000', '#000000']}>
							{/*//TODO: добавить название ресторана из бэка*/}
							<View className='items-start py-1 px-3'>
								<Text className='text-white text-2xl'>Бастурма</Text>
								<Text className='text-white text-xs'>Кавказская кухня</Text>
							</View>
						</LinearGradient>
					</ImageBackground>
				</View>
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 200,
		height: 120,
		borderRadius: 12,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		border: 'none',
		overflow: 'hidden'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'space-between'
	}
})

export default RestaurantView
