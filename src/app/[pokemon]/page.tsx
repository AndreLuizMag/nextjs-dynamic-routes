'use client'
import PokeApiService from '@/services/pokeapi'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Skeleton } from '@/components/Skeleton'

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
		<div className={styles.container}>
			<h1>
				Pokemon -{' '}
				{data ? (
					''
				) : (
					<Skeleton width='152px' height='40px' />
				)}
			</h1>
			<p>
				<b>id:</b>{' '}
				{data ? (
					''
				) : (
					<Skeleton width='22px' height='20px' />
				)}
			</p>
			<p>
				<b>height:</b>{' '}
				{data ? (
					''
				) : (
					<Skeleton width='22px' height='20px' />
				)}
			</p>
		</div>
	)
}

export default Page
