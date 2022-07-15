import { currencyStr } from './currencyStr'

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
