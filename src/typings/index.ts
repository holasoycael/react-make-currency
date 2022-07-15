import { onValueChange } from '../.'

type TLocale = {
  lang: string | 'pt-BR' | 'en-US'
  currency: string | 'BRL' | 'USD'
  removePrefix: (value: string) => string
}

type TOnValueChange = ReturnType<typeof onValueChange>
type TCurrencyOptions = {
  addPrefix?: boolean
  placeholder?: string
  locale?: TLocale
}

export { TOnValueChange, TCurrencyOptions }
