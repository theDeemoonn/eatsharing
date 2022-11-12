import { IAuthFormData } from '@/types/auth.interface'
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
			url: getUserUrl('profile'),
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
			url: getUserUrl('profile'),
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
	async deleteUser(_id: string) {
		return request<string>({
			url: getUserUrl(`${_id}`),
			method: 'DELETE'
		})
	}
	// async getFavorites() {
	// 	return request<IUser>({
	// 		url: getUserUrl('profile/favorites'),
	// 		method: 'GET'
	// 	})
	// },
}