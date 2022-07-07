import { currencyStr } from '../src'

test('use placeholder string', () => {
  const placeholder = 'Valor indefinido'

  expect(currencyStr(0)).toBe('')
  expect(currencyStr(0, { placeholder })).toBe(placeholder)
  expect(currencyStr(0.0, { placeholder })).toBe(placeholder)
})

test('float value 0.01 to equal 0,01', () => {
  expect(currencyStr(0.01)).toBe('0,01')
})

test('float value 1 to equal 1,00', () => {
  expect(currencyStr(1)).toBe('1,00')
})
