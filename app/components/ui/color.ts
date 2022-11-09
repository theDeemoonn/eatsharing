export const color = {
	primary: '#2f95dc',
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
	gray: '#6c757d'
}

export const getColor = (colorName: keyof typeof color) => color[colorName]
