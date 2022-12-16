import { FC } from 'react'

import { useFavorites } from './useFavorites'
import { Layout, Loader } from '@/components/ui'
import RestaurantCatalog from '@/components/ui/catalogRestaurant/RestaurantCatalog'

const Favorites: FC = () => {
	const { favoriteRestaurant, isLoading } = useFavorites()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<RestaurantCatalog title='Favorites' restaurants={favoriteRestaurant} />
		</Layout>
	)
}

export default Favorites
