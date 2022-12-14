import * as React from 'react'
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import RestaurantView from '../restaurantView/RestaurantView'

import { Loader } from '@/components/ui'
import Card from '@/components/ui/card/Card'
import { style } from '@/components/ui/style'

const FirstRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const SecondRoute = () => (
	<>
		<Card title={'Ресторан'} description={'Цена'} />
		<RestaurantView />
	</>
)

const LazyPlaceholder = () => (
	<View style={styles.scene}>
		<Loader />
	</View>
)

export const TabViewExample = () => {
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{ key: 'first', title: 'First', name: 'Открытые' },
		{ key: 'second', title: 'Second', name: 'Мои заказы' }
	])

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
