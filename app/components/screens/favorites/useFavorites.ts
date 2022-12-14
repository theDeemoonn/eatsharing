import { useQuery } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user/user.service'

export const useFavorites = () => {
	const { user } = useAuth()

	const { isLoading, data: favoriteRestaurant } = useQuery(
		['favorite restaurants'],
		() => UserService.getFavorites(),
		{
			enabled: !!user
		}
	)

	return {
		isLoading,
		favoriteRestaurant
	}
}
