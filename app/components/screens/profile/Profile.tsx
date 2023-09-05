import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, ScrollView, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { IAuthFormData } from '@/types/auth.interface'

import AvatarEdit from '@/components/screens/profile/avatarEdit/AvatarEdit'
import ProfileEdit from '@/components/screens/profile/profileEdit/ProfileEdit'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Avatars, Heading, Layout, Loader, ProfileCard } from '@/components/ui'
import { TextInfo } from '@/components/ui/textInfo/TextInfo'
import { useScaleOnMount } from '@/hooks/styleHooks/useScaleOnMount'
import { useAuth } from '@/hooks/useAuth'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { AuthService } from '@/services/auth/auth.service'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { setValue } = useForm<IAuthFormData>({})

	// @ts-ignore
	const { isLoading, user } = useProfile(setValue)

	const { styleAnimation } = useScaleOnMount()

	const { navigate } = useTypedNavigation()

	const [isModalVisible, setModalVisible] = useState(false)

	const [isModalVisibleAvatar, setModalVisibleAvatar] = useState(false)

	return (
		<Layout isHasPadding>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
			>
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
					className='my-6 items-center justify-center mt-12 ml-5'
				>
					<Avatars
						isShowEdit={true}
						rounded={true}
						openEdit={() => setModalVisibleAvatar(true)}
						size={130}
						source={{ uri: user?.avatar }}
					/>
				</Animated.View>

				{isLoading ? (
					<Loader />
				) : (
					<View className='mb-10'>
						<ProfileCard className='mt-6' />
						<View className='border-t border-gray-200 bg-white rounded-xl mt-6 mb-10'>
							<Text className='text-black text-center text-lg py-2 font-medium mr-2'>
								Описание
							</Text>
							<TextInfo className={'px-4 py-4'} text={user?.description} />
						</View>

						<Pressable
							className='opacity-40 items-center flex-row justify-center mt-14'
							onPress={() => setModalVisible(true)}
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
				{isModalVisible && (
					<ProfileEdit
						onClose={() => setModalVisible(false)}
						isVisible={isModalVisible}
					/>
				)}

				{isModalVisibleAvatar && (
					<AvatarEdit
						isVisible={isModalVisibleAvatar}
						onClose={() => setModalVisibleAvatar(false)}
					/>
				)}
			</ScrollView>
		</Layout>
	)
}

export default Profile
