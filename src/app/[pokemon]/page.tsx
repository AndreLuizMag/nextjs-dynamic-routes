'use client'
import PokeApiService from '@/services/pokeapi'
import { useEffect, useState } from 'react'

const Page = ({
	params,
}: {
	params: { pokemon: string }
}) => {
	const pokeApiService = new PokeApiService()

	const [data, setData] = useState({})
	let flag = false

	const loadData = async () =>
		setData(
			await pokeApiService.getPokemon(
				params.pokemon as string
			)
		)

	useEffect(() => {
		if (!flag) {
			loadData()

			flag = true
		}
	}, [])

	return (
		<div>
			<p>
				Post: {params.pokemon}
				{JSON.stringify(data)}
			</p>
		</div>
	)
}

export default Page
