//icon search expand to input field animation
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SearchBar } from '@rneui/themed'
import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

import { ISearch } from '@/components/ui/search/search.interface'
import { style } from '@/components/ui/style'

const Search: React.FC<ISearch> = ({ placeholder, onSearch }) => {
	const [search, setSearch] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	const handleSearch = (value: string) => {
		setSearch(value)
		onSearch(value)
	}

	return (
		<GestureRecognizer onSwipeUp={() => setIsFocused(false)}>
			<View className='flex-row justify-center items-center'>
				<View className='flex-row justify-center items-center'>
					<Pressable
						className='flex-row justify-center items-center'
						onPress={() => setIsFocused(true)}
					>
						{!isFocused ? (
							<MaterialCommunityIcons
								name='magnify'
								size={24}
								color={style.gray_500}
							/>
						) : null}
					</Pressable>
					{/* //TODO: добавить анимацию и алгоритм поиска */}
					{isFocused && (
						<SearchBar
							placeholder={placeholder}
							onChangeText={handleSearch}
							value={search}
							autoFocus
							containerStyle={{
								backgroundColor: 'transparent'
							}}
							cancelButtonTitle='Отмена'
							platform='ios'
							onCancel={() => setIsFocused(false)}
						/>
					)}
				</View>
			</View>
		</GestureRecognizer>
	)
}

export default Search
