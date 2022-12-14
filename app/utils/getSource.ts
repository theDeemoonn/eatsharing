import { SERVER_URL } from '@/config/api.config'

export const getSource = (path: string) => ({
	uri: SERVER_URL + path
})
