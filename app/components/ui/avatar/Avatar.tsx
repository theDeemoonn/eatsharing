import { Avatar } from '@rneui/themed'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { IUser } from '@/types/user.inteerface'

import { useProfile } from '@/components/screens/profile/useProfile'
import { IAvatar } from '@/components/ui/avatar/avatar.interface'
import { routes } from '@/navigation/routes'

const Avatars: React.FunctionComponent<IAvatar> = ({ size }) => {
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
						{routes.map(
							(route, index) =>
								route.name === 'Profile' && (
									<Avatar.Accessory key={index} size={26} />
								)
						)}
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
						{routes.map(
							(route, index) =>
								route.name === 'Profile' && (
									<Avatar.Accessory key={index} size={26} />
								)
						)}
					</Avatar>
				</View>
			)}
		</>
	)
}

export default Avatars
