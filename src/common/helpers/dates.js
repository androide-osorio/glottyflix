import { DateTime } from 'luxon'

export const getYear = dateString => DateTime.fromISO(dateString).year