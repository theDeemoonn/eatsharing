import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Profile: undefined
	AddOrder: undefined
	Settings: undefined
	ProfileEdit: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
