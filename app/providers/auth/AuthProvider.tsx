import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import {
	IContext,
	TypeUserState
} from '@/providers/auth/authProvider.interface'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	// const [user, setUser] = useState<TypeUserState>({} as IUser) // This is the original code
	const [user, setUser] = useState<TypeUserState>(null) // This is the code I tested

	useEffect(() => {
		let isMounted = true

		const getUser = async () => {
			try {
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
