import moment from 'moment'
import 'moment/locale/de'

//-----------------------------------------------
export const hexToRGBA = (hexColor: string, opacity: string) => {
  if (hexColor === '#fff' || hexColor === '#FFF') return 'rgba(255, 255, 255, ' + opacity + ')'
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)
  if (!result)
    throw new Error('Formatting Error with Input: ' + hexColor + ' and Opacity: ' + opacity)
  const rgba = result
    ? 'rgba(' +
      parseInt(result[1], 16) +
      ', ' +
      parseInt(result[2], 16) +
      ', ' +
      parseInt(result[3], 16) +
      ', ' +
      opacity +
      ')'
    : ''

  return rgba
}

//-----------------------------------------------
export const typeToUnit = (type: string) => {
  switch (type) {
    case 'temperature':
      return '°C'
    case 'humidity':
      return '%'
    default:
      return ''
  }
}

//-----------------------------------------------
export const deviceIsActive = (timestamp: string) => {
  if (timestamp === '') return false
  return -moment.unix(parseInt(timestamp)).diff(moment.now(), 'hours') < 1 ? true : false
}

export const isToday = (timestamp: string) => {
  if (timestamp === '') return false
  return moment.unix(parseInt(timestamp)).isSame(moment(), 'days')
}

export const deviceLastActiveTime = (timestamp: string) => {
  if (timestamp === '') return ''

  moment.locale('de')
  return moment.unix(parseInt(timestamp)).format('h.mm') + ' Uhr'
}

export const deviceLastActiveDate = (timestamp: string) => {
  if (timestamp === '') return ''

  moment.locale('de')
  return moment.unix(parseInt(timestamp)).format('Do MMMM')
}
