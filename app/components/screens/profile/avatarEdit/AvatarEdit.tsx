import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BottomSheet } from '@rneui/themed'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import GestureRecognizer from 'react-native-swipe-gestures'

import { IUser } from '@/types/user.inteerface'

import { IAvatarEdit } from '@/components/screens/profile/avatarEdit/avatarEdit.interface'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Button, Heading, Layout } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'

const AvatarEdit: FC<IAvatarEdit> = ({ onClose, isVisible, ...props }) => {
	const { handleSubmit, setValue, control } = useForm<IUser>({
		mode: 'onChange'
	})
	const { setUser } = useAuth()

	const { isLoading, onSubmit } = useProfile(setValue)
	return (
		<SafeAreaProvider>
			<GestureRecognizer className='flex-1' onSwipeDown={onClose}>
				<BottomSheet
					onBackdropPress={onClose}
					backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
					modalProps={{
						animationType: 'slide',
						transparent: true,
						onRequestClose: onClose
					}}
					isVisible={isVisible}
				>
					<View className='justify-end flex-row'>
						<Pressable
							className='flex-row justify-center mx-4 my-2 border border-gray-200 rounded-full max-w-[40px] max-h-[40px]'
							onPress={onClose}
						>
							<MaterialCommunityIcons
								backgroundColor='transparent'
								name='close'
								size={24}
								color='white'
							/>
						</Pressable>
					</View>

					<Layout
						isHasPadding
						className=' flex-1 bg-white min-h-[500] rounded-lg shadow-lg mx-1'
					>
						<Heading className='mt-6' title={'Редактирование аватара'} />

						<View className='mt-6'>
							<Button onPress={handleSubmit(onSubmit)}>Обновить аватар</Button>
						</View>
					</Layout>
				</BottomSheet>
			</GestureRecognizer>
		</SafeAreaProvider>
	)
}

export default AvatarEdit
