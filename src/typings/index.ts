import { onValueChange } from '../.'

type TLocale = {
  lang: string | 'pt-BR' | 'en-US'
  currency: string | 'BRL' | 'USD'
  removePrefix: (value: string) => string
}

export type TOnValueChange = ReturnType<typeof onValueChange>
export type TCurrencyOptions = {
  addPrefix?: boolean
  placeholder?: string
  locale?: TLocale
}
