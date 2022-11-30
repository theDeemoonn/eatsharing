export const style = {
	primary: '#2f95dc',
	blue_100: '#f0f9ff',
	blue_200: '#e0f2fe',
	blue_300: '#bae6fd',
	blue_400: '#7dd3fc',
	blue_500: '#38bdf8',
	blue_600: '#0ea5e9',
	secondary: '#6c757d',
	success: '#28a745',
	danger: '#dc3545',
	warning: '#ffc107',
	info: '#17a2b8',
	light: '#f8f9fa',
	dark: '#343a40',
	white: '#fff',
	black: '#000',
	transparent: 'transparent',
	gray: '#6c757d',
	gray_100: '#f8f9fa',
	gray_200: '#e9ecef',
	gray_300: '#dee2e6',
	gray_400: '#ced4da',
	gray_500: '#adb5bd'
}

export const getColor = (colorName: keyof typeof style) => style[colorName]

export const modalStyle = {
	modal: {
		flex: 1,
		backgroundColor: style.white,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		borderColor: style.gray_500,
		borderWidth: 1
	}
}

export const getModalStyle = (style: any) => ({
	...modalStyle.modal,
	...style
})
