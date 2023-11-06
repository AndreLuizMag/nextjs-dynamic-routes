'use client'
import React, { useEffect, useState } from 'react'
import api from '@/services/api'
import { Category } from '@/utils/types'
import styles from './styles.module.css'

export const ListAllCategories = () => {
	const [datas, setDatas] = useState<Category[] | null>(
		null
	)

	const handleFetch = async () => {
		try {
			const response = await api.get('/category/list')

			setDatas(response.data.resultSet)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleFetch()
	}, [])

	return (
		<div className={styles.listAllCategories}>
			<h3>Todas as categorias</h3>
			<div className={styles.groupItems}>
				{datas ? (
					datas.map((data, index) => (
						<div key={index}>
							<h4>{data.name}</h4>
							<span>Path: {data.path}</span>
						</div>
					))
				) : (
					<span>Loading...</span>
				)}
			</div>
		</div>
	)
}
