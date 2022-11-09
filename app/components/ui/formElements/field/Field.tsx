import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IField } from '@/components/ui/formElements/field/field.interface'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-white w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
							error ? 'border-red-400' : 'border-transparent'
						)}
					>
						<TextInput
							autoCapitalize={'none'}
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							className='text-gray-600 text-base'
							{...rest}
						/>
					</View>
					{error && (
						<Text className='text-red-400 text-sm'>{error.message}</Text>
					)}
				</>
			)}
		/>
	)
}

export default Field
