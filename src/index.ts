// modules
import en from './locale/en-US'

// types and interfaces
import type { TCurrencyOptions } from './typings'

export function onValueChange(e: React.FormEvent<HTMLInputElement>) {
  const targetValue = e.currentTarget.value

  let currenctValue = targetValue
  currenctValue = currenctValue.replace(/\D/g, '')
  currenctValue = currenctValue.replace(/(\d)(\d{2})$/, '$1,$2')
  currenctValue = currenctValue.replace(/(?=(\d{3})+(\D))\B/g, '.')

  const [thousand, decimal] = currenctValue.split(',')
  const parseThousand = thousand.replace(/\D/g, '')

  const parseFloatValue = decimal
    ? `${parseThousand}.${String(Number(decimal))}`
    : `0.${parseThousand.length === 1 ? `0${parseThousand}` : parseThousand}`

  const floatValue = parseFloat(parseFloatValue)

  return { floatValue, stringValue: currencyStr(floatValue) }
}

export function isValid(e: React.FormEvent<HTMLInputElement>, max: number) {
  const targetValue = e.currentTarget.value
  return targetValue.replace(/\D/g, '').length < max
}

const defaultValues = {
  addPrefix: false,
  placeholder: '',
  locale: en
}

export function currencyStr(floatValue: number, options?: TCurrencyOptions) {
  const currentOptions = options || defaultValues
  const addPrefix = currentOptions.addPrefix || false
  const placeholder = currentOptions.placeholder
  const locale = currentOptions.locale || en

  const toLocaleOptions = { style: 'currency', currency: locale.currency }
  const defaultPrice = floatValue.toLocaleString(locale.lang, toLocaleOptions)
  const resultPrice = defaultPrice.replace(/[\u00A0]/g, ' ')
  const formatValue = locale.removePrefix(resultPrice)

  return floatValue ? (addPrefix ? resultPrice : formatValue) : placeholder
}
