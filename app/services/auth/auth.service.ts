import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { getAuthUrl } from '@/config/api.config'
import { request } from '@/services/api/request.api'
import { deleteTokenStorage, saveToStorage } from '@/services/auth/auth.helper'

export const AuthService = {
	async main(variant: 'reg' | 'login', email: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`${variant === 'reg' ? 'registration' : 'login'}`),
			method: 'POST',
			data: { email, password }
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},

	async logout() {
		await deleteTokenStorage()
		await AsyncStorage.removeItem(EnumAsyncStorage.USER)
	}
}
