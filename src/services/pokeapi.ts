// https://pokeapi.co/api/v2/pokemon
import { Pokemon } from '@/utils/types'
import axios, { AxiosInstance } from 'axios'

export default class PokeApiService {
	private client: AxiosInstance

	constructor() {
		this.client = axios.create({
			baseURL: 'https://pokeapi.co/api/v2/pokemon',
			timeout: 10000,
		})
	}

	async listarPokemons(): Promise<any[]> {
		return this.client.get('/')
	}

	async getPokemon(name: string): Promise<Pokemon> {
		const { data } = await this.client.get(`/${name}`)

		return data
	}
}
