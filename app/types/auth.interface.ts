import { IUser } from '@/types/user.inteerface'

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}

export enum EnumSecureStoreKeys {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
	USER = 'user'
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
