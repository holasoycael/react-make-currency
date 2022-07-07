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
import { toString, onValueChange, isValid } from 'react-make-currency'

// types and interfaces
import type { TOnValueChange } from 'react-make-currency'

const App = () => {
  const [value, setValue] = useState(2.99)

  const handleChange = ({ floatValue }: TOnValueChange) => setValue(floatValue)

  return (
    <div>
      <span>
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
      <input
        type="tel"
        value={toString(useInput)}
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


| digitado   	| input value   	| float value 	| string value  	|
|------------	|---------------	|-------------	|---------------	|
| 1          	| 0,01          	| 0.01        	| 0,01          	|
| 12         	| 0,12          	| 0.12        	| 0,12          	|
| 123        	| 1,23          	| 1.23        	| 1,23          	|
| 74899      	| 748,99        	| 748.99      	| 748,99        	|
| 123456     	| 1.234,56      	| 12345.56    	| 1.234,56      	|
| 12345678   	| 123.456,78    	| 123456.78   	| 123,456,78    	|
| 1234567890 	| 12.345.678,90 	| 12345678.90 	| 12.345.678,90 	|


## Announcement
pt: `Estou preparando uma versão para USD e outras moedas`

en: `I am preparing a version for USD and other currencies`

es: `Estoy preparando una versión para USD y otras monedas`

## Issues

Feel free to raise an issue on Github if you find a bug or have a feature request
