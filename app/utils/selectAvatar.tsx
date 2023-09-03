import React from 'react'
import { Text, View } from 'react-native'

import { IUser } from '@/types/user.inteerface'

import Avatars from '../components/ui/avatar/Avatar'

import { style } from '@/components/ui/style'

//TODO: проверить необходимость этого компонента
const selectAvatar = (user: IUser, index: number, arr: any[]) => {
	let block: React.JSX.Element | null = (
		<View
			className={
				'absolute flex w-6 h-6 rounded-full justify-center items-center'
			}
			style={{
				// left: `${28 * index}px`,

				backgroundColor: style.placeholder
				// borderRadius: '50%',
			}}
		>
			<Text>{`${user?.name?.charAt(0)}${user?.surname?.charAt(0)}`}</Text>
		</View>
	)

	if (user.avatar) {
		block = (
			<Avatars
				size={28}
				rounded={true}
				isShowEdit={false}
				source={{ uri: user.avatar }}
				avatarStyle={{
					position: 'absolute'
					// left: `${34 * index}px`
				}}
			/>
		)
	}

	if (index + 1 > 5) {
		block = (
			<View
				className={
					'absolute flex w-6 h-6 rounded-full justify-center items-center'
				}
				style={{
					// left: `${28 * index}px`,

					backgroundColor: style.white
					// borderRadius: '50%',
				}}
			>
				<Text>
					{`+${
						arr.length - 5 > 999
							? `${Math.ceil(arr.length / 1000)}K`
							: arr.length - 5
					}`}
				</Text>
			</View>
		)
	}

	if (index + 1 > 6) {
		block = null
	}

	return block
}

export default selectAvatar
