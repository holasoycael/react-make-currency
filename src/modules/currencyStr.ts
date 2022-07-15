// modules
import en from '../locale/en-US'

// types and interfaces
import type { TCurrencyOptions } from '../typings'

const defaultValues = {
  addPrefix: false,
  placeholder: '',
  locale: en
}

export function currencyStr(floatValue: number, options?: TCurrencyOptions) {
  const currentOptions = options || defaultValues
  const addPrefix = currentOptions.addPrefix || false
  const placeholder = currentOptions.placeholder || ''
  const locale = currentOptions.locale || en

  const toLocaleOptions = { style: 'currency', currency: locale.currency }
  const defaultPrice = floatValue.toLocaleString(locale.lang, toLocaleOptions)
  const resultPrice = defaultPrice.replace(/[\u00A0]/g, ' ')
  const formatValue = locale.removePrefix(resultPrice)

  return floatValue ? (addPrefix ? resultPrice : formatValue) : placeholder
}
