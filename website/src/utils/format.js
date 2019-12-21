import lightFormat from 'date-fns/lightFormat'
import parseISO from 'date-fns/parseISO'

export const formatDate = (iosDateStr) => lightFormat(parseISO(iosDateStr), 'yyyy年MM月dd日 hh:mm:ss')