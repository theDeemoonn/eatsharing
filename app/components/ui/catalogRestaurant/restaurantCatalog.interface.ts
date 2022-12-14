import { IRestaurants } from '@/types/restaurant.interface'

export interface IRestaurantCatalog {
	title: string
	description?: string
	restaurants?: IRestaurants[]
	isBackButton?: boolean
}
