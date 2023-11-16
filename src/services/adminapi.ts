import axios, { AxiosInstance } from 'axios'
import { Category } from '@/utils/adminTypes'
// import { Agent } from 'https'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ADMIN
const token = process.env.NEXT_PUBLIC_TOKEN_ADMIN

export default class AdminApiService {
	private client: AxiosInstance

	constructor() {
		this.client = axios.create({
			baseURL: baseUrl,
			timeout: 10000,
			headers: {
				'x-api-bevi': token,
			},
		})
	}

	async listAllCategories(): Promise<Category> {
		return this.client.get('/category')
	}

	async getCategoryById(id: string): Promise<Category> {
		const { data } = await this.client.get(
			`/category/${id}`
		)

		return data
	}

	async getCategoryByPath(path: string): Promise<Category> {
		const { data } = await this.client.get(
			`/category/${path}`
		)

		return data
	}
}

// ,
// 			{
// 				httpsAgent: new Agent({
// 					rejectUnauthorized: false,
// 				}),
// 			}
