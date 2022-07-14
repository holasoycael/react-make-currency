// modules
import { currencyStr } from '..'
import pt from '../locale/pt-BR'

test('use placeholder string', () => {
  const placeholder = 'Valor indefinido'

  expect(currencyStr(0)).toBe('')
  expect(currencyStr(0, { placeholder })).toBe(placeholder)
  expect(currencyStr(0.0, { placeholder })).toBe(placeholder)
})

test('[en-US] float value 0.01 to equal 0.01', () => {
  expect(currencyStr(0.01)).toBe('0.01')
  expect(currencyStr(0.01, { addPrefix: true })).toBe('$0.01')
})

test('[en-US] float value 1 to equal 1.00', () => {
  expect(currencyStr(1)).toBe('1.00')
})

test('[pt-BR] float value 0.01 to equal 0,01', () => {
  expect(currencyStr(0.01, { locale: pt })).toBe('0,01')
  expect(currencyStr(0.01, { addPrefix: true, locale: pt })).toBe('R$ 0,01')
})

test('[pt-BR] float value 1 to equal 1,00', () => {
  expect(currencyStr(1, { locale: pt })).toBe('1,00')
})
