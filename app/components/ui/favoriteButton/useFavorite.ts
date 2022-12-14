import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { UserService } from '@/services/user/user.service'

export const useFavorite = (restaurantId: string) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoriteRestaurant } = useFavorites()

	useEffect(() => {
		if (!favoriteRestaurant) return

		const isHasMovie = favoriteRestaurant.some(f => f._id === restaurantId)

		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoriteRestaurant, isSmashed, restaurantId])

	const queryClient = useQueryClient()

	const { mutate: toggleFavorite } = useMutation(
		['update favorites'],
		() => UserService.toggleFavorite(restaurantId),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['favorite movies'])
			}
		}
	)

	return {
		toggleFavorite,
		isSmashed
	}
}
