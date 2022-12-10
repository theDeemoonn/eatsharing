import { FC } from 'react'

import { Layout } from '@/components/ui'
import { TabViewExample } from '@/components/ui/tab/TabNav'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<Layout isHasPadding>
			<TabViewExample />
		</Layout>
	)
}

export default Home
