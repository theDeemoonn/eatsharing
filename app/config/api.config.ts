// export const SERVER_URL = process.env.SERVER_URL //TODO: add auth url
export const SERVER_URL = 'http://192.168.1.226:4200'
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUserUrl = (string: string) => `/users/${string}`
