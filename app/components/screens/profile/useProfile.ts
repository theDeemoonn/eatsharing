import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { IAuthFormData } from '@/types/auth.interface'

import { UserService } from '@/services/user/user.service'

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess: ({ email }) => {
			setValue('email', email)
		}
	})

	const { mutateAsync } = useMutation(
		['update profile'],
		(data: IAuthFormData) => UserService.updateProfile(data),
		{
			onSuccess: ({ email }) => {
				Toast.show({
					type: 'success',
					text1: 'Обновление профиля',
					text2: 'Профиль успешно обновлен'
				})
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFormData> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
