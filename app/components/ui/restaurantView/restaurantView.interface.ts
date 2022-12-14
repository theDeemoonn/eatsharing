import React from 'react'

export interface IRestaurant {
	loading?: boolean
	children?: React.ReactNode
	style?: React.CSSProperties
	onPress?: () => void
}
