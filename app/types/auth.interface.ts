import { IUser } from '@/types/user.inteerface'

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}
