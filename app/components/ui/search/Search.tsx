//icon search expand to input field animation
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

import { ISearch } from '@/components/ui/search/search.interface'
import { style } from '@/components/ui/style'

const Search: React.FC<ISearch> = ({ placeholder, onSearch, onClose }) => {
	const [search, setSearch] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	const handleSearch = (value: string) => {
		setSearch(value)
		onSearch(value)
	}

	return (
		<GestureRecognizer onLayout={onClose}>
			<View className='flex-row justify-center items-center'>
				<View className='flex-row justify-center items-center'>
					<Pressable
						className='flex-row justify-center items-center'
						onPress={() => setIsFocused(true)}
					>
						<MaterialCommunityIcons
							name='magnify'
							size={24}
							color={isFocused ? style.primary : style.gray_500}
						/>
					</Pressable>
					{isFocused && (
						<TextInput
							style={{
								width: 200,
								height: 40,
								borderBottomWidth: 1,
								borderBottomColor: style.primary,
								marginLeft: 10,
								paddingLeft: 10,
								transform: [{ translateY: -5 }]
							}}
							className='flex-1'
							placeholder={placeholder}
							value={search}
							onChangeText={handleSearch}
							onBlur={() => setIsFocused(false)}
						/>
					)}
				</View>
			</View>
		</GestureRecognizer>
	)
}

export default Search
