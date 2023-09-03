export enum UserRole {
	USER = 'user',
	ADMIN = 'admin',
	EXECUTOR = 'executor'
}

export interface IUser {
	id: number
	email: string
	password: string
	surname: string
	name: string
	age: number
	phone: number
	description: string
	avatar: string
	banned: boolean
	banReason: string
	createdAt: string
	updatedAt: string
	roles: Role[]
	interests: Interest[]
	product: Product[]
}

export interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	date: string
}

export interface Role {
	id: number
	value: string
	description: string
	createdAt: string
	updatedAt: string
	UserRoles: UserRoles
}

export interface UserRoles {
	id: number
	roleID: number
	userID: number
}

export interface Interest {
	id: number
	value: string
}
