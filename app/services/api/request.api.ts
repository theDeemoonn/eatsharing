import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Toast from 'react-native-toast-message'

import { errorCatch } from '@/services/api/error.api'
import instance from '@/services/api/interceptors.api'

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data
	const onError = (error: AxiosError<T>) => {
		Toast.show({
			type: 'error',
			text1: 'Ошибка',
			text2: errorCatch(error) || 'Что-то пошло не так. Попробуйте еще раз' //TODO: add error message
		})

		return Promise.reject(error)
	}

	return instance(config).then(onSuccess).catch(onError)
}
