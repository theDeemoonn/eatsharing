import React, { createContext, useContext } from 'react'

interface TabContextProps {
	active: string
}

interface TabProviderProps {
	value: string
	children?: React.ReactNode
}

const TabContext = createContext<TabContextProps>({} as TabContextProps)

export const TabProvider: React.FC<TabProviderProps> = ({
	value,
	children
}) => {
	return (
		<TabContext.Provider
			value={{
				active: value
			}}
		>
			{children}
		</TabContext.Provider>
	)
}

export const useTabContext = () => useContext(TabContext)
