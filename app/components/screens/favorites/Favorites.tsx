import { FC } from 'react'

import { useFavorites } from './useFavorites'
import { Layout, Loader, RestaurantCatalog } from '@/components/ui'

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
