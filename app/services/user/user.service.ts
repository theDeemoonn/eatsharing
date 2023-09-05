import { IAuthFormData } from '@/types/auth.interface'
import { IRestaurants } from '@/types/restaurant.interface'
import { IUser } from '@/types/user.inteerface'

import { getUserUrl } from '@/config/api.config'
import { request } from '@/services/api/request.api'

export const UserService = {
	async getAll(searchTerm?: string) {
		return request<IUser[]>({
			url: getUserUrl(''),
			method: 'GET',
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async getProfile() {
		return request<IUser>({
			url: getUserUrl('me'),
			method: 'GET'
		})
	},
	async getById(_id: string) {
		return request<IUser>({
			url: getUserUrl(`${_id}`),
			method: 'GET'
		})
	},
	async updateProfile(data: IAuthFormData) {
		return request<IUser>({
			url: getUserUrl('update'),
			method: 'PUT',
			data
		})
	},
	async updateUser(data: IAuthFormData, _id: string) {
		return request<string>({
			url: getUserUrl('profile'),
			method: 'PUT',
			data
		})
	},
	async updateAvatar(data: IUser) {
		return request<string>({
			url: getUserUrl('profile'),
			method: 'PUT',
			data
		})
	},
	async deleteUser(_id: string) {
		return request<string>({
			url: getUserUrl(`${_id}`),
			method: 'DELETE'
		})
	},

	async toggleFavorite(restaurantId: string) {
		return request<string>({
			url: getUserUrl('favorite'),
			method: 'PUT',
			data: { restaurantId }
		})
	},
	async getFavorites() {
		return request<IRestaurants[]>({
			url: getUserUrl('profile/favorites'),
			method: 'GET'
		})
	}
}
