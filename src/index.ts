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
    ? `${parseThousand}.${decimal}`
    : `0.${parseThousand.length === 1 ? `0${parseThousand}` : parseThousand}`

  const floatValue = parseFloat(parseFloatValue)

  return { floatValue, stringValue: currencyStr(floatValue) }
}

export function isValid(e: React.FormEvent<HTMLInputElement>, max: number) {
  const targetValue = e.currentTarget.value
  return targetValue.replace(/\D/g, '').length < max
}

export function currencyStr(value: number, options?: TCurrencyOptions) {
  const { addPrefix = false, placeholder = '' } = options || {}

  const defaultPrice = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  const formatValue = defaultPrice.slice(3)

  return value ? (addPrefix ? `R$ ${formatValue} ` : formatValue) : placeholder
}
