import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { IUser } from '@/types/user.inteerface'

import { useAvatar } from '@/components/screens/profile/avatarEdit/useAvatar'
import { ICard } from '@/components/ui/card/card.interface'
import selectAvatar from '@/utils/selectAvatar'

//TODO: настроить автар и стили
const Card: FC<ICard> = ({ title, description, className }) => {
	const { setValue } = useForm<IUser>()

	const { onSubmit, user } = useAvatar(setValue)

	const [users, setUsers] = useState<IUser[]>([])

	return (
		<View className='border-t flex-row justify-between border-gray-200 bg-white rounded-xl mt-6'>
			<View>
				<Text className='px-7 py-3 flex-row justify-center items-center font-medium'>
					{title}
				</Text>
				<Text className='px-7 py-3 flex-row justify-center items-center font-medium'>
					{description}
				</Text>
			</View>
			{/*{users.map((user, index, arr) => (*/}
			{/*	<View key={String(index)}>{selectAvatar(user, index, arr)}</View>*/}
			{/*))}*/}
			{user && (
				<View className='justify-center items-center flex-row'>
					{selectAvatar(user, 0, users)}
				</View>
			)}
		</View>
	)
}

export default Card
