[![SMN Logo](http://smn.com.br/content/img/logotipo/light-lying.svg)](http://smn.com.br/)

# smn-validate
Validate object properties in JavaScript.

(Works only with Node 7 or superior)
```js
/* On your controller */

let params = {
    nome: 'Natal 2017',
    data: '2017-12-25'
};

try {
    await scope.inserirFeriado(params);
} catch (error) {
    // Error handling
}
```

```js
/* On your scope */

let validate = require('smn-validate');

module.exports = {
    inserirFeriado
};

async function inserirFeriado(params) {
    let validation = {
        nome: {
            required: true,
            string: true,
            maxLength: 100
        },
        data: {
            required: true,
            date: true
        }
    };

    await validate(params, validation);
}
```

## Installation

```bash
$ npm install smn-validate
```
## How it works

* Validates each property of an object with specific settings.
* It can be nested.

## Parameters

You should put those properties on your validation settings:

### required: true
When it is required. (but NULL still a valid value)
e.g.:
```js
let validation = {
    id: {
        required: true
    }
}
```
### number: {type} [String]
When it should be a number. Types: integer, smallint, bigint.
e.g.:
```js
let validation = {
    idade: {
        number: 'smallint'
    }
}
```
### string: true
When it should be a string.
e.g.:
```js
let validation = {
    nome: {
        string: true
    }
}
```
### maxLength: {max} [Integer]
When the length of it should be limited.
e.g.:
```js
let validation = {
    email: {
        string: true,
        maxLength: 255
    }
}
```
### date: true
When it should be a date.
e.g.:
```js
let validation = {
    dataExpiracao: {
        date: true
    }
}
```
### boolean: true
When it should be boolean.
e.g.:
```js
let validation = {
    ativo: {
        boolean: true
    }
}
```
### validation: {nest array child} [Array]
When the property is an Array of objects that each item should be also validated.
e.g.:
```js
let validation = {
    usuarios: {
        validation: {
            nome: {
                required: true,
                string: true
            }
        }
    }
}
```
### validation: {nest object child} [Object]
When the property is an Object that should also be validated.
e.g.:
```js
let validation = {
    filho: {
        validation: {
            nome: {
                required: true,
                string: true
            }
        }
    }
}
```
### array: {validation setting} [Object]
When the property is an Array of values that each value should be also validated.
e.g.:
```js
// names = ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo']

let validation = {
    names: {
        array: {
            string: true
        }
    }
}
```

## People

[List of all contributors](https://github.com/smn-official/smn-colorize/graphs/contributors)

## License

  [MIT](LICENSE)
