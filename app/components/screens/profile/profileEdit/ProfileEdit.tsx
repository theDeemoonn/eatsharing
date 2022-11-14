import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from '@/components/screens/auth/AuthFields'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Button, Heading, Layout } from '@/components/ui'

const ProfileEdit: FC = () => {
	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useProfile(setValue)
	return (
		<Layout isHasPadding>
			<Heading title={'Редактирование профиля'} />
			<View className='mb-10'>
				<AuthFields control={control} />
				<Button onPress={handleSubmit(onSubmit)}>Обновить профиль</Button>
			</View>
		</Layout>
	)
}

export default ProfileEdit
