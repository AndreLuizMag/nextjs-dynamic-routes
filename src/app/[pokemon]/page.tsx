import type { Metadata } from 'next'
import PokeApiService from '@/services/pokeapi'
import { Skeleton } from '@/components/Skeleton'
import styles from './styles.module.css'

export const metadata: Metadata = {
	title: 'Pokemon',
	description: 'Descrição',
}

const Page = async ({
	params,
}: {
	params: { pokemon: string }
}) => {
	const pokeApiService = new PokeApiService()
	const data = await pokeApiService.getPokemon(
		params.pokemon
	)

	metadata.title = data.name

	return (
		<div className={styles.container}>
			<h1>
				Pokemon -{' '}
				{data ? (
					data.name
				) : (
					<Skeleton width='152px' height='40px' />
				)}
			</h1>
			<p>
				<b>id:</b>{' '}
				{data ? (
					data.id
				) : (
					<Skeleton width='22px' height='20px' />
				)}
			</p>
			<p>
				<b>height:</b>{' '}
				{data ? (
					data.height
				) : (
					<Skeleton width='22px' height='20px' />
				)}
			</p>
		</div>
	)
}

export default Page
