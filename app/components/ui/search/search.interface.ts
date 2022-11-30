export interface ISearch {
	placeholder: string
	onSearch: (searchTerm: string) => void
	onClose: () => void
}
