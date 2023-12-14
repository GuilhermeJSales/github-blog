import moment from 'moment'

export function relativeDateFormater(date: string) {
  return moment(date).fromNow()
}
