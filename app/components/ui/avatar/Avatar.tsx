import { Avatar } from '@rneui/themed'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { IUser } from '@/types/user.inteerface'

import { useProfile } from '@/components/screens/profile/useProfile'
import { IAvatar } from '@/components/ui/avatar/avatar.interface'

const Avatars: React.FunctionComponent<IAvatar> = ({ size, openEdit }) => {
	const { setValue } = useForm<IUser>({})
	const { user } = useProfile(setValue)

	return (
		<>
			{user?.name && user?.surname ? (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginBottom: 40
					}}
				>
					<Avatar
						size={size}
						rounded
						source={{ uri: user?.avatar }}
						title={`${user?.name?.charAt(0)}${user?.surname?.charAt(0)}`}
						containerStyle={{ backgroundColor: 'grey' }}
					>
						<Avatar.Accessory size={26} onPress={openEdit} />
					</Avatar>
				</View>
			) : (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginBottom: 40
					}}
				>
					<Avatar
						size={size}
						rounded
						icon={{ name: 'person-outline', type: 'ionicon' }}
						containerStyle={{ backgroundColor: 'orange' }}
					>
						<Avatar.Accessory size={26} onPress={openEdit} />
					</Avatar>
				</View>
			)}
		</>
	)
}

export default Avatars
