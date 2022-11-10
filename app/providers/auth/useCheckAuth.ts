import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'

import { EnumSecureStoreKeys } from '@/types/auth.interface'

import { useAuth } from '@/hooks/useAuth'
import { errorCatch } from '@/services/api/error.api'
import { getNewTokens } from '@/services/api/helper.api'
import { getAccessToken } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken()
			if (accessToken) {
				try {
					await getNewTokens()
				} catch (e) {
					if (errorCatch(e) === 'jwt expired') {
						await AuthService.logout()
						setUser(null)
					}
				}
			}
		}
		checkAccessToken()
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(EnumSecureStoreKeys.REFRESH_TOKEN)
			if (!refreshToken && user) {
				await AuthService.logout()
				setUser(null)
			}
		}
		checkRefreshToken()
	}, [routeName])
}
