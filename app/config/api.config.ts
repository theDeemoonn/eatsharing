// export const SERVER_URL = process.env.SERVER_URL //TODO: add auth url
// export const SERVER_URL = 'http://10.1.1.29:4200' /*WORK*/
// export const SERVER_URL = 'http://192.168.1.226:4200' /*HOME*/
export const SERVER_URL = 'http://192.168.68.109:4000' /*Kosh*/
export const API_URL = `${SERVER_URL}/`

export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUserUrl = (string: string) => `/users/${string}`
