import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { IUser } from '@/types/user.inteerface'

import {
	IContext,
	TypeUserState
} from '@/providers/auth/authProvider.interface'
import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)

	useEffect(() => {
		let isMounted = true

		const getUser = async () => {
			try {
				const accessToken = await getAccessToken()

				if (accessToken) {
					const user = await getUserFromStorage()

					if (isMounted) setUser(user)
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}
		getUser()
		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
