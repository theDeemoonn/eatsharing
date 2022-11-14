import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { IAuthFormData } from '@/types/auth.interface'

import ProfileEdit from '@/components/screens/profile/profileEdit/ProfileEdit'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Heading, Layout, Loader, ProfileCard } from '@/components/ui'
import Avatars from '@/components/ui/avatar/Avatar'
import { useScaleOnMount } from '@/hooks/styleHooks/useScaleOnMount'
import { useAuth } from '@/hooks/useAuth'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { AuthService } from '@/services/auth/auth.service'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { setValue } = useForm<IAuthFormData>({})

	const { isLoading } = useProfile(setValue)

	const { styleAnimation } = useScaleOnMount()

	const { navigate } = useTypedNavigation()

	return (
		<Layout isHasPadding>
			<View className='flex-row justify-between'>
				<Heading title={'Профиль'} />
				<Pressable
					className='opacity-40 items-center flex-row justify-end'
					onPress={() => AuthService.logout().then(() => setUser(null))}
				>
					<MaterialCommunityIcons name='logout' size={24} color='black' />
					<Text className='text-black text-center text-lg font-medium mr-2'>
						Выйти
					</Text>
				</Pressable>
			</View>
			<Animated.View
				style={styleAnimation}
				className='my-6 items-center justify-center mt-12'
			>
				<Avatars />
			</Animated.View>
			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<ProfileCard className='mt-6' />

					<Pressable
						className='opacity-40 items-center flex-row justify-center mt-16'
						onPress={() => navigate('ProfileEdit')}
					>
						<MaterialCommunityIcons
							name='account-edit-outline'
							size={24}
							color='black'
						/>
						<Text className='text-black text-center text-lg font-medium mr-2 pl-2'>
							Редактировать профиль
						</Text>
					</Pressable>
				</View>
			)}
		</Layout>
	)
}

export default Profile
