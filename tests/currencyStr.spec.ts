import { currencyStr } from '../src'

test('float value 0.01 to equal 0,01', () => {
  expect(currencyStr(0.01)).toBe('0,01')
})

test('float value 1 to equal 1,00', () => {
  expect(currencyStr(1)).toBe('1,00')
})
