import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ADMIN
const token = process.env.NEXT_PUBLIC_TOKEN_ADMIN

const api = axios.create({
	baseURL: baseUrl,
	timeout: 10000,
	headers: {
		'x-api-bevi': token,
	},
})

export default api
