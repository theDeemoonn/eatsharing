import { Badge } from '@rneui/themed'
import * as React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	Dimensions,
	Platform,
	RefreshControl,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import { IUser } from '@/types/user.inteerface'

import RestaurantView from '../restaurantView/RestaurantView'

import { useProfile } from '@/components/screens/profile/useProfile'
import { Loader } from '@/components/ui'
import Card from '@/components/ui/card/Card'
import { style } from '@/components/ui/style'

const LazyPlaceholder = () => (
	<View style={styles.scene}>
		<Loader />
	</View>
)

export const TabViewExample = () => {
	const wait = (timeout: number | undefined) => {
		return new Promise(resolve => setTimeout(resolve, timeout))
	}
	const { setValue } = useForm<IUser>({})
	const { user } = useProfile(setValue)

	const [index, setIndex] = useState(0)
	const [routes] = useState([
		{ key: 'first', title: 'First', name: 'Открытые' },
		{ key: 'second', title: 'Second', name: 'Мои заказы' }
	])
	const [refreshing, setRefreshing] = useState(false)
	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		wait(2000).then(() => setRefreshing(false))
	}, [])
	const FirstRoute = () => (
		// <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
		<>
			<ScrollView
				alwaysBounceVertical
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			></ScrollView>
		</>
	)

	const SecondRoute = () => (
		<>
			<ScrollView
				alwaysBounceVertical
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{user?.product?.map((order, index) => (
					<Card
						key={String(index)}
						title={order.title}
						description={order.description}
					/>
				))}

				<RestaurantView />
			</ScrollView>
		</>
	)

	const renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute
	})

	return (
		<TabView
			renderTabBar={props => (
				<TabBar
					indicatorStyle={{ backgroundColor: `${style.primary}` }}
					style={{ backgroundColor: 'transparent' }}
					labelStyle={{ color: `${style.gray_500}`, fontWeight: '600' }}
					renderLabel={({ route, focused }) => (
						<View className='min-w-full min-h-full items-center'>
							<Text style={focused ? styles.focused : styles.unfocused}>
								{route.name}
							</Text>
							{route.key === 'second' && Platform.OS === 'ios' && (
								<Badge
									value={focused ? user?.product.length : null}
									status='primary'
									containerStyle={
										focused
											? { position: 'absolute', top: 1, right: 9 }
											: { position: 'absolute', top: 1, right: 30 }
									}
								/>
							)}
							{route.key === 'second' && Platform.OS === 'android' && (
								<Badge
									value={focused ? 3 : null}
									status='primary'
									containerStyle={
										focused
											? { position: 'absolute', top: 1, right: -10 }
											: { position: 'absolute', top: 1, right: 13 }
									}
								/>
							)}
						</View>
					)}
					bounces={true}
					{...props}
				/>
			)}
			style={styles.container}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: Dimensions.get('window').width }}
			lazy
			renderLazyPlaceholder={LazyPlaceholder}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight
	},
	scene: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	focused: {
		color: `${style.primary}`,
		fontSize: 22
	},
	unfocused: {
		color: `${style.gray_500}`,
		fontSize: 16
	}
})
