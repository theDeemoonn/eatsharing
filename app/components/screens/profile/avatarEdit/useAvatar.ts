import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { IUser } from '@/types/user.inteerface'

import { UserService } from '@/services/user/user.service'

export const useAvatar = (setValue: UseFormSetValue<IUser>) => {
	const { isLoading, data: user } = useQuery(
		['avatar'],
		() => UserService.getProfile(),
		{
			onSuccess: ({ avatar }) => {
				setValue('avatar', avatar)
			}
		}
	)

	const { mutateAsync } = useMutation(
		['update avatar'],
		(data: IUser) => UserService.updateAvatar(data),
		{
			onSuccess: ({}) => {
				Toast.show({
					type: 'success',
					text1: 'Обновление аватара',
					text2: 'Аватар успешно обновлен'
				})
			}
		}
	)

	const onSubmit: SubmitHandler<IUser> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading, user }
}
