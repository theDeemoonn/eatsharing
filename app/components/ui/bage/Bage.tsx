import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { style } from '@/components/ui/style'

interface BageProps {
	count: string
	size?: string
	padding?: string
	inset?: string
}

export const Bage: React.FC<BageProps> = ({ count, size, padding, inset }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textContainer}>{count}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		inset: `${Bage.propTypes?.inset}` || 0,
		// backgroundColor: props.theme.colors.red,
		// borderRadius: 9999,
		// minWidth: `${Bage.propTypes?.size}` || '20px',
		// minHeight: `${Bage.propTypes?.size}` || '24px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
		// padding: `${Bage.propTypes?.padding}` || '0px'
	},

	textContainer: {
		// position: 'relative',
		// fontWeight: 500,
		// fontSize: '14px',
		// lineHeight: '20px',
		color: style.gray
	}
})
