export const SERVER_URL = process.env.SERVER_URL
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth/${string}` //TODO: add auth url
export const getUserUrl = (string: string) => `/users/${string}`
