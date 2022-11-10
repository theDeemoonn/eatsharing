import AsyncStorage from '@react-native-async-storage/async-storage'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

import {
	EnumAsyncStorage,
	EnumSecureStoreKeys,
	IAuthResponse,
	ITokens
} from '@/types/auth.interface'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStoreKeys.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = async (data: ITokens) => {
	await setItemAsync(EnumSecureStoreKeys.ACCESS_TOKEN, data.accessToken)
	await setItemAsync(EnumSecureStoreKeys.REFRESH_TOKEN, data.refreshToken)
}

export const deleteTokenStorage = async () => {
	await deleteItemAsync(EnumSecureStoreKeys.ACCESS_TOKEN)
	await deleteItemAsync(EnumSecureStoreKeys.REFRESH_TOKEN)
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
		)
	} catch (e) {
		return null
	}
}

export const saveToStorage = async (data: IAuthResponse) => {
	await saveTokenStorage(data)
	try {
		await AsyncStorage.setItem(EnumAsyncStorage.USER, JSON.stringify(data.user))
	} catch (e) {}
}
