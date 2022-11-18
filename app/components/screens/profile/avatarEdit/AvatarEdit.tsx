import { BottomSheet } from '@rneui/themed'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, ScrollView, View } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

import { IUser } from '@/types/user.inteerface'

import { IAvatarEdit } from '@/components/screens/profile/avatarEdit/avatarEdit.interface'
import { useAvatar } from '@/components/screens/profile/avatarEdit/useAvatar'
import { Avatars, Button, Heading, Layout } from '@/components/ui'
import { getModalStyle, modalStyle } from '@/components/ui/style'

type AvatarData = {
	image_url: string
}

const dataList: AvatarData[] = [
	{
		image_url:
			'https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_1280.png'
	},
	{
		image_url: 'https://randomuser.me/api/portraits/men/36.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2012/04/18/18/07/user-37448_1280.png'
	},
	{
		image_url: 'https://randomuser.me/api/portraits/men/36.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg'
	},
	{
		image_url:
			'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
	}
]

const AvatarEdit: FC<IAvatarEdit> = ({ onClose, isVisible, ...props }) => {
	const { setValue } = useForm<IUser>()

	const { onSubmit, user } = useAvatar(setValue)

	const [selected, setSelected] = useState<string>(user?.avatar || '')

	const onAvatarSubmit = () => {
		onSubmit({ avatar: selected } as IUser)
		onClose()
	}

	return (
		<GestureRecognizer
			onSwipeDown={onClose}
			config={{
				velocityThreshold: 0.3,
				directionalOffsetThreshold: 80
			}}
			style={{
				flex: 1
			}}
		>
			<BottomSheet
				backdropStyle={{
					backgroundColor: 'rgba(0, 0, 0, 0.5)'
				}}
				onBackdropPress={onClose}
				isVisible={isVisible}
				{...props}
			>
				<Layout
					style={{
						...getModalStyle(modalStyle)
					}}
				>
					<View
						style={{
							flex: 1,
							paddingHorizontal: 20,
							paddingVertical: 20
						}}
					>
						<Heading className='pb-3' title='Редактирование аватара' />
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'flex-start'
							}}
						>
							<Avatars
								rounded={true}
								size={100}
								source={selected ? { uri: selected } : { uri: user?.avatar }}
							/>
							<View
								style={{
									marginTop: 15,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'flex-end'
								}}
							>
								<Button
									style={{ marginRight: 10 }}
									onPress={selected ? onAvatarSubmit : onClose}
								>
									Сохранить
								</Button>
							</View>
						</View>
					</View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{ flex: 1 }}
					>
						{dataList.map((item, index) => (
							<Pressable key={index}>
								<Avatars
									onPress={() => setSelected(item.image_url)}
									rounded={true}
									key={index}
									size={60}
									source={{ uri: item.image_url }}
								/>
							</Pressable>
						))}
					</ScrollView>
				</Layout>
			</BottomSheet>
		</GestureRecognizer>
	)
}

export default AvatarEdit
