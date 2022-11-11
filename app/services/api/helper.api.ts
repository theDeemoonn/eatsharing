import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { EnumSecureStoreKeys, IAuthResponse } from '@/types/auth.interface'

import { API_URL, getAuthUrl } from '@/config/api.config'
import { saveToStorage } from '@/services/auth/auth.helper'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStoreKeys.REFRESH_TOKEN)
		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthUrl('login/access-token'), //TODO: add refresh token url
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		if (response.data.accessToken) await saveToStorage(response.data)

		return response
	} catch (e) {}
}
