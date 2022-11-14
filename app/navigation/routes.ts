import AddOrder from '@/components/screens/addOrder/AddOrder'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import { IRoute } from '@/navigation/navigation.types'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},

	// {
	// 	name: 'Auth',
	// 	component: Auth
	// },
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'AddOrder',
		component: AddOrder
	}

	// {
	// 	name: 'Settings',
	// 	component: Settings
	// }
]
