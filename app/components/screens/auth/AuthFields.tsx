import { FC } from 'react'
import { Control } from 'react-hook-form'

import { IAuthFormData } from '@/types/auth.interface'

import Field from '@/components/ui/formElements/field/Field'
import { validEmail } from '@/shared/regex'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='Введите email'
				control={control}
				name='email'
				rules={{
					required: 'Поле обязательно для заполнения',
					pattern: {
						value: validEmail,
						message: 'Некорректный email'
					}
				}}
				keyboardType='email-address'
			/>
			<Field<IAuthFormData>
				control={control}
				placeholder='Введите пароль'
				name='password'
				secureTextEntry
				rules={
					isPassRequired
						? {
								required: 'Поле обязательно для заполнения',
								minLength: {
									value: 6,
									message: 'Пароль должен быть более 6 символов'
								}
						  }
						: {}
				}
				keyboardType='email-address'
			/>
		</>
	)
}

export default AuthFields
