export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IRestaurants {
	_id: string
	poster: string
	title: string
	parameters: IParameters

	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}

export interface IMovieEditInput extends Omit<IRestaurants, '_id'> {}
