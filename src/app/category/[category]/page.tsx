import type { Metadata } from 'next'
import AdminApiService from '@/services/adminapi'

export const metadata: Metadata = {
	title: 'Carregando...',
	description: 'Carregando...',
}

const Page = async ({
	params,
}: {
	params: { category: string }
}) => {
	const adminApiService = new AdminApiService()
	const data = await adminApiService.getCategoryByPath(
		params.category
	)

	metadata.title = data.name
	metadata.description = data.metaDescription

	return (
		<div>
			<h1>Categoria: {data.name}</h1>
		</div>
	)
}

export default Page
