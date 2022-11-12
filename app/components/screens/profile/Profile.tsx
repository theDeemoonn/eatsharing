import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from '@/components/screens/auth/AuthFields'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Button, Heading, Layout, Loader } from '@/components/ui'
import Avatar from '@/components/ui/icon/avatar.jpg'
import { useScaleOnMount } from '@/hooks/styleHooks/useScaleOnMount'
import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useProfile(setValue)

	const { styleAnimation } = useScaleOnMount()

	return (
		<Layout isHasPadding>
			<Heading title={'Профиль'} />
			<Animated.View
				style={styleAnimation}
				className='my-6 items-center justify-center'
			>
				<Image source={Avatar} className='w-40 h-40 rounded-2xl' />
			</Animated.View>
			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)}>Обновить профиль</Button>
				</View>
			)}
			<Pressable
				className='opacity-40 items-center flex-row justify-end mt-16'
				onPress={() => AuthService.logout().then(() => setUser(null))}
			>
				<MaterialCommunityIcons name='logout' size={24} color='black' />
				<Text className='text-black text-center text-lg font-medium mr-2'>
					Выйти
				</Text>
			</Pressable>
		</Layout>
	)
}

export default Profile
