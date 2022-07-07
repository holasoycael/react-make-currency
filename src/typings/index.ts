import { onValueChange } from '../.'

export type TOnValueChange = ReturnType<typeof onValueChange>
export type TCurrencyOptions = {
  addPrefix?: boolean
  placeholder?: string
}
