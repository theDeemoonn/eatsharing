import { BottomSheet } from '@rneui/themed'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import GestureRecognizer from 'react-native-swipe-gestures'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from '@/components/screens/auth/AuthFields'
import { IProfileEdit } from '@/components/screens/profile/profileEdit/profileEdit.interface'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Button, Heading, Layout } from '@/components/ui'
import { style } from '@/components/ui/style'

const ProfileEdit: FC<IProfileEdit> = ({ isVisible, onClose }) => {
	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useProfile(setValue)
	return (
		<SafeAreaProvider>
			<GestureRecognizer className='flex-1' onSwipeDown={onClose}>
				<BottomSheet
					onBackdropPress={onClose}
					backdropStyle={{
						backgroundColor: 'rgba(0, 0, 0, 0.5)'
					}}
					modalProps={{
						presentationStyle: 'overFullScreen',
						animationType: 'slide',
						transparent: true,
						onRequestClose: onClose
					}}
					isVisible={isVisible}
				>
					<View className='justify-end flex-row'>
						<Pressable
							className='flex-row justify-center mx-4 my-2 max-w-[40px] max-h-[40px]'
							onPress={onClose}
						></Pressable>
					</View>

					<Layout
						isHasPadding
						className=' flex-1 bg-white min-h-[500]'
						style={{
							flex: 1,
							backgroundColor: style.white,
							borderTopRightRadius: 20,
							borderTopLeftRadius: 20,
							borderColor: style.gray_500,
							borderWidth: 1
						}}
					>
						<Heading className='mt-6' title={'Редактирование профиля'} />

						<View className='mt-6'>
							<AuthFields control={control} />
							<Button onPress={handleSubmit(onSubmit)}>Обновить профиль</Button>
						</View>
					</Layout>
				</BottomSheet>
			</GestureRecognizer>
		</SafeAreaProvider>
	)
}

export default ProfileEdit
