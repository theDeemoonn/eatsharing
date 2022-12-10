import { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'

import { style } from '@/components/ui/style'

const options = (primaryColor: string) => ({
	style: {
		backgroundColor: style.white,
		opacity: 0.9,
		borderLeftColor: primaryColor
	},
	text1Style: {
		color: style.gray,
		fontSize: 16
	},
	text2Style: {
		color: style.gray,
		fontSize: 14
	}
})

const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			config={{
				success: props => <BaseToast {...props} {...options('#67E769')} />,
				info: props => <BaseToast {...props} {...options('#65d4ff')} />,
				error: props => <BaseToast {...props} {...options('#ff4949')} />
			}}
		/>
	)
}

export default Toast
