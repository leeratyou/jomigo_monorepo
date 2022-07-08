import { format, parseISO, parse } from 'date-fns'

const defaultDateFormat = 'dd MMM yyyy'
type formatDateOptions = { from?: string, to?: string }
export function formatDate(date: string, options?: formatDateOptions) {
  try {
    const parsed = options?.from ? parse(date, options?.from, new Date()) : parseISO(date)
    return format(parsed, options?.to || defaultDateFormat)
  } catch(e) {
    return ""
  }
}
