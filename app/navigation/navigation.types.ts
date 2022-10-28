import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Profile: undefined
	Settings: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
