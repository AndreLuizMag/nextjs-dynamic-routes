'use client'
import React, { useEffect, useState } from 'react'
import PokeApiService from '@/services/pokeapi'
import styles from './styles.module.css'

export const ListPokemons = () => {
	const pokeApiService = new PokeApiService()

	const [data, setData] = useState<any[]>([])
	let flag = false

	const loadData = async () =>
		setData(await pokeApiService.listarPokemons())

	useEffect(() => {
		if (!flag) {
			loadData()

			flag = true
		}
	}, [])

	return (
		<div className={styles.listAllCategories}>
			<h3>Todos os pokemons</h3>
			<div className={styles.groupItems}>
				{/* {datas ? (
					datas.map((data, index) => (
						<div key={index}>
							<h4>{data.name}</h4>
							<span>Path: {data.path}</span>
						</div>
					))
				) : (
					<span>Loading...</span>
				)} */}
			</div>
		</div>
	)
}
