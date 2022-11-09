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

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)

	useEffect(() => {
		let isMounted = true

		const getUser = async () => {
			if (isMounted) {
				//get user from async storage and write to store
			}

			await SplashScreen.hideAsync()
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
