# React Make Currency

[![npm](https://img.shields.io/npm/v/react-make-currency)](https://www.npmjs.com/package/react-make-currency) [![NPM](https://img.shields.io/npm/l/react-make-currency)](https://www.npmjs.com/package/react-make-currency)

Work with front-end pricing in a simplified way


## Install
```sh
npm install react-make-currency
```
or
```sh
yarn add react-make-currency
```

## Usage
```tsx
import { useState } from 'react'
import { currencyStr, onValueChange, isValid } from 'react-make-currency'
import pt from 'react-make-currency/locale/pt-BR'

// types and interfaces
import type { TOnValueChange } from 'react-make-currency'

const App = () => {
  const [value, setValue] = useState(2.99)

  const handleChange = ({ floatValue }: TOnValueChange) => setValue(floatValue)

  return (
    <div>
      <span>
        {currencyStr(value, { addPrefix: true, locale: pt })}
      </span>
      <input
        type="tel"
        value={currencyStr(useInput, { locale: pt })}
        onChange={(e) => isValid(e, 13) && handleChange(onValueChange(e))}
        placeholder="0,00"
      />
    </div>
  )
}

export default App
```

## Display values
In the current version BRL for `floatValue` or `stringValue`


| typed      	| input value   	| float value 	| string value  	|
|------------	|---------------	|-------------	|---------------	|
| 1          	| 0,01          	| 0.01        	| 0,01          	|
| 12         	| 0,12          	| 0.12        	| 0,12          	|
| 123        	| 1,23          	| 1.23        	| 1,23          	|
| 74899      	| 748,99        	| 748.99      	| 748,99        	|
| 123456     	| 1.234,56      	| 12345.56    	| 1.234,56      	|
| 12345678   	| 123.456,78    	| 123456.78   	| 123,456,78    	|
| 1234567890 	| 12.345.678,90 	| 12345678.90 	| 12.345.678,90 	|


## Announcement

en: `More coins will be available soon!`

pt: `Em breve mais moedas estará disponível!`

es: `¡Más monedas estarán disponibles pronto!`

## Issues

Feel free to raise an issue on Github if you find a bug or have a feature request
