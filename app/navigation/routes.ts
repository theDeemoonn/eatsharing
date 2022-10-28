import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import Settings from '@/components/screens/settings/Settings'
import { IRoute } from '@/navigation/navigation.types'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Settings',
		component: Settings
	}
]
