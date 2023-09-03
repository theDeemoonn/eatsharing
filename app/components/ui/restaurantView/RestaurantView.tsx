import { Skeleton } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native'

import { IUser } from '@/types/user.inteerface'

import FavoriteButton from '../favoriteButton/FavoriteButton'

import basturma from './basturma.jpg'
import { useProfile } from '@/components/screens/profile/useProfile'
import { IRestaurant } from '@/components/ui/restaurantView/restaurantView.interface'

const RestaurantView: FC<IRestaurant> = ({ loading, children, onPress }) => {
	//TODO: добавить логику для загрузки с сервера
	const images = { uri: require('./basturma.jpg') }
	const { setValue } = useForm<IUser>({})
	const { user } = useProfile(setValue)
	const image = {
		uri: 'https://htmlcolorcodes.com/assets/images/colors/white-color-solid-background-1920x1080.png'
	}

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
				user?.product?.map((order, index) => (
					<View key={order.id} style={styles.container}>
						<ImageBackground source={basturma} style={styles.image}>
							<Pressable
								className='justify-start items-end px-2 py-2'
								onPress={onPress}
							>
								<FavoriteButton movieId={'1'} isSmall />
							</Pressable>
							<LinearGradient
								className={' h-full '}
								colors={['#00000000', '#000000']}
							>
								{/*//TODO: добавить название ресторана из бэка*/}
								<View className='items-start py-1 px-3'>
									<Text className='text-white text-2xl'>{order.title}</Text>
									<Text className='text-white text-xs'>
										{order.description}
									</Text>
								</View>
							</LinearGradient>
						</ImageBackground>
					</View>
				))
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		// width: 200,
		height: 120,
		borderRadius: 12,
		marginTop: 10,
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
