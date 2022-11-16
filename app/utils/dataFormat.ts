import moment from 'moment/moment'

export const getDateTimeString = (
	date: Date,
	otherDayFormat = 'D MMM'
): string => {
	return moment(date).format('D-M-YYYY') === moment().format('D-M-YYYY')
		? `Сегодня, ${moment(date).format('HH:mm')}`
		: moment(date).format(otherDayFormat)
}
