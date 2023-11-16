// #region => Category
export type Category = {
	id: string
	name: string
	path: string
	icon: string
	description: string
	metaDescription: string
	productTitle: string
	productDescription: string
	whatIsIcon: string
	whatIsTitle: string
	whatIsHatTag: string
	whatIsDescription: string
	whatIsImg: string
	imgMain: string
	createdAt: string
	bank: BankMin[]
	relatedLinks: RelatedLinks[]
	questions: []
	benefits: Benefits[]
}
export type CategoryMin = {
	id: string
	name: string
	path: string
	icon: string
	description: string
	metaDescription: string
}
// #endregion

type BankMin = {
	name: string
	codeFebraban: string
	url: string
	description: string
	logo: string
}

type Benefits = {
	icon: string
	title: string
	description: string
}

type RelatedLinks = {
	id: string
	productId: string
	title: string
	description: string
	link: string
	active: string
	productSelected: string
	categorySelected: string
}
