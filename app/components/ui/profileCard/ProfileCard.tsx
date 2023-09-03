import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { IUser } from '@/types/user.inteerface'

import { useProfile } from '@/components/screens/profile/useProfile'
import { IProfileCard } from '@/components/ui/profileCard/profileCard.interface'
import { TextInfo } from '@/components/ui/textInfo/TextInfo'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { phoneFormatDash } from '@/utils/phoneFormat'

const ProfileCard: FC<PropsWithChildren<IProfileCard>> = ({
	className,
	children,
	icon,
	iconColor,
	...rest
}) => {
	const { setValue } = useForm<IUser>({})
	const { user } = useProfile(setValue)
	const { navigate } = useTypedNavigation()
	console.log('user', user)
	return (
		<View
			className='border-t border-gray-200 bg-white rounded-xl min-h-[170]'
			{...rest}
		>
			{icon && (
				<Pressable
					onPress={() => navigate('ProfileEdit')}
					className='items-center flex-row justify-end px-3 py-3'
				>
					<MaterialCommunityIcons name={icon} size={24} color={iconColor} />
				</Pressable>
			)}

			<View className='mt-6 flex-row justify-between px-4'>
				<TextInfo
					marginBottom={'mb-2'}
					label={'Фамилия'}
					text={user?.surname}
				/>
				<TextInfo marginBottom={'mb-2'} label={'Имя'} text={user?.name} />
				<TextInfo
					marginBottom={'mb-2'}
					label={'Номер телефона'}
					text={phoneFormatDash(user?.phone!)}
				/>
			</View>
			<Text className='px-4 py-3 flex-row justify-center items-center font-medium'>
				Интересы
			</Text>
			{user?.interests?.map((interest, index) => (
				<TextInfo
					className='py-1 flex-row justify-center'
					key={index}
					text={interest.value}
				/>
			))}
		</View>
	)
}

export default ProfileCard
