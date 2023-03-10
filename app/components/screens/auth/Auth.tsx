import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from '@/components/screens/auth/AuthFields'
import { Button, DismissKeyboard, Loader } from '@/components/ui'
import { useAuthMutations } from '@/hooks/useAuthMutations'

const Auth: FC = () => {
	const [isAuth, setIsAuth] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, loginSync, registerSync } = useAuthMutations(reset)

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		if (isAuth) registerSync(data)
		else loginSync(data)
	}

	return (
		<DismissKeyboard>
			<View className='mx-2 items-center justify-center h-full'>
				<View className='w-9/12'>
					<Text className='text-center text-blue-400 text-4xl font-bold mb-10'>
						{isAuth ? 'Регистрация' : 'Вход'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isPassRequired />
							<Button className='mt-6' onPress={handleSubmit(onSubmit)}>
								{isAuth ? 'Зарегистрироваться' : 'Войти'}
							</Button>
							<Pressable onPress={() => setIsAuth(prev => !prev)}>
								<Text className='text-blue-400 opacity-30 text-right text-base mt-5'>
									{isAuth ? 'Войти' : 'Зарегистрироваться'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	)
}

export default Auth
