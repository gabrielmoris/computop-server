# Install

        npm install

## NPM package Computop

[Computop Node Client](https://www.npmjs.com/package/computop-node-client)

## API call Computop

[Computop API](https://developer.computop.com/display/EN/Create+an+API+call+and+use+Blowfish+encryption)

---

### Create a file named ".env" and store your Computop keys like this:

```

KEY_BLOWFISH=<BF Key goes here>
KEY_HMAC=<MAC key goes here>

```

### Usage

```
const computop = require('computop-node-client')



computop.encryptBlowfish('Hello world')
computop.decryptBlowfish('3FBEA4D5D8AD6CEE824F5BD7B5D6730FF41E214E67D515EC')
console.log(computop.generateHash('123*Hello*World'))
console.log(computop.parseResponse('mid=YourMID&code=00000000&status=success));
```
